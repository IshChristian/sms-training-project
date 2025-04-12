function Layout( {children} ) {
    return(
    <div className="container">
      <div className="menu bg-black p-5 flex flex-row justify-between">
        <h1 className="title text-blue-800 font-black text-2xl">SMS</h1>
        <div className="menulist space-x-2 text-white">
          <a href="">Home</a>
          <a href="">Teachers</a>
          <a href="">Course</a>
          <a href="">Students</a>
          <a href="">profile</a>
          <a href="">logOut</a>
        </div>
      </div>
      <main>
        <div className="content h-122 flex justify-center items-center bg-gray-400">
            {children}
        </div>
      </main>
      <div className="footer bg-gray-500 p-4 text-white text-center">
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
    )
}

export default Layout