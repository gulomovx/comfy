import { useLoaderData, Link } from "react-router-dom"
import { formatPrice } from "../utils";
const ProductsGrid = () => {
  const {products} = useLoaderData()
  // console.log(products);
  return (
      <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { title, image, price } = product.attributes
        const dollar=formatPrice(price)
        return (
          <Link to={`/products/${product.id}`} key={product.id} className=' card w-full shadow-xl hover:shadow-xl transition duration-300'>
            <figure>
              <img src={image} alt="" className="rounded hover:scale-110  transition duration-500 h-64 md:h-48 w-full object-cover" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wider">{title}</h2>
              <span className="text-secondary font-medium">{ dollar}</span>
            </div>
           </Link>
        )
          })}
    </div>
  )
}

export default ProductsGrid