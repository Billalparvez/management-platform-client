import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle";

const ToDo = () => {
    return (
        <div className="mt-20">
            <Helmet>
                <title> Management ||  To-Do </title>
            </Helmet>
            <SectionTitle
                headings={'todo'}
                subHeading={'ToDo JOb List'}>
            </SectionTitle>
            <div className="px-10 mt-10">
                <h1>job DB</h1>
            </div>
        </div>
    );
};

export default ToDo;