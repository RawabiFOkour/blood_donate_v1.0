import React, { Component } from 'react'
export default class Details extends Component {

    getAge = (dateString) => {
        let today = new Date();
        let birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    deleteDonor = () => {
        console.log('deleteDonor', this.props.details._id)
    }
    reportDonor = () => {
        console.log('reportDonor')

    }

    render() {
        const { details, i } = this.props

        return (
            <>
                <tr>
                    <th scope="row">{i + 1}</th>
                    <td>{details.firstName}</td>
                    <td>{this.getAge(details.birthday.slice(0, 10))}</td>
                    <td class="text-danger" >{details.bloodType}</td>
                    <td>{details.city}</td>
                    <td><a class="" href={`tel:+${details.phone}`}>{`${details.phone}`}</a></td>
                    <td>{details.dateOfPublish.slice(0, 10)}</td>
                    <td>
                        <a class="info dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            &#8226;	&#8226;	&#8226;	 </a>

                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a onClick={this.deleteDonor} class="dropdown-item text-danger" href="#">Delete</a>
                            <a onClick={this.reportDonor} class="dropdown-item text-info" href="#">report</a>

                        </div></td>

                </tr>
            </>
        )
    }
}


