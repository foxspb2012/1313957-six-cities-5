import React from 'react';
import Message from './message';
import renderer from 'react-test-renderer';

describe(`Should Message render correctly`, () => {
  it(`Should Message render correctly with text`, () => {
    const tree = renderer
      .create(
          <Message
            title={`Text`}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
