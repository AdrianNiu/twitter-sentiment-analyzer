// import React, { Component } from 'react';
// import { connect } from "react-redux";
// // import { withStyles } from '@material-ui/core/styles';
// // import Button from '@material-ui/core/Button';

// const mapStateToProps = reduxState => ({
//     reduxState
// });

// class ResultPage extends Component {

//     state = {
//         search: "",
//         hasSearched: false
//     };

//     handleChange = event => {
//         this.setState({
//             ...this.state,
//             search: event.target.value
//         });
//     };

//     handleSubmit = event => {
//         console.log(this);
//         event.preventDefault();
//         console.log(this.state.search);
//         this.props.dispatch({ type: "GET_GIF", payload: this.state.search });
//         this.state.hasSearched = true;
//     };

//     // addToFav = (url) => {
//     //   this.props.dispatch({ type: "POST_FAV", payload: { imageurl: url } })
//     // }

//     render() {
//         if (this.state.hasSearched) {
//             console.log(this.props.reduxState.searchReducer.pagination.count)
//             return (
//                 <>
//                     <div className="search">
//                         <header><h2>!!!!!!Search for a Twitter Keyword!</h2></header>
//                         <input value={this.state.search} onChange={this.handleChange} />
//                         <button variant="contained" color="primary" onClick={this.handleSubmit}>Search</button>
//                         <ul>
//                             {/* <h1>Showing {this.props.reduxState.searchReducer.pagination.count} of {this.props.reduxState.searchReducer.pagination.total_count}</h1> */}
//                             {this.props.reduxState.searchReducer.data.map(giphy => {
//                                 return (
//                                     <>
//                                         <li>
//                                             <img src={giphy.images.fixed_height_downsampled.url}></img>
//                                             <button variant="contained" color="primary" onClick={(event) => this.addToFav(giphy.images.fixed_height_downsampled.url)}>Save</button>
//                                         </li>
//                                     </>
//                                 );
//                             })}
//                         </ul>
//                     </div>
//                 </>
//             );
//         } else {
//             return (
//                 <>
//                     <div className="search">
//                         <header><h2>!!!!!!Search for a Twitter Keyword!</h2></header>
//                         <input value={this.state.search} onChange={this.handleChange} />
//                         <button variant="contained" color="primary" onClick={this.handleSubmit}>Search</button>
//                     </div>
//                 </>
                
               

//             );
//         }
//     }
// }

// // export default withStyles()(connect(mapStateToProps)(SearchPage));

// export default connect(mapStateToProps)(ResultPage);



import React, { Component } from 'react';
//Connect to the redux store
import { connect } from 'react-redux';
//Import to do routing
import { withRouter } from 'react-router-dom';
import FavoriteTwt from '../FavoriteTwt/FavoriteTwt';

import { Table } from 'reactstrap';





export class ResultPage extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'GET_FAV' });
        console.log('what is in the fav reducer', this.props.favorites);
        
    }

    

    render() {
        return (
            <>
                <p></p>

                <section>
                    {/* <Table className="result_table"> */}
                    <Table>
                        <thead>
                            <tr>
                                {/* <th>ID</th> */}
                                <th>Time</th>
                                <th>Keyword</th>
                                <th></th>
                                {/* <th>Note</th> */}
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
                </section>

                <section className="favorites">
                    {/* {JSON.stringify(this.props.reduxStore.favourites)} */}
                    {/* {JSON.stringify(this.props.favorites)} */}
                    
                </section>
            </>
        )
    }
}
const putPropsOnReduxStore = (reduxStore) => ({
    favorites: reduxStore.favoriteReducer,
});



export default withRouter(connect(putPropsOnReduxStore)(ResultPage));