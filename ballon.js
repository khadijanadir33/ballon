 const c=document.getElementById('ball')
 var widt=200
 var heigh=200

c.onclick=function(){
    let size=window.getComputedStyle(document.getElementById('ball')).getPropertyValue("width")
    console.log(size)
   let color=window.getComputedStyle(document.getElementById('ball')).getPropertyValue("background-color")
    if(size<"420px")
    {
        widt=widt+10
        heigh=heigh+10
        this.style.width=widt+"px"
        this.style.height=heigh+"px"
        this.style.backgroundColor="green"
        let i=0;
       
           if(color=="rgb(0, 128, 0)"){
              this.style.backgroundColor="blue"
           }
           else if(color=="rgb(0, 0, 255)")
           {
            this.style.backgroundColor="red"
           }
       
    }
  
   else{

    c.hidden=true;  
         setTimeout(function(){
            c.hidden=false;  
            c.style.width="200px"
            c.style.height="200px"
            c.style.backgroundColor="red"
         },500)   
         widt=200
         heigh=200
}
}
c.onmouseleave=()=>{
    let w=window.getComputedStyle(document.getElementById('ball')).getPropertyValue("width")
    let wi=parseInt(w)
    c.style.width=wi-5+"px"
    if(color=="rgb(0, 128, 0)"){
        this.style.backgroundColor="blue"
    
    }
     else if(color=="rgb(0, 0, 255)")
     {
      this.style.backgroundColor="red"
     
     }
    
    
}
