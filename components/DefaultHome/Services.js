import React, { Component } from 'react';
import Link from 'next/link';

class Services extends Component {
    render() {
        return (
            <>
                <div className="bg-fcfbfb ptb-100 pb-60">
                    <div className="container">
                        <div className="section-title">
                            <h2>Our Services</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one">
                                    <i className="pe-7s-comment bg-13c4a1"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Business Consultancy</a>
                                        </Link>
                                    </h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                                </div>
                            </div>

                            <div className="col-lg-8 col-sm-12">
                                <div className="service-card-one">
                                    <i className="pe-7s-display2 bg-6610f2"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Web Development</a>
                                        </Link>
                                    </h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                                </div>
                            </div>

                     
                            

                            

                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Services;