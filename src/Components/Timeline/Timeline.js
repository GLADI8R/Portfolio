import { Fragment } from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

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
                    key="6"
                    dateText="Feb 2023 - Present"    
                >
                    <p className="textPink">Technology Intern at Dozee</p>
                </TimelineItem>
                <TimelineItem
                    dateInnerStyle={{ background: bgColor, color: textColor }}
                    key="5"
                    dateText="May 2022 - July 2022"
                >
                    <p className="textPink">EID Intern at GE Healthcare, India</p>
                </TimelineItem>

                <TimelineItem
                    dateInnerStyle={{ background: bgColor, color: textColor }}
                    key="4"
                    dateText="Sept 2020 - May 2022"
                >
                    <p className="textPink">Core Committee Member @ ACM NIT Surat</p>
                </TimelineItem>

                <TimelineItem
                    dateInnerStyle={{ background: bgColor, color: textColor }}
                    key="3"
                    dateText="Aug 2019 - Present"
                >
                    <p className="textPink">Sardar Vallabhbhai National Institute of Technology, Surat</p>
                    <p className="textWhite sub">Electronics and Communications Engineering</p>
                    <p className="textWhite sub">CGPA: 8.21/10.0</p>
                </TimelineItem>

                <TimelineItem
                    dateInnerStyle={{ background: bgColor, color: textColor }}
                    key="2"
                    dateText="Aug 2005 - May 2019"
                >
                    <p className="textPink">St. Paul's Senior Secondary School</p>
                    <p className="textWhite sub">High School Diploma</p>
                    <p className="textWhite sub">CBSE Class 10, 9.6/10.0</p>
                    <p className="textWhite sub">Class 12 Non-Medical Sciences, 88.8/100</p>
                </TimelineItem>

                <TimelineItem
                    dateInnerStyle={{ background: bgColor, color: textColor }}
                    key="1"
                    dateText="14 Billion Years Ago..."
                >
                    <p className="textWhite sub"> Our whole universe was in a hot, dense state<br />
                        Then nearly fourteen billion years ago expansion started, wait <br />
                        The earth began to cool, the autotrophs began to drool<br />
                        Neanderthals developed tools<br />
                        We built a wall (we built the pyramids)<br />
                        Math, science, history, unraveling the mysteries<br />
                        That all started with the big bang!
                    </p>
                </TimelineItem>

            </Timeline>
        </Fragment>
    );
};


export default TimeLine;