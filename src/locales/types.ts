export type Translations = {
  nav: {
    home: string;
    services: string;
    about: string;
    gallery: string;
    contact: string;
    bookEvent: string;
  };
  hero: {
    subtitle: string;
    servingArea: string;
    exploreServices: string;
    bookNow: string;
  };
  services: {
    heading: string;
    items: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  about: {
    heading: string;
    paragraph: string;
    perfectFor: string;
    tags: string[];
  };
  howItWorks: {
    heading: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  gallery: {
    heading: string;
    labels: string[];
    followInstagram: string;
  };
  testimonials: {
    heading: string;
    items: {
      quote: string;
      author: string;
    }[];
  };
  contact: {
    heading: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    eventTypeLabel: string;
    eventTypePlaceholder: string;
    eventTypes: string[];
    eventDateLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    sendingButton: string;
    successMessage: string;
    errorMessage: string;
    locationText: string;
    messageUsText: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    links: { name: string; href: string }[];
    followUs: string;
    copyright: string;
  };
};
