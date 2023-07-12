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

export default function Login() {
  const { isLoggedIn, login, loading, error } = useAuth();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const location = useLocation();

  useEffect(() => {
    if (error) {
      // TODO: replace window alert with custom alert
      alert(error);
    }
  }, [error]);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    login(formState);
  };

  if (isLoggedIn) {
    // navigate to page user was redirected from or the home page.
    const from = location.state?.from?.pathname || "/protectedCluster";
    return <Navigate to={from} replace />;
  }

  return (
    <div className="max-w-xlg mx-auto">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <hr className="mb-4" />
      <form onSubmit={handleSubmit}>
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
            value={formState.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 font-semibold">
            Password
          </label>
          <input
            className="w-full px-4 py-2 rounded border-gray-300 focus:border-indigo-500"
            disabled={loading}
            id="password"
            type="password"
            name="password"
            placeholder="Enter password"
            value={formState.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <button
            className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition duration-200"
            disabled={loading}
            type="submit"
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

