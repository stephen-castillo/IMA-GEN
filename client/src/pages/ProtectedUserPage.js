// import React from 'react'

// const ProtectedUserPage = () => {
//   return (
//     <div>ProtectedUserPage</div>
//   )
// }

// export default ProtectedUserPage


import { useQuery } from "@apollo/client";
import { useAuth } from "../util/auth";
import { ME } from "../util/queries";

import React, { useEffect, useState } from 'react';
import { Card, FormField } from '../components';

const renderDate = (date) =>
  `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;



  export default function ProtectedUserPage() {
    const { user } = useAuth();
    const { data } = useQuery(ME, {
      fetchPolicy: "network-only",
    });
    console.log(user);
  
    const [loading, setLoading] = useState(false);
    const [allPosts, setAllPosts] = useState(null);

    return (
      <section className="max-w-7xl mx-auto">
        <div>
        <h1>Welcome {user.username}!</h1>
        <p>
          Last Login:{" "}
          {loading
            ? "Loading..."
            : data && renderDate(new Date(data.me.lastLogin))}
        </p>
        </div>
      </section>
    )
  }
  


