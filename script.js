console.log("Starting Script")

function loadAppValues(){
    const typeDropdown=document.getElementById('Type')
    const applicationDropdown=document.getElementById("Application")
    const tier1Dropdown=document.getElementById("Tier1")
    const tier2Dropdown=document.getElementById("Tier2")
    const tier3Dropdown=document.getElementById("Tier3")
    const description=document.getElementById("description")
    const keysType=Object.keys(data)


//for type value
keysType.forEach(key=>{
  const option=document.createElement('option')
  option.value=key
  option.textContent=key
  typeDropdown.appendChild(option)
})
//end

//for application value
    // keysApp.forEach(key=>{
    //   const option=document.createElement('option')
    //   option.value=key
    //   option.textContent=key
    //   applicationDropdown.appendChild(option)
    // })
    typeDropdown.addEventListener('change',()=>{
      document.getElementById('errtype').innerHTML = "";
      document.getElementById('errApp').innerHTML = "";
      document.getElementById('errT1').innerHTML = "";
      document.getElementById('errT2').innerHTML = "";
      document.getElementById('errT3').innerHTML = "";
      document.getElementById('errDescription').innerHTML = "";

      const typeValue=document.getElementById("Type").value
      const keysApp=Object.keys(data[typeValue])
      applicationDropdown.innerHTML = "<option value=''>-- Select Application --</option>"; 
      tier1Dropdown.innerHTML = "<option value=''>-- Select Tier1 value --</option>"; 
      tier2Dropdown.innerHTML = "<option value=''>-- Select Tier2 value --</option>"; 
      tier3Dropdown.innerHTML = "<option value=''>-- Select Tier3 value --</option>"; 
  
      keysApp.forEach(key=>{
      const option=document.createElement('option')
        option.value=key
        option.textContent=key
        applicationDropdown.appendChild(option)
      })
  })
//end
//for tier1 values
applicationDropdown.addEventListener('change',()=>{

  document.getElementById('errApp').innerHTML = "";
  document.getElementById('errT1').innerHTML = "";
  document.getElementById('errT2').innerHTML = "";
  document.getElementById('errT3').innerHTML = "";
  document.getElementById('errDescription').innerHTML = "";

    const typeValue=document.getElementById("Type").value
    const appValue=document.getElementById("Application").value
    const keysT1=Object.keys(data[typeValue][appValue])
    tier1Dropdown.innerHTML = "<option value=''>-- Select Tier1 value --</option>"; 
    tier2Dropdown.innerHTML = "<option value=''>-- Select Tier2 value --</option>"; 
    tier3Dropdown.innerHTML = "<option value=''>-- Select Tier3 value --</option>"; 

    keysT1.forEach(key=>{
    const option=document.createElement('option')
      option.value=key
      option.textContent=key
      tier1Dropdown.appendChild(option)
    })
})
//end
//for tier2 values
tier1Dropdown.addEventListener('change',()=>{

  document.getElementById('errT1').innerHTML = "";
  document.getElementById('errT2').innerHTML = "";
  document.getElementById('errT3').innerHTML = "";
  document.getElementById('errDescription').innerHTML = "";
  const typeValue=document.getElementById("Type").value
  const appValue=document.getElementById("Application").value
  const T1Value=document.getElementById("Tier1").value
  const keysT2=Object.keys(data[typeValue][appValue][T1Value])
  console.log(appValue+"|||"+T1Value+"|||"+keysT2)

  tier2Dropdown.innerHTML = "<option value=''>-- Select Tier2 value --</option>"; 
  tier3Dropdown.innerHTML = "<option value=''>-- Select Tier3 value --</option>"; 

  keysT2.forEach(key=>{
    const option=document.createElement('option')
    option.value=key
    option.textContent=key
    tier2Dropdown.appendChild(option)
  })
})
//end
//for tier3 values
tier2Dropdown.addEventListener('change',()=>{

  document.getElementById('errT2').innerHTML = "";
  document.getElementById('errT3').innerHTML = "";
  document.getElementById('errDescription').innerHTML = "";
  const typeValue=document.getElementById("Type").value
  const appValue=document.getElementById("Application").value
  const T1Value=document.getElementById("Tier1").value
  const T2Value=document.getElementById("Tier2").value
  const keysT3=Object.values(data[typeValue][appValue][T1Value][T2Value])

  tier3Dropdown.innerHTML = "<option value=''>-- Select Tier3 value --</option>"; 

  keysT3.forEach(key=>{
    const option=document.createElement('option')
    option.value=key
    option.textContent=key
    tier3Dropdown.appendChild(option)
  })
})

description.addEventListener('change',()=>{
  document.getElementById('errT2').innerHTML = "";
  document.getElementById('errT3').innerHTML = "";
  document.getElementById('errDescription').innerHTML = "";
})

//end
}

function SubmitFunct(){
        //-----------------------------------------
        let webviewParameters = window.webviewParameters !=null?window.webviewParameters['parameters']:null;
        console.log(webviewParameters)
        /////////////////////
        let getWebviewParam = (arrParams, key, defaultValue) => {
            if (arrParams) {
              let param = arrParams.find(e => {
                return e.key === key;
              });
              return param ? param.value : defaultValue;
            }
            return defaultValue;
          };
        //////////////////////
        var webViewCallback = getWebviewParam(webviewParameters, 'webview.onDone', null);
        console.log(webViewCallback)
            //-----------------------------------------
  console.log("inside submit btn")
  const typeDropdown=document.getElementById("Type").value
  const applicationDropdown=document.getElementById("Application").value
  const tier1Dropdown=document.getElementById("Tier1").value
  const tier2Dropdown=document.getElementById("Tier2").value
  const tier3Dropdown=document.getElementById("Tier3").value
  const description=document.getElementById("description").value

  console.log("|||",typeDropdown,applicationDropdown,tier1Dropdown,tier2Dropdown,tier3Dropdown,description)

if(typeDropdown=="-- Select Type --" || !typeDropdown){
  console.log("error in type")
  document.getElementById("errtype").innerHTML="Please Select valid value"
  return
}
console.log("application:",applicationDropdown)
  if(applicationDropdown=="-- Select Application --" || !applicationDropdown){
    console.log("error in application")
    document.getElementById("errApp").innerHTML="Please Select valid value"
    return 
  }

  if(tier1Dropdown=="-- Select Application --" || !tier1Dropdown){
    console.log("error in t1")
    document.getElementById("errT1").innerHTML="Please Select valid value"
    return 
  }
  if(tier2Dropdown=="-- Select Application --" || !tier2Dropdown){
    console.log("error in t2")
    document.getElementById("errT2").innerHTML="Please Select valid value"
    return 
  }
  if(tier3Dropdown=="-- Select Application --" || !tier3Dropdown){
    console.log("error in t3")
    document.getElementById("errT3").innerHTML="Please Select valid value"
    return 
  }

  if(description.length<10){
    console.log("error in description length")
    document.getElementById("errDescription").innerHTML="Please add at least 10 characters"
    return 
  }


  if(!description){
    console.log("error in description")
    document.getElementById("errDescription").innerHTML="Please Select valid value"
    return 
  }
  let data={}
  data.status = "success"
  data.type = typeDropdown
  data.application = applicationDropdown;    
  data.tier1 = tier1Dropdown;    
  data.tier2 = tier2Dropdown;  
  data.tier3 = tier3Dropdown;  
  data.description = description
  console.log(data)
  // $.post("https://httpbin.org/anything", JSON.stringify(data)).then(()=>{
  //   document.getElementById("successmsg").innerHTML="Data submitted successfully!!"
    
  //   setTimeout(function() {
  //     window.close();
  //   }, 2000);
  // });
  $.post(webViewCallback, JSON.stringify(data)).then(()=>{
    document.getElementById("successmsg").innerHTML="Data submitted successfully!!"
    
    setTimeout(function() {
      window.close();
    }, 2000);
  });
}