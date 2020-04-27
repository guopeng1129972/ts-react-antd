import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import Alert, { altSty, AlertProps, alertType } from './alert'

const defaultPorops = {
  onClick: jest.fn(),

}
const alertProps = {
  altSt: altSty.no,
  altype: alertType.Success,
}

describe('test alert component', () => {
  it('test should rander alet', () => {
    const wrapper = render(<Alert {...defaultPorops}>alert</Alert>);
    const element = wrapper.getByText('alert');
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('SPAN')
    expect(element).toHaveClass('alt-no-span')
  }),
    it('test should alet 1', () => {
      const wrapper = render(<Alert {...alertProps}>alert</Alert>);
      const element = wrapper.getByText('alert');
      expect(element).toBeInTheDocument()
      expect(element.tagName).toEqual('SPAN')
      expect(element).toHaveClass('alt-no-span')
    })
});