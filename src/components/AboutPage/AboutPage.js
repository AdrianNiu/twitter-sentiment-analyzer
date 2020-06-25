import React, { Component } from 'react';
import { connect } from "react-redux";
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';


import { Jumbotron } from 'reactstrap';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

const mapStateToProps = reduxState => ({
  reduxState
});

class AboutPage extends Component {

  state = {
    search: "",
    hasSearched: false
  };

  handleChange = event => {
    this.setState({
      ...this.state,
      search: event.target.value
    });
  };

  handleSubmit = event => {
    console.log(this);
    event.preventDefault();
    console.log(this.state.search);
    this.props.dispatch({ type: "GET_GIF", payload: this.state.search });
    // this.state.hasSearched = true;
    this.setState({
      hasSearched: true
    })
  };

  // addToFav = (url) => {
  //   this.props.dispatch({ type: "POST_FAV", payload: { imageurl: url } })
  // }

  // state = {
  //   dataPie: {
  //     labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
  //     datasets: [
  //       {
  //         data: [300, 50, 100, 40, 120],
  //         backgroundColor: [
  //           "#F7464A",
  //           "#46BFBD",
  //           "#FDB45C",
  //           "#949FB1",
  //           "#4D5360",
  //           "#AC64AD"
  //         ],
  //         hoverBackgroundColor: [
  //           "#FF5A5E",
  //           "#5AD3D1",
  //           "#FFC870",
  //           "#A8B3C5",
  //           "#616774",
  //           "#DA92DB"
  //         ]
  //       }
  //     ]
  //   }
  // }



  render() {
      return (
        <>
          <div>
            <Jumbotron>
              <h1 className="display-3">Twitter Sentiment Analyzer</h1>
              <p className="lead">Type in any hashtag or keyword and press enter to visualize Tweet Sentiment.</p>
              <hr className="my-2" />
              <p>This tool can help business to monitor and understand the social sentiment of their brand, product or services.</p>
              
                <div className="input-form">
                  <br />
                  <br />
                  <InputGroup >
                    <Input size="lg" placeholder="search a keyword" value={this.state.search} onChange={this.handleChange} />
                    <InputGroupAddon addonType="append">
                      <Button color="secondary" onClick={this.handleSubmit}>Search!!</Button>
                    </InputGroupAddon>
                  </InputGroup>
                </div>
              
            </Jumbotron>
          </div>
        </>
      );
    }
  }


// export default withStyles()(connect(mapStateToProps)(SearchPage));

export default connect(mapStateToProps)(AboutPage);


