import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent} from '@mui/lab'

const MuiTimeline = () => {
  return (
    <Timeline position='alternate'>
        <TimelineItem>
            <TimelineOppositeContent color='text.secondary'>09:30 AM</TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color='info' variant='outlined'/>
                <TimelineConnector/>
            </TimelineSeparator>

            <TimelineContent>City A</TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>10:00 AM</TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color='info' variant='filled'/>
                <TimelineConnector/>
            </TimelineSeparator>

            <TimelineContent>City B</TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>10:30 AM</TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color='info' variant='outlined'/>
            </TimelineSeparator>

            <TimelineContent>City C</TimelineContent>
        </TimelineItem>
    </Timeline>
  )
}

export default MuiTimeline