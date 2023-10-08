const itemArr = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
document.querySelector("#newtasksubmit").addEventListener("click", () => {
  const item = document.querySelector("#newtaskinput")
  createItem(item)
})

document.querySelector("#newtaskinput").addEventListener("keypress", (e) => {
  if(e.key === "Enter"){
    const item = document.querySelector("#newtaskinput")
  }
})
function createItem(item){
    itemArr.push(item.value)
    localStorage.setItem('items', JSON.stringify(itemArr))
    
  }
function display(){
    let items=""
    for(let i=0;i<itemArr.length;i++){
        items +=`<div class="task">
        <div class="content">
        <textarea disabled>${itemArr[i]}</textarea>
            <input type="text" class="text" value="Mytasks">
        </div>
        <div class="actions">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    </div>`
    }        
}
window.onload=function(){
    display()
}
window.addEventListener('load',()=> {
    const form=document.querySelector("#newtask");
    const input=document.querySelector("#newtaskinput");
    const listelement=document.querySelector(".tasks");
    
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        const task = input.value;
        if(!task){
            alert("Please Enter Your Task!");
            return;
        }
        const taskelement=document.createElement('div');
        taskelement.classList.add('task');

        const taskcontentelement=document.createElement('div');
        taskcontentelement.classList.add('content');
        taskelement.appendChild(taskcontentelement);
        
        const taskinputelement=document.createElement('input');
        taskinputelement.classList.add('text');
        taskinputelement.type='text';
        taskinputelement.value=task;
        taskinputelement.setAttribute('readonly','readonly');
        taskcontentelement.appendChild(taskinputelement);

        const taskaction=document.createElement('div');
        taskaction.classList.add('actions');

        const taskedit=document.createElement('button');
        taskedit.classList.add('edit');
        taskedit.innerText='Edit';

        const taskdelete=document.createElement('button');
        taskdelete.classList.add('delete');
        taskdelete.innerText='Delete';
        taskaction.appendChild(taskedit);
        taskaction.appendChild(taskdelete);
        taskelement.appendChild(taskaction);
        listelement.appendChild(taskelement);
         
        input.value='';

        taskedit.addEventListener('click',(e)=>{
            if(taskedit.innerText.toLowerCase()=="edit"){
                taskedit.innerText="Save";
                taskinputelement.removeAttribute("readonly");
                taskinputelement.focus();
            }
            else{
                taskedit.innerText="Edit";
                taskinputelement.setAttribute("readonly","readonly");
            }
        });
        taskdelete.addEventListener('click',(e)=>{
            listelement.removeChild(taskelement);
        });
        
    });
});
