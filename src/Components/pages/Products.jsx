import { useState, useEffect } from 'react'
import ProductCard from '../ProductCard'
import smallBucketImg from '../../assets/Avocado (2).jpg'
import largeBucketImg from '../../assets/avocado-plate.jpg'
import premiumBoxImg from '../../assets/avocado-salad.jpg'
import smoothiePackImg from '../../assets/avocado-toast.jpg'

const products = [
  { id: 1, name: 'Small Avocadoes(Ikg)', price: '$5', image: smallBucketImg },
  { id: 2, name: 'Large Avocadoes (1kg)', price: '$12', image: largeBucketImg },
  { id: 3, name: 'Avocado Salad Bowl', price: '$15', image: premiumBoxImg },
  { id: 4, name: 'Seasoned Avocado', price: '$8', image: smoothiePackImg },
]

export default () => {
  const [list, setList] = useState([])
  useEffect(() => { setTimeout(() => setList(products), 300) }, [])
  return (
    <section id='products' className='page' style={{background: '#09491b', padding: '80px 40px', color: '#fff'}}>
      <h2 style={{color: '#fff', textAlign: 'center'}}>OUR PRODUCTS</h2>
      <p style={{color: '#999', textAlign: 'center'}}>Fresh avocados delivered to your doorstep</p>
      <div className='products-grid'>
        {list.map((p) => <ProductCard key={p.id} {...p} />)}
      </div>
    </section>
  )
}