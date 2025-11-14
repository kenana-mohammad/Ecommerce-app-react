import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
function SearchBar({placeholder,onSearch}) {
       const [input, setInput] = useState("");
  
  const debouncedValue = useDebounce(input, 300);

  useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue, onSearch]);



  return ( 
    <div className="search-bar mx-sm=auto   search">
      <input
        type="text"
        placeholder={placeholder}
        value={input}
      onChange={(e) => setInput(e.target.value)}
        className="w-full p-2 border rounded"
      />
    </div>

)
}

export default SearchBar







