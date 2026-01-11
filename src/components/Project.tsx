import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>Tourism App</h2></a>
                <p>Tourism provides essential information about the world's most famous landmarks and monuments without the need for physically visiting them. Users can access descriptions, historical facts, location details, and images/videos of iconic tourist sites. This program is an excellent resource for anyone interested in learning about these famous landmarks and expanding their knowledge about the world's cultural and historical heritage.</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>Beijing Carpool</h2></a>
                <p>The system enables real-time information sharing between customers and drivers, facilitating multiple users to share taxis efficiently. With this feature, customers can easily locate available taxis and drivers can efficiently serve more customers. The system promotes a collaborative environment, which helps optimize taxi usage, minimize idle time, and reduce traffic congestion. Moreover, it offers a seamless and convenient service experience for customers. Overall, the system streamlines taxi operations, enhances execution efficiency, and ultimately creates value for taxi service providers and customers alike.</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>Massage Reserve System</h2></a>
                <p>The massage reservation and ordering system streamlines the process of booking a massage by allowing users to schedule appointments and choose from available massage therapists. Customers can customize their preferences, such as type of massage and therapist gender, and view prices and availability in real-time. The system also stores customer information and payment details for easy booking in the future.</p>
            </div>
            <div className="project">
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Remote Diagnosis System</h2></a>
                <p>This system is a peer-to-peer remote video system that enables real-time video communication between doctors and patients to provide medical treatment without the need for any separate software installation. The system is based on WebRTC technology.</p>
            </div>
            <div className="project">
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><h2>Vehicle 4S System</h2></a>
                <p>This management system is designed to oversee all aspects of vehicle sales, including post-sale service, spare parts, and research. Its purpose is to ensure that all processes related to vehicle sales are efficient, effective, and reliable. By providing comprehensive feedback to car manufacturers, this system seeks to improve the quality of vehicles and their maintenance. The end goal is to deliver better value to customers, enhance customer satisfaction and loyalty, and increase sales and profitability for car dealerships.</p>
            </div>
            <div className="project">
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><h2>Android Transfer</h2></a>
                <p>Android Transfer enables users to recover and restore images, videos, and address books from their Android devices. It is a useful tool in case of accidental deletion or loss of important data. The program is designed to retrieve various types of files and is compatible with different Android devices. With its user-friendly interface and efficient recovery process, this program is a must-have for anyone looking to recover vital information from their Android phone or tablet.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Multiple Regression Property Analysis</h2></a>
                <p>Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.</p>
            </div>
            <div className="project">
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Programs of Study</h2></a>
                <p>Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.</p>
            </div>
            <div className="project">
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><h2>Transfer Evaluation Matrix</h2></a>
                <p>Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><h2>Typing Helper</h2></a>
                <p>Typing Helper simplifies the process of mastering the Japanese and English languages. It provides an accessible and comprehensive platform for learners of all levels to enhance their language skills through interactive lessons and engaging activities. The program incorporates innovative techniques and technology to make the learning experience effective and enjoyable.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;