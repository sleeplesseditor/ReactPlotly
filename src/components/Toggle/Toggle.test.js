import React from 'react';
import { shallow } from 'enzyme';
import { ToggleButton } from './Toggle';

const mockCallBack = jest.fn();

let buttonComponent;

beforeEach(() => {
    buttonComponent = shallow((<ToggleButton toggleSelected={mockCallBack} />))
})

describe('ToggleButton', () => {
    it('renders the component', () => {
        expect(buttonComponent).toHaveLength(1);
    })

    it('handles a click event when clicked', () => {
        buttonComponent.find('input').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });

    it('disables the toggle when passed the disabled prop', () => {
        const disabledbuttonComponent = shallow((<ToggleButton toggleSelected={mockCallBack} disabled />))
        const buttonProps = disabledbuttonComponent.props().children[1].props.children[0].props;
        expect(buttonProps.disabled).toBe(true);
    });
});