// dataMappings.js
export const dataMapping = {
  articles: {
    imageUrl: 'images[0].url',
    name: 'title',
    city: 'location.city',
    description: 'summary',
  },
  lessonPlans: {
    imageUrl: 'coverImage.url',
    name: 'title',
    city: 'parks[0]',
    description: 'questionObjective',
  },
  campGround: {
    imageUrl: 'images[0].url',
    name: 'name',
    city: 'addresses[0]?.city',
    description: 'description',
  },
  events: {
    imageUrl: 'images[0].url',
    name: 'title',
    city: 'location',
    description: 'description',
  },
  parks: {
    imageUrl: 'images[0].url',
    name: 'fullName',
    city: `addresses[0]?.city`,
    description: 'description',
  },
};

export const getDefaultImageUrl = () =>
  'https://static1.anpoimages.com/wordpress/wp-content/uploads/2021/02/06/national-park-service-hero.jpg';
