import React from 'react';
import Banner from '../../components/Banner/Banner';
import CardSection from '../../components/CardSection/CardSection';
import FormSection from '../../components/FormSection/FormSection';
import InfoSection from '../../components/InfoSection/InfoSection';
import './style.css';

export default function HomePage() {
  return (
    <>
      <Banner />
      <CardSection />
      <FormSection />
      <InfoSection />
    </>
  );
}
