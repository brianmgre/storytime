import React, { Component } from 'react';
import { faq } from '../websiteData';


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
            <div>
                <h1>FAQ</h1>
                {this.state.faqData.map(faq =>
                    <div key={faq.question}>
                        <h4> {faq.question}</h4>
                        <p>{faq.answer}</p>
                    </div>
                )}
            </div>
        )
    };
};


export default FaqPage;