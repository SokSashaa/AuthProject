import {FC, useState} from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Form from "./Components/Form/Form";
import LogIn from "./Components/LogIn/LogIn";

const App:FC =()=>{

    const [form,setForm] = useState(false)

    return(
        <>
            <Header setSelectedForm={setForm} ></Header>
            { form&& <Form></Form>}
            {!form&&<LogIn></LogIn>}
            <Footer></Footer>
        </>
    )
}
export default App