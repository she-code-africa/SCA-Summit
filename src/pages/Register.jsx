import React from "react";
import NotFound404 from "../components/404";

const Register = () => {
  return (
    <NotFound404>
      <h2 className="text-center text-3xl sm:text-4xl lg:text-56px font-bold leading-none">
        Sorry, we are Fully <br></br>
      </h2>
      <h2 className="text-center text-3xl sm:text-4xl lg:text-56px font-bold flex mt-2 justify-center items-center">
        B
        <span className="mt-1 ml-0.5 md:ml-1 md:mt-2 flex items-center gap-px text-2xl sm:text-4xl">
          {" "}
          <span className="text-primary-pink rotate-84 inline-flex mx-0.5 lg:mx-1">
            0
          </span>
          <span className="text-primary-pink rotate-84 inline-flex mx-0.5">
            0
          </span>
        </span>
        ked
      </h2>
      <p className="my-3 text-center">
        Registration for SCA Summit 2023 is now closed! Stay connected with us
        on our website and social media pages for updates if we decide to extend
        the registration.
      </p>
    </NotFound404>
  );
};

export default Register;
