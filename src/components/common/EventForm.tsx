import { Button, DatePicker, Form, Input, Row, Select } from 'antd'
import { Moment } from 'moment'
import { useEffect, useState } from 'react'
import { useAppSelector } from '../../hooks/useAppSelector'
import { IEvent } from '../../models/IEvent'
import { IUser } from '../../models/IUser'
import { getCurrentUserName } from '../../store/auth/auth'
import { formatDate } from '../../utils/formateDate'
import { validationRules } from '../../utils/validationRules'

interface EventFormProps {
  guests: IUser[]
  selectedDay: Moment
  submit: (event: IEvent) => void
}

const EventForm = ({ guests, submit, selectedDay }: EventFormProps) => {
  const [form] = Form.useForm()
  const [event, setEvent] = useState<IEvent>({
    author: '',
    date: '',
    description: '',
    guest: ''
  } as IEvent)

  const currentUserName = useAppSelector(getCurrentUserName())

  useEffect(() => {
    form.resetFields()
  }, [selectedDay])

  const handleChange = (
    e?: React.ChangeEvent<HTMLInputElement> | null,
    date?: Moment | null,
    guest?: string
  ) => {
    if (date) {
      setEvent((prevState) => ({
        ...prevState,
        date: formatDate(date.toDate())
      }))
    } else if (e) {
      setEvent((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
      }))
    } else if (guest) {
      setEvent((prevState) => ({
        ...prevState,
        guest
      }))
    }
  }

  const submitForm = () => {
    submit({ ...event, author: currentUserName })
    form.resetFields()
  }

  return (
    <Form onFinish={submitForm} form={form} initialValues={{date:selectedDay}}>
      <Form.Item
        label='Event Description'
        name='description'
        rules={[validationRules.required('Description is required')]}
      >
        <Input
          onChange={handleChange}
          name='description'
          value={event.description}
        />
      </Form.Item>

      <Form.Item
        label='Event Date'
        rules={[
          validationRules.required('Date is required'),
          validationRules.isDataAfter('You cant create an event in the past')
        ]}
        name='date'
      >
        <DatePicker onChange={(date) => handleChange(null, date)} />
      </Form.Item>

      <Form.Item
        label='Select guest'
        rules={[validationRules.required('Please select guest')]}
        name='guest'
      >
        <Select onChange={(guest) => handleChange(null, null, guest)}>
          {guests.map((guest) => (
            <Select.Option
              key={guest.username}
              value={guest.username}
              name='guest'
            >
              {guest.username}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Row justify='end'>
        <Form.Item style={{ marginBottom: '0.5rem' }}>
          <Button type='primary' htmlType='submit' block>
            Create Event
          </Button>
        </Form.Item>
      </Row>
    </Form>
  )
}

export default EventForm
