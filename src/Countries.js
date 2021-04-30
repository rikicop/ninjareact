import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            axios
                .get("https://restcountries.eu/rest/v2/all")
                .then((res) => {
                    setCountries(res.data)
                    setLoading(false)
                })
                .catch((err) => {
                    console.log(err)
                });
        }, 3000);
    }, []);

    return (
        <Fragment>
            <h1>Lista de Paises</h1>
            {loading && <p> Loading... </p>}
            { !loading && (
                <>

                    {countries.map((country) => (
                        <div key={country.name}>
                            {country.name} - {country.capital}
                        </div>
                    ))}
                </>
            )}
        </Fragment>
    )
}

export default Countries



