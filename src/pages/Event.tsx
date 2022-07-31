import { Button, Layout, Modal, Row } from 'antd'
import { useState } from 'react'
import EventCalendar from '../components/EventCalendar'
import EventModal from '../components/EventModal'

const Event = () => {
  const [modalVisible, setModalVisible] = useState(false)

  const handleModal = () => {
    setModalVisible((prevState) => !prevState)
  }

  return (
    <Layout>
      <EventCalendar events={[]} />
      <Row justify='center'>
        <Button onClick={handleModal}>Add Event</Button>
      </Row>
      <EventModal visible={modalVisible} onCancel={handleModal} />
    </Layout>
  )
}

export default Event
