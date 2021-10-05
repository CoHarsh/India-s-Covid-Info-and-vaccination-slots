import React from 'react'
import '../Style.css'

export default function DistrictList(props) {
    return (
        <>
         <table className="table container my-3">
        <tbody>
            <tr  className="aligncenter">
            <th scope="row">{props.keyid}</th>
            <td>{props.nameDis}</td>
            <td>{props.idDis}</td>
            </tr>
            
        </tbody>
        </table> 
        <hr/>  
        </>
    )
}
