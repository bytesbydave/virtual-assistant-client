import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react';
import Todo from './todo2';

// Mock the fetch call since we don't want to make real API requests during tests
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ text: 'Test Todo', id: 1, done: false }]),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

describe('Todo Component', () => {
  it('fetches and displays todos on mount', async () => {
    const { findByText } = render(<Todo />);
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    expect(await findByText('Test Todo')).toBeInTheDocument();
  });

  it('filters todos based on search term', () => {
    const { getByText, getByPlaceholderText } = render(<Todo />);
    const input = getByPlaceholderText('Search'); // Assuming you add placeholder="Search" to your search input
    fireEvent.change(input, { target: { value: 'Test' } });
    expect(getByText('Test Todo')).toBeInTheDocument();
  });

  it('marks todo as done', () => {
    const { getByText } = render(<Todo />);
    fireEvent.click(getByText('Mark as Done'));
    expect(getByText('Done')).toBeInTheDocument();
  });

  it('deletes a todo', () => {
    const { getByText, queryByText } = render(<Todo />);
    fireEvent.click(getByText('Delete'));
    expect(queryByText('Test Todo')).toBeNull();
  });

  it('adds a new todo', () => {
    const { getByPlaceholderText, getByText } = render(<Todo />);
    const input = getByPlaceholderText('Add Item'); // Assuming you add placeholder="Add Item" to your addItem input
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.submit(getByPlaceholderText('Add Item'));
    expect(getByText('New Todo')).toBeInTheDocument();
  });
});
