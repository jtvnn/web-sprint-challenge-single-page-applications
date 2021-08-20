import React from 'react'


export default function Order(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
      } = props

      const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const  { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <form id='pizza-form' className='form container' onSubmit={onSubmit}>
          <div className='form-group submit'>
        
            <button id='submit' disabled={disabled}>submit</button>

            <div className='errors'>
             
              <div>{errors.name}</div>
            </div>
          </div>
    
          <div className='form-group inputs'>
        
    
            <div>
            <label>Name:&nbsp;
                <input
                    value={values.name}
                    onChange={onChange}
                    name='name'
                    type='text'
                />
                </label>
            </div>

            <div>
                <label>Size
                    <select id='size-dropdown' value={values.size} name="size" onChange={onChange}>
                        <option value=''>-- Select a Size --</option>
                        <option value='Small'>Small</option>
                        <option value='Medium'>Medium</option>
                        <option value='Large'>Large</option>
                    </select>
                </label>
            </div>

            <div>
                <label>Special Instructions:
                <input
                    value={values.special}
                    onChange={onChange}
                    name='special'
                    type='text'
                />
                </label>
            </div>
    </div>

          <div className='form-group checkboxes'>
            <label>Pepperoni
              <input 
                type='checkbox'
                name='pepperoni'
                checked={values.pepperoni}
                onChange={onChange}
              />
            </label>  
          </div>

          <div className='form-group checkboxes'>
            <label>Sausage
              <input 
                type='checkbox'
                name='sausage'
                checked={values.sausage}
                onChange={onChange}
              />
            </label>  
          </div>

          <div className='form-group checkboxes'>
            <label>Cheese
              <input 
                type='checkbox'
                name='cheese'
                checked={values.cheese}
                onChange={onChange}
              />
            </label>  
          </div>

          <div className='form-group checkboxes'>
            <label>Onions
              <input 
                type='checkbox'
                name='onions'
                checked={values.onions}
                onChange={onChange}
              />
            </label>  
          </div>
        </form>
      )
    }