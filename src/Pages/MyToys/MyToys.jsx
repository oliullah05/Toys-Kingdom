import { useContext, useEffect, useState } from "react";
import { authContext } from "../../Proverders/AuthProverders";
import SingleToyTable from "./SingleToyTable";



const MyToys = () => {
const {user}=useContext(authContext)
// console.log(user);
const [myToys ,setMyToys]=useState([])
const [toggle,setToggle]=useState(true)
// console.log(myToys);
useEffect(()=>{
   if(user){
    fetch(`http://localhost:5000/mytoys/${user?.email}`,{
        method:"GET"
    })
    .then(res=>res.json())
    .then(data=>{
        // console.log("data",data);
        setMyToys(data);
    })
   }
},[user,toggle])
// http://localhost:5000/mytoys/mdolihasan@gmail.com








    return (
        <>
        {/* <ToastContainer></ToastContainer> */}
        
   <div className="flex items-center container mx-auto my-5 w-[25%]">   
       <label className="sr-only">Search</label>
       <div className="relative w-full">
           <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
               <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
           </div>
           <input  type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search By Toy Name" required/>
           <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
               <svg aria-hidden="true" className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"></path></svg>
           </button>
       </div>
       <button  type="submit" className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search
       </button>
   </div>
   
        
        <div className="relative container mx-auto overflow-x-auto shadow-md sm:rounded-lg">
             
               <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                   <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                       <tr className='text-center'>
                           <th scope="col" className="p-4">
                               <div className="flex items-center text-xl  text-blue-500">
                                number
                               </div>
                           </th>
                           <th scope="col" className="px-6 py-3 text-xl text-blue-500">
                           Seller information
                           </th>
                           <th scope="col" className="px-6 py-3 text-xl text-blue-500">
                           Toy Name
                           </th>
                           <th scope="col" className="px-6 py-3 text-xl text-blue-500">
                           Category
                           </th>
                           <th scope="col" className="px-6 py-3 text-xl text-blue-500">
                           Available Quantity
                           </th>
                           <th scope="col" className="px-6 py-3 text-xl text-blue-500">
                           Price
                           </th>
                           <th scope="col" className="px-6 py-3 text-xl text-blue-500">
                           View Details Button
                           </th>
                          
                       </tr>
                   </thead>







    {
    myToys.map((singleData,index)=> <SingleToyTable key={singleData._id} toggle={toggle} setToggle={setToggle} singleData={singleData} index={index}> </SingleToyTable>)
}

                        
   
               </table>
           </div></>
    );
};

export default MyToys;