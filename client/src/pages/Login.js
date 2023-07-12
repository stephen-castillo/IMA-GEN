// import { useEffect, useState } from "react";
// import { useLocation, Navigate } from "react-router-dom";
// import { useAuth } from "../util/auth";
// import '../styles/Login.css';

// // TODO: customize styles or import styles with favorite css approach
// const styles = {
//   formControl: {
//     display: "flex",
//     padding: "0.25em",
//   },
//   label: {
//     flex: "0 1 6em",
//     paddingRight: "0.25em",
//   },
//   Sbutton: {
//     backgroundColor: "#ff1867",
//     color: "white",
//   },

// };

// const initialFormState = {
//   email: "",
//   password: "",
// };

// export default function Login() {
//   const { isLoggedIn, login, loading, error } = useAuth();
//   const [formState, setFormState] = useState(initialFormState);
//   const location = useLocation();

//   useEffect(() => {
//     if (error) {
//       // TODO: replace window alert with custom alert
//       alert(error);
//     }
//   }, [error]);

//   const handleInputChange = (evt) => {
//     const { name, value } = evt.target;
//     setFormState((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const handleSubmit = async (evt) => {
//     evt.preventDefault();
//     login(formState);
//   };

//   if (isLoggedIn) {
//     // navigate to page user was redirected from or the home page.
//     const from = location.state?.from?.pathname || "/protectedCluster";
//     return <Navigate to={from} replace />
//   }

//   return (
//     <div>
//       <h1>Login</h1>
//       <hr />
//       <form onSubmit={handleSubmit}>
//         <div style={styles.formControl}>
//           <label htmlFor="email" style={styles.label}>
//             Email
//           </label>
//           <input
//             className="text-[black]"
//             disabled={loading}
//             id="email"
//             type="email"
//             name="email"
//             placeholder="Enter email"
//             value={formState.email.value}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div style={styles.formControl}>
//           <label htmlFor="new-password" style={styles.label}>
//             Password
//           </label>
//           <input
//             className="text-[black]"
//             disabled={loading}
//             id="new-password"
//             type="password"
//             name="password"
//             placeholder="Enter password"
//             value={formState.password.value}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div style={styles.formControl}>
//           <button className = 'Sbutton' style={styles.Sbutton} disabled={loading} type="submit">
//             {loading ? "Loading..." : "Submit"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../util/auth";
import '../styles/Login.css';
import logo from '../assets/IMAGEN.png'

// export default function Login() {
//   const { isLoggedIn, login, loading, error } = useAuth();
//   const [formState, setFormState] = useState({
//     email: "",
//     password: "",
//   });
//   const location = useLocation();

//   useEffect(() => {
//     if (error) {
//       // TODO: replace window alert with custom alert
//       alert(error);
//     }
//   }, [error]);

//   const handleInputChange = (evt) => {
//     const { name, value } = evt.target;
//     setFormState((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const handleSubmit = async (evt) => {
//     evt.preventDefault();
//     login(formState);
//   };

//   if (isLoggedIn) {
//     // navigate to page user was redirected from or the home page.
//     const from = location.state?.from?.pathname || "/protectedCluster";
//     return <Navigate to={from} replace />;
//   }

//   return (
//     <div className="max-w-xlg mx-auto">
//       <h1 className="text-3xl font-bold mb-4">Login</h1>
//       <hr className="mb-4" />
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="email" className="block mb-2 font-semibold">
//             Email
//           </label>
//           <input
//             className="w-full px-4 py-2 rounded border-gray-300 focus:border-indigo-500"
//             disabled={loading}
//             id="email"
//             type="email"
//             name="email"
//             placeholder="Enter email"
//             value={formState.email}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="password" className="block mb-2 font-semibold">
//             Password
//           </label>
//           <input
//             className="w-full px-4 py-2 rounded border-gray-300 focus:border-indigo-500"
//             disabled={loading}
//             id="password"
//             type="password"
//             name="password"
//             placeholder="Enter password"
//             value={formState.password}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="mb-4">
//           <button
//             className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition duration-200"
//             disabled={loading}
//             type="submit"
//           >
//             {loading ? "Loading..." : "Submit"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }


export default function Login() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
      <img className='w-full h-full object-cover' src={logo} alt=''/>
      </div>

      <div className='bg-[#0c192c]-800 flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-gray-800 p-8 px-8 rounded-lg'>
          <h2 className='text-4x1 dark:text-white font-extrabold text-center'>Log In</h2>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>Email</label>
            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:ng-gray-800 fcous:outline-none'
            type='email'/>
          </div>
          {/* <div className='flex flex-col text-gray-400 py-2'>
            <label>Username</label>
            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:ng-gray-800 fcous:outline-none'
            type='text'/>
          </div> */}
          <div className='flex flex-col text-gray-400 py-2'>
            <label>Password</label>
            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:ng-gray-800 fcous:outline-none'
            type='password'/>
          </div>
          <div className='flexbox jusitfy-between text-gray-400 py-2 '>
            <p className='flex items-center'><input className='mr-2' type='checkbox'/> Remember Me</p>
            <p>Forgot Password</p>
          </div>
          <button className='w-full my-5 py-2 bg-red-500'>Sign In</button>
        </form>
      </div>

    </div>
  )
}

