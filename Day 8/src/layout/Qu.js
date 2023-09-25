import React from 'react';
import FAQ from '../layout/Faq'; // Import the FAQ component

const faqData = [
  {
    question: 'how to get appoinment?',
    answer: "The installation of a mobile app has become an integral part of the modern digital experience. Whether it's for Android or iOS devices, the process is remarkably user-friendly and accessible to virtually anyone. Users typically start by accessing their device's respective app store – the Google Play Store for Android or the Apple App Store for iOS. Once inside, they can search for the app they desire, guided by search bars, categories, and recommendations",
  },
  {
    question: 'How do I install Hyuio app',
    answer: "The installation of a mobile app has become an integral part of the modern digital experience. Whether it's for Android or iOS devices, the process is remarkably user-friendly and accessible to virtually anyone. Users typically start by accessing their device's respective app store – the Google Play Store for Android or the Apple App Store for iOS. Once inside, they can search for the app they desire, guided by search bars, categories, and recommendations",
  },
  {
    question: 'What is difference between diamond and gold cleaning?',
    answer: "The installation of a mobile app has become an integral part of the modern digital experience. Whether it's for Android or iOS devices, the process is remarkably user-friendly and accessible to virtually anyone. Users typically start by accessing their device's respective app store – the Google Play Store for Android or the Apple App Store for iOS. Once inside, they can search for the app they desire, guided by search bars, categories, and recommendations",
  },
];

function Qu() {
  return (
    <div className="Qu">
      <h1>Frequently Asked Questions</h1>
      <FAQ faqData={faqData} /> {/* Render the FAQ component */}
    </div>
  );
}

export default Qu;