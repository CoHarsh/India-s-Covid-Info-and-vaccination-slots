import React, { Component } from 'react'
import DistrictList from './DistrictList';

export default class CallRequest extends Component {

    districts = [
        {
        district_id: 154,
        district_name: "Ahmedabad"
        },
        {
        district_id: 770,
        district_name: "Ahmedabad Corporation"
        },
        {
        district_id: 174,
        district_name: "Amreli"
        },
        {
        district_id: 179,
        district_name: "Anand"
        },
        {
        district_id: 158,
        district_name: "Aravalli"
        }
    ]

    
    
    constructor(){
        super();
        this.state = {
          districts:this.districts,
          loading:false
        }
    }

    idnumber = 11
    
    async componentDidMount() {
        console.log(this.idnumber)
        console.log("cdm")
        let url = `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${this.idnumber}`
        let data = await fetch(url)
        let parsedata = await data.json()
        console.log(parsedata.districts);
        this.setState({districts:parsedata.districts})
        console.log(this.idnumber)
    }
    


    render(props) {
        return (
            <>
            {this.idnumber = this.props.stateid}
            <div className="container my-3">List of Districs!</div> 
            <table className="table container my-3">
            <thead>
            <tr className="aligncenter">
            <th scope="col">No.</th>
            <th scope="col">District Name</th>
            <th scope="col">District Id</th>
            </tr>
            </thead>
            </table>
               {this.state.districts.map((element,counting = 0) =>{
                   counting = counting + 1;
                   return (
                       <DistrictList nameDis={element.district_name} idDis={element.district_id} keyid = {counting} key = {element.district_id}/>
                   )
               })} 
            </>
        )
    }
}
