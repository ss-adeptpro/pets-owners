import Header from '../header/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header></Header>
      <div className='bodyContainer'>
        <Outlet />
      </div>
    </>
  )
}

export default Layout