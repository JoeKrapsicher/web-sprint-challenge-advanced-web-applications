import React from 'react';
import MutationObserver from 'mutationobserver-shim';
import { fetchColorService as mockFetch } from '../services/fetchColorService'
import { render, screen} from "@testing-library/react";
import BubblePage from './BubblePage';

test("Renders without errors", ()=> {
    render(<BubblePage/>)
});

test("Renders appropriate number of colors passed in through mock", async ()=> {
    mockFetch.mockResolvedValueOnce({ data: [] });
    render(<BubblePage/>)
    const colorAmount = data.map((colors)=> {
        colors.id.length
    }) 
    expect(colorAmount).toBeGreaterThanOrEqual(data.length)
    //Keep in mind that our service is called on mount for this component.
});