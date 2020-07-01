import React, { Component } from "react"

class Form extends Component {
    initialState = {
        name: "",
        chore: "",
        dueBy: "",
        isSupplies: false,
        isDone: false,
    }
    state = this.initialState;

    handleChange = event => {
        const { name, value } = event.target;
        console.log('name', name);
        this.setState({
            [name]: value,
        })
    }

    toggleSupplies = () => {
        console.log('in toggleRowSupplies: before isSupplies=', this.state.isSupplies);
        this.setState({
            isSupplies: !this.state.isSupplies
        })
        console.log('in toggleRowSupplies: AFTER isSupplies=', this.state.isSupplies);
    }

    submitForm = () => {
        console.log('submitForm', this.state);
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, chore, dueBy, supplies, done } = this.state;
        return (
            <form>
                {/* <label htmlFor="name" className="mr-3">Who's job?</label>

                <input
                    className="form-control mb-2"
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange} />

                <br />
                <label htmlFor="name" className="mr-2">What to do:</label>
                <input
                    className="form-control mb-2"
                    type="text"
                    name="chore"
                    id="chore"
                    value={chore}
                    onChange={this.handleChange} />

                <br />
                <label htmlFor="name" className="mr-2">Needed by:{' '} </label>
                <input
                    className="form-control mb-2"
                    type="text"
                    name="dueBy"
                    id="dueBy"
                    value={dueBy}
                    onChange={this.handleChange} />

                <br />
                <label class="form-check-label" for="supplies">Supplies?</label>
<br/>
                <input type="checkbox" id="supplies" className="form-check-input" onClick={this.toggleSupplies} />

                <br />
                <input type="button" value="Submit" className="btn btn-primary border border-rounded mb-3" onClick={this.submitForm} />
                 */}



                <table>
                    <tbody>
                        <tr>
                            <td>
                                <input
                                    className="form-control mb-2"
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={name}
                                    onChange={this.handleChange}
                                    placeholder="Who's Chore" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    className="form-control mb-2"
                                    type="text"
                                    name="chore"
                                    id="chore"
                                    value={chore}
                                    onChange={this.handleChange}
                                    placeholder='What needs to be done' />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    className="form-control mb-2"
                                    type="date"
                                    name="dueBy"
                                    id="dueBy"
                                    value={dueBy}
                                    onChange={this.handleChange}
                                    placeholder='Done by?' />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {/* <input type="button" value="Submit" className="btn btn-primary border border-rounded mb-3" onClick={this.submitForm} /> */}

                                <button
                                    type="button"
                                    className="btn btn-primary border border-rounded"
                                    onClick={this.submitForm} >
                                    Submit
                                    </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        )
    }
}

export default Form;