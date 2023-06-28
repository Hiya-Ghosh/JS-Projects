const add=document.querySelector('#addBtn');
// add in main 
const main=document.querySelector('#main')


//can put it anywhere, wont matter
add.addEventListener("click",()=>{
    addNote()
    }
)








//default argument for addNote is empty string if you dont give text="", it shows undefined in box
function addNote(text=""){
// replecating the note 
    // has to be inside function, so that you can create multiple notes 
    const note=document.createElement("div");
    note.classList.add("note")

    //${text} to print the text
    note.innerHTML=`
    <div class="tool">
        <i id="save" class="fas fa-save"></i>
        <i id="trash" class="fas fa-trash"></i>
    </div>
    <textarea>${text}</textarea>
    `;
    main.appendChild(note);
    saveNotes();



    // note is defined in function 

    //deleting
    note.querySelector("#trash").addEventListener("click",()=>{
        note.remove();
        //automatically save after delete
        saveNotes();
        }
    )
    //saving
    note.querySelector("#save").addEventListener("click",()=>{
        saveNotes();
        }
    )
}









function saveNotes(){
    //takes all the text saved in text area of note 
    const notes=document.querySelectorAll(".note textarea");
    const data=[];
    notes.forEach(
        //each note
        (note)=>{
            data.push(note.value);
        }
    )

    //if no notes, then atleast keep an empty note
    if(data.length===0){
        localStorage.removeItem("notes");
    }
    else{
        //to put the data in local storage
        localStorage.setItem("notes",JSON.stringify(data))
    }
    
}









//self calling function CAN'T CALL this function without defining inner function
(
    function(){

        const lsNotes= JSON.parse(localStorage.getItem("notes"));
        //if no notes exist then add empty note
        if(lsNotes===null){
            addNote();
        }
        else{
            //add prev notes that had value
            lsNotes.forEach(
                (lsNote)=> {
                    addNote(lsNote)
                }
            )
        }
    
    }

)()
