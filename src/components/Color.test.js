import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';
import { fetchColorService as mockFetch } from '../services/fetchColorService'


const fakeColor = {}

test("Renders without errors with blank color passed into component", () => {
    render(<Color props={fakeColor}/>)
});
  
test("Renders the color passed into component", () => {
    mockFetch.mockResolvedValueOnce(data)
    render(<Color/>)
    await waitFor((() => {}));
    const color = screen.getByText(/color/i);
    expect(color).toBeTruthy();
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
    render(<Color handleDelete={handleDelete} toggleEdit={toggleEdit}/>)
    const button = screen.getByText(/x/i);
    fireEvent(button)
    expect(handleDelete).toHaveBeenCalled();
    expect(toggleEdit).toHaveBeenCalled();
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
    render(<Color handleDelete={handleDelete} toggleEdit={toggleEdit}/>)
    const button = screen.getByText(/color/i);
    fireEvent(button)
    expect(handleDelete).toHaveBeenCalled();
    expect(toggleEdit).toHaveBeenCalled();
});