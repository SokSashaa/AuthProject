import {FC} from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Form from "./Components/Form/Form";

const App:FC =()=>{
    return(
        <>
            <Header></Header>
            <Form></Form>
            <Footer></Footer>
        </>
    )
}
export default App