import avocadoPlate from '../../assets/avocado-plate.jpg'
export default () => (
  <section id='why-us' className='page'>
    <h2 style={{textAlign: 'center', marginBottom: '40px'}}>Why Choose Us</h2>
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center'}}>
      <div>
        <h3 style={{fontSize: '24px', fontWeight: 400, marginBottom: '20px'}}>FRESH & NATURAL</h3>
        <p>Our avocados are picked at peak ripeness and shipped within 24 hours. No chemicals, no preservatives—just pure, natural fruit from our Zimbabwe farm.</p>
        <ul style={{marginTop: '20px', listStyle: 'none', padding: 0}}>
          <li style={{padding: '8px 0', color: '#666'}}>✓ Sustainably grown with eco-friendly practices</li>
          <li style={{padding: '8px 0', color: '#666'}}>✓ Rigorous quality control on every batch</li>
          <li style={{padding: '8px 0', color: '#666'}}>✓ Direct farm-to-table delivery</li>
          <li style={{padding: '8px 0', color: '#666'}}>✓ Certified organic farming methods</li>
        </ul>
      </div>
      <img src={avocadoPlate} alt='Fresh avocado plate' style={{width: '100%'}} />
    </div>
  </section>
)
