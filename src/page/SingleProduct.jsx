

import { useLoaderData, Link } from "react-router-dom"
import { formatPrice, customFetch, generateAmountoptions } from "../utils"
import { useState } from "react"
 
export const loader = async ({ params }) => {
  const request = await customFetch(`/products/${params.id}`)
 return  { product:request.data.data}
  
}
const SingleProduct = () => {
  const {product} = useLoaderData()
  const { image, title, price, description, colors, company } = product.attributes
  const dollar = formatPrice(price)
  const [productColor, setProductColor] = useState(colors[0])
  const [amount, setAmount] = useState(1)
  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value))
  }
  return (
    <section>
      <div className="text-md breadcrumbs ">
        <ul >
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products </Link>
          </li>
        </ul>
        <div className="mt-8 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16 ">
          <img src={image} alt="" className="w-96 h-96 rounded-lg hover:shadow-lg shadow-blue-500/50  lg:w-full object-cover" />
          <div className="">
            <h1 className="capitalize text-3xl font-bold">{title}</h1>
            <h3 className="text-neutral-400">{company}</h3>
            <p className="mt-8">{dollar}</p>
            <p className="mt-4 leading-8">{description}</p>
            <div className="form-control flex w-full max-w-xs ">
              <h3 className="text-md flex flex-col gap-4 mt-4 font-medium tracking-wider capitalize">
                <span>Colors</span>
                <span>
                  {colors.map((color) => {
                return <button
                  key={color}
                  type='button'
                  className={`badge h-6 w-6 mr-2  ${color===productColor?'border-2 border-red-600' : ''} `}
                  style={{ background: color }}
                  onClick={()=>{setProductColor(color)}}
                >
                  
              </button>
              })}
                </span>
              
              </h3>
                
            </div>
            <div className="form-control ">
              <label htmlFor="" className="label">
              <h4 className="font-medium tracking-wider capitalize my-2">Amount</h4>

              </label>
              <select
                id=""
                className="select select-secondary select-bordered select-md"
                onChange={handleAmount}
                value={amount}
              >
                {generateAmountoptions(8) }
               
              </select>
            </div>
            <div className="mt-4">
              <button className="btn btn-secondary btn-md">Add to bag</button>
            </div>
            
          </div>
         
        </div>
      </div>
    </section>
  )
}

export default SingleProduct