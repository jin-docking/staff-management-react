import React, { useState } from 'react';
import './UserAddForm.css';

const UserAddForm = () => {
  const [userImage, setUserImage] = useState(null);

  const imageUpload = (e) => {
    setUserImage(e.target.files[0]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', { ...formData, profile_pic: userImage });
  };

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    conformPassword: '',
    role: 'administrator',
    address: '',
    designation: '',
    pincode: '',
    joining_date: '',
    jdate_of_birth: '',
    father: '',
    mother: '',
    spouse: '',
    children: '',
    aadhar: '',
    pan: '',
    profile_pic: '',
  });

  return (
    <div className='user-form'>
      <form>
        <div className='user-row-1'>
          <label>First Name:</label>
          <div className='user-firstname'>
            <input type='text' name='first_name' value={formData.first_name} onChange={handleInputChange} />
          </div>

          <label>Last Name:</label>
          <div className='user-lastname'>
            <input type="text" name="last_name" value={formData.last_name} onChange={handleInputChange} />
          </div>
        </div>

        <div className='user-row-1'>
          <label>Email:</label>
          <div className='user-email'>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
          </div>

          <label>Password:</label>
          <div className='user-password'>
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
          </div>
        </div>

        <div className='user-row-1'>
          <label>Role:</label>
          <div className='user-role'>
            <select name="role" value={formData.role} onChange={handleInputChange}>
              <option value="administrator">Administrator</option>
              <option value="hr">HR</option>
              <option value="staffs">Staffs</option>
            </select>
          </div>

          <label>address:</label>
          <div className='user-address'>
            <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
          </div>
        </div>

        <div className='user-row-1'>
          <label>designation:</label>
          <div className='user-designation'>
            <input type='text' name='designation' value={formData.designation} onChange={handleInputChange} />
          </div>

          <label>pincode:</label>
          <div className='user-pincode'>
            <input type="number" name="pincode" value={formData.pincode} onChange={handleInputChange} />
          </div>
        </div>


        <div className='user-row-1'>
          <label>joining date:</label>
          <div className='user-joining_date'>
            <input type='datetime-local' name='joining_date' value={formData.joining_date} onChange={handleInputChange} />
          </div>

          <label>date of birth:</label>
          <div className='user-date_of_birth'>
            <input type="datetime-local" name="jdate_of_birth" value={formData.jdate_of_birth} onChange={handleInputChange} />
          </div>
        </div>


        <div className='user-row-1'>
          <label>father Name:</label>
          <div className='user-father'>
            <input type='text' name='father' value={formData.father} onChange={handleInputChange} />
          </div>

          <label>mother name:</label>
          <div className='user-mother'>
            <input type="text" name="mother" value={formData.mother} onChange={handleInputChange} />
          </div>
        </div>

        <div className='user-row-1'>
          <label>spouse Name:</label>
          <div className='user-spouse'>
            <input type='text' name='spouse' value={formData.spouse} onChange={handleInputChange} />
          </div>

          <label>children name:</label>
          <div className='user-children'>
            <input type="text" name="children" value={formData.children} onChange={handleInputChange} />
          </div>
        </div>

        <div className='user-row-1'>
          <label>aadhar card:</label>
          <div className='user-aadhar'>
            <input type='text' name='aadhar' value={formData.aadhar} onChange={handleInputChange} />
          </div>

          <label>pan card:</label>
          <div className='user-pan'>
            <input type="text" name="pan" value={formData.pan} onChange={handleInputChange} />
          </div>
        </div>


        <div className='user-row-1'>
          <label>Profile Pic:</label>
          <div className='user-profile_pic'>
            <input type='file' name='profile_pic' onChange={imageUpload} />
          </div>
        </div>


        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserAddForm;
