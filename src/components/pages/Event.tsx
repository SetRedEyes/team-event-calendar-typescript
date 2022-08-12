import { Alert, Button, Layout, Row } from 'antd'
import { useEffect, useState } from 'react'
import EventCalendar from '../common/EventCalendar'
import EventModal from '../common/EventModal'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { getEvents, getGuests } from '../../store/event/event'
import { IEvent } from '../../models/IEvent'
import EventForm from '../common/EventForm'
import { getCurrentUserName } from '../../store/auth/auth'
import moment, { Moment } from 'moment'

const Event = () => {
  const { loadGuests, createEvent, loadEvents } = useAppDispatch()

  const [modalVisible, setModalVisible] = useState(false)
  const guests = useAppSelector(getGuests())
  const events = useAppSelector(getEvents())
  const currentUsername = useAppSelector(getCurrentUserName())

  const [selectedValue, setSelectedValue] = useState(moment())

  const onSelect = (newValue: Moment) => {
    setSelectedValue(newValue)
    setModalVisible(true)
  }

  useEffect(() => {
    loadGuests()
    loadEvents(currentUsername)
  }, [])

  const handleSubmit = (event: IEvent) => {
    setModalVisible(false)
    createEvent(event)
  }

  const handleModal = () => {
    setModalVisible((prevState) => !prevState)
  }

  return (
    <Layout>
      <Alert
        message={`You selected date: ${selectedValue?.format('YYYY-MM-DD')}`}
      />
      <EventCalendar events={events} onSelect={onSelect} />

      <EventModal visible={modalVisible} onCancel={handleModal}>
        <EventForm
          guests={guests}
          submit={handleSubmit}
          selectedDay={selectedValue}
        />
      </EventModal>
    </Layout>
  )
}

export default Event
