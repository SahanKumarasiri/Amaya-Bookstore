
import {Redirect , Switch} from "react-router-dom";

const PrivateRoute = ({component : Component , ...rest})=>{
    return(
        <Switch 
            {...rest}
            render = {(props) =>
                localStorage.getItem("authToken") ? (
                    <Component {...props} />
                ) : (
                    <Redirect to = "/login" />
                )
            }
        />
    )
}

export default PrivateRoute;