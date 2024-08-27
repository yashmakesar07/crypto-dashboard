const Header = () => {
  return (
    <div className="h-[10vh] w-screen flex justify-between items-center p-10 ">
      <img src="https://res.coinpaper.com/coinpaper/polygon_matic_logo_4f17efa0e5.png" alt="Polygon Matic Logo" className="h-10 w-10" />
      <div>
        <nav className="flex flex-row gap-5 text-white">  
          <p>Home</p>
          <p>About</p>
        </nav>
      </div>
    </div>
  );
};

export default Header;