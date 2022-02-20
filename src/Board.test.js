import React from 'react';
import { render } from '@testing-library/react';
import Board from './Board';

describe('<Board /> rendering', function () {
  describe('initial board, all lit, all unlit', function () {
    it('renders without crashing', function () {
      render(<Board />);
    });

    it('matches snapshot for a fully lit board', function () {
      const { asFragment } = render(<Board chanceLightStartsOn={1} />);
      expect(asFragment()).toMatchSnapshot();
    });
    it('matches snapshot for a fully unlit board', function () {
      const { asFragment } = render(<Board chanceLightStartsOn={0} />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
