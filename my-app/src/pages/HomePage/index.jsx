import React from 'react';
import Banner from '../components/Banner';
import IntroSection from '../components/IntroSection';
import CardSection from '../components/CardSection';
import FormSection from '../components/FormSection';
import InfoSection from '../components/InfoSection';

export default function HomePage() {
  return (
    <>
      <Banner />
      <IntroSection />
      <CardSection />
      <FormSection />
      <InfoSection />
    </>
  );
}
