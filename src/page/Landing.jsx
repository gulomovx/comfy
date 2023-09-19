import { FeaturedProducts, Hero } from '../components'
import { customFetch } from '../utils'

const url = '/products?featured=true'

export const loader = async () => {
  const request = await customFetch(url)
  const products = request.data.data
  return {products}
}
const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts/>
    </> 
  )
}

export default Landing