import React from 'react'
import {Link} from 'react-router-dom'

function Products({products}) {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">

      {
        products.map((item)=>(
          <Link to={`/products/${item.id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-50 mb-2 cursor-pointer">
          <a className="block relative h-48 rounded overflow-hidden">
            <img alt={item.title} className="object-contain object-center w-full h-full block" src={item.image}/>
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">{item.category}</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
            <p className="mt-1 text-md font-semibold">${item.price}</p>
          </div>
        </Link>

        ))
      }
     
    </div>
  </div>
</section>
  )
}

export default Products