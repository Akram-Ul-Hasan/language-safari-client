import { useContext } from "react";
import useAuth from "./useAuth";
import { AuthContext } from "../Providers/AuthProvider";

const useRole = () =>{
    fetch(`https://language-safari-server-jade.vercel.app/users/role/${user?.email}`)
    .then(res => res.json())
    .then(data=>{
        console.log(data);
    })
    return role;
}
export default useRole;