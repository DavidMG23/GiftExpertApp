import { GifItem } from "./GifItem";
import { useFetchGift } from "../hooks/useFetchGift";

export const GiftGrid = ({ category }) => {

  const {images, isLoading} = useFetchGift(category)

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      
      <div className="card-grid">
        {
          images.map((img) => (
            <GifItem
              key={img.id}
              /* Un operador de propagación. Está tomando todas las propiedades del objeto y pasándolas
              como accesorios al componente. */
              {...img}
            />
          ))
        }
      </div>
    </>
  )
}
