import React from 'react';
import './HomePage.css'
import FeatureItem from '../FeatureItem/FeatureItem';
const HomePage = () => {
  return (
    <div>
    <section className="bank-tree">
      <div className="bank-tree-content">
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
      </div>
    </section>
    <section className="features">
      <FeatureItem 
      imageSrc="/icon-chat.webp"
      imageAlt="Chat Icon"
      title="You are our #1 priority"
      text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
      />
      <FeatureItem 
      imageSrc="/icon-money.webp"
      imageAlt="Money Icon"
      title="More savings means higher rates"
      text="The more you save with us, the higher your interest rate will be!."
      />
      <FeatureItem 
      imageSrc="/icon-security.webp"
      imageAlt="Security Icon"
      title="Security you can trust"
      text="We use top of the line encryption to make sure your data and money is always safe."
      />
    </section>
    </div>
  );
};
export default HomePage; 

