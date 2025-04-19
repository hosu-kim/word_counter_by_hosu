# Word Counter By Hosu

A simple React application for analyzing text. It provides live statistics on characters, words, sentences, paragraphs, and estimated reading time.

---

## Features

- **Live analysis**: Updates statistics in real time as you type.
- **Counts:** Characters, words, sentences, paragraphs.
- **Estimated reading time**: Based on average words per minute.
- **Responsive & clean UI**.
  
---

## Usage

1. **Install dependencies:**
	 ```bash
	 npm install
	 ```
2. **Start the development server:**
	 ```bash
	 npm run dev
	 ```
3. **Open in your browser:**  
	 Go to [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).
4. **Type in the textarea**  
	 See character, word, sentence, paragraph, and reading time statistics update live.

---

## Main Files

- `src/components/WordCounter.tsx`  
	The main UI component that provides the textarea and displays all statistics.
- `src/utils/textAnalysis.ts`  
	Provides the functions for counting characters, words, sentences, and paragraphs, and estimating reading time.
- `src/App.tsx`  
	Root application component that includes app layout and footer.

---

## Customization

- **Reading Speed:**  
	You can change the default reading speed (words per minute) in `textAnalysis.ts`:
	```typescript
	calculateReadingTime(wordCount: number, wordsPerMinute: number = 200): number
	```
- **Styling:**  
	Modify styles in `src/components/WordCounter.css` or `src/App.css` to change the look and feel.

---

## Author

- hosu-kim

---

## License

MIT

---

