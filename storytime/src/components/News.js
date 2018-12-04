import React, { Component } from 'react';
import { updatesNews } from '../websiteData';


class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsData: []
        };
    };

    componentDidMount() {
        this.setState({ newsData: updatesNews })
    };


    render() {
        return (
            <div>
                <h1>NEWS &amp; Updates</h1>
                {this.state.newsData.map(news => (
                    <div key={news.title}>
                        <h2>{news.title}</h2>
                        <p>{news.date}</p>
                        <img src={news.imgUrl} className="storyTimeIphone" alt="logo" />
                        <p>{news.text}</p>
                    </div>
                ))}
            </div>
        )
    };
};

export default News;