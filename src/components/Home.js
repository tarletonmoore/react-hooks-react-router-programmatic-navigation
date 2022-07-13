import React from "react";
import { Redirect } from "react-router-dom";

// function Home({ isSignedIn }) {
//   // if the user isn't signed in, redirect them to the login page
//   if (!isSignedIn) return <Redirect to="/login" />;

//   // otherwise, return the home page
//   return (
//     <div>
//       <h1>Home!</h1>
//     </div>
//   );
// }


function Home({ isLoggedIn }) {
  if (!isLoggedIn) return <Redirect to="/login" />;

  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

export default Home;
