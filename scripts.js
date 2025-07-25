const userinDOB=document.getElementById("inDOB");
userinDOB.addEventListener('click',()=>{
        const userYear=document.getElementById("userData").value;
        const date=new Date();
        const year=date.getFullYear();
        const useryear=userYear.split("-")[0];
    
        const calculateage=year-useryear;
     
        const mainElement=document.createElement("h2");
        mainElement.innerText=`Your age is ${calculateage} years old `;
        document.getElementById("calculateage").appendChild(mainElement);
        console.log(useryear);
    });
