import React  ,{Component} from 'react'
import './Delete.css'

class Delete extends Component{
  state ={
    LastName:"",
    Birth:"",
    Phone:""
  }
  onChange1 =(e)=>{
    this.setState({
      LastName:e.target.value

    })
  }
  onChange2 =(e)=>{
    this.setState({
      Birth:e.target.value

    })
  }
  onChange3 =(e)=>{
    this.setState({
      Phone:e.target.value

    })
  }

  onSubmit =(e)=>{
e.preventDefault()

console.log('Phone' , this.state.Phone)
  }
    render(){
        return(
            <div className="container mt-3">
 {/* <h2>Centered Modal Example</h2>*/}
  {/*<p>Center the modal vertically and horizontally within the page, with the .modal-dialog-centered class.</p>*/}
  
  <button type="button" className="btn btn-outline-danger" data-toggle="modal" data-target="#myModal">
    Delete 
  </button>

  
  <div className="modal fade" id="myModal">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
      
        
        <div className="modal-header">
          <h4 className="modal-title">Do you want to remove Donor?</h4>
          <button type="button" className="close" data-dismiss="modal">×</button>
        </div>
        
        <form onSubmit={this.onSubmit} >
        <div className="modal-body">
          <label htmlFor="LN" className="l">What is your Last Name?</label><br></br>
          <input className="form-control" type="text" onChange={this.onChange1} id="LN" required ></input><br></br>

          <label htmlFor="D" className="l" >What is your Birth Date?</label><br></br>
          <input className="form-control" type="date" onChange={this.onChange2} id="D" required ></input><br></br>

          <label htmlFor="PN" className="l">What is your Phone Number?</label><br></br>
          <input className="form-control" type="number" min="6" max="13" onChange={this.onChange3} id="PN" required ></input>
        </div>
        
        <div className="modal-footer">
          <button type="submit" className="btn btn-outline-danger" id="a" >Delete</button>
        </div>
        </form>
      </div>
    </div>
  </div>
</div>
        )
    }
}

export default Delete