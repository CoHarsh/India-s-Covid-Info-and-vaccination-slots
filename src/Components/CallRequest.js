import React, { Component } from 'react'
import DistrictList from './DistrictList';
import StateList from './StateList';

export default class CallRequest extends Component {

    districts = [] 
    states = []
    constructor(){
        super();
        this.state = {
          districts:this.districts,
          loading:false,
          idstate:"",
          states:this.states,
          namestate:"",
          statename:"state"
        }
    }

    async componentDidMount() {
        let urlstate = `https://cdn-api.co-vin.in/api/v2/admin/location/states`
        let statedata = await fetch(urlstate)
        let parsestatedata = await statedata.json();
        this.setState({states:parsestatedata.states}) 
    }
    
    
    async fetchdata(e){
        
        let url = `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${this.state.idstate}`
        let data = await fetch(url)
        let parsedata = await data.json()
        this.setState({districts:parsedata.districts})
        this.state.states.map((element)=>{
            if(element.state_id == this.state.idstate){
               this.setState({statename:element.state_name}) 
            }
        })
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
                <input className="form-control me-2" type="text" aria-label="Search" placeholder="Enter Statecode" onChange={this.handleOnchange} id="idnumberget" value={this.state.idstate}/>
                <button type="button" className="btn btn-dark" onClick={this.handleOnclick}>Search</button>
            </form>
            {this.idnumber = this.props.stateid}
            <div className="container my-3 Bold Center" id="center bold">List of Districts of {this.state.statename}</div> 
            <div  id="center">
            <div className="container" id="widthset">
            <h4 style={{"color":"rgb(0,0,105)"}}>Type Respective numbers</h4>
            <div  className="container" id="states">
            {this.state.states.map((element)=>{
                return(
                    <StateList number={element.state_id} stateName = {element.state_name} key={element.state_id}/>
                )
            })}
            </div>
            </div>
            <div className="container">
            {this.state.districts.map((element,counting = 0) =>{
                   counting = counting + 1;
                   return (
                       <DistrictList nameDis={element.district_name} idDis={element.district_id} keyid = {counting} key = {element.district_id}/>
                   )
            })}
            </div>
            </div>
            </>
        )
    }
}
