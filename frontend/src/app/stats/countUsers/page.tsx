import {NextPage} from "next";
import * as Api from "@/_api";
import CountUsers from "@/_components/stats/CountUsers";


const CountPage: NextPage = () => {
    return (
        <>
            <CountUsers/>
        </>

    )
}

export default CountPage