import "./Home.scss";
import OthersCity from "./OthersCity";
import PrincipalCity from "./PrincipalCity";

function Home() {
    return (
        <section className="Home">
            <section className="PrincipalCity">
                <PrincipalCity />
            </section>
            <section className="Cities">
                <OthersCity />
            </section>
        </section>
    )
}

export default Home;