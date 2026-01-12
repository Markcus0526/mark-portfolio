import React from "react";
import '@fortawesome/free-regular-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
// import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent
} from '@mui/lab';
import WorkIcon from '@mui/icons-material/Work';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import DevicesIcon from '@mui/icons-material/Devices';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import Typography from '@mui/material/Typography';
import '../assets/styles/Timeline.scss'

function ExperienceTimeline() {
    return (
        <div className="container" id="timeline">
            <Timeline position="alternate">
                {/* Item 1 */}
                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="h5" color="text.secondary">
                        2025 - present
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary">
                            <AutoModeIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '50px', px: 2 }}>
                        <Typography variant="h5" component="span">Full Stack Engineer</Typography>
                        <Typography variant="h6">Full-stack Backend and Frontend Development, GenAI/LLM</Typography>
                    </TimelineContent>
                </TimelineItem>

                {/* Item 2 */}
                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="h5" color="text.secondary">
                        2020 - 2024
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="secondary" variant="outlined">
                            <DevicesIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '50px', px: 2 }}>
                        <Typography variant="h5" component="span">Full Stack Developer</Typography>
                        <Typography variant="h6">Full-stack Development, API Development, User Experience</Typography>
                    </TimelineContent>
                </TimelineItem>

                {/* Item 3 */}
                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="h5" color="text.secondary">
                        2016 - 2019
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="secondary" variant="outlined">
                            <LaptopMacIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '50px', px: 2 }}>
                        <Typography variant="h5" component="span">Mobile and Web Developer</Typography>
                        <Typography variant="h6">Frontend Development, Backend Development, Mobile Development, User Experience, Team Leading</Typography>
                    </TimelineContent>
                </TimelineItem>

                {/* Item 4 */}
                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="h5" color="text.secondary">
                        2011 - 2015
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="secondary" variant="outlined">
                            <ImportantDevicesIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '50px', px: 2 }}>
                        <Typography variant="h5" component="span">Staff Engineer Intern</Typography>
                        <Typography variant="h6">Frontend Development, Backend Development, User Experience</Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>

    );
}

export default ExperienceTimeline;