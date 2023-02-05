import Layout from "../../layout/Layout";
import './About.scss';

function About() {
    return (
        <Layout>
            <h1>Some title here</h1>
            <div className="flex-row about-container">
                <div className="box"></div>
                <p className="about-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    <br /> <br /> Leo urna molestie at elementum eu facilisis sed odio. Diam ut venenatis tellus in metus vulputate eu.At risus viverra adipiscing at in tellus. 
                    <br /> <br /> Ultrices in iaculis nunc sed. In ante metus dictum at tempor commodo ullamcorper a. A lacus vestibulum sed arcu non odio euismod lacinia. Sed augue lacus viverra vitae congue. Eget mi proin sed libero enim. Ante metus dictum at tempor commodo ullamcorper a lacus. Aliquam faucibus purus in massa. 
                </p>
            </div>
        </Layout>
    )
}

export default About;