import React from 'react';
import Search from '../Tracking/Search';
import DataList from '../Tracking/DataList';

export default class Tracking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            keyword: '',
            stat: null
        }
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.onSearchKeywordChange = this.onSearchKeywordChange.bind(this);
        this.clearInput = this.clearInput;
    }

    onSearchKeywordChange(e) {
        this.setState({ keyword: e.target.value });
    }

    clearInput(e) {
        alert('test');
    }

    onSearchSubmit(e) {
        let keyword = this.state.keyword;

        this.onPageChange(
            "http://127.0.0.1/flash_express/api/Tracking/search?keyword=" + keyword
        );
        e.preventDefault();
    }

    onPageChange(url) {
        fetch(url)
            .then(res => res.json())
            .then(result => {
                this.setState({
                    data: result.data,
                    status: result.status
                });
                console.log(this.state.status)
            },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }
    render() {
        return (
            <div>
                <Search clearInput={this.clearInput}
                    onSearchSubmit={this.onSearchSubmit}
                    onSearchKeywordChange={this.onSearchKeywordChange} />

                {
                    this.state.data.length > 0 || this.state.status == 'no' ?
                        <DataList DataRecords={this.state.data} Status={this.state.status} /> : ''
                }


            </div>

        )
    }
}

