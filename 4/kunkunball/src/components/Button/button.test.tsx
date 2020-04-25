import React from 'react';
import { render } from "@testing-library/react";
import Button from './button'

test('our button is ok', () => {
  const wrapper = render(<Button>nbnb</Button>)
  const element = wrapper.queryByText('nbnb');
  expect(element).toBeTruthy()
})