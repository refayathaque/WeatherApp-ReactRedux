import React, { Component } from 'react';

export default class SearchBar extends Component {
    render() {
        return (
            <form className="input-group mb3">
                <input type="text" class="form-control" placeholder="Search for a city" aria-label="Search for a city" aria-describedby="basic-addon2" />
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="submit">Submit</button>
                </div>
            </form>
        );
    }
}
