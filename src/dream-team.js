const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // remove line with error and write your code here
  if (!Array.isArray(members)) return false;
  const filterMembers = members.filter(item => typeof item === 'string');
  if (filterMembers.length === 0) return false;
  const firstLetterMembers = filterMembers.map(item => item.trim()[0].toUpperCase())
  const sortMembers = firstLetterMembers.sort();
  return sortMembers.join('');
};
