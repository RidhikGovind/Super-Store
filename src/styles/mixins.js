import { css } from 'styled-components/macro';

const mixins = {
	flexCenter: css`
		display: flex;
		justify-content: center;
		align-items: center;
	`,

	flexBetween: css`
		display: flex;
		justify-content: space-between;
		align-items: center;
	`,

	yellowButton: css`
		background: #ffa200;
		color: white;
		font-size: 1.2rem;
		border: none;
		cursor: pointer;
		padding: 0.4rem 0.5rem;
		border-radius: 5px;
		margin: 1.5rem 0;
	`,
};

export default mixins;
