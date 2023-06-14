//reviews
const reviews = [
    {
      id: 1,
      name: "Samantha",
      job: "web dev",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text: " As I reflect on the past and look ahead to next year, I’m feeling grateful for the people in my life who support me in difficult moments. They remind me of what’s important, and they inspire me to be a better father and friend.",
    },
  
    {
      id: 2,
      name: "Rylie",
      job: "SDE",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
  
      text: "They say that in life, those who lose the roof win the stars. Is that so. Sometimes you lose what you didn't want, but you conquer what you never imagined.",
    },
    {
      id: 3,
      name: "Riu",
      job: "junior developer",
      img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text: " Not everything depends on a time, but on an attitude. Time is like a river, you will never touch the same water twice. Enjoy every minute of your life, don't look for perfect people, but those who know your true value.",
    },
    {
      id: 4,
      name: "jeff",
      job: "enthrepreneur",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text: "Have 4 loves in your life: God, life, family and friends.God, because he owns life, life, because he's short, family, because he's unique and friends, because they're rare! They are my sincere and deep wishes!!!",
    },
  ];
  
  //select items
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  
  //set starting item
  let currentItem = 0;
  //load initial item
  window.addEventListener("DOMContentLoaded", function () {
     showPerson(currentItem);
  });
  //show person based on item
  function showPerson(person){
     const item = reviews[person];
     img.src = item.img;
     author.textContent = item.name;
     job.textContent = item.job;
     info.textContent = item.text;
  
  }
  // show next person
  nextBtn.addEventListener("click",function(){
     currentItem++;
     if(currentItem>reviews.length-1){
        currentItem=0;
  
     }
     showPerson(currentItem);
  });
  //show prev person
  prevBtn.addEventListener("click",function(){
     currentItem--;
     if(currentItem<0){
        currentItem=reviews.length-1;
  
     }
     showPerson(currentItem);
  });
  
  randomBtn.addEventListener("click",function(){
     currentItem=Math.floor(Math.random()*reviews.length);
     showPerson(currentItem);
  });
  
