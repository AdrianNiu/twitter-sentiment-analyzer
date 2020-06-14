import { Pie } from 'react-chartjs-2';
import React, { Component } from 'react';
//Connect to the redux store
import { connect } from 'react-redux';
//Import to do routing
import { withRouter } from 'react-router-dom';

import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Table, Button } from 'reactstrap';

import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


export class PiePage extends Component {

    state = {
        isOpen: false,
        notes: this.props.pie.notes
    }

    componentDidMount() {
        this.props.dispatch({ type: 'GET_PIE' });
    }

    handleDelete = (id) => {
        // const propertyValues = Object.values(this.props.pie[0]);
        console.log('what is in the pie reducer', id);
        // console.log('What is in the object.values:', propertyValues);
        this.props.dispatch({ type: 'DELETE_PIE', payload: id })
    }

    setIsOpen = () => {
        this.setState({ isOpen: !this.state.isOpen });
        console.log('In setIsOpen');
    }

    handleChangeFor = (event) => {
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
        // if (this.props.reduxStore.searchReducer.length > 0) {
            if (1<2) {
                
        return (
            <>
                {/* <p>PiePage</p> */}
                
                <section>
                    {/* <Table className="result_table"> */}
                    <Table>
                        <thead>
                            <tr>
                                {/* <th>ID</th> */}
                                <th>Time</th>
                                <th>Keyword</th>
                                {/* <th></th> */}
                                <th>Chart</th>
                                <th></th>
                                <th>Notes</th>
                                {/* <th>Sentiment</th>
                                <th>Score</th>
                                <th>Tweet</th> */}
                                <th>Remove</th>
                            </tr>
                        </thead>
                            {/* insert pie data */}
                        {this.props.pie.map(pie => {
                            return (
                                <>
                                    <tbody>
                                        {/* <img src={tweet.images.fixed_height_downsampled.url}></img> */}
                                        <tr>
                                            <td>{pie.time}</td>
                                            <td>{pie.keyword}</td>
                                            <td>
                                                {/* {pie.pie} */}
                                            <div style={{ height: 400, width: 600 }}>
                                                    <Pie
                                                        data={{
                                                            labels: ['Negative', 'Neutral', 'Positive'],
                                                            datasets: [
                                                                {
                                                                    label: pie.keyword,
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
                                                                    data: [pie.pie_negative, pie.pie_neutral, pie.pie_positive]
                                                                }
                                                            ]
                                                        }}
                                                        options={{
                                                            title: {
                                                                display: true,
                                                                text: pie.keyword,
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
                                                                {/* <Label for="exampleText">Notes</Label> */}
                                                                <hr />
                                                                <Input type="textarea" name="text" id="exampleText"
                                                                    spellCheck="true"
                                                                    value={this.state.notes || ''}
                                                                    onChange={(event) => this.handleChangeFor(event)} />
                                                            </FormGroup>
                                                        </article>
                                                        <Button onClick={(event)=>this.handleSubmitNote(pie.id)} color="secondary" size="sm">Save</Button>
                    
                                                        {"       "}
                                                        <Button onClick={() => this.setIsOpen()} color="secondary" size="sm">Cancel</Button>
                                                        
                                                    </div>
                                                </div>
                                            ) : null}
                                            </td>
                                            <td>{pie.notes}</td>
                                            <td><Button color="secondary" onClick={(event) => this.handleDelete (pie.id)} size="sm">Remove</Button></td>
                                            {/* <td><button variant="contained" color="primary" onClick={(event) => this.addToFav(tweet)}>Save</button></td> */}
                                        </tr>
                                        {/* <p>{JSON.stringify(tweet.counter)}</p> */}
                                    </tbody>
                                </>


                            );
                        })}
                        {/* replace with CANVAS pie */}

                       
                    </Table>
                </section>

                <section className="favorites">
                    {/* {JSON.stringify(this.props.reduxStore.favourites)} */}
                    {/* {JSON.stringify(this.props.favorites)} */}
                    
                </section>
            </>
        )
    }
}
}
const putPropsOnReduxStore = (reduxState) => ({
    pie: reduxState.pieReducer,
});


// need to update the pie reducer
export default withRouter(connect(putPropsOnReduxStore)(PiePage));