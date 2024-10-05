import { FormEvent, useState } from 'react'

// import styles from './FormVagas.module.css'
import { BotaoPesquisar, Campo, Formulario } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Formulario onSubmit={aoEnviarForm}>
      <Campo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      ></Campo>
      <BotaoPesquisar type="submit">Pesquisar</BotaoPesquisar>
    </Formulario>
  )
}
export default FormVagas
