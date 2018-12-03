import React, { Component } from 'react';
import HomeContainer from './HomeContainer';
import { storyData } from '../websiteData';


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    };

    componentDidMount() {
        this.setState({ data: storyData })
    };

    render() {
        return (
            <div>
                {this.state.data.map(data => (
                    <HomeContainer data={data} />))}
            </div>
        )

    };
};



export default HomePage;