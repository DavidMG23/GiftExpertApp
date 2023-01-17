
import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GiftGrid } from "./components/GiftGrid"

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

  const onAddCategory = (newCategory) => {
    // comprobar si la categoría existe en el []
    if (categories.includes(newCategory)) return

    // agregar categorías
    setCategories([...categories, newCategory])

  }

  return (
    <>
      {/* titulo */}
      <h1>GiftExpertApp</h1>

      {/* Input */}
      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
      />


      {/* Listado */}
      {
        categories.map((cat) => (
          <GiftGrid
            key={cat}
            category={cat} />
        ))
      }

      {/* Gif Item */}
    </>
  )
}
