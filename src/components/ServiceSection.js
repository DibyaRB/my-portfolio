import React from 'react';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

export default function ServiceSection() {
  return (
    <div>
      <SectionTitle heading="Services" subheading="What I really do?" />
      <div className="services__allItems">
        <ServicesSectionItem />
        <ServicesSectionItem />
        <ServicesSectionItem />
      </div>
    </div>
  );
}
