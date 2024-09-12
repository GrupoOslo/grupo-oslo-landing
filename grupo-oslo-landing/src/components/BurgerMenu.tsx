import { useState } from 'react';

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Encabezado con logo y botón */}
      <div className="flex justify-between bg-white items-center z-30 relative border-b-2">
        <img 
          src="logos/Logos-02.png"
          alt="astro logo"
          className="w-[200px] p-4"
        />
        <button
          className="text-3xl focus:outline-none relative p-4"
          onClick={toggleMenu}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
    

      {/* Menú (posicionado detrás del encabezado) */}
      <nav
        className={`absolute top-0 left-0 w-full bg-white transition-transform duration-300 ease-in-out z-20 shadow-md ${
          isOpen ? 'translate-y-16' : '-translate-y-full'
        }`}
      >
        <ul className="text-center py-4">
          <li className="py-2">
            <a href="/" className="uppercase">
              Manifiesto
            </a>
          </li>
          <li className="py-2">
            <a href="/about" className="uppercase">
              Unidades
            </a>
          </li>
          <li className="py-2">
            <a href="/services" className="uppercase">
              Equipo
            </a>
          </li>
          <li className="py-2">
            <a href="/contact" className="uppercase">
              Partners
            </a>
          </li>
          <li className="py-2">
            <a href="/contact" className="uppercase">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;
