'use strict';

function getRandomDate() {
  const maxDate = Date.now();
  const timestamp = Math.floor(Math.random() * maxDate);
  return new Date(timestamp);
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Posts', [
      {
        userId: 1,
        body: "Lmaoooooo sooo tru!",
        photo:"https://i.imgur.com/db9hSpg.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        body: "Perfect setup with extreme cooling!",
        photo:"https://i.imgur.com/G9HstAo.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        body: "the beast!",
        photo:"https://i.imgur.com/UEKNTnX.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        body: "Picked up this new audio interface today, in love with it!",
        photo:"https://i.imgur.com/ygElX1w.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        body: "The 3 monitor setup is the way to go when it comes to workspace flow.",
        photo:"https://i.imgur.com/QwZYTmY.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        body: "Anyone know why I am getting this blue screen?",
        photo:"https://i.imgur.com/08QzVGq.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        body: "Just having my night cheese snack mmm",
        photo:"https://i.imgur.com/gZFByzt.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        body: "Gabe is our lord and savior!",
        photo:"https://i.imgur.com/bhtNRmH.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        body: "But the temps are still good!",
        photo:"https://i.imgur.com/N9Hpd3J.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        body: "Ahh yes, windows xp. Those were the good days...",
        photo:"https://i.imgur.com/F1rN6Cb.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        body: "WHY CAN'T THEY JUST MAKE THEM ALL THE SAME!!! Really grinds my gears!",
        photo:"https://i.imgur.com/PamLlgm.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        body: "I would not want to be that guy right now XD",
        photo:"https://i.imgur.com/CLkwmpq.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        body: "Doesn't have a touch or any fancy smart phone options, but it only weighs 7 pounds and can hold 200 songs!",
        photo:"https://i.imgur.com/QDbzqbK.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        body: "Could you image driving this advance of a car around!?",
        photo:"https://i.imgur.com/Mv0q2hc.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        body: "HAHHAHAHHAHAHA",
        photo:"https://i.imgur.com/YQqkg4x.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        body: "It might be time to clean my keyboard...",
        photo:"https://i.imgur.com/bW3pYA1.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        body: "Don't worry guys washing it right now!",
        photo:"https://i.imgur.com/iYPojeV.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        body: "IT LOOKS SOOO MUCH BETTER!!!",
        photo:"https://i.imgur.com/YzrAZWS.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        body: "I even cleaned the inside!",
        photo:"https://i.imgur.com/HUhDlGK.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        body: "All done!",
        photo:"https://i.imgur.com/8sSsLf7.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        body: "This is my Retropie build, I've been calling the project the 'Retro Switch'",
        photo:"https://i.imgur.com/76b0D9C.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        body: "Oh no guys! I broke my Retro Switch!",
        photo:"https://i.imgur.com/CU2Phr0.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        body: "Going to try to fix it with some glue, wish me luck!",
        photo:"https://i.imgur.com/bUNIzSu.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        body: "Okay glue job done. Looks it came out pretty good to me what do y'all think?",
        photo:"https://i.imgur.com/bUNIzSu.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        body: "It works! We are in business people!",
        photo:"https://i.imgur.com/An6l10A.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        body: "Futuristic Bonsai...",
        photo:"https://i.imgur.com/og0zsof.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        body: "Checkout this cool project, I do not know what it does... But it's cool!",
        photo:"https://i.imgur.com/kAxz4Z3.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        body: "Could you image how many people we could help if we could implemnt tech into contact lens! One day!",
        photo:"https://i.imgur.com/83P8BfP.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        body: "AMD cpu naming breakdown",
        photo:"https://i.imgur.com/nz4yDa4.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        body: "Here is one for intel too!",
        photo:"https://i.imgur.com/lJiARAh.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 7,
        body: "Happy Holidays to the IT community!",
        photo:"https://i.imgur.com/YcqE02p.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 7,
        body: "My 3D printers work station",
        photo:"https://i.imgur.com/XzOZREM.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 7,
        body: "Looking for someone who might know how to fix this or place that will, thanks! Happy printing!",
        photo:"https://i.imgur.com/v9KgTvg.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 7,
        body: "Weird tech found at an unused gym. What is it?",
        photo:"https://i.imgur.com/k1l6f1R.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 7,
        body: "Ahh the good ole days!",
        photo:"https://i.imgur.com/BHehfvX.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 8,
        body: "New PC build! Can't wait to start putting it together!",
        photo:"https://i.imgur.com/YkIGrgY.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 8,
        body: "Here is the case everyhting goes in. Love the glass siding!",
        photo:"https://i.imgur.com/jWHRuJ5.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 8,
        body: "Got my table and monitors all setup, only missing one thing..",
        photo:"https://i.imgur.com/o5WmwKW.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 8,
        body: "Got myself a nice new gaming chair to finish it off!",
        photo:"https://i.imgur.com/DnoDR8W.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 8,
        body: "I used Uber to hail a taxi, this guy rolls up in a brand new Tesla S!",
        photo:"https://i.imgur.com/LpP6Xpo.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 9,
        body: "I made a custom coiled cable, turquoise, USB-C",
        photo:"https://i.imgur.com/kWeaCpr.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 9,
        body: "Custom painted keycaps, I think I want to do the rest of them.",
        photo:"https://i.imgur.com/h0xez3G.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 9,
        body: "This is sooo sick!! I need to build one of these! Does anybody kow where I can get the parts from? Thanks!",
        photo:"https://i.imgur.com/Grxdn7G.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 9,
        body: "Today my new numpad keycaps came in! Beemo is favorite!",
        photo:"https://i.imgur.com/TEUFcyR.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 9,
        body: "Okay, okay, my last purchase. Maybe... Do you guys use wrist rest?",
        photo:"https://i.imgur.com/y7JOgw4.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 10,
        body: "Wow! We have advance so far! How do they fit so much more into something so small!",
        photo:"https://i.imgur.com/kNL6BGv.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 10,
        body: "Toaster are gettign so smart look at all these options you can choose!",
        photo:"https://i.imgur.com/66slzUa.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 10,
        body: "We got to try out VR today at Fry's! Makes me really want to get one, the immersion was insane!",
        photo:"https://i.imgur.com/1F2G4xt.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 10,
        body: "The progression of robots is gettign scary",
        photo:"https://i.imgur.com/34ALqPW.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 10,
        body: "Me anytime I leave my house",
        photo:"https://i.imgur.com/kosW2RS.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      'Posts',
      null,
      {
        truncate: true, cascade: true, restartIdentity: true
      }
    );
  }
};
