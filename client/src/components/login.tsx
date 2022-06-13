import React from "react";

export default function Login() {
  return (
    <div className="rounded-lg bg-white p-2 shadow-md mt-2 border">
      <div className="text-center font-bold uppercase my-2 mb-5">Login</div>

      <div className="h-14 w-[75%] bg-white shadow-md border rounded-md mx-auto my-2 flex items-center justify-center cursor-pointer">
        <div>Continue with Facebook</div>
      </div>

      <div className="h-14 w-[75%] bg-white shadow-md border rounded-md mx-auto my-2 flex items-center justify-center cursor-pointer">
        <div>Continue with Facebook</div>
      </div>

      <div className="h-14 w-[75%] bg-white shadow-md border rounded-md mx-auto my-2 flex items-center justify-center cursor-pointer">
        <div>Continue with Facebook</div>
      </div>

      <form className="text-center m-4 border">
        <div className="form-group my-3">
          <label htmlFor="email" className="block font-semibold">
            Email Address :
          </label>
          <input name="email" id="email" className="border" />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="password" className="block font-semibold">
            Password :
          </label>
          <input
            name="password"
            id="password"
            type="password"
            className="border"
          />
        </div>

        <button className="bg-green-800 text-white py-2 px-5 rounded-md uppercase mb-2">
          Log in
        </button>
      </form>
    </div>
  );
}
