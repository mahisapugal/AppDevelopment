import React from 'react';
import './ServicePage.css'; // Create a CSS file for styling
import serviceImage1 from '../Asset/b.jpg'; // Import your image files
import serviceImage2 from '../Asset/bi.jpg';
import serviceImage3 from '../Asset/c.jpg';

const ServicePage = () => {
  return (
    <div className="service-page">
      <h1>Our Services on</h1>
      <div className="service-container">
        <div className="service">
          <div className="service-image" style={{ backgroundImage: `url(${serviceImage1})` }}></div>
          <h2> Bus Service </h2>
          <p>In a vehicle service center, bus service involves comprehensive maintenance and repairs tailored to the unique needs of buses and their systems, ensuring their safety, reliability, and longevity. Expert technicians and specialized equipment are employed to address the specific challenges of maintaining these essential public transportation vehicles.</p>
        </div>
        <div className="service">
          <div className="service-image" style={{ backgroundImage: `url(${serviceImage2})` }}></div>
          <h2>Bike Service</h2>
          <p>Bike service in a vehicle service center involves meticulous inspections, tune-ups, and repairs to keep motorcycles running at peak performance and safety. Skilled technicians use specialized tools and expertise to address mechanical, electrical, and aesthetic aspects, catering to the needs of motorcycle enthusiasts and commuters alike.</p>
        </div>
        <div className="service">
          <div className="service-image" style={{ backgroundImage: `url(${serviceImage3})` }}></div>
          <h2>Car service</h2>
          <p>Car service in a vehicle service center encompasses routine maintenance, diagnostics, and repairs to ensure cars operate efficiently and safely. Expert mechanics utilize advanced technology and industry-standard practices to keep vehicles in top condition, offering peace of mind to drivers.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;