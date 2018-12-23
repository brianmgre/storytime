import React, { Component } from 'react';
import { faq } from '../websiteData';
import '../css/faq.css';


class FaqPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            faqData: [],
        };
    };

    componentDidMount() {
        this.setState({ faqData: faq })
    };

    render() {
        return (
            <div className='faq-wrapper'>
                <h1>FAQ</h1>
                <div className='questions-wrapper'>
                    {this.state.faqData.map(faq =>
                        <div key={faq.question}>
                            <h4> {faq.question}</h4>
                            <p>{faq.answer}</p>
                        </div>
                    )}
                </div>
            </div>
        )
    };
};


export default FaqPage;