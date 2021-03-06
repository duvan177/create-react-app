/**
 * Author: Orlando Tamayo Llanos
 * Fecha: 9 diciembre 2020
 * Descripcion: Componente Head encargado de renderizar la cabecera de la tabla dinamica, recibe la data que se requiere pindar por props   
 * 
 */
import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeadComponent = ({ headers, onSorting }) => {

    const [sortingField, setSortingField] = useState("");
    const [sortingOrder, setSortingOrder] = useState("asc");

    const onSortingChange = field => {
        const order = field === sortingField && sortingOrder === "asc" ? "desc" : "asc";

        setSortingField(field);
        setSortingOrder(order);
        onSorting(field, order);
    };
     
    return (
        <thead className="thead-dark">
            <tr>
                {headers.map(({name, field, sortable})=>(
                        <th
                            key       = {name}
                            onClick   = {()=>sortable ? onSortingChange(field) : null}
                            className = "text-center"
                        >
                        {name}

                        {sortingField && sortingField === field && (
                            <FontAwesomeIcon
                                icon = {sortingOrder === "asc" ? "arrow-down" : "arrow-up"}
                            />
                            )}
                        </th>
                ))}
            </tr>
        </thead>
    );
}

export default HeadComponent;