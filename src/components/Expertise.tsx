import React from "react";
import '@fortawesome/free-regular-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDartLang, faPython, faReact} from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Rust",
    "React",
    "JavaScript/TypeScript",
    "GoLang",
    "PHP",
    "Python-Django",
    "LAMP",
    "SQL",
    "NoSQL"
];

const labelsSecond = [
    "Java",
    "Kotlin",
    "Swift",
    "Objective-C",
    "Dart",
    "Android Native",
    "iOS Native",
    "Cost-Effective / One Codebase",
    "Mobile Gaming",
];

const labelsThird = [
    "Python",
    "OpenAI",
    "LangChain",
    "Qdrant",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <div>
                <h3>
                    I specialize in developing custom software solutions that meet the needs of businesses in a variety of industries. With over 15 years of experience in the field, I'm always up to date with the latest technologies and trends, and I strive to make sure that my work meets the highest standards of quality.
                </h3>
            </div>

            <h1>Expertise</h1>

            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>My expertise spans front-end technologies such as HTML, CSS, JavaScript, and frameworks like React or Angular, as well as back-end development with Node.js, Express, and database management using MongoDB or SQL.
                        I am adept at designing seamless user interfaces, building robust server-side logic, and ensuring optimal performance, security, and scalability. My goal is to deliver comprehensive solutions that meet client needs, enhance user experience, and support business objectives through innovative and efficient web development practices.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDartLang} size="3x"/>
                    <h3>Android & iOS Development</h3>
                    <p>As a passionate mobile developer, I specialize in creating seamless, user-centric applications for both iOS and Android platforms.
                        My expertise includes designing intuitive interfaces, optimizing performance, and integrating cutting-edge features to deliver engaging digital experiences.
                        With a solid understanding of mobile development frameworks like Flutter, React Native, and native SDKs,
                        I am committed to building innovative solutions that meet users' needs and drive business growth.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>AI Engineering</h3>
                    <p>My expertise includes designing and implementing algorithms for data analysis, natural language processing, computer vision, and predictive modeling using frameworks like TensorFlow, PyTorch, and scikit-learn.
                        I am skilled in data preprocessing, model training, evaluation, and deployment, ensuring solutions are accurate, efficient, and scalable.
                        Committed to advancing AI technology, I focus on creating innovative solutions that enhance automation, decision-making, and user experience across diverse industries.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;