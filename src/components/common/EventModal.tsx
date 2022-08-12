import Modal from 'antd/lib/modal/Modal'


interface EventFormProps {
  visible: boolean
  onCancel: () => void
  children: React.ReactNode
}

const EventModal = ({ visible, onCancel, children }: EventFormProps) => {
  return (
    <>
      <Modal
        title='Event Creator'
        visible={visible}
        footer={null}
        onCancel={onCancel}
      >
        {children}
      </Modal>
    </>
  )
}

export default EventModal
