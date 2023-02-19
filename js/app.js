console.log("Feeling bored");
// if a user adds a btn add it to the local storage
showNotes();
let addBtn=document.getElementById("addBtn");
addBtn.addEventListener("click",function(e){
    let addTxt=document.getElementById("addTxt");
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes);
    }
    notesobj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    addTxt.value="";
    console.log(notesobj)
    showNotes();
})
function showNotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes);
    }
    let html="";
    notesobj.forEach(function(element,index){
        html+=`
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Note ${index+1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}"onclick ="deleteNote(this.id)" class="btn btn-primary" >Delete node</nutton>
          </div>
        </div>
        `;
    });
    let noteselm=document.getElementById('notes');
    if(notesobj.length!=0){
        noteselm.innerHTML=html;
    }
    else{
        noteselm.innerHTML=`Nothing to show! Use "Add a Note" option above to add notes.`;
    }
}
//function to delete a node
function deleteNote(index){
  console.log("I am deleting",index);
  let notes=localStorage.getItem("notes");
  if(notes == null)
  {
    notesobj=[];
  }
  else{
    notesobj=JSON.parse(notes);
  }
  notesobj.splice(index,1);
  localStorage.setItem("notes",JSON.stringify(notesobj)); 
  showNotes();
}
let search = document.getElementById('searchTxt');
search.addEventListener("input",function(){
    let inputval=search.value.toLowerCase();
    // console.log("Input event fired" , inputval);
    let notecards=document.getElementsByClassName('noteCard');
    Array.from(notecards).forEach(function(element){
        let cardtxt= element.getElementsByTagName("p")[0].innerText;
        // console.log(cardtxt);
        if(cardtxt.includes(inputval)){
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })

})