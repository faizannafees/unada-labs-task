
const Navbar = () => {
    return (
        <header
            className="
        w-full 
        px-4 py-4 
        md:px-8 md:py-6
        flex flex-col gap-4
        md:flex-row md:items-center md:justify-between
        text-sm text-white
      "
        >
            {/* Left nav */}
            <nav
                className="
          flex justify-center
          gap-4
          md:gap-8 
          lg:gap-20
          order-2 md:order-1
        "
            >
                <a className="hover:text-white/80 transition">Home</a>
                <a className="hover:text-white/80 transition">About</a>
                {/* <Link className="hover:text-white/80 transition">Contact</Link> */}
            </nav>

            {/* Logo / center title */}
            <div
                className="
          text-center 
          text-lg md:text-xl lg:text-2xl
          font-display 
          tracking-[0.35em] md:tracking-[0.5em]
          order-1 md:order-2
        "
            >
                METEORA
            </div>

            {/* Right nav */}
            <nav
                className="
          flex justify-center
          gap-4 
          md:gap-6 
          lg:gap-8
          order-3
        "
            >
                <a className="hover:text-white/80 transition">Galaxies</a>
                <a className="hover:text-white/80 transition">Solar System</a>
                <a className="hover:text-white/80 transition">Earth</a>
            </nav>
        </header>
    );
};

export default Navbar;
