import "../../assets/CSS/navbar.css"
import  { useState } from "react";
import { BiMenuAltRight, BiX } from "react-icons/bi";
const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened((prev) => !prev);
  };

  const menuItems = [

    { href: "#1", text: "Home" },
    { href: "#2", text: "Projects" },
    { href: "#3", text: "Skills" },
    { href: "#4", text: "Contact" },
  ];

  const renderItems = (item, index) => (
    <a key={index} href={item.href} >
      {item.text}
    </a>
  );
  
  return (
    // <section className="bg-black text-white fixed top-0 left-0 right-0 ">
      <div className="flex justify-between py-[20px] px-[30px] max-w-screen-xl ">
        <div className="name tracking-widest text-white  sm:ms-14 ms-7">Shikshita Subedi Khatri</div>
    

      {menuOpened?<div className="hidden cursor-pointer" onClick={toggleMenu}>
          <BiMenuAltRight size={30} style={{backgroundColor:"white"}}/>
        </div>:<div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          <BiMenuAltRight size={30} style={{backgroundColor:"white"}}/>
        </div>}

        

        <div className="hidden lg:flex gap-14 navbarContent tracking-wider text-white me-0">
          {menuItems.map(renderItems)}
        </div>

        {menuOpened && (
          <nav className="w-[200px] h-auto bg-white text-black flex flex-col p-4 shadow-sm rounded-lg lg:hidden ">
            <div className="flex justify-end mb-4 text-black">
              <BiX className="cursor-pointer text-black" onClick={() => setMenuOpened(false)} size={30} />
            </div>
            <div className="flex flex-col space-y-9 text-black">
              {menuItems.map(renderItems)}
            </div>
          </nav>
        )}
      </div>
    // </section>
  )
}

export default Navbar



