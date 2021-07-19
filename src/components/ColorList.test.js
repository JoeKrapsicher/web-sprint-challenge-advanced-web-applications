import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { fireEvent, render, screen, waitFor} from "@testing-library/react";
import ColorList from './ColorList';

import { fetchColorService as mockFetch } from '../services/fetchColorService'
import EditMenu from './EditMenu';

jest.mock(("../services/fetchColorService"))

test("Renders an empty list of colors without errors", () => {
    mockFetch.mockResolvedValueOnce({ data: []})
    render(<ColorList/>)
    const heading = screen.getByText(/colors:/i);
    expect(heading).toBeTruthy();
});

test("Renders a list of colors without errors", () => {
    mockFetch.mockResolvedValueOnce({ data: []})
    render(<ColorList/>)
    await waitFor(() => {
        const heading = screen.getByText(/colors:/i);
        expect(heading).toBeTruthy();
    })
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
    render(<EditMenu/>)
    const EditMenu = <EditMenu/>
    const button = screen.getByRole('button', /edit/i)
    fireEvent(button);
    expect(EditMenu).toBeCalled();
    fireEvent(button);
    expect(EditMenu).not.toBeCalled();

});
