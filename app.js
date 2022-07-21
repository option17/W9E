let tweets = [
    {
      tweet: "lorem",
      userName: "bob",
      createdAt: '2017-01-03',
      age: 7
    },
    {
        tweet: "lorem",
        userName: "tanya",
        createdAt: '2017-02-03',
        age: 45
    },
    {
        tweet: "lorem",
      userName: "marshall",
      createdAt: '2017-04-03',
      age: 54
      },
      {
        tweet: "lorem",
        userName: "marc",
        createdAt: '2017-01-03',
        age: 30
      },
      {
        tweet: "lorem",
        userName: "james",
        createdAt: '2017-06-03',
        age: 23
      },
      {
        tweet: "lorem",
        userName: "lucas",
        createdAt: '2013-01-03',
        age: 34
      },
      {
        tweet: "lorem",
        userName: "dawn",
        createdAt: '2012-01-03',
        age: 25
      },
      {
        tweet: "lorem",
      userName: "rae",
      createdAt: '2019-01-03',
      age: 27
      },
      {
        tweet: "lorem",
      userName: "nicole",
      createdAt: '2018-01-03',
      age: 29
      },
      {
        tweet: "lorem",
        userName: "simba",
        createdAt: '2011-01-03',
        age: 8
      }
]

  let counter = 0
while(counter < tweets.length){
  
    if(tweets[counter][`age`] >=18){
        console.log(tweets[counter][`tweet`],tweets[counter][`userName`],tweets[counter][`createdAt`]);
    } 
    counter++;
}
// Here I made a while loop that sets the counter to 0 which is less than the tweet.lengths.
// I made an if statment that says if the tweets age is greater than or equal to 18 console.log the tweet,username,and the date it was created.
console.log(`UNDER 18 BELOW`);

for(let counter = 0; counter < tweets.length; counter++){
    if(tweets[counter][`age`] <18){
        console.log(tweets[counter][`tweet`],tweets[counter][`userName`],tweets[counter][`createdAt`]);
    }
}

// Here I made a for loop
// The conditional says if the tweet age is less than 18 console.log the tweet, username, and the date it was created.