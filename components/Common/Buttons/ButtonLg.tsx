import { useRouter } from "next/router";

const ButtonLg = ({ buttonType }: any) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/player");
  };

  if (buttonType === "play")
    return (
      <button
        onClick={() => {
          handleClick();
        }}
        className="w-14 h-14 md:w-auto md:px-10 bg-green-500 text-white text-xl mr-3 flex justify-center items-center"
      >
        <svg
          className="md:mr-2"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"></path>
        </svg>
        <span className="hidden md:block">Play video</span>
      </button>
    );

  if (buttonType === "follow")
    return (
      <button className="px-16 h-14 border-solid border-2 border-green-500 text-green-500 text-lg font-semibold mr-3">
        Follow
      </button>
    );
  else return null;
};

export default ButtonLg;
