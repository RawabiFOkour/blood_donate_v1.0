import React ,{Component} from 'react'
import './Report'
class Report extends Component {
  state = {
    report: ""
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.setState({
      report:e.target.value
  })
    console.log('e.submit', e.target.value)

  }
  onselect =(e) => { console.log('e.target.value', e.target.value)}
  render() {
    return (
      <div className="container mt-3">
        {/* <h2>Centered Modal Example</h2>*/}
        {/*<p>Center the modal vertically and horizontally within the page, with the .modal-dialog-centered class.</p>*/}

        <button type="button" className="btn btn-outline-danger" data-toggle="modal" data-target="#myModal">
          Report
  </button>


  
  <div className="modal fade" id="myModal">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
      
        
        <div className="modal-header">
          <h4 className="modal-title">Help Us Understand the problem :</h4>
          <button type="button" className="close" data-dismiss="modal">×</button>
        </div>
        
        <form onSubmit={this.onSubmit}>
        <div className="modal-body">
          What's wrong with this?
          <div className="custom-control custom-radio">
             <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"/>
             <label className="custom-control-label" htmlFor="customRadio1" checked={true}>It's fack donor</label>
          </div>
          <div className="custom-control custom-radio">
             <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input"/>
             <label className="custom-control-label" htmlFor="customRadio2">It's sexually explicit</label>
          </div>
        <div className="modal fade" id="myModal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">


              <div className="modal-header">
                <h4 className="modal-title">Help Us Understand the problem :</h4>
                <button type="button" className="close" data-dismiss="modal">×</button>
              </div>

              <form onSubmit={this.onSubmit}>
                <div className="modal-body">
                  What's wrong with this?
                   <div className="custom-control custom-radio">
                    <input onChange={this.onselect} value={"It's fack donor"} type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                    <label className="custom-control-label" htmlFor="customRadio1">It's fack donor</label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input onChange={this.onselect} type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                    <label className="custom-control-label" htmlFor="customRadio2">It's sexually explicit</label>
                  </div>

                  <div className="custom-control custom-radio">
                    <input onChange={this.onselect} type="radio" id="customRadio3" name="customRadio" className="custom-control-input" />
                    <label className="custom-control-label" htmlFor="customRadio3">It's harassment or hate speech</label>
                  </div>

                  <div className="custom-control custom-radio">
                    <input onChange={this.onselect} type="radio" id="customRadio4" name="customRadio" className="custom-control-input" />
                    <label className="custom-control-label" htmlFor="customRadio4">It's threatening, violent or suicidal</label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input onChange={this.onselect} type="radio" id="customRadio5" name="customRadio" className="custom-control-input" onSelect={this.other} />
                    <label className="custom-control-label" htmlFor="customRadio5">other...
                     <br></br><input type="text" id="t" ></input>
                    </label>

                  </div>
                </div>

                <div className="modal-footer">
                  <button type="submit" className="btn btn-outline-danger" id="a" >Submit</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Report;