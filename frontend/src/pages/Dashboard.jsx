import { Appbar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export function Dashboard(){
    return <div>
        <div className="px-4 py-2"><Appbar/></div>       
        <div className="px-4 py-4 mx-4"><Balance/></div>
        <div className="pd-4 py-4 mx-8"><Users/></div>
    </div>
}