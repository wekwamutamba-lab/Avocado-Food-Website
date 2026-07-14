export default ({ name, price, image }) => (
  <div className='product-card'>
    <img src={image} alt={name} className='product-image' />
    <h3>{name}</h3>
    <p className='price'>{price}</p>
    <button>Add to Cart</button>
  </div>
)
