import './styles.css'
import React, {useContext} from 'react'
import {GlobalContext} from '../providers/globalProps'

export function Views(){
    
    const { globalProps } = useContext(GlobalContext);
    return (
      <div
        className={`views-container ${
          globalProps.isNavbarOpen
            
          ? 
          "views-container-navbar-closed"
          : 
          "views-container-navbar-opened"
        }`}
      >
        Views over here!
      </div>
    );
}