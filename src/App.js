import React, {useState, useEffect} from "react";
import { Route, Switch,Link } from 'react-router-dom';
import Order from './components/Order'
import axios from 'axios'
import * as yup from 'yup'
import schema from './Validation/FormSchema'

const initialFormValues = {
  name: '',
  size: '',
  peperoni: false,
  sausage: false,
  cheese: false,
  onions: false,
  special: '',
}

const initialFormErrors = {
  username: '',
}

const initialPizza = []
const initialDisabled = true

const App = () => {
  const [pizza, setPizza] = useState(initialPizza)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getPizza = () => {
    axios.get('https://reqres.in/api/orders')
    .then(res => {
      setPizza(res.data)
    })
    .catch(err => console.error(err))
  }
  
  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/orders', newUser)
    .then(res => {
      setPizza([res.data])
    })
    .catch(err => console.error(err))

    setFormValues(initialFormValues)
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      special: formValues.special.trim(),
  
    }
    postNewUser(newUser)
  }

  useEffect(() => {
    getPizza()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])
  
  return (
    <>
      <h1>Lambda Eats</h1>
      <div>
        <Link to='/'>Home</Link>
      </div>
      <div>
        <Link id='order-pizza' to='/pizza'>Order Pizza</Link>
      </div>
      <Switch>
        <Route path={'/pizza'}>
          <Order 
                values={formValues}
                change={inputChange}
                submit={formSubmit}
                disabled={disabled}
                errors={formErrors}
          />
        </Route>
        <Route path={'/'}>
        </Route>
</Switch>
    </>
  );
};
export default App;
