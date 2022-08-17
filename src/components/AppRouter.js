import React from "react";
import { useContext } from "react";
import {Route,Routes} from  'react-router-dom';
import {AuthContext} from "../context/index.js"
import { privateRoutes, publicRoutes } from "../router/routes";
import Loader from "./UI/loader/Loader.js";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if(isLoading) {
        return <Loader/>
    }
    return (
        isAuth
            ? <Routes>
            
               {privateRoutes.map(route => 
                  <Route path={route.path} element={route.element} key={route.path}/>
               )}
           
             </Routes>
            : <Routes>
           
           
               {publicRoutes.map(route => 
                  <Route path={route.path} element={route.element} key={route.path}/>
                )}
            </Routes>
        
    )
}

export default AppRouter;