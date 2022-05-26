import NDay from "./NDay";
import "./NextDay.scss";

function NextDay() {
    return (
        <>
            <section className="Day">
                <NDay/>1
            </section>
            <section className="Day">
                <NDay/>2
            </section>
            <section className="Day">
                <NDay/>3
            </section>
            <section className="Day">
                <NDay/>4
            </section>
        </>
    )
}

export default NextDay;