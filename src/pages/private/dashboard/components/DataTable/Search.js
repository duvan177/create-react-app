/**
 * Author: Orlando Tamayo Llanos
 * Fecha: 9 diciembre 2020
 * Descripcion: Componente Search encargado de buscar un dato en un arreglo de datos ingresado por props
 * 
 */
import React, { useState } from "react";

const SearchComponent = ({ onSearch, nombreCampo }) => {
    
    const [search, setSearch] = useState("");
    
    const onInputChange = value => {
           setSearch(value);
           onSearch(value);
    };

    return (
        <input 
            className   = "form-control form-control-sm" 
            type        = "text" 
            placeholder = {nombreCampo} 
            value       = {search}
            onChange    = {e => onInputChange(e.target.value)}
        />
    );
}

export default SearchComponent;