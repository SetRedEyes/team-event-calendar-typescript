import Modal from 'antd/lib/modal/Modal'
import EventForm from './EventForm'

interface EventFormProps {
  visible: boolean
  onCancel: () => void
}

const EventModal = ({ visible, onCancel }: EventFormProps) => {
  return (
    <>
      <Modal
        title='Event Creator'
        visible={visible}
        footer={null}
        onCancel={onCancel}
      >
        <EventForm />
      </Modal>
    </>
  )
}

export default EventModal
