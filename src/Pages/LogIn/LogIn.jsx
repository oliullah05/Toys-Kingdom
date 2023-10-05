
import { Link } from 'react-router-dom';
import { authContext } from '../../Proverders/AuthProverders';
import { useContext } from 'react';

const LogIn = () => {
const {logInByGoogle,LogInByGithub,logInByEmailPassword}=useContext(authContext)











const handleLogin =(e)=>{
    e.preventDefault();
    const form = e.target ;
    const email = form.email.value;
    const password = form.password.value;
    
    logInByEmailPassword(email,password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
     console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });





}


const handleGoogleLogIn =()=>{
  console.log(logInByGoogle);
    logInByGoogle()
    .then((result) => {
  
        const user = result.user;
     console.log(user);
      }).catch((error) => {
   
        const errorMessage = error.message;
     console.log(errorMessage);
        // ...
      });
}

const handleGithubLogIn =()=>{

  LogInByGithub()
  .then((result) => {


    // The signed-in user info.
    const user = result.user;
console.log(user);
    // ...
  }).catch((error) => {
    // Handle Errors here.
  
    const errorMessage = error.message;
console.log(errorMessage);
    // ...
  });

  }




    return (
        <div className="py-6 lg:py-24">
        
        <div className="bg-white rounded-lg shadow-lg mx-auto max-w-sm lg:max-w-xl">
          <form onSubmit={handleLogin} className="w-full p-8">
            <h1 className="text-2xl text-purple-900 text-center">Please Login!</h1>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
              <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" name="email" required />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <p className="text-xs text-gray-500 cursor-pointer">Forget Password?</p>
              </div>
              <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" name="password" required />
            </div>
            <div className="mt-8">
              <button className="text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400" type="submit">Login</button>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <p className="text-sm text-center text-gray-500">Don't have an account? <Link to={`/register`} className="underline">Register</Link></p>
              <span className="border-b w-1/5 md:w-1/4"></span>
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
              {/* <div className="flex flex-col lg:flex-row gap-3">
              <button className="flex gap-2 items-center w-full justify-center mt-4 text-white rounded-lg shadow-md bg-blue-500">
                <FaGoogle className="text-white" />
                <span className="py-3 text-center text-white font-bold">Google</span>
              </button>
              <button className="flex gap-2 items-center w-full justify-center mt-4 text-white rounded-lg shadow-md bg-gray-900">
                <FaGithub className="text-white" />
                <span className="py-3 text-center text-white font-bold">Github</span>
              </button>
            </div> */}
          </form>
          <div className="flex flex-col lg:flex-row -mt-7 gap-3 pb-8">
              <button onClick={handleGoogleLogIn}  className="flex gap-2 items-center w-full justify-center mt-4 text-white rounded-lg shadow-md bg-blue-500">
                
                <span className="py-3 text-center text-white font-bold">Google</span>
              </button>
              <button onClick={handleGithubLogIn} className="flex gap-2 items-center w-full justify-center mt-4 text-white rounded-lg shadow-md bg-gray-900">
          
                <span className="py-3 text-center text-white font-bold">Github</span>
              </button>
            </div>
        </div>
      </div>
    );
};

export default LogIn;