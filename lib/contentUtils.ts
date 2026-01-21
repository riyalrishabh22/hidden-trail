/**
 * Count words in a string of text
 * Strips HTML tags and counts meaningful words
 */
export function countWords(text: string): number {
  // Remove HTML tags
  const plainText = text.replace(/<[^>]*>/g, ' ');
  
  // Remove extra whitespace and split by spaces
  const words = plainText
    .trim()
    .replace(/\s+/g, ' ')
    .split(' ')
    .filter(word => word.length > 0);
  
  return words.length;
}

/**
 * Extract text content from React elements/components
 * Used to calculate word count for pages
 */
export function extractTextFromElement(element: React.ReactElement | string): string {
  if (typeof element === 'string') {
    return element;
  }
  
  if (!element || !element.props) {
    return '';
  }
  
  const { children } = element.props as { children?: React.ReactNode };
  
  if (!children) {
    return '';
  }
  
  if (Array.isArray(children)) {
    return children.map(child => extractTextFromElement(child as React.ReactElement | string)).join(' ');
  }
  
  return extractTextFromElement(children as React.ReactElement | string);
}

/**
 * Check if content meets AdSense quality guidelines
 */
export function meetsAdSenseGuidelines(wordCount: number, minWords = 500): {
  isValid: boolean;
  message: string;
} {
  if (wordCount < minWords) {
    return {
      isValid: false,
      message: `Content too short: ${wordCount} words (minimum ${minWords} required)`,
    };
  }
  
  return {
    isValid: true,
    message: `Content meets guidelines: ${wordCount} words`,
  };
}
