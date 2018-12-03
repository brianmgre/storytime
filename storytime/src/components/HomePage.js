import React, { Component } from 'react';

// import Nav from './Nav.js';
import HomeContainer from './HomeContainer';
import Footer from './Footer';
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
                <Footer />
            </div>
        )

    };
};



export default HomePage;