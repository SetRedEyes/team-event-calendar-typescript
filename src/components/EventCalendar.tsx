import { Calendar } from 'antd'
import { IEvent } from '../models/IEvent'

export interface EventCalendarProps {
  events: IEvent[]
}

const EventCalendar = ({ events }: EventCalendarProps) => {


  return <Calendar />
}

export default EventCalendar
