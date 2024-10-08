import React, {useEffect , useState} from 'react'
import Hero from '../../components/Hero'
import Products from '../../components/Products'
import FeatureCard from '../../components/FeatureCard'
import StatCard from "../../components/StatCard"

function Home() {
  const[products , setProducts] = useState([]);

  
  useEffect(()=>{
    const fetchProducts = async ()=>{
       const response  = await fetch('https://fakestoreapi.com/products');
       const data = await response.json();
       setProducts(data)
    }

    fetchProducts()

  }, [])

    return (
        <>
            <Hero />
            <div class="flex flex-col text-center w-full">
                <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
                <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 uppercase">Most Popular Products</h1>
            </div>
            {
                products.length > 0 ? <Products products ={products} />: <div>Loading ...</div>
            }
            
            <FeatureCard />
            <StatCard/>
            
        </>
    )
}

export default Home