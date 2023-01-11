// key: daljoKoHn7lrw0WyEj2FrLKnJkY8cCVk
import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

  const onAddCategory = () => {
    // agregar categorías
    // forma 1
    setCategories([...categories, 'Pokemon'])
    //  forma 2
    // setCategories( cat => [...categories, 'Pokemon'])
  }
  
  return (
    <>
      {/* titulo */}
      <h1>GiftExpertApp</h1>

      {/* Input */}
      <AddCategory />


      {/* Listado */}
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        { categories.map( cat => {
          return <li key={cat}>{cat}</li>
        })}
      </ol>
        {/* Gif Item */}
    </>
  )
}
