import React, { useState } from 'react';
import '../components/Campaign.css';

const CreateCampaignPage = () => {
  const [userName, setUserName] = useState('');
  const [campaignName, setCampaignName] = useState('');
  const [description, setDescription] = useState('');
  const [goal, setGoal] = useState('');
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors = {};
    if (!campaignName) {
      validationErrors.campaignName = 'Campaign name is required';
    }
    if (!description) {
      validationErrors.description = 'Description is required';
    }
    if (!goal) {
      validationErrors.goal = 'Goal is required';
    }
    if (!image) {
      validationErrors.image = 'Image or video is required';
    }

    setErrors(validationErrors);

    // If there are no validation errors, perform necessary actions with the form data
    if (Object.keys(validationErrors).length === 0) {
      const formData = new FormData();
      formData.append("userName", userName);
      formData.append("campaignName", campaignName);
      formData.append("description", description);
      formData.append("goal", goal);
      formData.append("image", image);
      // All fields are filled, proceed with form submission
      console.log('Campaign Name:', campaignName);
      console.log('Description:', description);
      console.log('Goal:', goal);
      console.log('Image:', image);
      
    try {
      const response = await fetch('http://localhost:5000/api/campaigns/create', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        alert('Campaign created successfully');
        setSubmitted(true);
      } else {
        alert('Campaign creation failed: ' + data.message);
      }
    } catch (error) {
      console.error("Error creating campaign:", error);
    }
      setSubmitted(true);
    }
  };

  return (
    <div className='campaign-diver'>
      <h1>CREATE CAMPAIGN</h1>
      <form onSubmit={handleSubmit} className='campaign-form'>
        
        <label className='campaign-driver'>
          CAMPAIGN NAME:<br />
          <input
            type="text"
            value={campaignName}
            onChange={(e) => setCampaignName(e.target.value)}
          />
        </label>
        {errors.campaignName && <p>{errors.campaignName}</p>}
        
        <label className='campaign-driver'>
          DESCRIPTION:<br />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        {errors.description && <p>{errors.description}</p>}
       
        <label className='campaign-driver' >
          GOAL FUND(In Nrs.):<br />
          <input
            type="integer"
            maxLength={6}
            value={goal}
            onChange={(e) => {
              const value = e.target.value;
              if (value.length <= 6 && /^\d+$/.test(value)) {
                setGoal(value);
              }
            }}
          />
        </label>
        {errors.goal && <p>{errors.goal}</p>}
        
        <label className='campaign-driver'>
          IMAGE:<br />
          <input
            type="file" accept='image/*' className='choose'
            onChange={(e) => setImage(e.target.files[0])}
            
          />
        </label>
        {errors.image && <p>{errors.image}</p>}
        
        <button className="button-name" type="submit" disabled={Object.keys(errors).length > 0}>
          Create Campaign
        </button>
      </form>
      {submitted && <p>Campaign created successfully!</p>}
    </div>
  );
};

export default CreateCampaignPage;