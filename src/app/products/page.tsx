'use client'
import { useEffect, useState } from "react"
import productsApi from '../../services/productsApi';
import ProductItem from '../../components/ProductItem';
import BreadCramp from '../../components/BreadCramp';
import { API_Product } from "@/types";



const page = () => {

  const [products , setProducts] = useState<API_Product[]>([]);
 

  const getProducts_ = async () => {
    try {
      const res = await productsApi.getProducts(); // Make the API request
      setProducts(res.data.data)
      console.log(products)
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  useEffect(() => { getProducts_() } , [] )

  console.log(products)

  
  
  return (

<div>

<BreadCramp />

<section className='my-8'>

  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header className="text-center">
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>

      <p className="mx-auto mt-4 max-w-md text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
        dicta incidunt est ipsam, officia dolor fugit natus?
      </p>
    </header>

    <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
     
 {products.map((product) => (
    <ProductItem product={product} key={product.id} />
    
      ))}
 
  </ul>
</div>

</section>





</div>

  

  )
}

export default page