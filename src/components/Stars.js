import React, { useState, useEffect } from 'react';
import starEmpty from '../assets/starEmpty.svg';
import starFull from '../assets/starFull.svg';
import starHalf from '../assets/starHalf.svg';
import styled from 'styled-components';

const StarContainer = styled.div`
	display: flex;
`;

const starStyle = {
	width: '30px',
	height: '30px',
};

function Stars({ rating }) {
	let arr = [];

	const StarLoop = (starName, repeatNum) => {
		let num = repeatNum;
		for (let i = 0; i < num; i++) {
			arr.push(<img src={starName} style={starStyle} />);
		}
		num = 0;
		return arr;
	};

	return (
		<StarContainer>
			{rating === 0 ? <div>{StarLoop(starEmpty, 5)}</div> : ''}
			{rating === 0.5 ? <div>{ StarLoop(starHalf, 1),StarLoop(starEmpty,4)}</div>: ''}
			{rating === 2 ? (
				<div>{(StarLoop(starFull, 2), StarLoop(starEmpty, 3))}</div>
			) : (
				''
			)}
			{rating === 2.5 ? (
				<div>{(StarLoop(starFull, 2), StarLoop(starHalf, 1), StarLoop(starEmpty, 2))}</div>
			) : (
				''
			)}
			{rating === 3 ? (
				<div>{(StarLoop(starFull, 3), StarLoop(starEmpty, 2))}</div>
			) : (
				''
			)}
			{rating === 3.5 ? (
				<div>{(StarLoop(starFull, 3),StarLoop(starHalf, 1),  StarLoop(starEmpty, 1))}</div>
			) : (
				''
			)}
			{rating === 4 ? (
				<div>{(StarLoop(starFull, 4), StarLoop(starEmpty, 1))}</div>
			) : (
				''
			)}
			{rating === 4.5 ? (
				<div>{(StarLoop(starFull, 4),StarLoop(starHalf, 1))}</div>
			) : (
				''
			)}
			{rating === 5 ? (
				<div>{(StarLoop(starFull, 5))}</div>
			) : (
				''
			)}
		</StarContainer>
	);
}

export default Stars;

{
	/* <img src={starEmpty} style={starStyle}/> */
}
