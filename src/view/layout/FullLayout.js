import React from 'react';
import Sidebar from './layout-component/Sidebar';
import Navbar from './layout-component/Navbar';
import Footer from './layout-component/Footer';

class FullLayout extends React.Component {

    render() {
        return (
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" class="d-flex flex-column">

                    <div id="content">
                        <Navbar />

                        <Footer />
                    </div>
                </div>

            </div>
        );
    }
}

export default FullLayout;
