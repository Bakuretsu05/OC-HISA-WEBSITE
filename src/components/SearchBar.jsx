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
        className="flex relative h-12 w-[50%] bg-gray-100 rounded-full bg-opacity-35 items-center"
      >
        <button type="submit" className="ml-3">
          <IoSearchCircleOutline
            className="text-transparent-layer-bright text-3xl"
            type="submit"
          />
        </button>

        <input
          type="text"
          name="textInput"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="ml-4 text-2xl bg-transparent text-white outline-none hover:outline-none focus:outline-none"
        />
      </form>
    </>
  );
};

export default SearchBar;
