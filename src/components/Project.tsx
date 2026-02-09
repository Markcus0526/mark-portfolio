import React from "react";
import Tourism from '../assets/images/Tourism.png';
import Andtrans from '../assets/images/Andtrans.png';
import Fssystem from '../assets/images/Fssystem.png';
import Hospital from '../assets/images/Hospital.png';
import Bathserve from '../assets/images/Bathserve.png';
import Bjcarpool from '../assets/images/Bjcarpool.png';
import Babyplan from '../assets/images/Babyplan.png';
import Appgo from '../assets/images/Appgo.png';
import Funeral from '../assets/images/Funeral.png';
import Carsale from '../assets/images/Carsale.png';
import Ride2car from '../assets/images/Ride2car.png';
import Mybaby from '../assets/images/Mybaby.png';
import Investment from '../assets/images/Investment.png';
import Busihall from '../assets/images/Busihall.png';
import Showhand from '../assets/images/Showhand.png';
import Typinghelper from '../assets/images/Typinghelper.png';
import Taurichat from '../assets/images/Taurichat.png';
import Blogleptos from '../assets/images/Blogleptos.png';
import Dxaichat from '../assets/images/Dxaichat.png';
import '../assets/styles/Project.scss';
import Chip from "@mui/material/Chip";

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">

            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={Taurichat} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Markcus0526/MarkTech.TauriChat.git" target="_blank" rel="noreferrer"><h2>Simple Chat App</h2></a>
                <p>Simple Chat app created with Tauri 2.0</p>
                <div className="flex-chips">
                    <span className="chip-title">Tech stack:</span>
                    <Chip className='chip' label="Rust" />
                    <Chip className='chip' label="Tauri" />
                    <Chip className='chip' label="TailWind" />
                </div>
            </div>

            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={Blogleptos} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Markcus0526/MarkTech.BlogLeptos.git" target="_blank" rel="noreferrer"><h2>Simple Blog Field</h2></a>
                <p>This repository hosts a Leptos demo application developed as part of my exploration and experimentation with the Rust/Leptos framework.</p>
                <div className="flex-chips">
                    <span className="chip-title">Tech stack:</span>
                    <Chip className='chip' label="Rust" />
                    <Chip className='chip' label="Leptos" />
                    <Chip className='chip' label="TailWind" />
                </div>
            </div>

            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={Dxaichat} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Markcus0526/MarkTech.DxAiChat.git" target="_blank" rel="noreferrer"><h2>Student Assist</h2></a>
                <p>Student is a full-stack Rust web app that uses a "learning by teaching" model.
                    Users teach topics to an AI student, Bodhi, via text, PDF, or voice chat.
                    This monolithic application is built with Axum and Dioxus from a single codebase.
                    The name Student is derived from the Tamil word for "teacher" and the Hindi word for "easy."</p>
                <div className="flex-chips">
                    <span className="chip-title">Tech stack:</span>
                    <Chip className='chip' label="Rust" />
                    <Chip className='chip' label="Dioxus" />
                    <Chip className='chip' label="Axum" />
                    <Chip className='chip' label="TailWind" />
                </div>
            </div>

            <div className="project">
                <a href="http://www.3qcc.cn/" target="_blank" rel="noreferrer"><img src={Hospital} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Markcus0526/ife-hospital-webrtc-web.git" target="_blank" rel="noreferrer"><h2>Remote Diagnosis System</h2></a>
                <p>This system is a peer-to-peer remote video system that enables real-time video communication between doctors and patients to provide medical treatment without the need for any separate software installation.
                    The system is based on WebRTC technology.</p>
                <div className="flex-chips">
                    <span className="chip-title">Tech stack:</span>
                    <Chip className='chip' label="WebRTC" />
                    <Chip className='chip' label="PHP" />
                    <Chip className='chip' label="MySQL" />
                </div>
            </div>

            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={Bathserve} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Markcus0526/DMYTech.BathServe.git" target="_blank" rel="noreferrer"><h2>Massage Reserve System</h2></a>
                <p>The massage reservation and ordering system streamlines the process of booking a massage by allowing users to schedule appointments and choose from available massage therapists.
                    Customers can customize their preferences, such as type of massage and therapist gender, and view prices and availability in real-time.
                    The system also stores customer information and payment details for easy booking in the future.</p>
                <div className="flex-chips">
                    <span className="chip-title">Tech stack:</span>
                    <Chip className='chip' label="Java" />
                    <Chip className='chip' label="PHP" />
                    <Chip className='chip' label="MySQL" />
                </div>
            </div>

            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={Tourism} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Markcus0526/IFETech.Tourism.git/" target="_blank" rel="noreferrer"><h2>Tourism App</h2></a>
                <p>Tourism provides essential information about the world's most famous landmarks and monuments without the need for physically visiting them.
                    Users can access descriptions, historical facts, location details, and images/videos of iconic tourist sites.
                    This program is an excellent resource for anyone interested in learning about these famous landmarks and expanding their knowledge about the world's cultural and historical heritage.</p>
                <div className="flex-chips">
                    <span className="chip-title">Tech stack:</span>
                    <Chip className='chip' label="Java" />
                    <Chip className='chip' label="Swift" />
                    <Chip className='chip' label="Objective-C" />
                    <Chip className='chip' label="PHP" />
                    <Chip className='chip' label="MySQL" />
                </div>
            </div>

            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={Bjcarpool} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Markcus0526/dmy-carpooling-platform.git" target="_blank" rel="noreferrer"><h2>Beijing Carpool</h2></a>
                <p>The system enables real-time information sharing between customers and drivers, facilitating multiple users to share taxis efficiently.
                    With this feature, customers can easily locate available taxis and drivers can efficiently serve more customers.
                    The system promotes a collaborative environment, which helps optimize taxi usage, minimize idle time, and reduce traffic congestion.
                    Moreover, it offers a seamless and convenient service experience for customers. Overall, the system streamlines taxi operations, enhances execution efficiency, and ultimately creates value for taxi service providers and customers alike.</p>
                <div className="flex-chips">
                    <span className="chip-title">Tech stack:</span>
                    <Chip className='chip' label="Java" />
                    <Chip className='chip' label="Objective-C" />
                    <Chip className='chip' label="JSP" />
                    <Chip className='chip' label="Spring MVC" />
                    <Chip className='chip' label="MySQL" />
                </div>
            </div>





            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={Fssystem} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Markcus0526/DMYTech.FSSystem.git" target="_blank" rel="noreferrer"><h2>Vehicle 4S System</h2></a>
                <p>This management system is designed to oversee all aspects of vehicle sales, including post-sale service, spare parts, and research.
                    Its purpose is to ensure that all processes related to vehicle sales are efficient, effective, and reliable.
                    By providing comprehensive feedback to car manufacturers, this system seeks to improve the quality of vehicles and their maintenance.
                    The end goal is to deliver better value to customers, enhance customer satisfaction and loyalty, and increase sales and profitability for car dealerships.</p>
                <div className="flex-chips">
                    <span className="chip-title">Tech stack:</span>
                    <Chip className='chip' label="Java" />
                    <Chip className='chip' label="Objective-C" />
                    <Chip className='chip' label="C#" />
                    <Chip className='chip' label="ASP.net" />
                    <Chip className='chip' label="SQL Server" />
                </div>
            </div>

            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={Andtrans} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Markcus0526/DMYTech.AndroidTrans.git" target="_blank" rel="noreferrer"><h2>Android Transfer</h2></a>
                <p>Android Transfer enables users to recover and restore images, videos, and address books from their Android devices.
                    It is a useful tool in case of accidental deletion or loss of important data.
                    The program is designed to retrieve various types of files and is compatible with different Android devices.
                    With its user-friendly interface and efficient recovery process, this program is a must-have for anyone looking to recover vital information from their Android phone or tablet.</p>
                <div className="flex-chips">
                    <span className="chip-title">Tech stack:</span>
                    <Chip className='chip' label="C++" />
                    <Chip className='chip' label="C#" />
                    <Chip className='chip' label="Java" />
                    <Chip className='chip' label="Python" />
                </div>
            </div>

            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={Funeral} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Markcus0526/DMYTech.Funeral.git" target="_blank" rel="noreferrer"><h2>Funeral Assist</h2></a>
                <p>The grave site purchase and funeral management system is an efficient tool to assist with the entire process of organizing and conducting a successful funeral.
                    It allows users to browse and select a suitable burial plot, make payments and schedule cemetery services.
                    Additionally, the system provides a range of features to manage the funeral process, including the selection of caskets, urns, flowers, music, and clergy services.</p>
                <div className="flex-chips">
                    <span className="chip-title">Tech stack:</span>
                    <Chip className='chip' label="Java" />
                    <Chip className='chip' label="Swift" />
                    <Chip className='chip' label="Objective-C" />
                    <Chip className='chip' label="C#" />
                    <Chip className='chip' label="ASP.net" />
                    <Chip className='chip' label="SQL Server" />
                </div>
            </div>

            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={Carsale} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Markcus0526/DMYTech.CarSale.git" target="_blank" rel="noreferrer"><h2>Car Sale Service</h2></a>
                <p>Our system streamlines the car sales and purchase market, providing convenience and efficiency for both sellers and buyers.
                    With our platform, users can easily list vehicles for sale or browse listings for their ideal car.
                    The system automates many aspects of the buying and selling process, including price negotiation, vehicle inspections, and transaction management.</p>
                <div className="flex-chips">
                    <span className="chip-title">Tech stack:</span>
                    <Chip className='chip' label="Java" />
                    <Chip className='chip' label="Objective-C" />
                    <Chip className='chip' label="C#" />
                    <Chip className='chip' label="ASP.net" />
                    <Chip className='chip' label="SQL Server" />
                </div>
            </div>

            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={Ride2car} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Markcus0526/DMYTech.CarPool.git" target="_blank" rel="noreferrer"><h2>Ride 2 Car</h2></a>
                <p>This system matches two users waiting at the same taxi station who meet carpooling conditions and provides them an opportunity to share a taxi, thereby cutting down taxi expenses for both parties.
                    This results in savings for people who queue up at the back, as they can now avoid waiting time.</p>
                <div className="flex-chips">
                    <span className="chip-title">Tech stack:</span>
                    <Chip className='chip' label="Java" />
                    <Chip className='chip' label="Objective-C" />
                    <Chip className='chip' label="C#" />
                    <Chip className='chip' label="ASP.net" />
                    <Chip className='chip' label="SQL Server" />
                </div>
            </div>

            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={Mybaby} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Markcus0526/DMYTech.MyBaby.git" target="_blank" rel="noreferrer"><h2>My Baby</h2></a>
                <p>Since this APP is a parent-child application, it is mainly aimed at young parents, and mothers are the main users.
                    The baby plan software is divided into the client part and the server part, and this software only refers to the client part.</p>
                <div className="flex-chips">
                    <span className="chip-title">Tech stack:</span>
                    <Chip className='chip' label="Objective-C" />
                    <Chip className='chip' label="C#" />
                    <Chip className='chip' label="ASP.net" />
                    <Chip className='chip' label="SQL Server" />
                </div>
            </div>

            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={Investment} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Markcus0526/DMYTech.Investment.git" target="_blank" rel="noreferrer"><h2>Investment App</h2></a>
                <p>This system enables you to share and access real-time investment capital data with ease, making smarter financial decisions.
                    Additionally, the program also provides a platform for browsing relevant product advertisements and essential banking information.</p>
                <div className="flex-chips">
                    <span className="chip-title">Tech stack:</span>
                    <Chip className='chip' label="Java" />
                    <Chip className='chip' label="Objective-C" />
                    <Chip className='chip' label="C#" />
                    <Chip className='chip' label="ASP.net" />
                    <Chip className='chip' label="SQL Server" />
                </div>
            </div>

            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={Busihall} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Markcus0526/DMYTech.DHBusiness.git" target="_blank" rel="noreferrer"><h2>Business Hall</h2></a>
                <p>The system is designed to notify users of new advertisements from China's four major telecoms.
                    This includes China Mobile, China Unicom, China Telecom, and China Tower.
                    With this system, users can stay informed about the latest promotions, services and products offered by these telecom companies.</p>
                <div className="flex-chips">
                    <span className="chip-title">Tech stack:</span>
                    <Chip className='chip' label="Java" />
                    <Chip className='chip' label="Objective-C" />
                </div>
            </div>

            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={Appgo} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Markcus0526/ife-appgo-vpn.git" target="_blank" rel="noreferrer"><h2>AppGo</h2></a>
                <p>AppGo allows users to browse any location using any device with fast speed due to its use of Proxy and Socks engines.
                    With this application, users can expect reliable and efficient internet access wherever they are.</p>
                <div className="flex-chips">
                    <span className="chip-title">Tech stack:</span>
                    <Chip className='chip' label="Java" />
                    <Chip className='chip' label="Kotlin" />
                    <Chip className='chip' label="Scala" />
                    <Chip className='chip' label="C#" />
                    <Chip className='chip' label="C++" />
                    <Chip className='chip' label="Swift" />
                    <Chip className='chip' label="Objective-C" />
                </div>
            </div>

            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={Showhand} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Markcus0526/DMYTech.SHPoker.git" target="_blank" rel="noreferrer"><h2>Showhand Game</h2></a>
                <p>Showhand is a popular game in the Chinese game market, and it is widely used.
                    It can be customized according to the orderer's specific requirements, meaning that it has more special functions than standard software.
                    This flexibility enables it to fulfill a range of needs, making it a reliable choice for many users in the game industry.</p>
                <span className="chip-title">Tech stack:</span>
                <Chip className='chip' label="Java" />
                <Chip className='chip' label="C++" />
                <Chip className='chip' label="Cocos2D" />
                <Chip className='chip' label="MySQL" />
            </div>

            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={Typinghelper} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Markcus0526/DMYTech.TypingHelper.git" target="_blank" rel="noreferrer"><h2>Typing Helper</h2></a>
                <p>Typing Helper simplifies the process of mastering the Japanese and English languages.
                    It provides an accessible and comprehensive platform for learners of all levels to enhance their language skills through interactive lessons and engaging activities.
                    The program incorporates innovative techniques and technology to make the learning experience effective and enjoyable.</p>
                <span className="chip-title">Tech stack:</span>
                <Chip className='chip' label="C++" />
                <Chip className='chip' label="Qt" />
                <Chip className='chip' label="SQLite" />
            </div>

            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={Babyplan} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Markcus0526/DMYTech.BabyPlan.git" target="_blank" rel="noreferrer"><h2>Baby Plan</h2></a>
                <p>This Windows Phone software serves as an early childhood education tool for children aged 0-6 and their parents.
                    It offers a range of features including information, resources, and communities to aid in child development.
                    With the software, parents can access tools that benefit their children's education and reap the rewards of being a part of a supportive community.
                    Overall, it is a valuable resource to help young children learn and explore the world around them.</p>
                <span className="chip-title">Tech stack:</span>
                <Chip className='chip' label="Objective-C" />
                <Chip className='chip' label="C#" />
            </div>

        </div>
    </div>
    );
}

export default Project;
