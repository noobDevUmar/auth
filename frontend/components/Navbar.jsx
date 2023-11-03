import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './Context/UserContext';


const Navbar = () => {

const {user} =  useContext(UserContext)
console.log("data" , user);
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
      <div className="flex gap-3">
      <div className="">Welcome </div>
      <div className=" "> {user?.username}</div>


      </div>
    </div>
  );
};

export default Navbar;
