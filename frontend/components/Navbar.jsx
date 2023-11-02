import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex px-3 justify-around'>
      <div className=""> 
        Logo
      </div>
      <div className="">
        <ul className='flex gap-12'>
        <a href='/'>  Home </a>
                <a href='/about'>  Profile </a>

        </ul>
      </div>
      <div className="flex">
      <div className="">Welcome</div>
      <div className="">Name</div>


      </div>
    </div>
  );
};

export default Navbar;
