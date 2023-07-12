// import { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../util/auth";
// import '../styles/SignUp.css';

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
//   username: "",
//   email: "",
//   password: "",
// };

// export default function SignUp() {
//   const { isLoggedIn, signup, loading, error } = useAuth();
//   const [formState, setFormState] = useState(initialFormState);

//   useEffect(() => {
//     if (error) {
//       // TODO: replace window alert with custom alert.
//       alert(error);
//     }
//   }, [error]);

//   const handleInputChange = (evt) => {
//     const { name, value } = evt.target;
//     setFormState((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const handleSubmit = async (evt) => {
//     evt.preventDefault();
//     signup(formState);
//   };

//   if (isLoggedIn) {
//     // navigate to the home page
//     return <Navigate to="/" replace />
//   }
//   return (
//     <div>
//       <h1>Sign Up</h1>
//       <hr />
//       <form onSubmit={handleSubmit}>
//         <div style={styles.formControl}>
//           <label htmlFor="username" style={styles.label}>
//             Username
//           </label>
//           <input
//             className="text-[black]"
//             autoFocus
//             disabled={loading}
//             id="username"
//             type="text"
//             placeholder="Enter username"
//             name="username"
//             value={formState.username.value}
//             onChange={handleInputChange}
//           />
//         </div>
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
import { Navigate } from "react-router-dom";
import { useAuth } from "../util/auth";
import '../styles/SignUp.css';


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
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
      <hr className="mb-4" />
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2 font-semibold">
            Username
          </label>
          <input
            className="w-full px-4 py-2 rounded border-gray-300 focus:border-indigo-500"
            autoFocus
            disabled={loading}
            id="username"
            type="text"
            placeholder="Enter username"
            name="username"
            value={formState.username.value}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-semibold">
            Email
          </label>
          <input
            className="w-full px-4 py-2 rounded border-gray-300 focus:border-indigo-500"
            disabled={loading}
            id="email"
            type="email"
            name="email"
            placeholder="Enter email"
            value={formState.email.value}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="new-password" className="block mb-2 font-semibold">
            Password
          </label>
          <input
            className="w-full px-4 py-2 rounded border-gray-300 focus:border-indigo-500"
            disabled={loading}
            id="new-password"
            type="password"
            name="password"
            placeholder="Enter password"
            value={formState.password.value}
            onChange={handleInputChange}
          />
        </div>
        <div style={styles.formControl}>
          <button className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition duration-200" disabled={loading} type="submit">
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  )
}