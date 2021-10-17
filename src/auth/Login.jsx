import { Link,useHistory } from "react-router-dom"

const Login = () => {
   const history = useHistory();

   function handleSignin(){
      history.push("/dashboard");
   }
   return (
      <div className="w-3/12 m-auto mt-10">
         <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
    <div className="mb-4">
      <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username" />
    </div>
    <div className="mb-6">
      <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************" />

    </div>
    <div className="flex items-center justify-between">
      <button onClick={handleSignin} style={{backgroundColor:'#333'}} className="bg-red hover:bg-red text-white font-bold py-2 px-4 rounded" type="button">
        Sign In
      </button>
      <Link className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" to="/signup">
        Don't have an account? Register
      </Link>
    </div>
</div>  
      </div>
   )
}

export default Login
