import React from "react";
import './sign-up.css'
const SignUp = () => {
  return (
    <div className="w-screen h-screen bg-[#57D38C] flex justify-center items-center">
      <div className="image-bg max-w-[800px]">
        <div className="flex flex-col items-center bg-white rounded">
            <h3>Register new account</h3>
            <p>Access to the most powerfull tool in the entire design and web industry.</p>
            <form>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <button>Submit</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
