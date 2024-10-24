<script lang='ts'>
	import { page } from "$app/stores";

let name:string = 'Umit Akirmak'
let age:number = $state(45)
let shortBio:string = $state("Cognitive Psychologist, Computer Science MA student")

 

function updateProfile(): void {
  
  name = prompt('Enter a new name') || name;
  age = parseInt(prompt("What is your age?") || `${age}`, 10);
  shortBio = prompt("What do you do?") || shortBio;
}


</script>

<div class="flex flex-row gap-10">
  <div class="card border flex flex-col justify-between justify-self-auto p-4 rounded-lg shadow-lg bg-white">
    <p>You are {age} years old. Below is your short bio: </p>
    <p> {shortBio}.</p>
      <button class="border border-blue-400 shadow-md shadow-stone-500" onclick={updateProfile}>Edit Profile</button>
  </div>

  <form class="flex flex-col max-w-80 border invisible">
    <div class="flex flex-col">
    <label class="" for="name">Profile name:</label>
    <input class="border" type="text" id="name">
  </div>
  <div class="flex flex-col">
    <label class="" for="name">Age:</label>
    <input class="border" type="text" id="name">
  </div>
  <div class="flex flex-col">
    <label class="" for="name">Short bio:</label>
    <input class="border" type="text" id="name">
  </div>
  </form>



</div>
