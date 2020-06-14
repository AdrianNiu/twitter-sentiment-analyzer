import { Pie } from 'react-chartjs-2';
import React, { Component } from 'react';
//Connect to the redux store
import { connect } from 'react-redux';
//Import to do routing
import { withRouter } from 'react-router-dom';

import { Table, Button } from 'reactstrap';

import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export class PiePage extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'GET_PIE' });
    }

    handleShow = event => {
        // const propertyValues = Object.values(this.props.pie[0]);
        console.log('what is in the pie reducer', this.props.pie);
        // console.log('What is in the object.values:', propertyValues);
        
        
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
                                            <td><Button color="secondary" size="sm">Note</Button></td>
                                            <td></td>
                                            <td><Button color="secondary" onClick={this.handleShow} size="sm">Remove</Button></td>
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