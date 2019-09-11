import React, { Component } from 'react'
import Details from './Details'
export class SearchResults extends Component {
    state = {
        c: 15 //capasity of tabile 
    }
    seeMore = () => {
        this.setState({ c: this.state.c + 10 })
    }
    render() {
        const { search } = this.props
        let search10 = [...search.slice(0, this.state.c)]
        let list = search10.map((details, i) => (<Details key={i} i={i} details={details} />));

        if (search[0]) {
            return (<>
                <div className="col-xl-7  mt-4  mx-auto">
                    <table className="table table-striped ">
                        <thead>
                            <tr >
                                <th scope="col">#</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Age</th>
                                <th class="text-danger" scope="col">Blood Type</th>
                                <th scope="col">City</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Date of Publish</th>
                                <th scope="col">&#8226;	&#8226;	&#8226;</th>

                            </tr>
                        </thead>
                        <tbody>
                            {list}
                        </tbody>
                    </table>
                    <button className="btn btn-link" style={{ visibility: this.state.c <16 ? 'hidden' : 'visible' }} onClick={this.seeMore.bind(this.state.c)} >See more</button>
                </div>
            </>
            );
        }
        else {
            return (<></>);
        }
    }




}

export default SearchResults

