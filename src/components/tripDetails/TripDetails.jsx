import { useParams } from 'react-router-dom';
import TripPackages from '../../FackApis/StoriesData';
import './tripDetails.css';
import { Link } from 'react-router-dom';

export default function TripDetails() {
  const { id } = useParams();
  const trip = TripPackages.find(trip => trip.id === parseInt(id));

  if (!trip) {
    return (
      <div className="trip-not-found">
        <h2>Trip not found</h2>
        <p>Sorry, we couldn't find the trip you're looking for.</p>
        <Link to="/home" className="btn btn-primary">
          Return to Home
        </Link>
      </div>
    );
  }
  

  return (
    <div className="trip-details-container">
      <div className="trip-header">
        <img src={trip.image} alt={trip.location} />
        <div className="trip-title">
          <h1>{trip.location}</h1>
        </div>
      </div>

      <div className="trip-content">
        <div className="trip-stats">
          <div className="stat-card">
            <h3>Duration</h3>
            <p>{trip.days} Days</p>
          </div>
          <div className="stat-card">
            <h3>Group Size</h3>
            <p>{trip.people} People</p>
          </div>
          <div className="stat-card">
            <h3>Cost per Person</h3>
            <p>₹{trip.expensePerPerson}</p>
          </div>
          <div className="stat-card">
            <h3>Weather</h3>
            <p>{trip.weather}</p>
          </div>
        </div>

        <div className="trip-description">
          <h2>About This Trip</h2>
          <p>{trip.description}</p>
        </div>

        <div className="trip-itinerary">
          <h2>Itinerary</h2>
          <div className="itinerary-list">
            {trip.itinerary.map((day, index) => (
              <div key={index} className="itinerary-day">
                <h3>{day}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="trip-additional-info">
          <div className="info-card">
            <h2>Best Time to Visit</h2>
            <p>{trip.bestTimeToVisit}</p>
          </div>
        </div>
      </div>
    </div>
  );
}