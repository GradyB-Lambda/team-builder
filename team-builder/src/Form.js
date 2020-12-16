import React from 'react'



export default function Form (props) {
    const {values, update, submit} = props
    const onChange = evt => {
        const {name, value} = evt.target
        update(name,value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    return (
        <form className= 'form container' onSubmit={onSubmit}>
            <div className= 'from-group submit'>
                <h2>Add Team Member</h2>
                <button disabled={!values.name || !values.email || !values.role  ? true : false}>submit</button>
            </div>

            <div className='form-group inputs'>
                <h4>General Information</h4>
                <label>Name:
                    <input
                        value= {values.name}
                        onChange={onChange}
                        name='name'
                        placeholder='type name'
                        maxLength='25'
                        type='text'
                    />
                </label>
                <label>Email:
                    <input
                        values={values.emai}
                        onChange={onChange}
                        name='email'
                        placeholder='type email'
                        maxLength='30'
                        type='email'
                    />
                </label>
                <label>Role:
                    <select onChange={onChange} value= {values.role} name='role'>
                    <option value=''>***Select Role***</option>
                    <option value='student'>Student</option>
                    <option value='designer'>Designer</option>
                    <option value='fron-end'>Front-End</option>
                    <option value='back-end'>Back-End</option>
                    </select>
                </label>
            </div>

        </form>
    )

    
}