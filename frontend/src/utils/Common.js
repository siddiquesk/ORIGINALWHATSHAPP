

export const formatDate = (date) => {
  const hours = new Date(date).getHours();    // Get the hours from the date
  const minutes = new Date(date).getMinutes(); // Get the minutes from the date

  // Format time as HH:MM, adding leading zeros if needed
  return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
};
