import { configure, addDecorator } from '@storybook/react';

addDecorator((story) => {
  return (story());
});

function loadStories() {
  require('../stories/Tipso');
}

configure(loadStories, module);
