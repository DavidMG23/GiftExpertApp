import { useState } from "react"

export const AddCategory = ({onNewCategory}) => { // aquí recibo las props en este caso setCategories de giftexpertapp

  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const onSubmit = ( event ) => {
    event.preventDefault()
    if (inputValue.trim().length <= 1) return // el texto debe ser >= 2 caracteres

    // setCategories(categories => [inputValue, ...categories]) // aquí se agrega el input a la lista
    onNewCategory(inputValue.trim().toLowerCase()) // lo envío sin espacios y en minúsculas
    setInputValue('') // limpiar input
  }
  return (
    // es lo mismo {onSubmit} que {(event) => onSubmit(event)}
    <form onSubmit={onSubmit}> 
      <input
        type="text"
        placeholder="Buscar gift"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
