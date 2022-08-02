import React from "react";

const Signin = ({ setSignInActive }: any) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-10">
      <div
        onClick={() => {
          setSignInActive(false);
        }}
        className="bg absolute top-0 left-0 w-full h-full bg-black opacity-70 -z-10"
      />
      <div className="modal absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-4/5 h-96 p-4 bg-white">
        <h2 className="text-xl">Log In</h2>
      </div>
    </div>
  );
};

export default Signin;
