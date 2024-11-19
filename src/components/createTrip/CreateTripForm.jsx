import { useState } from 'react';
import './createTripForm.css';
import TripPackages, { addNewTrip } from '../../FackApis/StoriesData';

export default function CreateTripForm({ onClose }) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [tripData, setTripData] = useState({
    id: TripPackages.length + 1,
    location: '',
    days: 0,
    people: 0,
    description: '',
    expensePerPerson: 0,
    weather: '',
    itinerary: [''],
    bestTimeToVisit: '',
    image: null,
    storyProfile: null
  });

  const handleItineraryChange = (index, value) => {
    const newItinerary = [...tripData.itinerary];
    newItinerary[index] = value;
    setTripData({ ...tripData, itinerary: newItinerary });
  };

  const addItineraryDay = () => {
    setTripData({
      ...tripData,
      itinerary: [...tripData.itinerary, '']
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Convert file to URL for storage
    const imageUrl = tripData.image ? URL.createObjectURL(tripData.image) : null;
    const profileUrl = tripData.storyProfile ? URL.createObjectURL(tripData.storyProfile) : null;

    // Create new trip object
    const newTrip = {
      ...tripData,
      image: imageUrl,
      storyProfile: profileUrl
    };

    // Add to TripPackages using the exported function
    addNewTrip(newTrip);

    // Show confirmation
    setShowConfirmation(true);

    // Close form after 2 seconds
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div className="create-trip-overlay">
      <div className="create-trip-modal">
        {showConfirmation ? (
          <div className="confirmation-message">
            <h2>Trip Created Successfully!</h2>
            <p>Your trip to {tripData.location} has been added.</p>
          </div>
        ) : (
          <>
            <h2>Create New Trip</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  value={tripData.location}
                  onChange={(e) => setTripData({ ...tripData, location: e.target.value })}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Days</label>
                  <input
                    type="number"
                    value={tripData.days}
                    onChange={(e) => setTripData({ ...tripData, days: parseInt(e.target.value) })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Group Size</label>
                  <input
                    type="number"
                    value={tripData.people}
                    onChange={(e) => setTripData({ ...tripData, people: parseInt(e.target.value) })}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={tripData.description}
                  onChange={(e) => setTripData({ ...tripData, description: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label>Cost per Person (₹)</label>
                <input
                  type="number"
                  value={tripData.expensePerPerson}
                  onChange={(e) => setTripData({ ...tripData, expensePerPerson: parseInt(e.target.value) })}
                  required
                />
              </div>

              <div className="form-group">
                <label>Weather</label>
                <input
                  type="text"
                  value={tripData.weather}
                  onChange={(e) => setTripData({ ...tripData, weather: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label>Itinerary</label>
                {tripData.itinerary.map((day, index) => (
                  <input
                    key={index}
                    type="text"
                    value={day}
                    placeholder={`Day ${index + 1}`}
                    onChange={(e) => handleItineraryChange(index, e.target.value)}
                    required
                  />
                ))}
                <button type="button" className="btn" onClick={addItineraryDay}>
                  Add Day
                </button>
              </div>

              <div className="form-group">
                <label>Best Time to Visit</label>
                <input
                  type="text"
                  value={tripData.bestTimeToVisit}
                  onChange={(e) => setTripData({ ...tripData, bestTimeToVisit: e.target.value })}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Trip Image</label>
                  <input
                    type="file"
                    onChange={(e) => setTripData({ ...tripData, image: e.target.files[0] })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Profile Image</label>
                  <input
                    type="file"
                    onChange={(e) => setTripData({ ...tripData, storyProfile: e.target.files[0] })}
                    required
                  />
                </div>
              </div>

              <div className="form-buttons">
                <button type="submit" className="btn btn-primary">Create Trip</button>
                <button type="button" className="btn" onClick={onClose}>Cancel</button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}