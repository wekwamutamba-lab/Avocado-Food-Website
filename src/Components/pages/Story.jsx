import avocadoDreamSalad from '../../assets/avocado-dream-salad.jpg'
import avocadoSalad from '../../assets/avocado-salad.jpg'

export default () => (
  <>
    <section id='story' className='page'>
      <h2 style={{textAlign: 'center'}}>OUR RECIPES</h2>
      <p style={{textAlign: 'center'}}>Discover delicious ways to enjoy our fresh avocados</p>
    </section>
    <section className='organic-section'>
      <div className='organic-images'>
        <img src={avocadoDreamSalad} alt='Avocado dishes' />
        <img src={avocadoSalad} alt='Fresh avocado' />
      </div>
      <div className='organic-text'>
        <h3>Organic</h3>
        <p>DELIGHT</p>
        <p style={{marginTop: '20px', fontSize: '15px'}}>Every avocado from our farm is certified organic, grown with care and respect for the earth. We believe that the best food comes from sustainable farming practices. Our commitment to organic excellence means you get the freshest, most nutritious avocados possible. From simple salads to gourmet dishes, our avocados elevate every meal.</p>
      </div>
    </section>
  </>
)