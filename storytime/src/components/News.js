import React, { Component } from 'react';
import { updatesNews } from '../websiteData';
import '../css/news.css';


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
            <div className='news-wrapper'>
                <h1>News &amp; Updates</h1>
                {this.state.newsData.map(news => (
                    <div key={news.title}>
                        <div className='indiv-post'>
                            <h2>{news.title}</h2>
                            <p>{news.date}</p>
                            <img src={news.imgUrl} className="storyTimeIphone" alt="logo" />
                            <p>{news.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    };
};

export default News;