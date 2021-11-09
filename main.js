
let fizzBuzz = (n) => {
    for (let i = 0; i <= n; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        console.log("fizzBuzz");
      } else if (i % 3 == 0) {
        console.log("fizz");
      } else if (i % 5 == 0) {
        console.log("buzz");
      } else {
        console.log(i);
      }
    }
  };
  
  fizzBuzz(9);


  // problem solving W05D03

  const whosOnline = (friends) => {
    return friends.reduce((acc, friend) => {
      if (friend.status !== 'offline' && friend.lastActivity > 10) {
        acc['away'] = acc['away'] || [];
        acc['away'].push(friend.username);
      }
      else {
        acc[friend.status] = acc[friend.status] || [];
        acc[friend.status].push(friend.username);
      }
      return acc;
    }, {});
  };