import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [allCountries, setAllCountries] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        console.log(response);
        setAllCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (allCountries === null) {
    return <h3>...buscando</h3>;
  }

  return (
    <div>
      <h1>WikiCountries: Your Guide to the World</h1>
      {allCountries.map((eachCountry) => {
        return (
          <li>
            <Link
              to={`/${eachCountry.alpha3Code}`}
              key={eachCountry._id}
              className="lista-paises"
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`}
              ></img>
              {eachCountry.name.official}
            </Link>
          </li>
        );
      })}
    </div>
  );
}

export default HomePage;
