export default () => (
  <nav className='navbar'>
    <div className='nav-brand'>
      <span className='brand-name'>ZimAvocado</span>
    </div>
    <ul>
      {['Home', 'About', 'Why Us', 'Story', 'Products', 'Contact'].map(l => (
        <li key={l}><a href={`#${l.toLowerCase().replace(/ /g, '-')}`}>{l}</a></li>
      ))}
    </ul>
  </nav>
)
