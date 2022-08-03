const ButtonSm = ({ buttonType, setSignInActive }: any) => {
  if (buttonType === "signIn")
    return (
      <button
        onClick={() => {
          setSignInActive(true);
        }}
        className="px-6 md:px-8 py-1 md:py-2 border-solid border-2 border-green-500 text-green-500 mr-3 md:mr-4"
      >
        Log In
      </button>
    );

  if (buttonType === "signUp")
    return (
      <button className="px-6 md:px-8 py-1 md:py-2  border-solid border-2 border-green-500 bg-green-500 text-white mr-3 md:mr-6 hidden sm:block">
        Sign Up
      </button>
    );
  else return null;
};

export default ButtonSm;
