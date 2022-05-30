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
				{citySearch ? (
					<PrincipalCity />
				) : (
					<div className="searchContainer">
						<h2>Enter the main city you want to search🔎</h2>
						<div>
							<input
								id="search"
								name="search"
								ref={searchRef}
								placeholder="Search city"
								className="searchCity"
								onKeyDown={handleKeyDown}
							/>
							<button className="searchButton" onClick={handleSearchClick}>
								Search
							</button>
						</div>
					</div>
				)}
			</section>
			<section className="Others">
				<div className="OthersTitle">
					<h1 className="Title">Others Cities</h1>
				</div>
				<section className="Cities">
					<OthersCity />
				</section>
			</section>
		</section>
	);
}

export default Home;
