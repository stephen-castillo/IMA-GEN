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
import { Card, FormField, Loader } from '../components';

  const renderDate = (date) =>
  `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return (
      data.map((post) => <Card key={post._id} {...post} />)
    );
  }

  return (
    <h2 className="mt-5 font-bold text-[#d4ba15] text-xl uppercase">{title}</h2>
  );
};



  export default function ProtectedUserPage() {
    const { user } = useAuth();
    const { data, loading } = useQuery(ME, {
      fetchPolicy: "network-only",
    });
    console.log(user);

    const [loadingb, setLoading] = useState(false);
    const [allPosts, setAllPosts] = useState(null);
    const [searchText, setSearchText] = useState('');

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
          <p className="mt-2 text-[#666f75] text-[14px] max-w-[500px]">
            DALL-E AI Visual Odyssey: Embark on a visual journey through a
            captivating series of AI-generated images, crafted by DALL-E's
            imaginative algorithms.
          </p>
        </div>

        <div className="mt-16">
          <FormField />
        </div>
        <div className="mt-10">
        {loadingb ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium text-[#1535d4] text-xl mb-3">
                Showing Resuls for <span className="text-[#1535d4]">{searchText}</span>:
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {searchText ? (
                <RenderCards
                  data={[]}
                  title="No Search Results Found"
                />
              ) : (
                <RenderCards
                  data={[]}
                  title="No Posted AI Images Yet"
                />
              )}
            </div>
          </>
        )}
      </div>
      </section>
    );
  }
  


