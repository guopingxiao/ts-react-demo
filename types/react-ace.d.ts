declare module 'react-ace' {
  interface ReactAceProps {
    mode: string
    theme: string
    name: string
    editorProps?: {}
    showPrintMargin?: boolean
    minLines?: number
    maxLines?: number
    wrapEnabled?: boolean
    value: string
    highlightActiveLine?: boolean
    width?: string
    fontSize?: number
  }

  const ReactAce: React.ComponentClass<ReactAceProps>
  export = ReactAce
}
