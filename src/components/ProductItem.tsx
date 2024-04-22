import { API_Product } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


type Props = {
  product : API_Product
}

const ProductItem : React.FC<Props> = ({product}) => {

  

  return (

  <li>
  <Link href={`/products/${product.id}`} className="group block">
    <Image src={product.attributes?.image?.data?.attributes?.url} alt='Marketing Image' width={400} height= {400}  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]" />

  <div className="mt-3 flex justify-between text-sm">                                                               
    <div>
      <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
      {product.attributes?.title}
      </h3>

      <p className="mt-1.5 text-pretty text-xs text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis, quia soluta quisquam
        voluptatem nemo.
      </p>
    </div>

    <p className="text-gray-900">${product.attributes?.price} </p>
  </div>
</Link>
</li>
 
  )
}

export default ProductItem