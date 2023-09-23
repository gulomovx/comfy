import { useLoaderData, Link } from "react-router-dom"
import { formatPrice } from "../utils";
const ProductsList = () => {
  const {products} = useLoaderData()
  // console.log(products);
  return (
      <div className="mt-8 grid  gap-y-8">
      {products.map((product) => {
        const { title, image, price, company } = product.attributes
        const dollar=formatPrice(price)
        return (
            <Link
                to={`/products/${product.id}`}
                key={product.id}
                className=' hover:scale-105  p-8 rounded-lg flex flex-col sm:flex-row gap-4 flex-wrap bg-base-100 shadow-xl duration-300 join'
            >
                <img src={image} alt="" className="w-24 h-24 sm:h-32 sm:w-32 object-cover hover:scale-110 duration-300 join" />
                <div className="ml-0 sm:ml-16">
              <h3 className="capitalize font-medium text-lg">{title}</h3>
              <h4 className="capitalize font-medium text-lg">{company}</h4>
                </div>
              <p className="font-medium ml-0 sm:ml-auto text-lg">{dollar}</p>
                {/* 1. 05 min */}
            </Link>
        )
          })}
    </div>
  )
}

export default ProductsList