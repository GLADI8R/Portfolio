import { Fragment } from 'react';
import { Timeline, TimelineItem} from 'vertical-timeline-component-for-react';

import '../../Sass/styles.scss';
import './Timeline.scss';

const TimeLine = () => {
    const bgColor = "#93c2db";
    const textColor = "#010e28";

    return (
        <Fragment>
            <h2 className="textPink">Timeline</h2>
            <Timeline lineColor={"#93c2db"} className="textWhite font" >

                <TimelineItem 
                    dateInnerStyle={{ background: bgColor, color: textColor}}
                    key="11"
                    dateText="August 2021"
                >
                    <p className="textWhite">Virtual Experience Program Participant</p>
                    <p className="textWhite sub">Participated in the open access JPMorgan Chase & Co. Virtual Experience Program with Forage</p>
                </TimelineItem>

                <TimelineItem 
                    dateInnerStyle={{ background: bgColor, color: textColor}}
                    key="10"
                    dateText="June 2021"
                >
                    <p className="textWhite">Learning Flutter</p>
                    <p className="textWhite">Made Spotify UI Clone</p>
                </TimelineItem>

                <TimelineItem 
                    dateInnerStyle={{ background: bgColor, color: textColor}}
                    key="9"
                    dateText="April 2021"
                >
                    <p className="textWhite">Learning React</p>
                </TimelineItem>

                <TimelineItem 
                    dateInnerStyle={{ background: bgColor, color: textColor}}
                    key="8"
                    dateText="March 2021"
                >
                    <p className="textWhite">Made JS Medium</p>
                </TimelineItem>

                <TimelineItem 
                    dateInnerStyle={{ background: bgColor, color: textColor}}
                    key="7"
                    dateText="Feb 2021"
                >
                    <p className="textWhite">Made To-Do List</p>
                </TimelineItem>

                <TimelineItem 
                    dateInnerStyle={{ background: bgColor, color: textColor}}
                    key="6"
                    dateText="Dec 2020"
                >
                    <p className="textWhite">Made Tic Tac Toe Game</p>
                    <p className="textWhite">Learn Nodejs</p>
                </TimelineItem>

                <TimelineItem 
                    dateInnerStyle={{ background: bgColor, color: textColor}}
                    key="5"
                    dateText="Sept 2020"
                >
                    <p className="textWhite">Learn HTML, CSS, JavaScript</p>
                </TimelineItem>

                <TimelineItem 
                    dateInnerStyle={{ background: bgColor, color: textColor}}
                    key="4"
                    dateText="May 2020"
                >
                    <p className="textWhite">Competitve Programming in C++</p>
                </TimelineItem>

                <TimelineItem 
                    dateInnerStyle={{ background: bgColor, color: textColor}}
                    key="3"
                    dateText="Aug 2019 - Present"
                >
                    <p className="textPink">Sardar Vallabhbhai National Institute of Technology, Surat</p>
                    <p className="textWhite sub">CGPA: 8.31/10.0</p>
                </TimelineItem>

                <TimelineItem 
                    dateInnerStyle={{ background: bgColor, color: textColor}}
                    key="2"
                    dateText="Aug 2005 - May 2019"
                >
                    <p className="textPink">St. Paul's Senior Secondary School</p>
                    <p className="textWhite sub">High School Diploma</p>
                    <p className="textWhite sub"> CBSE Class 10, 9.6/10.0</p>
                    <p className="textWhite sub">Class 12 Non-Medical Sciences, 88.8/100</p>
                </TimelineItem>

                <TimelineItem 
                    dateInnerStyle={{ background: bgColor, color: textColor}}
                    key="1"
                    dateText="14 Billion Years Ago"
                >
                    <p className="textWhite">Our whole universe was in a hot dense state<br/>
                    Then nearly fourteen billion years ago expansion started.<br/>
                    Wait... <br/>
                    The Earth began to cool. The autotrophs began to drool<br/>
                    Neanderthals developed tools. We built a wall (we built the pyramids).<br/>
                    Math, science, history, unraveling the mystery.<br/>
                    That all started with the big bang!
                    </p>
                </TimelineItem>

            </Timeline>
        </Fragment>
    );
};


export default TimeLine;