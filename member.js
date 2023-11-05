function skillMembers() {
  var members = [
    { name: 'Tom', skills: ['JavaScript', 'CSS', 'HTML'] },
    { name: 'Bob', skills: ['JavaScript', 'CSS'] },
    { name: 'Alice', skills: ['JavaScript', 'HTML'] }
  ];

  var result = members.filter(function (member) {
    return member.skills.includes('JavaScript');
  });

  console.log(result);
}