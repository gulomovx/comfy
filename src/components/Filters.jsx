import { Form, Link, useLoaderData } from "react-router-dom"
import FormInput from "./FormInput"
import FormRange from "./FormRange"
import FormSelect from "./FormSelect"
import FormCheckBox from './FormCheckBox'

const Filters = () => {
  const { meta, params } = useLoaderData()
  console.log(meta);
  const {search, companies, category, shipping, order, price}=params
  return (
    
      <Form className="bg-base-200 mt-8 rounded-sm px-8 py-4 grid gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
        <FormInput
          type='search'
          label='Search Products'
          name='search'
          size='input-md'
        />
      {/*category  */}
      <FormSelect
        label='Select Category '
        name='category'
        defaultValue={category}
        list={meta.categories}
        size='input-md'
      />
      {/*company  */}
      <FormSelect
        label='Select Company '
        name='company'
        defaultValue={companies}
        list={meta.companies}
        size='input-md'
      />
      {/*sort by   */}
      <FormSelect
        label='Sort By '
        name='order'
        defaultValue={order}
        list={['a-z', 'z-a', 'high', 'low']}
        size='input-md'
      />
      {/*price range  */}
      <FormRange
        label='Select price'
        name='price'
        // size={}

      />
      {/*shipping checkbox  */}
      <FormCheckBox
        name="shipping"
        size="input-sm"
        label="Free Shipping"
        defaultValue={shipping}
      />
      {/*buttons  */}
          <button className="btn btn-primary btn-sm">search</button>
        <Link to='/products' className="btn btn-accent btn-sm">
          reset
        </Link>
     </Form>
    
  )
}

export default Filters