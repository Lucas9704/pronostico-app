import "./InputSearch.scss";

function InputSearch( { searchRef, setCitySearch } ) {

	function handleSearchClick() {
        if (searchRef !== "") {
            setCitySearch(true);
        }
	}

	function handleKeyDown(event) {
		if (event.key === "Enter") {
			handleSearchClick();
		}
	}

    return (
        <div className="InputSearch">
            <input id="search" name="search" ref={searchRef} placeholder="Search city" className="searchCity" onKeyDown={handleKeyDown} />
            <button className="searchButton" onClick={handleSearchClick}>Search</button>
        </div>
    )
}

export default InputSearch;