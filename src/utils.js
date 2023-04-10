// Takes a date string in the format "yyyy-mm-dd" and returns a formatted date string in the format "dd.mm.yyyy".
export const formatDate = (dateString) => {
    // Create a new Date object from the input string.
    const date = new Date(dateString);
    // Extract the day, month, and year values from the Date object and format them as strings.
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    // Return the formatted date string.
    return `${day}.${month}.${year}`;
  }
  