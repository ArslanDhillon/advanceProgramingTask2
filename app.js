// app.js
// Task 2: Fetch users from jsonplaceholder, filter by catchPhrase, format with destructuring

const fetchAndProcessUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const users = await response.json();

    // Filter users whose company catchPhrase contains "group" or "service" (case-insensitive)
    const filteredUsers = users.filter(({ company }) => {
      const phrase = company?.catchPhrase?.toLowerCase() || '';
      return phrase.includes('group') || phrase.includes('service');
    });

    // Transform filtered data using Object Destructuring
    const formattedUsers = filteredUsers.map(({ name, email, address: { city } = {} }) => {
      return `User: ${name} | Email: ${email} | City: ${city}`;
    });

    // Output results
    if (formattedUsers.length === 0) {
      console.log('No users found matching the filter criteria.');
    } else {
      formattedUsers.forEach(line => console.log(line));
    }

    return formattedUsers;
  } catch (error) {
    console.error('Error fetching user data:', error.message);
  }
};

fetchAndProcessUsers();

module.exports = { fetchAndProcessUsers };

