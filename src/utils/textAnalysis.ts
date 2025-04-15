/**
 * src/utils/textAnalysis.ts
 * Text analysis utility functions
 * Created by hosu-kim
 * Date: 2025-04-15 19:36:22 (UTC)
 * 
 * - Provides functions to calculate character, word, sentence, and paragraph counts.
 * - Sentence count: Only counts when [.!?。] is followed by a space and then a character (does not count abbreviations as sentences).
 */

interface TextStats {
	characters: number;   // Total number of characters (including spaces)
	words: number;        // Total number of words
	sentences: number;    // Total number of sentences
	paragraphs: number;   // Total number of paragraphs
}

/**
 * Analyzes the given text and returns statistics for characters, words, sentences, and paragraphs.
 * @param text - The text to analyze
 * @returns TextStats object with counts
 */
export function analyzeText(text: string): TextStats {
	// Character count (including spaces)
	const characters = text.length;

	// Word count (normalize consecutive spaces, split by space)
	const words = text.trim() === '' ? 0 : text.trim().replace(/\s+/g, ' ').split(' ').length;

	// Sentence count: Only when [.!?。] is followed by a space and then a non-space character.
    // Example: "Hello. World" → 1, "U.S.A." → 0
	const sentencePattern = /[.!?。]\s+[^\s]/g;
    let sentences = 0;
    if (text.trim() !== '') {
        sentences = (text.match(sentencePattern)?.length || 0);
		// If the text ends with punctuation, count one more sentence
        if (/[.!?。]\s*$/.test(text)) {
            sentences += 1;
        }
    }

	// Paragraph count: separated by two or more line breaks
	const paragraphs = text.trim() === '' ? 0 : text.split(/\n\s*\n/).filter(Boolean).length || 1;

	return { characters, words, sentences, paragraphs };
}

/**
 * Calculates the estimated reading time in minutes
 * @param wordCount - Number of words in the text
 * @param wordPerMinute - Average reading speed (default: 200)
 * @returns Estimated reading time in minutes
 */
export function calculateReadingTime(wordCount: number, wordsPerMinute: number = 200): number {
	return wordCount > 0 ? Math.ceil(wordCount / wordsPerMinute) : 0;
}