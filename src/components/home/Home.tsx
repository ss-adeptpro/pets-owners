const Home = () => {
  return (
    <>
    <div className="homeContainer">
      <span className="title">Small Demo to show data from a web service</span>
      <ul className="homeItems">
        <li className="homeItem">
          using React + TypeScript + Vite + Redux Toolkit + RTK Query
        </li>
        <li className="homeItem">
          Output a list of all the cats in alphabetical order under a heading of the gender of their owner
        </li>      
        <li className="homeItem">
          Lazy loading of pages
        </li>
        <li className="homeItem">
          Memoized concept for performance optimization
        </li>        
        <li className="homeItem">
          Custom hook for error handlings
        </li>
        <li className="homeItem">
          Handle CORS issue for api
        </li>
      </ul>
    </div>
    </>
  )
}

export default Home