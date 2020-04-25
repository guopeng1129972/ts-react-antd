import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import Button, { ButtonType, ButtonProps, ButtonSize } from './button'

const defaultProps = {
  onClick: jest.fn()
}
const testProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: 'like'
}

const disabledProps: ButtonProps = {
  disabled: true,
}

describe('test Button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button{...defaultProps}>nbnb</Button>)
    const element = wrapper.getByText('nbnb') as HTMLButtonElement;
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
    expect(element.disabled).toBeFalsy()
  }),
    it('should render the correct component based on different props', () => {
      const wrapper = render(<Button{...testProps}>nbnb</Button>)
      const element = wrapper.getByText('nbnb');
      expect(element).toBeInTheDocument();
      expect(element).toHaveClass('btn btn-lg btn-primary like');
    }),
    // it('should render the correct component based on different props', () => {
    //   const wrapper = render(<Button btnType={ButtonType.Link} href='http://www.baidu.com'>nbnb</Button>)
    //   const element = wrapper.getByText('Link');
    //   expect(element).toBeInTheDocument();
    //   expect(element.tagName).toEqual('A');
    //   expect(element).toHaveClass('btn btn-link');
    // }),
    it('should render disable button when disabled set be true', () => {
      const wrapper = render(<Button{...disabledProps}>nbnb</Button>)
      const element = wrapper.getByText('nbnb') as HTMLButtonElement;
      expect(element).toBeInTheDocument()
      expect(element.disabled).toBeTruthy()
      fireEvent.click(element)
      expect(disabledProps.onClick).not.toHaveBeenCalled()
    })

})