

import { useLoaderData, Link } from "react-router-dom"
import { formatPrice, customFetch } from "../utils"
import { useState } from "react"
 
export const loader = async ({ params }) => {
  const request = await customFetch(`/products/${params.id}`)
 return  { product:request.data.data}
  
}
const SingleProduct = () => {
  const {product} = useLoaderData()
  const { image, title, price, description, colors, company } = product.attributes
  const dollar=formatPrice(price)
  return (
    <section>
      <div className="text-md breadcrumbs mt-8">
        <ul >
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products </Link>
          </li>
        </ul>
        <div className="mt-16 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16 ">
          <img src={image} alt="" className="w-96 h-96 rounded-lg hover:shadow-lg shadow-blue-500/50  lg:w-full object-cover" />
          <div className="">
            <h1 className="capitalize text-3xl font-bold">{title}</h1>
            <h3 className="text-neutral-400">{company}</h3>
            <p className="mt-8">{dollar}</p>
            <p className="mt-4 leading-8">{description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleProduct