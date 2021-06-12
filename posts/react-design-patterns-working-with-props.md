---
title: 'React design patterns: Working with props'
date: '2021-06-12'
tags:
    - react
---

React components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This is a collection of commonly-used patterns to keep React components modular. <!-- more:Show me the patterns -->

Props are inputs for your components. The first rule of props is:

1. **Props should be immutable and shouldn't change during the component's lifecycle.**

In the following example, a prop `color` is passed to a component `FancyBorder`. The child component also receives and utilizes the `children` prop.

<figure>

```js
function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    )
}

function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">Welcome</h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    )
}
```

<figcaption>Passing props down to a component</figcaption>
</figure>

## Pass props up to parent

While the above example shows props being passed down the component chain, sometimes application logic that happens downstream needs to be applied back up in a parent component.

In the following pattern, child components utilize `data-` attributes to signal props to an event handler that was defined in the parent's scope:

<figure>

```js
function Letters({ letters, handleClick }) {
    return (
        <>
            {letters.map(letter => (
                <div key={letter} data-letter={letter} onClick={handleClick}>
                    {letter}
                </div>
            ))}
        </>
    )
}

function App() {
    const letters = ['A', 'B', 'C']
    const handleClick = event =>
        console.log(`You just clicked ${event.target.dataset.letter}`)
    return <Letters letters={letters} handleClick={handleClick} />
}
```

<figcaption>Use of `data-` attributes and event firing on children when an event handler is on the parent.</figcaption>
</figure>

## Components as props

Props of course need not be strings and numbers. In the following example, JSX components are passed as props.

<figure>

```js
function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">{props.left}</div>
            <div className="SplitPane-right">{props.right}</div>
        </div>
    )
}

function App() {
    return <SplitPane left={<Contacts />} right={<Chat />} />
}
```

<figcaption>JSX components as props</figcaption>
</figure>

### Modifying prop components

Although props should be immutable (the First Rule of Props), components as props can still be modified by using `React.cloneElement` to add additional props to the component:

<figure>

```js
function Confirm({
    children,
    onAccept,
    onReject,
    acceptButton = <Button>Ok</Button>,
    rejectButton = <Button>Cancel</Button>,
}) {
    return (
        <div className="confirm">
            <div className="confirm-header">
                <h1>Confirm</h1>
            </div>
            <div className="confirm-content">{children}</div>
            <div className="confirm-footer">
                {React.cloneElement(acceptButton, {
                    className: 'accept-btn',
                    onClick: onAccept,
                })}
                {React.cloneElement(rejectButton, {
                    className: 'reject-btn',
                    onClick: onReject,
                })}
            </div>
        </div>
    )
}

function App() {
    return (
        <Confirm
            acceptButton={<Button>Yep</Button>}
            rejectButton={<Button>Nope</Button>}
            onAccept={() => {}}
            onReject={() => {}}
        >
            You sure?
        </Confirm>
    )
}
```

<figcaption>Modifying prop components</figcaption>
</figure>

In React, JSX components are made of React Elements, the smallest building blocks of React. And a React Element is merely a javascript object:

Given the following snippet...

```js
const anchor = <a href="/bar">Bar</a>
console.log(anchor)
```

... the following object would be logged:

```json
{
    "props": { "href": "/bar", "children": "Bar" },
    "type": "a"
}
```

Knowing that JSX components are actually just objects, we can access the properties of props:

<figure>

```js
const Fooify = ({ link }) => (
    <a href={link.props.href}>Foo-{link.props.children}</a>
)
const App = () => <Fooify link={<a href="/bar">Bar</a>}>Bar</Fooify>
```

<figcaption>Access props of elements passed as prop</figcaption>
</figure>

## Higher order components

Higher order components can enhance "lower" components using props:

<figure>

```js
function Description({ children }) {
    return <span>{children}</span>
}

function embolden(Component) {
    return (
        <strong>
            <Component />
        </strong>
    )
}

const EmboldenedDescription = embolden(Description)

function App() {
    return (
        <>
            <h1>My App</h1>
            <EmboldenedDescription>
                Sint ut anim aliqua voluptate ut veniam nisi laboris proident
                dolor ipsum.
            </EmboldenedDescription>
        </>
    )
}
```

<figcaption>A higher order component enhances a lower component</figcaption>
</figure>
