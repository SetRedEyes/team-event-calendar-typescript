import { Calendar } from 'antd'
import { Moment } from 'moment'
import { IEvent } from '../../models/IEvent'
import { formatDate } from '../../utils/formateDate'

export interface EventCalendarProps {
  events: IEvent[]
}

const EventCalendar = ({ events }: EventCalendarProps) => {
  const dateCellRender = (value: Moment) => {
    const formatedDate = formatDate(value.toDate())
    const currentDayEvents = events.filter((e) => e.date === formatedDate)
    return (
      <div>
        {currentDayEvents.map((e, index) => (
          <div key={index}>{e.description}</div>
        ))}
      </div>
    )
  }
  return <Calendar dateCellRender={dateCellRender} />
}

export default EventCalendar
