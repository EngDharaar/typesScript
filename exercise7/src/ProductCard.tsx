interface Card {
    name:string,
    price:number,
    description?:string
}
const ProductCard = ({name,price,description}:Card) => {
  return (
    <div>

      <span>{name.toUpperCase()}</span>
      <span>{price}</span>
      {
        description && (
          <span>{description}</span>
        )
      }
    </div>
  )
}

export default ProductCard