import React from 'react';

import { storiesOf } from '@storybook/react';

import Card from '../app/components/Card';

storiesOf('Card', module)
  .addDecorator((story) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {story()}
    </div>
  ))
  .add('Empty card', () => <Card></Card>);
