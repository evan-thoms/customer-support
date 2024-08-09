const Header = () => {
  return (
    <header className="container m-auto flex justify-between items-center py-8 px-10 bg-ClayCreek text-white">
      <h1><b>Verda</b> CHATBOT</h1>
      <nav className="flex gap-20 items-center">
        <ul className="flex gap-10">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>

        <div className="flex gap-10 items-center">
          <button className="bg-white text-black py-2 px-5 rounded">Sign in</button>
          <button className="bg-Masala py-2 px-5 rounded">Register</button>
        </div>

      </nav>
    </header>
  );
};

export default Header;
