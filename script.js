const element = document.getElementById("colorSelect");
const button = document.querySelector("form input");
let deleteFromSelectElement = (val)=>{
    if(!val){
        return ;
    }
    for(let i=0 ; i<element.children.length ; i++){
        if(val===element.children[i].value){
            element.children[i].remove();
            return;
        }
    }
}
button.addEventListener('click',()=>{
  let value = element.value;
  deleteFromSelectElement(value);
});