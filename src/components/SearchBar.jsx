// not sure what the searchbar does, so the data hierarchy will not be established for now
// this component is visual only for now
import { IoSearchCircleOutline } from "react-icons/io5";
import { useState } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <>
      <form
        onSubmit={submitForm}
        className="flex relative h-[64px] w-6/12 bg-gray-100 rounded-full bg-opacity-35"
      >
        <button type="submit" className="absolute top-2 left-2">
          <IoSearchCircleOutline
            className="text-gray-200 text-5xl"
            type="submit"
          />
        </button>

        <input
          type="text"
          name="textInput"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="indent-16 text-2xl bg-transparent text-white outline-none hover:outline-none focus:outline-none"
        />
      </form>
    </>
  );
};

export default SearchBar;
