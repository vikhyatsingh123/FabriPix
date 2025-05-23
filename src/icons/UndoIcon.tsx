/**
 * @author Vikhyat Singh
 * @description Undo icon
 */

import React from 'react';

const UndoIcon: React.FC = () => {
	return (
		<svg width='20' height='20' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M11.2721 36.7279C14.5294 39.9853 19.0294 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C19.0294 6 14.5294 8.01472 11.2721 11.2721C9.61407 12.9301 6 17 6 17'
				stroke='#000000'
				strokeWidth='4'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path d='M6 9V17H14' stroke='#000000' strokeWidth='4' strokeLinecap='round' strokeLinejoin='round' />
		</svg>
	);
};

export default UndoIcon;
