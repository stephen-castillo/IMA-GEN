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
          <h1 className="font-extrabold text-[#1535d4] text-[32px]">
            AI Image Gallery
          </h1>
          <p className="mt-2 text-[#1535d4] text-[16px] max-w-[500px]">
            DALL-E AI Visual Odyssey: Embark on a visual journey through a
            captivating series of AI-generated images, crafted by DALL-E's
            imaginative algorithms.
          </p>
        </div>

        <div className="mt-16">
          <FormField />
        </div>
      </section>
    );
  }
  


