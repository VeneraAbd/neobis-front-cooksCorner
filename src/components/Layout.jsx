import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
        <header className="sidebar">
            <Link to="/home">Home</Link>
            <Link>Search</Link>
            <Link to="/profile">Profile</Link>
        </header>
        <main>
            <Outlet />
        </main>
    
    </>
  )
}

export default Layout