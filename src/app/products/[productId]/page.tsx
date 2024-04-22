'use client'
import React, { useContext, useEffect, useState } from "react"
import productsApi from "../../../services/productsApi"
import ordersApi from "../../../services/ordersApi"
import Image from "next/image";
import ProductItem from "@/components/ProductItem";
import { API_Product } from "@/types";
import { CartContext } from "@/Context/CartContext";

type Params = {
  productId: string
}

type Props = {
  params : Params
}

const page : React.FC<Props> = ({params}) => {

  const [product , setProduct] = useState({} as API_Product);

  const [category , setCategory] = useState<API_Product[]>([])

  const { addProduct , cartItems } = useContext(CartContext);


  console.log(cartItems)

  const getProductById_ = async () => {
    try {
      const res = await productsApi.getProductById(params?.productId); // Make the API request
      setProduct(res.data.data)
      console.log(res.data.data)
      getProductByCategory_(res.data.data)

    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  const getProductByCategory_ = async (product : API_Product) => {
    try {
      const res = await productsApi.getProductByCategory(product?.attributes?.category); // Make the API request

      console.log(res.data.data)
      setCategory(res.data.data)
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  const createOrder = () => {

     const productId : number[] = [];
     cartItems.map(el => {
      productId.push(el?.id)
     } )  
     
     const data = {
      data :{
        products : productId
      }
     }
     ordersApi.createOrder(data)
  }

  useEffect(() => { getProductById_() } , [params?.productId] )

  console.log(product?.attributes?.image?.data?.attributes?.url)
  
  return (
           
  <div className="container my-36 mx-auto md:px-4">
  <section className="mb-32 text-center md:text-left">
    <div >
      <div className="flex flex-wrap items-center">
        <div
          className="block w-full shrink-0 grow-0 basis-auto md:w-6/12 lg:flex">
          <Image src={product?.attributes?.image?.data?.attributes?.url} alt='Marketing Image' width={800} height= {700} className="w-[600px] h-[500px] object-fill rounded-lg md:rounded-lg"  />
        </div>
        <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12">
          <div className="px-6 py-12 md:px-12">
            <h2 className="mb-6 text-3xl font-bold">
              <span className="text-danger dark:text-danger-500">{product?.attributes?.title}</span>
            </h2>
            <p className="mb-6 pb-2 text-neutral-500 dark:text-neutral-300">
              Nunc tincidunt vulputate elit. Mauris varius purus malesuada
              neque iaculis malesuada. Aenean gravida magna orci, non
              efficitur est porta id. Donec magna diam.
            </p>
            <p className="text-gray-900">${product?.price} </p>
            <button
              type="button"
              onClick={() => addProduct(product)}
              className="inline-block rounded-full mt-4 bg-danger px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]"
              data-te-ripple-init
              data-te-ripple-color="light">
              Add To Card
            </button>
            <button
              type="button"
              onClick={createOrder}
              className="inline-block rounded-full mt-4 bg-danger px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]"
              data-te-ripple-init
              data-te-ripple-color="light">
              Go To Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className='my-4'>

  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header className="text-left">
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Similar Products</h2>
    </header>

    <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
     
 {category.map((product) => (
    <ProductItem product={product} key={product.id} />
    
      ))}
 
  </ul>
</div>

</section>
  
</div>
  )
}

export default page