import {checkAuth} from "@/_utils/checkAuth";
import MenuStats from "@/_components/MenuStats/MenuStats";
import {ReactNode} from "react";

export default function Stats({children}: Readonly<{ children: ReactNode }>) {
    checkAuth()
    return (<>
            <MenuStats/>
            <div style={{margin:'30px'}}>
                {children}
            </div>

        </>
    )
}