import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Input = () => {

  const [input, setInput] = useState({
    email: '',
    password: ''
  });
  const [show, setShow] = useState(true);

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setInput((prev)=>({   
      ...prev,
      [name]:value
  }))
  }

  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleSubmit = () => {
    const newErrors = { email: '', password: '' };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!input.email) {
      newErrors.email = 'Email is required.';
    } else if (!emailRegex.test(input.email)) {
      newErrors.email = 'Enter a valid email address.';
    }

    if (!input.password) {
      newErrors.password = 'Password is required.';
    } else if (input.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters.';
    }

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
      alert(`Form submitted!\nEmail: ${input.email}`);
       setInput({
       email: '',
       password: ''
     });
    }
  };

  return (
    <div className='flex justify-center shadow-2xl h-80 w-screen'>
      <div className='flex flex-col font-medium rounded-2xl p-2 gap-2 text-black w-90 bg-amber-50'>
        <h1 className='text-center text-2xl font-bold'>Form</h1>
        <label htmlFor='email'>Email</label>
        <input
          name='email'
          type='email'
          className={`w-64 border-2 bg-white text-black ${errors.email ? 'border-red-500' : 'border-black'}`}
          placeholder='Email'
          value={input.email}
          onChange={handleChanges}
        />
        {errors.email && <p className='text-red-500 text-xs -mt-1'>{errors.email}</p>}
        <label htmlFor='password'>Password</label>
        <div className='relative w-64'>
          <input
            name='password'
            className={`w-full border-2 bg-white text-black pr-10 ${errors.password ? 'border-red-500' : 'border-black'}`}
            type={show ? 'password' : 'text'}
            placeholder='Enter Password'
            value={input.password}
            onChange={handleChanges}
          />
          <button
            type='button'
            onClick={() => setShow(!show)}
            aria-label={show ? 'Show password' : 'Hide password'}
            className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-700 hover:text-black bg-transparent border-0 p-0 m-0 leading-none'
          >
            <FontAwesomeIcon icon={show ? faEye : faEyeSlash} />
          </button>
        </div>
        {errors.password && <p className='text-red-500 text-xs -mt-1'>{errors.password}</p>}
        <button
          type='button'
          className='bg-green-950 p-2 rounded-2xl  text-white hover:bg-green-700 flex items-center gap-2 w-fit'
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default Input