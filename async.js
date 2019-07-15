/*Inside a functuin marked as async, you are 
allowed to place the await keyword in front of 
an expression that returns a promise. when you
 do, the execution of the async function is 
 paused until the promised is resolved. This method 
 can prevent from callback hell */

async function fetchAvatar(userId) {
  const response = await fetch(
    `https://catappapi.herokuapp.com/users/${userId}`
  );
  const data = await response.json();
  console.log(response);
  console.log(data);
}

fetchAvatar(123);
