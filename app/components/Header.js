import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-8 px-10 bg-ClayCreek text-white">
      <h1><b>Verda</b> CHATBOT</h1>
      <nav className="flex gap-20 items-center">
        <ul className="flex gap-10">
          <li><Link href="/">Home</Link></li>
          <li><Link href="#">About Us</Link></li>
          <li><Link href="#">Pricing</Link></li>
          <li><Link href="#">Contact Us</Link></li>
        </ul>

        <div className="flex gap-10 items-center">
          <Link href="/pages/signin" className="bg-white text-black py-2 px-5 rounded">Sign in</Link>
          <Link href="/pages/signup" className="bg-Masala py-2 px-5 rounded">Register</Link>
        </div>

      </nav>
    </header>
  );
};

export default Header;
