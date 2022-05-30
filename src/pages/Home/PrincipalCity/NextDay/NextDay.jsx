import { useContext } from "react";
import { CityContext } from "../../../../contexts/CityContext";
import NDay from "./NDay";
import "./NextDay.scss";

function NextDay() {
    const { data } = useContext(CityContext); // useContext() es una función que retorna la data de la api

    return (
        <>
            {data.list.map((item, index) => {
                if (index === 0) {
                    return null;
                } else if ((index % 8) === 0) {
                    return (
                        <section className="Day">
                            <NDay data={item} />
                        </section>
                    )
                }
            })}
        </>
    )
}

export default NextDay;