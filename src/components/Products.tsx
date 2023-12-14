import { ProductType } from "../context/ProductsProvider"
import { ReducerAction, ReducerActionType } from "../context/CartProvider"
import { ReactElement } from "react"

type PropsType = {
  product: ProductType
  dispatch: React.Dispatch<ReducerAction>
  REDUCER_ACTIONS: ReducerActionType
  incart: boolean
}

const Products = ({ product, dispatch, REDUCER_ACTIONS, incart }: PropsType): ReactElement => {

    const img: string = new URL(`../images/${product.sku}.jpg`,import.meta.url).href
    console.log(img);
    

    return(

    )
     
  return <div>Products</div>
}

export default Products
