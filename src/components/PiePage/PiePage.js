import { Pie } from 'react-chartjs-2';
import React, { Component } from 'react';
//Connect to the redux store
import { connect } from 'react-redux';
//Import to do routing
import { withRouter } from 'react-router-dom';
import FavoriteChart from '../FavoriteChart/FavoriteChart';

import { Table, Button } from 'reactstrap';

import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export class PiePage extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'GET_PIE' });
        console.log('what is in the pie reducer', this.props.pie);
        // console.log('what is in the this',this);
        
    }

    handleShow = event => {
        const propertyValues = Object.keys(this.props.pie[0].pie);
        console.log('what is in the pie reducer', this.props.pie);
        console.log('What is in the object.values:', propertyValues);
        
    }

    

    render() {

        // if (this.props.reduxStore.searchReducer.length > 0) {
            if (1<2) {
            // Canvas component
            const options = {
                theme: "light1",
                animationEnabled: true,
                exportFileName: "Sentiment Result",
                exportEnabled: true,
                title: {
                    text: "Sentiment Analysis Result"
                },
                data: [{
                    type: "pie",
                    startAngle: 75,
                    toolTipContent: "<b>{label}</b>: {y}%",
                    showInLegend: "true",
                    legendText: "{label}",
                    indexLabelFontSize: 16,
                    indexLabel: "{label} - {y}%",
                    dataPoints: [
                        { y: 32, label: "Health" },
                        { y: 22, label: "Finance" },
                        { y: 15, label: "Education" },
                        // { y: 0, label: "Neutral" },
                        // { y: 0, label: "Negative" },
                        // { y: 0, label: "Positive" }
                    ]
                }]
            }

                const pieData = {
                    labels: ['January', 'February', 'March',
                        'April', 'May'],
                    datasets: [
                        {
                            label: 'Rainfall',
                            backgroundColor: [
                                '#B21F00',
                                '#C9DE00',
                                '#2FDE00',
                                '#00A6B4',
                                '#6800B4'
                            ],
                            hoverBackgroundColor: [
                                '#501800',
                                '#4B5000',
                                '#175000',
                                '#003350',
                                '#35014F'
                            ],
                            data: [65, 59, 80, 81, 56]
                        }
                    ]
                }
                
        
        
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
                                                        data={pieData}
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
                                            </div></td>
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

                        <tbody>
                            <tr>
                                {/* <td>{this.props.favorite.id}</td> */}
                                <td></td>
                                <td></td>
                                <td><div style={{ height: 200, width: 300 }}>
                                    <CanvasJSChart options={options}
                                    /* onRef={ref => this.chart = ref} */
                                    />
                                </div></td>
                                <td><button color="secondary" size="sm">Note</button></td>
                                {/* <td><select id="category" onChange={ (event) => this.handleChange( event )}>
                                <option></option>
                                <option value="1">Funny</option>
                                <option value="2">Cohort</option>
                                <option value="3">Cartoon</option>
                                <option value="4">NSFW</option>
                                <option value="5">Meme</option>
                            </select>
                            <button onClick={this.handleClick}>Set Category</button>
                            </td> */}
                                {/* <td>{this.props.favorite.notes}</td>
                                <td>{this.props.favorite.sentiment}</td>
                                <td>{this.props.favorite.sentiment_score}</td>
                                <td>{this.props.favorite.sentiment_text}</td> */}
                                <td><button color="secondary" onClick={this.handleShow} size="sm">Remove</button></td>
                            </tr>

                        </tbody>
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