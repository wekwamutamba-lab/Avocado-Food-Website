import heroImage from '../assets/avocado-salad.jpg'

export default () => (
  <section className='hero'>
    <div>
      <h1>Welcome</h1>
      <p>THE AVOCADO KITCHEN</p>
      <p style={{ fontSize: '14px', marginTop: '16px', letterSpacing: '2px' }}>READY TO BE OPENED</p>
    </div>
    <img src={heroImage} alt='Fresh avocados' />
  </section>
)