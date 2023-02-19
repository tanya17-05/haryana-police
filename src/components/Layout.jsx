import Head from "next/head";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function Layout({ children }) {

  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <>
    <Head>
      <title>CMS | Harayna Police</title>
      <link rel="icon" href="/haryana_police_logo.png"  type="image/x-icon"/>
    </Head>
      {loggedIn===true ? <div className="flex">
        <Sidebar loggedIn={loggedIn}  setLoggedIn={setLoggedIn} />
        <main className="w-full ml-[253px]">
          <Topbar />
          <div className="mt-[55px]">{children}</div>
        </main>
      </div> : <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
    </>
  );
}

export default Layout;
