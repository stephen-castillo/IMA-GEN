import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../util/auth";
import '../styles/SignUp.css';
import logo from '../assets/IMAGEN.png';
// This signup form is intentionally minimalist to reduce effort required to
// customize it to your app's needs. See the excellent best practices guide for
// sign informs on web.dev https://web.dev/sign-in-form-best-practices/

// TODO: customize styles or import styles with favorite css approach
const styles = {
  formControl: {
    display: "flex",
    padding: "0.25em",
  },
  label: {
    flex: "0 1 6em",
    paddingRight: "0.25em",
  },
  Sbutton: {
    backgroundColor: "#ff1867",
    color: "white",
  },
};

const initialFormState = {
  username: "",
  email: "",
  password: "",
};

export default function SignUp() {
  const { isLoggedIn, signup, loading, error } = useAuth();
  const [formState, setFormState] = useState(initialFormState);

  useEffect(() => {
    if (error) {
      // TODO: replace window alert with custom alert.
      alert(error);
    }
  }, [error]);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    signup(formState);
  };

  if (isLoggedIn) {
    // navigate to the home page
    return <Navigate to="/" replace />
  }
  // return (
  //   <div>
  //     <h1>Sign Up</h1>
  //     <hr />
  //     <form onSubmit={handleSubmit}>
  //       <div style={styles.formControl}>
  //         <label htmlFor="username" style={styles.label}>
  //           Username
  //         </label>
  //         <input
  //           className="text-[black]"
  //           autoFocus
  //           disabled={loading}
  //           id="username"
  //           type="text"
  //           placeholder="Enter username"
  //           name="username"
  //           value={formState.username.value}
  //           onChange={handleInputChange}
  //         />
  //       </div>
  //       <div style={styles.formControl}>
  //         <label htmlFor="email" style={styles.label}>
  //           Email
  //         </label>
  //         <input
  //           className="text-[black]"
  //           disabled={loading}
  //           id="email"
  //           type="email"
  //           name="email"
  //           placeholder="Enter email"
  //           value={formState.email.value}
  //           onChange={handleInputChange}
  //         />
  //       </div>
  //       <div style={styles.formControl}>
  //         <label htmlFor="new-password" style={styles.label}>
  //           Password
  //         </label>
  //         <input
  //           className="text-[black]"
  //           disabled={loading}
  //           id="new-password"
  //           type="password"
  //           name="password"
  //           placeholder="Enter password"
  //           value={formState.password.value}
  //           onChange={handleInputChange}
  //         />
  //       </div>
  //       <div style={styles.formControl}>
  //         <button className = 'Sbutton' style={styles.Sbutton} disabled={loading} type="submit">
  //           {loading ? "Loading..." : "Submit"}
  //         </button>
  //       </div>
  //     </form>
  //   </div>
  // );
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
      <img className='w-full h-full object-cover' src={logo} alt=''/>
      </div>

      <div className='bg-[#0c192c]-800 flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-gray-800 p-8 px-8 rounded-lg' onSubmit={handleSubmit}>
          <h2 className='text-4x1 text-white font-extrabold text-center'>Sign Up!</h2>
          <div className='flex flex-col text-white-500 py-2'>
            <label>Email</label>
            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:ng-gray-800 fcous:outline-none'
            disabled={loading}
            id='email'
            type='email'
            name='email'
            placeholder='Enter Email'
            value={formState.email}
            onChange={handleInputChange}/>
          </div>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>Username</label>
            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:ng-gray-800 fcous:outline-none'
            autoFocus
            disabled={loading}
            id='username'
            type='text'
            placeholder='Enter username'
            name='username'
            value={formState.username.value}
            onChange={handleInputChange}/>
          </div>
          <div className='flex flex-col text-white-500 py-2'>
            <label>Password</label>
            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:ng-gray-800 fcous:outline-none'
            id='password'
            type='password'
            name='password'
            placeholder='Enter Password'
            value={formState.password}
            onChange={handleInputChange}/>
          </div>
          <div className='flexbox jusitfy-between text-white-500 py-2 '>
            <p className='flex items-center'><input className='mr-2' type='checkbox'/> Remember Me</p>
            <p>Forgot Password</p>
          </div>
          <button className='w-full my-5 py-2 bg-red-500 shadow-lg shadow-red-500/50 hover:shadow-red-500/40 text-white font-semibold rounded-lg SButton'>Sign In</button>
        </form>
      </div>

    </div>
  )
}

