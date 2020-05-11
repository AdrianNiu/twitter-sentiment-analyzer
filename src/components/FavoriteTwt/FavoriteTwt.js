import React, { Component } from 'react';
//Connect to the redux store
import { connect } from 'react-redux';
// import './FavoriteTwt.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export class FavoriteTwt extends Component {

    state = {
        category: '',
        isOpen: false,
        notes: this.props.favorite.notes
    }

    handleClick = () => {
        console.log('Category Selected', this.props.favorite.id, this.state);
        this.props.dispatch({ type: 'PUT_FAV', payload: { id: this.props.favorite.id, category: this.state.category } });
        this.setState({
            category: '',
        })
    }

    handleChange = (event) => {
        console.log('Category changed to', event.target.value);
        this.setState({
            category: event.target.value,
        })
    }

    delete = (id) => {
        this.props.dispatch({ type: 'DELETE_FAV', payload: id })
    }
    // setCategory(category) {
    //     if (category === null) {
    //         return <p>Category:</p>
    //     }
    //     else {
    //         return <p>Category: {category}</p>
    //     }
    // }


    //button part
    setIsOpen = () => {
        this.setState({ isOpen: !this.state.isOpen });
        console.log('In setIsOpen');
    }

    handleChangeFor = (event) => {
        this.setState({
            notes: event.target.value
        });
    }

    handleSubmitNote = () => {
        //Sends a dispatch to update the notes that were added.
        this.props.dispatch({ type: 'PUT_NOTES', payload: { id: this.props.favorite.id, notes: this.state.notes } });
        //Closes the modal once you hit save;
        this.setIsOpen();
    }
    

    render() {

        return (
            
            <>
            <tbody>
                <tr key={this.props.favorite.id}>
                            {/* <td>{this.props.favorite.id}</td> */}
                            <td>{this.props.favorite.time}</td>
                            <td>{this.props.favorite.keyword}</td>

                        <td>
                            <div>
                                <Button onClick={() => this.setIsOpen()} color="secondary" size="sm">Note</Button>
                            {this.state.isOpen ? (
                                <div>
                                    <div>
                                        {/* <h2>Notes</h2> */}
                                        {/* <hr /> */}
                                        <article>
                                            {/* <textarea
                                                spellCheck="true"
                                                value={this.state.notes || ''}
                                                onChange={(event) => this.handleChangeFor(event)}></textarea> */}
                                                <FormGroup>
                                                    {/* <Label for="exampleText">Notes</Label> */}
                                                    <hr />
                                                    <Input type="textarea" name="text" id="exampleText" 
                                                        spellCheck="true"
                                                        value={this.state.notes || ''}
                                                        onChange={(event) => this.handleChangeFor(event)}/>
                                                </FormGroup>
                                        </article>
                                            <Button onClick={this.handleSubmitNote} color="secondary" size="sm">Save</Button>
                                            {/* <button onClick={this.handleSubmitNote}>Save</button> */}
                                            {"       "}
                                            <Button onClick={() => this.setIsOpen()} color="secondary" size="sm">Cancel</Button>
                                        {/* <button onClick={() => this.setIsOpen()}>Cancel</button> */}
                                    </div>
                                </div>
                            ) : null}
                        </div>
                        
                        </td>

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
                            <td>{this.props.favorite.notes}</td>
                            <td>{this.props.favorite.sentiment}</td>
                            <td>{this.props.favorite.sentiment_score}</td>
                            <td>{this.props.favorite.sentiment_text}</td>
                        <td><Button onClick={(event) => this.delete(this.props.favorite.id)} color="secondary" size="sm">Remove</Button></td>
                        </tr>
                    
            </tbody>
                
            

            {/* <div>
                <h1>{this.props.favorite.time}</h1>
                <h1>{this.props.favorite.id}</h1>
                <img src={this.props.favorite.URL} alt="FavGif" />
                {JSON.stringify(this.props.favorite)}
                <button onClick={(event) => this.delete(this.props.favorite.id)}>Remove</button>
                <div className="category">
                    {this.setCategory(this.props.favorite.name)}
                    <label htmlFor="category"><button onClick={this.handleClick}>Set Category</button></label>
                    <select id="category" onChange={(event) => this.handleChange(event)}>
                        <option></option>
                        <option value="1">Funny</option>
                        <option value="2">Cohort</option>
                        <option value="3">Cartoon</option>
                        <option value="4">NSFW</option>
                        <option value="5">Meme</option>

                    </select>
                    
                </div>
            </div> */}
            </>
        )
    }
}




export default connect()(FavoriteTwt);