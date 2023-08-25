import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function CountryDetails() {
  const [details, setDetails] = useState(null);

  const params = useParams();

  useEffect(() => {
    getData();
  }, [params.countryId]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries/${params.countryId}`
      );
      console.log(response);
      setDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (details === null) {
    return <h3>... buscando</h3>;
  }

  return (
    <div>
      <h1>{details.name.official}</h1>
      <h3>Capital: {details.capital}</h3>
      <h3>Área: {details.area}</h3>
      <h3>Borders:</h3>
      <ul>
        {details.borders.map((borderCountry) => (
          <li key={borderCountry}>
            <Link to={`/${borderCountry}`}>
              {borderCountryCode}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryDetails;





