import { useRef, useState } from "react";
import CardCity from "./CardCity";
import "./NCity.scss";

function NCity() {
    const searchRef = useRef("");
    const [citySearch, setCitySearch] = useState(false);
    const [city, setCity] = useState("");

    function handleSearchClick() {
        if (searchRef !== "") {
            setCitySearch(true);
            setCity(searchRef.current.value);
        }
	}

	function handleKeyDown(event) {
		if (event.key === "Enter") {
			handleSearchClick();
		}
	}


    return (
        <div className="NCity">
            {!citySearch ?
            <div className="InputSearch">
                <input id="search" name="search" ref={searchRef} placeholder="Search city" className="searchCity" onKeyDown={handleKeyDown} />
                <button className="searchButton" onClick={handleSearchClick}>Search</button>
            </div>
            : <CardCity city={city} />}
        </div>
    )
}

export default NCity;