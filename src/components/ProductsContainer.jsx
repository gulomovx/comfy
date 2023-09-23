import ProductsList from '../page/ProductsList'
import ProductsGrid from './ProductsGrid'
import { useLoaderData } from 'react-router-dom'
import { useState } from 'react'
import{BsFillGridFill, BsList} from 'react-icons/bs'
const ProductsContainer = () => {
  const { meta } = useLoaderData()
  const totalProducts = meta.pagination.total
  const [layout, setLayout] = useState('grid')
  const setActiceStyles = (pattern) => {
    return `text btn btn-circle btn-sm ${
      pattern === layout ? 'btn-primary text-primary-content' : 'btn-ghost text-based-content'
    }`
  }



  return (
    <>
      <div className='flex justify-between items-center mt-8 border-b border-base-300 pb-5 '>
        <h4 className='font-medium text-md'>
          {totalProducts} product{totalProducts>1 && 's'}
        </h4>
        <div className='flex gap-x-2'>
          <button
            type='button'
            className={setActiceStyles('grid')}
            onClick={()=> setLayout('grid')}
          >
            
          <BsFillGridFill className='hover:scale-150 duration-100' />

          </button>
          <button type='submit'
            className={setActiceStyles('list')}
            onClick={()=> setLayout('list')}

          >
          <BsList className='hover:scale-150 duration-100' />

          </button>
          </div>
      </div>
      <ProductsList/>
      <ProductsGrid/>
    </>
  )
}

export default ProductsContainer