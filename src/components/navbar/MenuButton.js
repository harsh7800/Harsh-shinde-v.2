import React, {useState} from 'react'
import './Menubtn.css'
// import NavBar from './NavBar';

const MenuButton = () => {

  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <button className='menu' onClick={ () => setShowMenu(!showMenu)}>
        <i className="fa-solid fa-bars"></i>
      </button>
    </>
  );
}

export default MenuButton