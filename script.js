const bulb= document.getElementsByClassName("bulb")[0]
const check=document.getElementById("myonoffswitch")



var colorPicker = new iro.ColorPicker('#picker', {
  
    width: 200,
    color:"#6970ff",
    
    layout: [
      { 
        component: iro.ui.Wheel,
        options: {}
      },
    ]
  });
  colorPicker.on('color:change', function(color) {
    console.log(color.hexString);
  });

  colorPicker.on('color:change', function(color) {
    bulb.style.backgroundColor= color.hexString;
    bulb.style.boxShadow= ` 23px -12px 101px 139px ${color.hexString}`
    console.log(color.hexString);
  });
  check.addEventListener("click",()=>{
    if(!check.checked){
        bulb.style.backgroundColor= "white";
        bulb.style.boxShadow="none"
    }
    else{
        bulb.style.boxShadow=`23px -12px 101px 139px  ${colorPicker.color.hexString}`;
        bulb.style.backgroundColor= `${colorPicker.color.hexString}`;

    }

})
bulb.style.boxShadow=`23px -12px 101px 139px ${colorPicker.color.hexString}`;
bulb.style.backgroundColor= `${colorPicker.color.hexString}`;
