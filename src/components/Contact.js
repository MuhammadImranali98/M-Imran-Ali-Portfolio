import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Invalid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
     
      setFormSubmitted(true);
    }
  };

  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 sm:p-4 p-1 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <p className="sm:py-6 py-3">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full md:w-1/2 h-screen"
          >
            <input
              type="text"
              name="name"
              className={`bg-transparent border-2 p-2 rounded-md text-white focus:outline-none ${
                formErrors.name ? 'border-red-500' : ''
              }`}
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {formErrors.name && <p className="text-red-500">{formErrors.name}</p>}

            <input
              type="email"
              name="email"
              className={`my-4 bg-transparent border-2 p-2 rounded-md text-white focus:outline-none ${
                formErrors.email ? 'border-red-500' : ''
              }`}
              placeholder="Enter Your E-mail"
              value={formData.email}
              onChange={handleInputChange}
            />
            {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}

            <textarea
              placeholder="Enter Your Message"
              className={`bg-transparent p-2 border-2 rounded-md text-white focus:outline-none ${
                formErrors.message ? 'border-red-500' : ''
              }`}
              name="message"
              id=""
              cols={30}
              rows={10}
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            {formErrors.message && <p className="text-red-500">{formErrors.message}</p>}

            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto items-center flex rounded-md duration-300 hover:scale-110"
            >
              Let's talk
            </button>
            {formSubmitted && <p className="text-green-500">Form submitted successfully!</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
