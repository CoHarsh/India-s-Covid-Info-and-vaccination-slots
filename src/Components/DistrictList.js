import React from 'react'
import '../Style.css'

export default function DistrictList(props) {
    return (
        <>
         <table className="table-secondary container my-3" >
        <tbody id="tablealign">
            <th scope="row">{props.keyid}</th>
            <td className="Bold Center">{props.nameDis}</td>
        </tbody>
        </table> 
        </>
    )
}
