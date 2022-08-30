import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../../styles/ContractForm.css';
import '../../../styles/inputanimation.css';
import '../../../styles/borderanimation.css';

export default function ContractForm () {

    const navigate = useNavigate();

    const [formValue, setformValue] = useState({
      FIRSTNAME: '',
      LASTNAME: '',
      GOING: ''
    });
    
    const [goingBox, setGoingBox] = useState('');

    const handleCheckbox = (e) => {
      setGoingBox ( e.target.value )
    }
    
    const handleChange = (event) => {
      setformValue({
        ...formValue,
        [event.target.name]: event.target.value
      });
    }
  
    
    function getFormData(object) {
      const formData = new FormData();
      Object.keys(object).forEach(key => formData.append(key, object[key]));
      return formData;
    }

    const submitContract = (e) => {
      e.preventDefault();
      const data = getFormData({
        First: formValue.FIRSTNAME,
        Last: formValue.LASTNAME,
        Going: goingBox
      });
      fetch('https://script.google.com/macros/s/AKfycbzwBX4jfiraBaXpSNBD7Dld5vgYdGa1FCC4D-QlpGGBlV2U_3Py_m4OhvMHBmH18QM7/exec', {
            mode: 'no-cors',
            method: 'post',
            body: data
        })
        .then(navigate('/thankyou'))
        .then(() => {
          alert("Success!")
        })
        
    }

    return (
      <div className="flex flex-col justify-center h-full mx-8 md:mx-16 pt-4 pb-8">
        <div className="webdesigntuts-workshop flex flex-col justify-center lg:justify-self-start pt-2">
          <form
          onSubmit={submitContract}
          className=" flex flex-col justify-center text-black"
          id="sub-form">
            <span><h1 className="text-2xl text-center text-black pb-4">Please RSVP Everyone Who Is Going!</h1><br /></span>
            <label for="names" className="leading-7 text-xs md:text-sm py-1">First Name</label>
            <input 
            value={formValue.FIRSTNAME}
            onChange={handleChange}
            type="text" id="first-name" name="FIRSTNAME" className="w-full bg-white bg-opacity-90 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black md:py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
            <label for="names" className="leading-7 text-xs md:text-sm py-1">Last Name</label>
            <input 
            value={formValue.LASTNAME}
            onChange={handleChange}
            type="text" id="last-name" name="LASTNAME" className="w-full bg-white bg-opacity-90 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black md:py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />

            <div className="flex">
              <div class="form-control">
                <label class="label cursor-pointer justify-start">
              
                  <input type="radio" name="radio-6"
                  onChange={handleCheckbox}
                  class="checked:bg-green-500 "
                  Value="Yes"
                  required />
                  <span class="label-text ml-2">Yes, I'm Going</span>
                </label>
              </div>
              <div class="form-control">
                <label class="label cursor-pointer justify-start">
              
                  <input
                  type="radio"
                  onChange={handleCheckbox}
                  name="radio-6"
                  class="checked:bg-green-500 "
                  value="No"
                  required />
                  <span class="label-text ml-2">No, I Can't</span>
                </label>
              </div>
            </div>

            <button 
            type="submit" className="btn hover:bg-[#8fe1ff] bg-slate-500 btn-active-secondary text-lg hover:text-black text-primary-focus mt-2 mb-2">Submit</button>
            
          </form>
        </div>
      </div>
    )
}