
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../Proverders/AuthProverders';


const Register = () => {

const {RegisterByEmailPassword,addPhotoAndDisplayName,user}=useContext(authContext)

console.log(user);
const handleRegister =(e)=>{
    e.preventDefault();
    const form = e.target ;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,photoUrl,password,email);

    RegisterByEmailPassword(email,password)
    .then((userCredential) => {
     
     


      addPhotoAndDisplayName(name,photoUrl)
  
    })
    .catch((error) => {
    
      const errorMessage = error.message;
   console.log(errorMessage);
    });





}







    return (
        <div  className="py-6 lg:py-24">
   
        <div className="bg-white rounded-lg shadow-lg mx-auto max-w-sm lg:max-w-xl">
          <form onSubmit={handleRegister} className="w-full p-8">
            <h1 className="text-2xl text-purple-900 text-center">Please Register!</h1>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Your Name</label>
              <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" name="name" />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Photo URL</label>
              <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="url" name="photoUrl" />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
              <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" name="email" required />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" name="password" required />
            </div>
            <div className="mt-8">
              
              <input className='text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400' type="submit" value="Register" />
            </div>

            {/* <div className='mt-4'>
                        {
                            error ? <p className="text-sm text-center text-red-600">
                                {error}
                            </p> :
                                <p className="text-sm text-center text-green-500">
                                    {success}
                                </p>
                        }
                    </div> */}


            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <p className="text-sm text-center text-gray-500">Already have an account? <Link to={"/login"} className="underline">Login</Link></p>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          
          </form>
          <div className="flex flex-col lg:flex-row -mt-7 gap-3 pb-8">
              <button  className="flex gap-2 items-center w-full justify-center mt-4 text-white rounded-lg shadow-md bg-blue-500">
              
                <span className="py-3 text-center text-white font-bold">Google</span>
              </button>
              <button className="flex gap-2 items-center w-full justify-center mt-4 text-white rounded-lg shadow-md bg-gray-900">
            
                <span className="py-3 text-center text-white font-bold">Github</span>
              </button>
            </div>
        </div>
      </div>
    );
};

export default Register;