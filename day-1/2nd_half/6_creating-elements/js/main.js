// Using createElement() to create HTML elements

/*
	<div class="card">
		<div class="name" title="I am Adam Jones">Adam Jones</div>
		<ul class="skills">
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
		</ul>
	</div>
*/

const skills = ["HTML", "CSS", "JavaScript"];
const card = document.createElement("div");
const nameElement = document.createElement("div");
const skillsList = document.createElement("ul");

// card
card.classList.add("card");
document.body.appendChild(card);

// name 
nameElement.classList.add("name");
nameElement.textContent = "Adam Jones";
nameElement.setAttribute("title", "I am Nazmul Hossen");

// skills
skillsList.classList.add("skills");

// skills list elements 
for (let skill of skills) {
	const skillElement = document.createElement("li");
	skillElement.textContent = skill;
	skillsList.append(skillElement);
}

// append all to card 
card.append(nameElement, skillsList);



