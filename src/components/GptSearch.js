import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div
        className="absolute"
        style={{ width: "100vw", height: "100vh", overflow: "hidden", zIndex: "-2" }}
      >
        <img
          className="h-screen object-cover md:h-auto w-full"
          src={BG_URL}
          alt="background-img"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};
export default GPTSearch;
