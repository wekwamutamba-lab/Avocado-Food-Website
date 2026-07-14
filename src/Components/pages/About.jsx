import sustainableFarming from '../../assets/sustainable-farming.jpg'
export default () => (
  <section id='about' className='page'>
    <div className='section-grid'>
      <div>
        <h2>Discover</h2>
        <h3 style={{fontSize: '24px', fontWeight: 400, marginBottom: '24px'}}>OUR STORY</h3>
        <p>From humble beginnings in Zimbabwe to becoming trusted purveyors of premium avocados, our journey reflects our commitment to quality, sustainability, and excellence. We believe that great avocados start with great farming practices.</p>
        <p style={{marginTop: '20px'}}>Our family farm has been perfecting the art of avocado cultivation for generations. Every fruit is carefully selected, harvested at peak ripeness, and shipped with care to ensure you receive nothing but the finest quality.</p>
      </div>
      <div className='feature-card'>
        <img src={sustainableFarming} alt='Sustainable farming' />
      </div>
    </div>
  </section>
)
