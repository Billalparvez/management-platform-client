import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <Helmet>
                <title>Management || Error Page</title>
            </Helmet>
            <h1>Opps</h1>
            <h1>Sorry</h1>
            <Link to='/'> <button className="btn btn-info"> Go To Home</button></Link>
        </div>
    );
};

export default ErrorPage;