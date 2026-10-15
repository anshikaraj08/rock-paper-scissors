let userscore=0;
let computerscore=0;
const choices = document.querySelectorAll(".choice");

function compChoiceFunc(){
    let op=["rock","paper","scissors"];
    let i=Math.floor(Math.random()*3);
    return op[i];
}
let msg=document.getElementById("msg");

function showWinner(userWin,userchoice,comp,){
    if(userWin){
        msg.innerText=`You win! Your ${userchoice} beats ${comp}`;
        msg.style.backgroundColor="green";
    }else{
        msg.innerText=`You lost! ${comp} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

function playgame(userchoice){
    console.log(userchoice);

    // computerchoice
    let comp=compChoiceFunc();
    console.log(comp);

    if(comp===userchoice){
        msg.innerHTML="The Game was draw. Try Again!";
        // console.log("Draw");
        msg.style.backgroundColor="#2b2c2e";
    }else{//user can be rock, paper , scissors and comp!=usechoice
        let userWin=true;
        if(userchoice==="rock"){
            userWin= comp==="scissors"?true:false;
        }else if(userchoice==="paper"){
            userWin= comp==="rock"?true:false;
        }else{
            userWin= comp==="paper"?true:false;
        }
        showWinner(userWin,userchoice,comp);
    }  
    
};

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        // console.log(`choice with ${userChoice} selected`);
        playgame(userChoice);
    });

})