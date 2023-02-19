import React, { useEffect } from "react";
import Link from "next/link";

function Login({ setLoggedIn }) {
  return (
    <div>
      <div class="bg-gray-100 h-screen flex items-center justify-center">
        <div class="bg-white rounded flex space-between shadow-md  max-w-4xl">
          <section class="py-8 px-12">
            <header class="mt-16 mb-4">
              <h1 class="text-2xl font-bold mb-2">Login to SHO</h1>
              <h1 class="text-blue-600 font-normal font-Roboto text-4xl">
                Complaint Management System
              </h1>
            </header>
            <form>
              <label for="">Username</label>
              <input
                type="text"
                class="border border-gray-200 rounded bg-gray-100  p-2 my-2 w-full"
                placeholder="your-email@gmail.com"
              />

              <label for="password">Password</label>
              <input
                type="password"
                class="border border-gray-200 rounded bg-gray-100  p-2 my-2 w-full"
                placeholder="Password"
              />

              <div>
                <input type="checkbox" class="mr-2" id="remember" />
                <label for="remember" class="text-sm text-gray-500 font-normal">
                  Remember me
                </label>
                <Link href={""} class="text-sm  float-right text-gray-500">
                  Forgot Password?
                </Link>
              </div>

              <button class="bg-orange-500 hover:bg-orange-600 text-white my-2 py-4 px-8 rounded w-full" onClick={()=>setLoggedIn(true)}>
                Login
              </button>
            </form>
          </section>
          <section>
            <img
              src="/login-image.png"
              class="max-w-md rounded"
              alt="Haryana CMS"
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Login;
