import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
import OthersCity from "./OthersCity";
import PrincipalCity from "./PrincipalCity";


function Home() {
	const searchRef = useRef();
    const navigate = useNavigate();
    const [citySearch, setCitySearch] = useState(false);

	function handleSearchClick() {
        navigate(`/city?search=${searchRef.current.value}`);
        if (searchRef.current.value !== "") {
            setCitySearch(true);
        }
	}

	function handleKeyDown(event) {
		if (event.key === "Enter") {
			handleSearchClick();
		}
	}

	return (
		<section className="Home">
			<section className="PrincipalCity">
				{citySearch ? <PrincipalCity />
                : <div className="searchContainer">
                    <input id="search" name="search" ref={searchRef} placeholder="Buscar Ciudad" className="searchCity" onKeyDown={handleKeyDown} />
                    <button className="searchButton" onClick={handleSearchClick}>Buscar</button>
                </div>
                }
			</section>
			<section className="Cities">
				<OthersCity />
			</section>
		</section>
	);
}

export default Home;
