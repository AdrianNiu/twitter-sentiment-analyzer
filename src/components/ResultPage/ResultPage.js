import React, { Component } from 'react';
//Connect to the redux store
import { connect } from 'react-redux';
//Import to do routing
import { withRouter } from 'react-router-dom';
import FavoriteTwt from '../FavoriteTwt/FavoriteTwt';

import { Table } from 'reactstrap';
import './ResultPage.css';



export class ResultPage extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'GET_FAV' });
        console.log('what is in the fav reducer', this.props.favorites);
        
    }

    render() {
        return (
            <>
                <p></p>
                <div id="saved-twitter-result">
                    <Table>
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th>Keyword</th>
                                <th></th>
                                <th>Notes</th>
                                <th>Sentiment</th>
                                <th>Score</th>
                                <th>Tweet</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        {this.props.favorites.map(favorite =>
                            <FavoriteTwt key={favorite.id} favorite={favorite} />
                        )}
                    </Table>
                </div>

                <section className="favorites">
                </section>
            </>
        )
    }
}
const putPropsOnReduxStore = (reduxStore) => ({
    favorites: reduxStore.favoriteReducer,
});



export default withRouter(connect(putPropsOnReduxStore)(ResultPage));