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

import React, { useEffect, useState } from "react";
import { Card, FormField, Loader } from "../components";

const renderDate = (date) =>
  `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }

  return (
    <h2 className="mt-5 font-bold text-[#4a648c] text-lg uppercase">{title}</h2>
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
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://dalle-arbb.onrender.com/api/v1/post",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        setAllPosts(result.data.reverse());
      }
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = allPosts.filter(
          (item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase()) ||
            item.prompt.toLowerCase().includes(searchText.toLowerCase())
        );
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="mt-8 ml-4 text-[white] text-[18px] max-w-[200px]">
          Welcome {user.username}!
        </h1>
        <p className="mt-2 ml-4 text-[#666f75] text-[10px] max-w-[500px]">
          Last Login:{" "}
          {loading
            ? "Loading..."
            : data && renderDate(new Date(data.me.lastLogin))}
        </p>
        <h1 className="mt-6 ml-40 font-extrabold text-[#a8eb12] text-[40px] max-w-[600px]">
          IMA-GEN
        </h1>
        <p className="mt-2 text-[#666f75] text-[14px] max-w-[600px]">
          A DALL-E AI Visual Odyssey: Embark on a visual journey through a
          captivating series of AI-generated images, crafted by DALL-E's
          imaginative algorithms.
        </p>
      </div>

      <div className="mt-16">
        <FormField
          labelName="Search posts"
          type="text"
          name="text"
          placeholder="Search something..."
          value={searchText}
          handleChange={handleSearchChange}
        />
      </div>
      <div className="mt-10">
        {loadingb ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium text-[#1535d4] text-xl mt-5 mb-3">
                Showing Resuls for{" "}
                <span className="text-[#1535d4]">{searchText}</span>:
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {searchText ? (
                <RenderCards data={searchedResults} title="No Search Results Found" />
              ) : (
                <RenderCards data={allPosts} title="No Posted AI Images Yet" />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
