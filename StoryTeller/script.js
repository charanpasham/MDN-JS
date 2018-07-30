var button = document.querySelector('.btnStory'); 
var story = document.querySelector('.mystory'); 
var customName = document.querySelector('.customName');

function randomValueFromArray(array){
    return array[Math.floor(Math.random()*array.length)]; 
}

var MyStory = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty: , they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised  :insert: weighs 300 pounds, and it was a hot day.";

var insertX = ["Willy the Goblin","Big Daddy","Father Christmas"];
var insertY = ["the soup kitchen","Disneyland","the White House"];
var insertZ = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"]; 

button.onclick = function(){
    var newStory = MyStory; 
   var x = randomValueFromArray(insertX);
   var y = randomValueFromArray(insertY); 
   var z = randomValueFromArray(insertZ);

  newStory = newStory.replace(":insertx:",x);
  newStory = newStory.replace(":inserty:",y); 
  newStory = newStory.replace(":insertz:",z);


  if(customName.value != '') {
    var name = customName.value;
    newStory = newStory.replace("Bob",name);
  }

    var country = document.querySelector('input[name="country"]:checked').value;
   story.textContent = newStory;
   story.style.visibility = 'visible';
 

}