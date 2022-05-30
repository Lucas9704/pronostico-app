import CurrentDay from "./CurrentDay";
import NextDay from "./NextDay";
import { useFetch } from "../../../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import { CityProvider } from "../../../contexts/CityContext";
import "./PrincipalCity.scss";


function PrincipalCity() {
	const [searchParams] = useSearchParams();
	const searchValue = searchParams.get("search"); //Obtenemos el valor de la busqueda
	const { data } = useFetch({
		url: `data/2.5/forecast?q=${searchValue}&lang=es&appid=26db772dcfe2bb3fe3cfea6779059234&units=metric`,
	}); // useFetch({}) es una función que retorna la data de la api
	if (!data) {
		return <div>Loading...</div>;
	} // si no hay data, retorna un div con el texto Loading...

	return (
		<CityProvider value={{data}}> {/*proveedor del contexto para la data obtenida*/}
			<h1>{data.city.name}</h1>
			<section className="CurrentDay"> 
				<CurrentDay /> {/*Para este componente es conveniente pasar por props la data obtenida*/}
			</section>
			<section className="NextDay">
				<NextDay /> {/*Pero para este voy a tener mas niveles en el arbol de componentes aumentando el prop drilling*/}
			</section>
		</CityProvider>
	);
}

export default PrincipalCity;
