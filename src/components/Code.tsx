import hljs from 'highlight.js'

type CodeType = {
  componentType?: string
  language?: string
  children?: React.ReactNode
} & any

type CodeBlockProps = {
  children: string
  language?: string
}

const mapProps = (props): string => {
  if (!props) return ''
  let propString = ''
  for (const [key, value] of Object.entries(props)) {
    if (value === true) {
      propString += ` ${key}`
    } else if (typeof value === 'number') {
      propString += ` ${key}={${value}}`
    } else {
      propString += ` ${key}="${value}"`
    }
  }

  return propString
}

export function CodeBlock({ children, language }: CodeBlockProps): JSX.Element {
  let highlighted: string
  if (language && hljs.getLanguage(language)) {
    try {
      highlighted = hljs.highlight(children, { language }).value
    } catch (e: unknown) {
      console.log(e)
    }
  }
  try {
    highlighted = hljs.highlightAuto(children).value
  } catch (e: unknown) {
    console.log(e)
  }
  const sourceCode = highlighted ? (
    <div dangerouslySetInnerHTML={{ __html: highlighted }} />
  ) : (
    children
  )

  return (
    <pre
      className="surface"
      style={{
        overflow: 'auto',
        counterReset: 'linenumbers',
        fontSize: '0.7em',
        lineHeight: '1.4em',
      }}
    >
      {sourceCode}
    </pre>
  )
}

export default function Code({
  componentType,
  language = 'react',
  children,
  ...props
}: CodeType) {
  if (!children) {
    return (
      <code className={`language-${language}`}>
        &lt;{componentType}
        {mapProps(props)} /&gt;
      </code>
    )
  }

  if (componentType) {
    return (
      <code className={`language-${language}`}>
        &lt;{componentType}
        {mapProps(props)}&gt;
        {children}&lt;/{componentType}&gt;
      </code>
    )
  }

  return <code>{children}</code>
}
