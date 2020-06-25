import React, { Component } from 'react';
//Connect to the redux store
import { connect } from 'react-redux';
// import './FavoriteTwt.css';
import { Button } from 'reactstrap';
import swal from 'sweetalert';

export class GotTweets extends Component {

    addToFav = (tweet) => {
        console.log('In addToFav', tweet);
        this.props.dispatch({ type: "POST_FAV", payload: { saved_tweet: tweet } });
        swal("Successful!", "You have saved the tweet!");
    }

    render() {

        return (

            <>
                <tbody>
                    <tr>
                        <td>{this.props.tweet.tweet}</td>
                        <td>{this.props.tweet.sentiment}</td>
                        <td>{this.props.tweet.score}</td>
                        <td><Button variant="contained" onClick={(event) => this.addToFav(this.props.tweet)} color="secondary" size="sm">Save</Button></td>
                    </tr>
                </tbody>
            </>
        )
    }
}




export default connect()(GotTweets);