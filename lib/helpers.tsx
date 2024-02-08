import {
  DotnetcoreOriginal,
  GoOriginalWordmark,
  NodejsOriginal,
  ReactOriginal,
} from "devicons-react"

const languageToIconMap: { [key: string]: React.ReactNode } = {
  go: <GoOriginalWordmark size={25} />,
  golang: <GoOriginalWordmark size={25} />,
  react: <ReactOriginal size={30} />,
  dotnet: <DotnetcoreOriginal size={30} />,
  node: <NodejsOriginal size={25} />,
}

export function LanguageIcon(language: string): React.ReactNode {
  return languageToIconMap[language.toLocaleLowerCase()]
}
