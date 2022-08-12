import moment, { Moment } from 'moment'

export const validationRules = {
  required: (message: string = 'Field is required') => ({
    required: true,
    message
  }),
  isDataAfter: (message: string) => () => ({
    validator(_: any, value: Moment) {
      if (value.isSameOrAfter(moment().subtract(1, 'days'))) {
        return Promise.resolve()
      }
      return Promise.reject(new Error(message))
    }
  })
}
