var  scores,roundscore,activeplayer,gamePlaying;




scores = [0,0];
roundscore = 0;
activeplayer = 0;
gamePlaying= true;

// dice = Math.floor (Math.random()*6 )+1;

// document.querySelector('#current-' + activeplayer).textContent = dice;

document.querySelector('#diceimg').style.display= 'none';
document.querySelector('.dice1').style.display= 'none';


 document.querySelector('.btn-roll').addEventListener('click',function(){

    

   

    if (gamePlaying){
        
        var dice = Math.floor (Math.random()*6 )+1;
        
          var dice1 = Math.floor (Math.random()*6 )+1;

          
        var Dom = document.querySelector('#diceimg');


        
        
        //display dice value
         Dom.style.display= 'block';
         
         document.querySelector('.dice1').style.display='block';
        
         document.querySelector('.dice').src='dice-' +dice + '.jpg';
         document.querySelector('.dice1').src='dice-' +dice1 + '.jpg';
        
         //update value
         if(dice!==1 && dice1 !== 1){
        roundscore += dice + dice1
         document.querySelector('#current-'+ activeplayer).textContent = roundscore;
         }else {
        
        
        nextplayer();
        
        
         }}
 
 
 })

 document.querySelector('.btn-add').addEventListener('click', function(){

    if(gamePlaying){
        //add current scrore to global
        
        scores [activeplayer] += roundscore;
        
        //update UI
        
        document.querySelector('#score-'+activeplayer).textContent=scores[activeplayer];
        
        
        
        //winner
        var gamescore =document.querySelector('.inputscore').value;
        var winnigscore;
        if(gamescore){
 
            winnigscore =gamescore;
        }else{

            winnigscore=100;
        }

        
        if (scores [activeplayer] >= winnigscore){
        
           
            document.getElementById('name-'  +activeplayer).innerHTML= 'winner !!';
            document.querySelector('.player-'+ activeplayer).classList.remove('active');
            document.querySelector('.player-1').classList.add ('pulse');

            gamePlaying=false;
            
        
        
        }else {
        
            nextplayer();
        
        }}



 })



function nextplayer(){

    roundscore = 0;
    activeplayer === 0 ? activeplayer = 1 : activeplayer = 0 ;
    document.querySelector('.player-0').classList.toggle ('active');
    document.querySelector('.player-1').classList.toggle ('active');
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('#diceimg').style.display= 'none';
    document.querySelector('.dice1').style.display= 'none';
    document.querySelector('.player-0').classList.toggle ('pulse');
    document.querySelector('.player-1').classList.toggle ('pulse');
    

}

document.querySelector('.new').addEventListener('click',function(){

    alert('refresh')
    location.reload();


}


)