import { Article } from 'matterial'

import Layout from 'components/Layout'
import { getNextArticle } from '.'
import Code, { CodeBlock } from 'components/Code'

function Mtui() {
  return (
    <Layout title="Design System Project: Matterial UI, A React component library for building user interfaces">
      <Article
        title="Matterial UI"
        description="A React component library for building user interfaces, fully typed, tested, and documented"
        preface={
          <ul>
            <li>
              <a href="https://matterial.brti.dev">Documentation</a>
            </li>
            <li>
              <a href="https://github.com/dr-spaceman/matterial">Source Code</a>
            </li>
          </ul>
        }
        nextArticle={getNextArticle('boat-daddy')}
      >
        <h2>Motivation</h2>

        <h3>Build a System</h3>

        <p>
          According to{' '}
          <a href="https://uxdesign.cc/everything-you-need-to-know-about-design-systems-54b109851969">
            UXDesign
          </a>
          , a design system is "The single source of truth which groups all the
          elements that will allow the teams to design, realize and develop a
          product."
        </p>
        <p>
          So, this package is more than just a library: It's the visual guide
          for a product on the web. The sum of its parts: themes, decoupled
          components, animations, typography, style, tests, and overall
          philosophy; all amount to what can better be described as a{' '}
          <i>system</i>.
        </p>

        <h3>Problems with existing solutions</h3>

        <p>
          There are many popular design systems with excellent React components,
          but the vast majority of them ticks at least one of the boxes:
        </p>
        <dl>
          <dt>Incomplete accessibility support</dt>
          <dd>
            As of 2021, proper a11y support in applications is a widely accepted
            bare minimum of a successful project and a design system is the
            right place to take care of it.
          </dd>
          <dt>Branded systems</dt>
          <dd>
            There are many beautiful, well-thought and otherwise perfect design
            systems that suffer from one problem: they were created by a
            product, for a product. Using it makes any app look like it belongs
            to, or is affiliated with said brand.
          </dd>
          <dt>Not really a design system</dt>
          <dd>
            Small, modular and customizable design systems are not design
            systems but component libraries.
          </dd>
          <dt>Lack of public design files</dt>
          <dd>
            Due to the often dynamic nature of design system development and not
            always perfect communication between developers and designers, it is
            very hard for teams to publish their design files (Sketch, Figma) in
            a state that they will be up-to-date and useful.
          </dd>
        </dl>

        <h2>Solutions</h2>

        <h3>Use existing elements of a design system</h3>
        <p>
          The modern development ecosystem is so big and complex that I couldn't
          possibly hope to solve all problems of creating cross-platform,
          responsive and accessible websites.
        </p>
        <p>
          Fortunately, solutions for accessibility problems exist, such as{' '}
          <a href="https://react-spectrum.adobe.com/react-aria">React Aria</a>{' '}
          and <a href="https://reach.tech/">Reach UI</a> (using the latter
          here).
        </p>

        <h3>No compromises</h3>

        <p>
          If there is a part of UI styling that can be reliably overridden, I
          will do so. As long as underlying libraries provide convenient
          tooling, I want to replace any platform-specific select dropdown,
          tooltip etc. with unified elements.
        </p>

        <h3>Design system with all of the consequences</h3>

        <p>
          At the moment I don't think React ecosystem needs another generic
          component library. What is missing, on the other hand, is in my
          opinion fully featured design systems that are directed towards
          guiding users, providing examples and teaching. Based on that, I want
          to fully use the possibilities given by that assumption and take the
          styling of the details to the next level. You can see an example of
          that in custom scrollbars that blend nicely with all elements in both
          dark and light modes.
        </p>

        <h2>Features</h2>

        <h3>Fully typed</h3>

        <p>Static types for all components are provided by Typescript.</p>

        <h3>Tested</h3>

        <p>
          All components have tests written with the philosophy that a facsimile
          of user behavior should be tested. In that regard, tests are written
          in which labels and semantic element roles are preferred selectors;
          Generic element IDs are not used when unit testing elements, at least
          when it can be helped.
        </p>

        <h3>Documented</h3>

        <p>
          The <a href="https://matterial.brti.dev/setup">documentation</a>{' '}
          provides usage and examples. Whenever possible, it highlights hooks
          that can be used to better leverage component features, or integration
          with other components.
        </p>

        <h3>Challenges</h3>

        <h3>Providing fully-typed components</h3>

        <p>
          Libraries really should provide static types for all components that
          are developer-facing. This is easy enough for simple components like a{' '}
          <a href="https://github.com/dr-spaceman/matterial/blob/main/packages/matterial/src/components/Loader/loader.tsx">
            loading spinner
          </a>
          , but when components begin to have props that are coupled, writing
          static types can be a chore.
        </p>
        <p>
          One example is an{' '}
          <a href="https://github.com/dr-spaceman/matterial/blob/main/packages/matterial/src/interfaces/OverloadedElement.tsx">
            overloaded component
          </a>
          , a component that takes a different component as a replacement
          interface. An overloaded component has to accept the new props in
          addition to the native props.
        </p>

        <CodeBlock>{`type User = {
  username: string
  id: number
  image: string
}

type Props = {
  user: User
  children?: React.ReactNode
} & OverloadedElementProps

const user: User = {
  username: 'User987',
  id: 123,
  image: 'cloudinary:foo.jpg',
}

const ProfileImage: OverloadedElement<Props> = ({
  user,
  as: Component = 'div',
  ...props
}: Props) => <Component src={'foo.jpg'} alt={user.username} {...props} />

const { getByLabelText } = render(
  <ProfileImage as={Avatar} user={user}>
    BL
  </ProfileImage>
)

expect(getByLabelText(user.username)).toHaveAttribute('role', 'img')`}</CodeBlock>

        <h3>Building a monoreopo</h3>

        <p>
          There are two main packages: the library build (published to NPM), and
          the documentation. During development, it was imperative that the
          documentation use not the latest version of the design package, but
          the live design elements as they are written. This prevents having to
          build and publish before writing documentation; Components can be
          designed and documentation can be written simultaneously.
        </p>
        <p>
          To achieve this workflow, I built a{' '}
          <a href="https://github.com/dr-spaceman/matterial">monorepo</a>.
          Between the different needs of the package and docs, Yarn workspaces
          are used to manage individual package dependencies. Docs are written
          in Typescript and MDX and transpiled by Next.js into a static site.
        </p>

        <h2>Why the name?</h2>
        <p>
          The name is merely a pun and conveys the level of seriousness of this
          project.
        </p>
      </Article>
    </Layout>
  )
}

export default Mtui
