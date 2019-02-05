import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect'
import Dashboard from '../Dashboard'

afterEach(cleanup)

describe('checks if it displays the balls and strikes', () => {
    test('checks if balls displays', () => {
      const component = render(<Dashboard balls={1} />)
      const balls = component.getByTestId('balls');
      expect(balls).toHaveTextContent('Balls: 1');
    });
  
    test('checks if strikes displays', () => {
    const component = render(<Dashboard strikes={1} />);
    const strikes = component.getByTestId('strikes')
    expect(strikes).toHaveTextContent('Strikes: 1')
  });
})

describe('Clicking Hit, Strike, Ball, Foul', () => {
  describe('clicking hit', () => {
    test('checks if strikes and balls resets to zero when  Hit is clicked', () => {
      const component = render(<Dashboard strikes={2} balls={2} />);
      const strikes = component.getByTestId('strikes');
      const balls = component.getByTestId('balls');
      const button = component.getByText('Hit');
      fireEvent.click(button);
      expect(strikes).toHaveTextContent('Strikes: 0')
      expect(balls).toHaveTextContent('Balls: 0');
    })
  });
  
  describe('clicking Strike', () => {
    test('checks if strike and ball go back to zero when 3 strikes are reached', () => {
      const component = render(<Dashboard strikes={2} balls={2}/>);
      const strikes = component.getByTestId('strikes')
      const balls = component.getByTestId('balls');
      const button = component.getByText('Strike');
      fireEvent.click(button);
      expect(strikes).toHaveTextContent('Strikes: 0')
      expect(balls).toHaveTextContent('Balls: 0');
    })
    
    test('checks if strike goes up by one when clicking on strike', () => {
      const component = render(<Dashboard strikes={0} />);
      const strikes = component.getByTestId('strikes')
      const button = component.getByText('Strike')
      fireEvent.click(button);
      expect(strikes).toHaveTextContent('Strikes: 1')
    })
  })
  
  describe('clicking Ball', () => {
    test('checks if strike and ball go back to zero when four balls are reached', () => {
      const component = render(<Dashboard balls={3} />)
      const balls = component.getByTestId('balls');
      const button = component.getByText('Ball')
      fireEvent.click(button);
      expect(balls).toHaveTextContent('Balls: 0');
    })
    
    test('checks if the ball count goes up by one', () => {
      const component = render(<Dashboard balls={0} />)
      const balls = component.getByTestId('balls');
      const button = component.getByText('Ball')
      fireEvent.click(button);
      expect(balls).toHaveTextContent('Balls: 1')
    })
  })

  describe('clicking Foul', () => {
    test('checks if strike and ball resets to zero when there are two strikes and they hit a foul', () => {
      const component = render(<Dashboard balls={3} strikes={2} />);
      const strikes = component.getByTestId('strikes')
      const balls = component.getByTestId('balls');
      const button = component.getByText('Foul');
      fireEvent.click(button);
      expect(strikes).toHaveTextContent('Strikes: 0')
      expect(balls).toHaveTextContent('Balls: 0');
    })
  })
})