import { useState, useEffect } from 'react';
import { analyzeText, calculateReadingTime } from '../utils/textAnalysis';
import './WordCounter.css';

/**
 * WordCounter Component
 * - Provides a live text area for users to enter text
 * - Displays statistics: chracter, word, sentence, paragraph, counts, and estimated reading time
 */

const WordCounter = () => {
	const [text, setText] = useState<string>('');
	const [stats, setStats] = useState({
		characters: 0,
		words: 0,
		sentences: 0,
		paragraphs: 0,
		readingTime: 0
	});

	// Update statistics whenever the input text changes
	useEffect(() => {
		const textStats = analyzeText(text);
		const readingTime = calculateReadingTime(textStats.words);
		setStats({ ...textStats, readingTime });
	}, [text]);

	// Handle textarea input changes
	const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setText(e.target.value);
	};


	// Returns the current UTC date and time in YYYY-MM-DD HH:MM:SS format
	const getCurrentDate = (): string => {
		const date = new Date();
		const year = date.getUTCFullYear();
		const month = String(date.getUTCMonth() + 1).padStart(2, '0');
		const day = String(date.getUTCDate()).padStart(2, '0');
		const hours = String(date.getUTCHours()).padStart(2, '0');
		const minutes = String(date.getUTCMinutes()).padStart(2, '0');
		const seconds = String(date.getUTCSeconds()).padStart(2, '0');
		return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
	};

	return (
		<div className="word-counter">
			<div className="textarea-container">
				<textarea
					value={text}
					onChange={handleTextChange}
					placeholder="Enter your text here..."
					rows={10}
				/>
			</div>

			<div className="stats-container">
				<div className="stat-box">
					<h3>Characters</h3>
					<p>{stats.characters}</p>
				</div>
				<div className="stat-box">
					<h3>Words</h3>
					<p>{stats.words}</p>
				</div>
				<div className="stat-box">
					<h3>Sentences</h3>
					<p>{stats.sentences}</p>
				</div>
				<div className="stat-box">
					<h3>Paragraphs</h3>
					<p>{stats.paragraphs}</p>
				</div>
				<div className="stat-box">
					<h3>Reading Time</h3>
					<p>{stats.readingTime} min</p>
				</div>
			</div>

			{/* Display the current UTC timestamp as metadata */}
			<div className="metadata">
				<p>Last updated: {getCurrentDate()} (UTC)</p>
			</div>
		</div>
	);
};

export default WordCounter;
