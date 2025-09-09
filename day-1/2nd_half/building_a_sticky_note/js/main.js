const btnAddNote = document.querySelector(".add-note");
const notesContainer = document.querySelector(".notes-container");
const noteCount = document.querySelector(".note-count");

function createNoteElement() {
   const note = document.createElement("div");
   const title = document.createElement("input");
   const body = document.createElement("textarea");

   note.classList.add("note", getRandomStyle());

   title.classList.add("note-title");
   title.setAttribute("type", "text");
   title.setAttribute("placeholder", "Enter note title...");
   // title.style.color="white";

   body.classList.add("note-body");
   body.setAttribute("placeholder", "Enter note body...");

   note.appendChild(title);
   note.appendChild(body);
   return note;
}

function getRandomStyle() {
   const styles = ["1", "2", "3", "4"];
   const randomStyle = styles[Math.floor(Math.random() * styles.length)];
   return `note-style-${randomStyle}`;
}
function getNoteCount() {
   const count = notesContainer.children.length;
   noteCount.textContent = `${count} note${count != 1? "s":""}`;
}

btnAddNote.addEventListener("click", () => {
   const note = createNoteElement();
   note.addEventListener("dblclick", () => {
      const title = note.querySelector(".note-title").value;
      const removeNote = confirm(`Are you sure remove ${title.length == 0 ? 'it?': `'${title}'` + "?"}`);
      if (!removeNote) {
         return;
      }
      note.remove();
        getNoteCount();
   })
   notesContainer.appendChild(note);
   getNoteCount();
   
});
