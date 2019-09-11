import React, { Component } from 'react'
// import Spinner from 'react-bootstrap/Spinner'
 import axios from './Axios';
export default class Search extends Component {
    state = {
        country: 'Jordan',
        city: 'Amman',
        bloodType: 'A+'
    }

    changeValue = (e) => {
        console.log('e.target.value', e.target.value)
        this.setState({ [e.target.name]: e.target.value })
    }


    onSubmit = (e) => {
        console.log('submet',this.state)
        e.preventDefault()

        axios.post('/search',this.state)       
        .then(res =>{
            this.props.setSearch(res.data)
        })
        .catch( error => {
        console.log(error);
        })
        }

      render() {

        return (

            <React.Fragment>

                {/* <div>   <> <Spinner animation="grow" variant="danger" /> </> <h1 >search for donat</h1></div> */}
                <div className="container">
                    <div className="row border border-danger rounded-pill mt-5 p-4 ">
                        <div className="col-3">
                            <select name="country" defaultValue={'Jordan'} id="country" className="custom-select" onChange={this.changeValue} >
                                <option value="Jordan">Jordan</option>
                                <option value="American Samoa">American Samoa</option>
                                <option value="Andorra">Andorra</option>
                                <option value="Angola">Angola</option>
                                <option value="Anguilla">Anguilla</option>
                                <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Armenia">Armenia</option>
                                <option value="Aruba">Aruba</option>
                                <option value="Australia">Australia</option>
                                <option value="Austria">Austria</option>
                                <option value="Azerbaijan">Azerbaijan</option>
                                <option value="Bahamas">Bahamas</option>
                                <option value="Bahrain">Bahrain</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Barbados">Barbados</option>
                                <option value="Belarus">Belarus</option>
                                <option value="Belgium">Belgium</option>
                                <option value="Belize">Belize</option>
                                <option value="Benin">Benin</option>
                                <option value="Bermuda">Bermuda</option>
                                <option value="Bhutan">Bhutan</option>
                                <option value="Bolivia">Bolivia</option>
                                <option value="Bonaire">Bonaire</option>
                            </select>
                        </div>

                        <div className="col-3">
                            <select name="city" defaultValue={'Amman'} id="city" className="custom-select" onChange={this.changeValue}>
                                <option value="Amman" >Amman</option>
                                <option value="Irbid">Irbid</option>
                                <option value="Ajloun">Ajloun</option>
                                <option value="Jerash">Jerash</option>
                                <option value="Mafraq">Mafraq</option>
                                <option value="Balqa">Balqa</option>
                                <option value="Zarqa">Zarqa</option>
                                <option value="Madaba">Madaba</option>
                                <option value="Karak">Karak</option>
                                <option value="Tafilah">Tafilah</option>
                                <option value="Ma'an">Ma'an</option>
                                <option value="Aqaba">Aqaba</option>
                            </select>
                        </div>



                        <div className="col-3">
                            <select name="bloodType" defaultValue={'O+'} id="bloodType" className="custom-select" onChange={this.changeValue} >
                                <option value="O+" >O+</option>
                                <option value="O-">O-</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                            </select>
                        </div>


                        <div className="col-2">
                            <button  type="submit" className="btn btn-danger btn-block"  onClick={this.onSubmit}>submit</button>
                            {/* <button type='advanced search' className='btn btn-danger btn-block'>
 advanced search
        </button>  */}
                        </div>
                    </div>



                </div>

            </React.Fragment>
        )
    }
}
