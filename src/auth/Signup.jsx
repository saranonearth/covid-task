import { Link, useHistory } from "react-router-dom";

const Signup = () => {
  const history = useHistory();

  function handleSignup() {
    history.push("/signin");
  }
  return (
    <div>
      <div className="w-3/12 m-auto mt-10">
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="username"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="password"
              type="password"
              placeholder="******************"
            />
        
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={handleSignup}
              style={{ backgroundColor: "#333" }}
              className="bg-red hover:bg-red text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Sign Up
            </button>
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
              to="/signin"
            >
              Already have an account? Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
