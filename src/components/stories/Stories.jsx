import './stories.css';
import { useNavigate } from 'react-router-dom';

// Import Swiper components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Basic Swiper styling
import 'swiper/css/navigation'; // Include this if you use navigation
import 'swiper/css/pagination'; // Include this if you use pagination

// Fake API Data
import TripPackages from '../../FackApis/StoriesData';

// Components
import UserStory from './UserStory';

export default function Stories() {
  const navigate = useNavigate();

  const handleTripClick = (tripId) => {
    console.log('Trip clicked:', tripId);
    navigate(`/home/trip/${tripId}`);
  };

  return (
    <div className='stories'>
      <UserStory />

      <Swiper
        style={{ width: '80%' }}
        slidesPerView={4}
        spaceBetween={10}
      >
        {
          [...TripPackages].map(trip => (
            <SwiperSlide key={trip.id}>
              <div 
                className="story" 
                onClick={() => handleTripClick(trip.id)}
                style={{ cursor: 'pointer' }}
              >
                <div className="user">
                  <img src={trip.storyProfile} alt={`Profile`} />
                </div>
                <img src={trip.image} alt={trip.location} />
                <h5>{trip.location}</h5>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}
