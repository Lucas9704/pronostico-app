import CurrentDay from "./CurrentDay";
import NextDay from "./NextDay";
import "./PrincipalCity.scss";

function PrincipalCity() {
    return (
        <>
            <section className="CurrentDay">
                <CurrentDay />
            </section>
            <section className="NextDay">
                <NextDay />
            </section>
        </>
    )
}

export default PrincipalCity;