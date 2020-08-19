import { Pie } from 'react-chartjs-2';
import React, { Component } from 'react';
//Connect to the redux store
import { connect } from 'react-redux';
// import './FavoriteTwt.css';
import { Button, FormGroup, Input } from 'reactstrap';
import swal from 'sweetalert';


export class FavoritePie extends Component {

    state = {
        isOpen: false,
        notes: this.props.pie.notes
    }

    handleDelete = (id) => {
        // const propertyValues = Object.values(this.props.pie[0]);
        console.log('what is in the pie reducer', id);
        // console.log('What is in the object.values:', propertyValues);
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this chart result!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your saved chart result has been deleted!", {
                        icon: "success",
                    });
                    this.props.dispatch({ type: 'DELETE_PIE', payload: id });
                } else {
                    swal("Your saved chart result is safe!");
                }
            });
    }

    setIsOpen = () => {
        this.setState({ isOpen: !this.state.isOpen });
        console.log('In setIsOpen');
    }

    handleChangeFor = (event) => {
        console.log('What is in the note', event.target.value);
        this.setState({
            notes: event.target.value
        });
    }

    handleSubmitNote = (id) => {
        //Sends a dispatch to update the notes that were added.
        console.log('In Sending to PIE_NOTES');
        this.props.dispatch({ type: 'PIE_NOTES', payload: { id: id, notes: this.state.notes } });
        //Closes the modal once you hit save;
        this.setIsOpen();
    }



    render() {

        return (

            <>
                <tbody>
                    {/* <img src={tweet.images.fixed_height_downsampled.url}></img> */}
                    <tr key={this.props.pie.id}>
                        <td>{this.props.pie.time}</td>
                        <td>{this.props.pie.keyword}</td>
                        <td>
                            <div style={{ height: 400, width: 600 }}>
                                <Pie data={{
                                        labels: ['Negative', 'Neutral', 'Positive'],
                                        datasets: [
                                            {
                                                label: this.props.pie.keyword,
                                                backgroundColor: [
                                                    '#c0504e',
                                                    '#5082bc',
                                                    '#9aba58',

                                                ],
                                                hoverBackgroundColor: [
                                                    '#501800',
                                                    '#4B5000',
                                                    '#175000',

                                                ],
                                                data: [this.props.pie.pie_negative, this.props.pie.pie_neutral, this.props.pie.pie_positive]
                                            }
                                        ]
                                    }}
                                    options={{
                                        title: {
                                            display: true,
                                            text: this.props.pie.keyword,
                                            fontSize: 20
                                        },
                                        legend: {
                                            display: true,
                                            position: 'right'
                                        }
                                    }}
                                />
                            </div>
                        </td>
                        <td><Button color="secondary" size="sm" onClick={() => this.setIsOpen()}>Note</Button>
                            {this.state.isOpen ? (
                                <div>
                                    <div>
                                        <article>
                                            <FormGroup>
                                                <hr />
                                                <Input type="textarea" name="text" id="exampleText"
                                                    spellCheck="true"
                                                    value={this.state.notes || ''}
                                                    onChange={(event) => this.handleChangeFor(event)} />
                                            </FormGroup>
                                        </article>
                                        <Button onClick={(event) => this.handleSubmitNote(this.props.pie.id)} color="secondary" size="sm">Save</Button>

                                        {"       "}
                                        <Button onClick={() => this.setIsOpen()} color="secondary" size="sm">Cancel</Button>

                                    </div>
                                </div>
                            ) : null}
                        </td>
                        <td>{this.props.pie.notes}</td>
                        <td><Button color="secondary" onClick={(event) => this.handleDelete(this.props.pie.id)} size="sm">Remove</Button></td>
                        {/* <td><button variant="contained" color="primary" onClick={(event) => this.addToFav(tweet)}>Save</button></td> */}
                    </tr>
                    {/* <p>{JSON.stringify(tweet.counter)}</p> */}
                </tbody>
            </>

        )
    }
}




export default connect()(FavoritePie);