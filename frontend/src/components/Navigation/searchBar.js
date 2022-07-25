import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchUser } from "../../store/users";
import { NavLink } from "react-router-dom"

function SearchBar() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const results = useSelector((state) => Object.values(state.users))


  const show = () => {
    document.querySelector(".results").classList.remove("hidden");
  };

  const hide = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      document.querySelector(".results").classList.add("hidden");
    }
  };

  const reset = () => {
    document.querySelector(".results").classList.add("hidden");
    document.querySelector(".searchCard").classList.add("hidden");
    setInput("");
  };

  useEffect(() => {
    if (input.length > 0) {
      dispatch(searchUser(input));
    }
  }, [dispatch, input]);

  return (
    <div>
      <div className="searchDiv">
        <div className="searchContainer" onBlur={(e) => hide(e)}>
          <input
            className="searchBar"
            value={input}
            placeholder="Search"
            onFocus={() => show()}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="results hidden">
            {results?.length > 0 && input.length > 0 ? (
              Object.values(results).map((user) => (
                  <div className="searchCard" key={user.id}>
                <NavLink
                  onClick={reset}
                  to={`/users/${user.id}`}
                >
                  <div className="searchName">{user.username}</div>
                </NavLink>
                </div>
              ))
            ) : (
              <div className="noResults">No results found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}


export default SearchBar
