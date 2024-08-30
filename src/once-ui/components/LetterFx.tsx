'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';

const allowedCharacters = ['X', '$', '@', 'a', 'H', 'z', 'o', '0', 'y', '#', '?', '*', '0', '1', '+'];

function getRandomCharacter(): string {
	const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
	return allowedCharacters[randomIndex];
}

function createEventHandler(
	originalText: string,
	setText: React.Dispatch<React.SetStateAction<string>>,
	inProgress: boolean,
	setInProgress: React.Dispatch<React.SetStateAction<boolean>>
) {
	const BASE_DELAY = 30;
	const REVEAL_DELAY = 30;
	const INITIAL_RANDOM_DURATION = 300;

	const generateRandomText = () =>
		originalText
		.split('')
		.map((char) => (char === ' ' ? ' ' : getRandomCharacter()))
		.join('');

	return async () => {
		if (inProgress) return;

		setInProgress(true);

		let randomizedText = generateRandomText();
		const endTime = Date.now() + INITIAL_RANDOM_DURATION;

		while (Date.now() < endTime) {
			setText(randomizedText);
			await new Promise((resolve) => setTimeout(resolve, BASE_DELAY));
			randomizedText = generateRandomText();
		}

		for (let i = 0; i < originalText.length; i++) {
			await new Promise((resolve) => setTimeout(resolve, REVEAL_DELAY));
			setText(
				`${originalText.substring(0, i + 1)}${randomizedText.substring(i + 1)}`
			);
		}

		setInProgress(false);
	};
}

type LetterFxProps = {
	children: string;
};

function LetterFx({ children }: LetterFxProps) {
	const [text, setText] = useState<string>(children);
	const [inProgress, setInProgress] = useState<boolean>(false);
	const originalText = useRef<string>(children);

	const handleMouseOver = useCallback(createEventHandler(
		originalText.current,
		setText,
		inProgress,
		setInProgress
	), [inProgress]);

	useEffect(() => {
		setText(originalText.current);
	}, [children]);

	return (
		<span onMouseOver={handleMouseOver}>
			{text}
		</span>
	);
}

export { LetterFx }