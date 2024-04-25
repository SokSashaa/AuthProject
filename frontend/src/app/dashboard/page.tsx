import {NextPage} from "next";
import {checkAuth} from "@/_utils/checkAuth";

const DashboardPage: NextPage = () => {
    checkAuth()
    return (<>
        <h1>Main</h1>
    </>)


}


export default DashboardPage



