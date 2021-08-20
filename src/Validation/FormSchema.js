import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required('Username is required')
    .min(2, 'Username must be 2 characters long'),
    size: yup
    .string(),
    special: yup
    .string(),
    pepperoni: yup
    .boolean(),
    sausage: yup
    .boolean(),
    cheese: yup
    .boolean(),
    onions: yup
    .boolean()


})

export default formSchema