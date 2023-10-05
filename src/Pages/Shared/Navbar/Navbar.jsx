import { useContext } from "react";
import { authContext } from "../../../Proverders/AuthProverders";
import { Link } from "react-router-dom";


const Navbar = () => {
const {user,logOut}=useContext(authContext)





const handleLogOut =()=>{
  logOut()
  .then(() => {
   console.log("Sign-out successful");
  }).catch((error) => {
   console.log(error);
  });
  
}





    return (
        <div className="navbar bg-[#001f479d] text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Toy's kingdom</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
         
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <div className="navbar-end">
     
     {user ? 
    
       <button onClick={handleLogOut} className="btn">Log Out</button>:
       <>  <Link to={`/login`}> <button className="btn">Log in</button></Link>
       <Link to={`/register`}> <button className="btn btn-outline text-white ml-3">Register</button></Link></>
       
      
      
      }
    

        </div>
      </div>
    );
};

export default Navbar;