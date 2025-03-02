import { faker } from '@faker-js/faker';

const getImage = () => faker.image.animals(644, 362, true);
const getType = () => faker.animal.type();
const getUrl = () => faker.internet.url();
const getText = () => faker.lorem.sentences();
const getTitle = (type) => faker.animal[type]();

const data = [...new Array(100)].map((_, index) => {
  const type = getType();
  return {
    type,
    id: index + 1,
    url: getUrl(),
    title: getTitle(type),
    description: getText(),
    image: getImage(),
  };
});

export const fetchData = (searchQuery) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredData = data.filter(
        (item) =>
          item.type.toLowerCase() == searchQuery.toLowerCase() ||
          item.title.toLowerCase() == searchQuery.toLowerCase(),
      );
      resolve(filteredData);
    }, 2000);
  });
};

export default data;
