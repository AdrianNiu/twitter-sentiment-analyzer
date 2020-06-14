
import React, { Component } from 'react';
//Connect to the redux store
import { connect } from 'react-redux';
//Import to do routing
import { withRouter } from 'react-router-dom';

import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Table, Button } from 'reactstrap';

import CanvasJSReact from '../../assets/canvasjs.react';

import { FavoritePie } from '../FavoritePie/FavoritePie';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;


export class PiePage extends Component {

    

    componentDidMount() {
        this.props.dispatch({ type: 'GET_PIE' });
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
                            
                        {this.props.pie.map(pie => 
                            <FavoritePie key={pie.id} pie={pie} />
                        )}
                         
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