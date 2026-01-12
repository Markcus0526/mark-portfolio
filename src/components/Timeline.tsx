import React from "react";
import '@fortawesome/free-regular-svg-icons'
// import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from '@mui/lab';
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
                    <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="h5" color="secondary">
                        2025 - present
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ px: 0.2 }} />
                        <TimelineDot color="primary">
                            <AutoModeIcon />
                        </TimelineDot>
                        <TimelineConnector sx={{ px: 0.2 }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '50px', px: 2 }}>
                        <Typography variant="h5" component="span" color="primary">Full Stack Engineer</Typography>
                        <Typography variant="h6" color="warning">Full-stack Backend and Frontend Development, GenAI/LLM</Typography>
                    </TimelineContent>
                </TimelineItem>

                {/* Item 2 */}
                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="h5" color="primary">
                        2020 - 2024
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ px: 0.2 }} />
                        <TimelineDot color="secondary">
                            <DevicesIcon />
                        </TimelineDot>
                        <TimelineConnector sx={{ px: 0.2 }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '50px', px: 2 }}>
                        <Typography variant="h5" component="span" color="primary">Full Stack Developer</Typography>
                        <Typography variant="h6" color="warning">Full-stack Development, API Development, User Experience</Typography>
                    </TimelineContent>
                </TimelineItem>

                {/* Item 3 */}
                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="h5" color="secondary">
                        2016 - 2019
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ px: 0.2 }} />
                        <TimelineDot color="primary">
                            <LaptopMacIcon />
                        </TimelineDot>
                        <TimelineConnector sx={{ px: 0.2 }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '50px', px: 2 }}>
                        <Typography variant="h5" component="span" color="primary">Mobile and Web Developer</Typography>
                        <Typography variant="h6" color="warning">Frontend Development, Backend Development, Mobile Development, User Experience, Team Leading</Typography>
                    </TimelineContent>
                </TimelineItem>

                {/* Item 4 */}
                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="h5" color="primary">
                        2011 - 2015
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ px: 0.2 }} />
                        <TimelineDot color="secondary">
                            <ImportantDevicesIcon />
                        </TimelineDot>
                        <TimelineConnector sx={{ px: 0.2 }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '50px', px: 2 }}>
                        <Typography variant="h5" component="span" color="primary">Staff Engineer Intern</Typography>
                        <Typography variant="h6" color="warning">Frontend Development, Backend Development, User Experience</Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>

    );
}

export default ExperienceTimeline;