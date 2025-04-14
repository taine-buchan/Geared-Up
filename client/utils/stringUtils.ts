// This function turns items from our checklists in camelCase into a string
// We want to split the words and capitalise everything excluding "and" "or" & "for"

export function convertToString(name: string) {
  const exceptions = new Set(['for', 'and', 'or'])
  const convertedName = name
    .replace(/([A-Z])/g, ' $1') // Step 1: Add space before capital letters
    .trim() // Step 2: Trim whitespace
    .toLowerCase() // Step 3: Convert everything to lowercase
    .split(' ') // Step 4: Split into individual words
    .map((word, index) => {
      if (index === 0 || !exceptions.has(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1) // Capitalize first letter
      }
      return word // Keep as lowercase if it's an exception
    })
    .join(' ')
  return convertedName
}

//This code does not include any exception words.

// .replace(/([A-Z])/g, ' $1') // Add space before capital letters
// .trim() // Remove any leading/trailing spaces
// .toLowerCase() // Convert entire string to lowercase
// .replace(/^./, (match) => match.toUpperCase()) // Capitalize first letter only
