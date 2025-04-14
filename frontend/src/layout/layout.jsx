import { Link, Outlet } from "react-router-dom"
function Layout() {
    return(
    <div className="container">
      <div className="menu bg-black p-5 flex flex-row justify-between">
        <h1 className="title text-blue-800 font-black text-2xl">SMS</h1>
        <div className="menulist space-x-2 text-white">
          <Link to={'/'}>Home</Link>
          <Link to={'/teacher'}>Teacher</Link>
          <Link to={'/courses'}>Courses</Link>
          <Link to={'/students'}>Students</Link>
          <Link to={'/profile'}>Profile</Link>
          <Link to={'/login'}>LogOut</Link>
        </div>
      </div>
      <main>
        <div className="content h-122 flex justify-center items-center bg-gray-400">
            <Outlet />
        </div>
      </main>
      <div className="footer bg-gray-500 p-4 text-white text-center">
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
    )
}

export default Layout