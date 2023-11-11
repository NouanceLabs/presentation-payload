import { Highlight, themes, Language } from 'prism-react-renderer'

interface CodeBlockProps {
  language?: string | null
  code: string
}

function CodeBlock({ language, code }: CodeBlockProps) {
  const languageToUse = (language ?? 'tsx') as Language

  return (
    <div className={` not-prose`}>
      <div className={''}>
        <Highlight theme={themes.dracula} code={code} language={languageToUse}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={`${className} p-4  w-full max-w-[100%] overflow-auto pt-7`}
              style={style}
            >
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })} key={i} className={'table-row p-4'}>
                  <span className={'text-right table-cell select-none'}>{i + 1}</span>
                  <span className={'pl-4 table-cell'}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} key={key} />
                    ))}
                  </span>
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  )
}

export default CodeBlock
