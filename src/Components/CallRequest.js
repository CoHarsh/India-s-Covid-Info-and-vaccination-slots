import React, { Component } from 'react'
import DistrictList from './DistrictList';

export default class CallRequest extends Component {

    districts = [] 
    constructor(){
        super();
        this.state = {
          districts:this.districts,
          loading:false,
          idstate:""
        }
    }

    async fetchdata(e){
        let url = `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${this.state.idstate}`
        console.log(url)
        let data = await fetch(url)
        let parsedata = await data.json()
        this.setState({districts:parsedata.districts})
    }
    handleOnclick = async(e)=>{
        this.fetchdata(e)
    }

    handleOnchange = (e)=>{
        this.setState({idstate:e.target.value})
    }


    render() {
        return (
            <>
             <form className="d-flex container" id="widthcontrol">
                <input className="form-control me-2" type="search"  aria-label="Search" placeholder="Enter Statecode" onChange={this.handleOnchange} id="idnumberget" value={this.state.idstate}/>
                <button type="button" className="btn btn-dark" onClick={this.handleOnclick}>Search</button>
            </form>
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
