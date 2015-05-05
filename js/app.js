var boxes = document.getElementsByClassName('box')
var turns = buildCounter();

for(i=0;i<boxes.length;i++){
	boxes[i].addEventListener('click',playerMove);
}

function playerMove(){
	console.log(turns.turn());
	if(this.innerHTML == ''){
		if(turns.turn() % 2 == 0){
			this.innerHTML = "<img src='../images/x.png'>"
		}else{
			this.innerHTML = "<img src='../images/o.png'>"
		}
	checkWinner(turns.turn());
	turns.add1();
	}
}

function checkWinner(player){
	console.log('checking winner');
	if(boxes[0].innerHTML==boxes[1].innerHTML&&boxes[1].innerHTML==boxes[2].innerHTML&&boxes[2].innerHTML!=""){
		console.log('winner!');
		document.getElementById('winner').innerHTML=turns.who();
		return;
	} else if(boxes[3].innerHTML==boxes[4].innerHTML&&boxes[4].innerHTML==boxes[5].innerHTML&&boxes[5].innerHTML!=""){
		console.log('winner!');
		document.getElementById('winner').innerHTML=turns.who();
		return;
	} else if(boxes[6].innerHTML==boxes[7].innerHTML&&boxes[7].innerHTML==boxes[8].innerHTML&&boxes[8].innerHTML!=""){
		console.log('winner!');
		document.getElementById('winner').innerHTML=turns.who();
		return;
	} else if(boxes[0].innerHTML==boxes[3].innerHTML&&boxes[3].innerHTML==boxes[6].innerHTML&&boxes[6].innerHTML!=""){
		console.log('winner!');
		document.getElementById('winner').innerHTML=turns.who();
		return;	
	} else if(boxes[1].innerHTML==boxes[4].innerHTML&&boxes[4].innerHTML==boxes[7].innerHTML&&boxes[7].innerHTML!=""){
		console.log('winner!');
		document.getElementById('winner').innerHTML=turns.who();
		return;
	} else if(boxes[2].innerHTML==boxes[5].innerHTML&&boxes[5].innerHTML==boxes[8].innerHTML&&boxes[8].innerHTML!=""){
		console.log('winner!');
		document.getElementById('winner').innerHTML=turns.who();
		return;	
	} else if(boxes[0].innerHTML==boxes[4].innerHTML&&boxes[4].innerHTML==boxes[8].innerHTML&&boxes[8].innerHTML!=""){
		console.log('winner!');
		document.getElementById('winner').innerHTML=turns.who();
		retunr;
	} else if(boxes[2].innerHTML==boxes[4].innerHTML&&boxes[4].innerHTML==boxes[6].innerHTML&&boxes[6].innerHTML!=""){
		console.log('winner!');
		document.getElementById('winner').innerHTML=turns.who();
		return;
	}				
}

function buildCounter(){
	var priv = 0;
	function a(){
		return priv = priv+1;
	}
	function b(){
		return priv;
	}
	function c(){
		if(priv%2 == 0){
			return "X";}else{
				return "O";
			}
		} 
	return {add1:a, turn:b, who:c};
}
