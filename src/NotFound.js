import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Lo Sentimos</h2>
            <p>Esa página no puede ser encontrada</p>
            <Link to="/"> Regresar a la página principal  </Link>
        </div>
    )
}

export default NotFound
