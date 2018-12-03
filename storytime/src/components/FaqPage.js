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

        console.log('state', this.state);
        return (

            <div>
                {this.state.faqData.map(faq =>
                    <div key={faq.question}>
                        {faq.question}
                        {faq.answer}

                    </div>
                )}
            </div>
        )
    };
};


export default FaqPage;