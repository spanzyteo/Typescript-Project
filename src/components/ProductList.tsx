import useCart from '../hooks/useCart'
import useProducts from '../hooks/useProducts'
import { UseProductsContextType } from '../context/ProductsProvider'
import { ReactElement } from 'react'
import Products from './Products'

const ProductList = () => {
  const { dispatch, REDUCER_ACTIONS, cart } = useCart()
  const { products } = useProducts()

  let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>

  if (products?.length) {
    pageContent = products.map((product) => {
      const incart: boolean = cart.some((item) => item.sku === product.sku)

      return (
        <Products
          key={product.sku}
          product={product}
          dispatch={dispatch}
          REDUCER_ACTIONS={REDUCER_ACTIONS}
          incart={incart}
        />
      )
    })
  }

  const content = <main className="main--products">{pageContent}</main>

  return content
}

export default ProductList
