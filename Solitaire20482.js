class Column{

	initialize(arrayColumn){ //ready
    	let i=0;
    	while(i<=7){
    		arrayColumn[i]=null;
    		i++;
    	}
	}

	addCard(arrayColummn,viewColumn,newCard,i){//ready
			var img=document.createElement("img");
				img.className="card";

				if(newCard==0){
					img.src="cartaVacia.png";
			   		viewColumn.appendChild(img);
				}

				if(newCard==1){
					img.src="carta1.png";
			   		viewColumn.appendChild(img);
			   	 	arrayColummn[i]=1;
			   	 }
				if(newCard==2){
					img.src="carta2.png";
					viewColumn.appendChild(img);
					arrayColummn[i]=2;
				}
				if(newCard==3){
					img.src="carta3.png";
					viewColumn.appendChild(img);
					arrayColummn[i]=3;
				}
				if(newCard==4){
					img.src="carta4.png";
					viewColumn.appendChild(img);
					arrayColummn[i]=4;
				}
				if(newCard==5){
					img.src="carta5.png";
					viewColumn.appendChild(img);
					arrayColummn[i]=5;
				}
				if(newCard==6){
					img.src="carta6.png";
					viewColumn.appendChild(img);
					arrayColummn[i]=6;
				}
				if(newCard==7){
					img.src="carta7.png";
					viewColumn.appendChild(img);
					arrayColummn[i]=7;
				}
				if(newCard==8){
					img.src="carta8.png";
					viewColumn.appendChild(img);
					arrayColummn[i]=8;
				}
				if(newCard==9){
					img.src="carta9.png";
					viewColumn.appendChild(img);
					arrayColummn[i]=9;
				}
				if(newCard==10){
					img.src="carta10.png";
					viewColumn.appendChild(img);
					arrayColummn[i]=10;
				}
				if(newCard==11){
					img.src="carta11.png";
					viewColumn.appendChild(img);
					arrayColummn[i]=11;

					viewColumn.removeChild(viewColumn.lastChild);

					arrayColummn[i]=null;

					if(i==0){
						img.src="cartaVacia.png";
						viewColumn.appendChild(img);
						arrayColummn[i]=null;
					}
				}
	}

	addCardsToTheColumn(arrayColummn,viewColumn,newCard,arrayHand,viewHand,arrayJoker,arrayUndoColumn,arrayUndoHand,arrayUndoJoker, arrayGameInfo, arrayUndoGameInfo){
		if(viewColumn.childNodes.length<=8){

		let hand= new Hand();
		let joker= new Joker();
		let undo= new Undo();

			if(arrayColummn[0]==null){

				undo.actualization(arrayColummn, arrayUndoColumn,arrayUndoHand,arrayHand,arrayUndoJoker,arrayJoker,arrayGameInfo, arrayUndoGameInfo);

				viewColumn.removeChild(viewColumn.childNodes[0]); 
				this.addCard(arrayColummn,viewColumn,newCard,0);

				hand.actualization(arrayHand,viewHand);
				joker.actualizationArrayJoker(arrayJoker);
			}

			else if(arrayColummn[1]==null){

				undo.actualization(arrayColummn, arrayUndoColumn,arrayUndoHand,arrayHand,arrayUndoJoker,arrayJoker,arrayGameInfo, arrayUndoGameInfo);
				
				this.addCard(arrayColummn,viewColumn,newCard,1);

				hand.actualization(arrayHand,viewHand);
				joker.actualizationArrayJoker(arrayJoker);	
			}

			else if(arrayColummn[2]==null){

				undo.actualization(arrayColummn, arrayUndoColumn,arrayUndoHand,arrayHand,arrayUndoJoker,arrayJoker,arrayGameInfo, arrayUndoGameInfo);

				this.addCard(arrayColummn,viewColumn,newCard,2);

				hand.actualization(arrayHand,viewHand);
				joker.actualizationArrayJoker(arrayJoker);
			}
			else if(arrayColummn[3]==null){

				undo.actualization(arrayColummn, arrayUndoColumn,arrayUndoHand,arrayHand,arrayUndoJoker,arrayJoker,arrayGameInfo, arrayUndoGameInfo);
				this.addCard(arrayColummn,viewColumn,newCard,3);

				hand.actualization(arrayHand,viewHand);
				joker.actualizationArrayJoker(arrayJoker);
			}
			else if(arrayColummn[4]==null){

				undo.actualization(arrayColummn, arrayUndoColumn,arrayUndoHand,arrayHand,arrayUndoJoker,arrayJoker,arrayGameInfo, arrayUndoGameInfo);

				this.addCard(arrayColummn,viewColumn,newCard,4);

				hand.actualization(arrayHand,viewHand);
				joker.actualizationArrayJoker(arrayJoker);
			}
			else if(arrayColummn[5]==null){

				undo.actualization(arrayColummn, arrayUndoColumn,arrayUndoHand,arrayHand,arrayUndoJoker,arrayJoker,arrayGameInfo, arrayUndoGameInfo);

				this.addCard(arrayColummn,viewColumn,newCard,5);

				hand.actualization(arrayHand,viewHand);
				joker.actualizationArrayJoker(arrayJoker);
			}
			else if(arrayColummn[6]==null){

				undo.actualization(arrayColummn, arrayUndoColumn,arrayUndoHand,arrayHand,arrayUndoJoker,arrayJoker,arrayGameInfo, arrayUndoGameInfo);

				this.addCard(arrayColummn,viewColumn,newCard,6);

				hand.actualization(arrayHand,viewHand);
				joker.actualizationArrayJoker(arrayJoker);
			}
			else if(arrayColummn[7]==null){

				undo.actualization(arrayColummn, arrayUndoColumn,arrayUndoHand,arrayHand,arrayUndoJoker,arrayJoker,arrayGameInfo, arrayUndoGameInfo);

				this.addCard(arrayColummn,viewColumn,newCard,7);

				hand.actualization(arrayHand,viewHand);
				joker.actualizationArrayJoker(arrayJoker);
			}
			else if(arrayColummn[7]==newCard){

				undo.actualization(arrayColummn, arrayUndoColumn,arrayUndoHand,arrayHand,arrayUndoJoker,arrayJoker,arrayGameInfo, arrayUndoGameInfo);

				viewColumn.removeChild(viewColumn.childNodes[7]); 
				arrayColummn[7]=null;

				this.addCard(arrayColummn,viewColumn,newCard+1,7);

				hand.actualization(arrayHand,viewHand);
				joker.actualizationArrayJoker(arrayJoker);
			}

		}
	}

	compareCards(arrayColummn,viewColumn,arrayGameInfo){// ready
		let i=0;

		while(arrayColummn[i]!=null){
			if(arrayColummn[i]==arrayColummn[i+1]){ // compare if the card is the same as the next on

				let numberOf2048= new NumberOf2048();
				let score=new Score();

				arrayColummn[i]=arrayColummn[i]+1; // add 1 to the exponent because you add a new value in the exponent(REVISARRR) 
				arrayColummn[i+1]=null; //and the next position is null because you delete that card

				viewColumn.removeChild(viewColumn.lastChild);  //remove 2 cards in the dom to add the new card.
				viewColumn.removeChild(viewColumn.lastChild);
					
				if(arrayColummn[i]==11)numberOf2048.actualization(arrayGameInfo);//if you have 2048, the game add 1 to the number of 2048 in the dom.
				    
				this.addCard(arrayColummn,viewColumn,arrayColummn[i],i); // the new card to add.

				score.actualization(arrayGameInfo,arrayColummn[i]-1);// update the score dom.(that -1 is the original exponent in the card )(REVISAR)

				i=0;
			}

			else i++;
		}
	}
}

class Hand{

	initialize(hand){ //ready
    	let i=0;
    	let rand=0;

    	while(i<=1){
    		rand=Math.floor(Math.random() * 6)+1;
    		hand[i]=rand;
    		i++;
    	}
	}

	addCard(arrayHand,viewHand,i){ //ready.
		var img=document.createElement("img");

		if(arrayHand[i]==1){

			img.src="carta1.png";
			if(i==0) img.className="card-hand-0";
			else if(i==1)img.className="card-hand-1";
			viewHand.appendChild(img);
		}

		if(arrayHand[i]==2){

			img.src="carta2.png";
			if(i==0) img.className="card-hand-0";
			else if(i==1) img.className="card-hand-1";
			viewHand.appendChild(img);
		}

		if(arrayHand[i]==3){

			img.src="carta3.png";
			if(i==0) img.className="card-hand-0";
			else if(i==1) img.className="card-hand-1";
			viewHand.appendChild(img);
		}

		if(arrayHand[i]==4){

			img.src="carta4.png";
			if(i==0) img.className="card-hand-0";
			else if(i==1) img.className="card-hand-1";
			viewHand.appendChild(img);
		}

		if(arrayHand[i]==5){

			img.src="carta5.png";
			if(i==0) img.className="card-hand-0";
			else if(i==1) img.className="card-hand-1";
			viewHand.appendChild(img);
		}

		if(arrayHand[i]==6){

			img.src="carta6.png";
			if(i==0) img.className="card-hand-0";
			else if(i==1) img.className="card-hand-1";
			viewHand.appendChild(img);
		}
	}

	actualization(arrayHand,viewHand){ //ready
		let rand=Math.floor(Math.random() * 6)+1;
		arrayHand[1]=arrayHand[0];
		arrayHand[0]=rand;
		viewHand.removeChild(viewHand.lastChild); 
		viewHand.removeChild(viewHand.lastChild); 
		this.addCard(arrayHand,viewHand,0);
		this.addCard(arrayHand,viewHand,1);	
	}
}

class Joker{

	initialize(arrayJoker){
		arrayJoker[0]=5;
		arrayJoker[1]=5;
	}

	showInitialValues(arrayJoker,viewJoker,i){
		var img=document.createElement("img");
			img.src="cartaDescarte0.png";
			if(i==0)img.className="joker1";
			else img.className="joker2";
			viewJoker.appendChild(img);
	}

	useJoker(arrayJoker, viewJoker,i,arrayHand,viewHand){
		if(arrayJoker[i]>=5){

			var img=document.createElement("img");
				img.src="cartaDescarte1.png";

			let hand= new Hand();

			arrayJoker[i]=0; //put in 0 the joker that you used.

			viewJoker.removeChild(viewJoker.lastChild);// remove the picture, because I need the Block joker and it is when the background in the picture is red.
			

			if(i==0)img.className="joker1"; //depends of the number i, that probably be the joker 1 or the joker 2
			else img.className="joker2";

			viewJoker.appendChild(img);// add the new joker
			
			hand.actualization(arrayHand,viewHand);//actualizate the new hand.
		}
	}

	actualization(arrayJoker, viewJoker,i){//revisar

		if(arrayJoker[i]>=5){ //if the joker has more than 5 you it is "desbloqueado", so the new joker thaht you need it the joker with white background.
			var img=document.createElement("img");
				img.src="cartaDescarte0.png";

				viewJoker.removeChild(viewJoker.lastChild);

				if(i==0)img.className="joker1";//depends of the number i, that probably be the joker 1 or the joker 2
				else img.className="joker2";

				viewJoker.appendChild(img);// add the new joker
		}

		else{//revisar
			viewJoker.removeChild(viewJoker.lastChild);
			var img=document.createElement("img");
			img.src="cartaDescarte1.png";
			if(i==0)img.className="joker1";
			else img.className="joker2";
			viewJoker.appendChild(img);
		}
	}

	actualizationArrayJoker(arrayJoker){//ready 
		//actualizate arrays joker
		arrayJoker[0]++;
		arrayJoker[1]++;
	}
}

class Score{

	initialize(arrayGameInfo) {
		arrayGameInfo[0]=0;
	}
	actualization(arrayGameInfo,valueToAdd){
		arrayGameInfo[0]=(arrayGameInfo[0]+((Math.pow(2, valueToAdd-1)*2)*10))*(arrayGameInfo[1]);
		let viewScore= document.getElementById("score");
		viewScore.innerHTML=arrayGameInfo[0];

	}
}

class NumberOf2048{
	initialize(arrayGameInfo){ //ready
		arrayGameInfo[1]=1;
	} 

	actualization(arrayGameInfo){ //ready
		arrayGameInfo[1]++;
		let viewNumberOf2048= document.getElementById("number-of-2048");
		viewNumberOf2048.innerHTML=arrayGameInfo[1];

	}
}

class Undo{
	useUndo(arrayColumn,arrayUndoColumn,viewColumn, arrayHand, arrayUndoHand, viewHand, arrayJoker, viewJoker1, viewJoker2, arrayUndoJoker,arrayGameInfo, arrayUndoGameInfo){
		let i=0;
		let column= new Column();
		let hand= new Hand();
		let joker=new Joker();
		let numberOf2048= new NumberOf2048();


		column.initialize(arrayColumn); //remove all data in the column

		while(viewColumn.lastChild!=null){ //remove all imagen in the column in the dom

			viewColumn.removeChild(viewColumn.lastChild);
			if(arrayUndoColumn[0]==null) {
				var img=document.createElement("img");
				img.className="card";
				img.src="cartaVacia.png";
			   	viewColumn.appendChild(img);
			   	break;
			}
		}


		while(arrayUndoColumn[i]!=null){  // change values in the new column
			arrayColumn[i]=arrayUndoColumn[i];
			i++;
		}

		i=0;

		while(arrayColumn[i]!=null){ //add the new column in the dom
			column.addCard(arrayColumn,viewColumn,arrayColumn[i],i);
			i++;
		}

		viewHand.removeChild(viewHand.lastChild); //delete the cards in he dom
		viewHand.removeChild(viewHand.lastChild); 

		arrayHand[0]=arrayUndoHand[0];  //change values in the new hand
		arrayHand[1]=arrayUndoHand[1];

		hand.addCard(arrayHand,viewHand,0); // add the new hand in thw dom
		hand.addCard(arrayHand,viewHand,1);

		alert(arrayJoker[0]+"-"+arrayJoker[1]);

		
		arrayJoker[0]=arrayJoker[0]-1; //change values in jokers
		arrayJoker[1]=arrayJoker[1]-1;

		joker.actualization(arrayJoker, viewJoker1,0); //update  new jokers
		joker.actualization(arrayJoker, viewJoker2,1);

		arrayGameInfo[0]=arrayUndoGameInfo[0]; //actualizate the new game info
		arrayGameInfo[1]=arrayUndoGameInfo[1];
		
		let viewScore= document.getElementById("score");//add the new info in rhe dom.
		let viewNumberOf2048= document.getElementById("number-of-2048");

		viewScore.innerHTML=arrayGameInfo[0];
		viewNumberOf2048.innerHTML=arrayGameInfo[1];

	}

	actualizationArrayUndo(arrayColumn, arrayUndoColumn){
		let i=0;
		let column= new Column;

		column.initialize(arrayUndoColumn); //erase all data in the arrayUndoColumn and add the arrayColumn's data

		while(arrayColumn[i]!=null){
			arrayUndoColumn[i]=arrayColumn[i];
			i++;
		}
	}

	actualizationArrayUndoGameInfo(arrayGameInfo, arrayUndoGameInfo){ //add arraYGameInfo's values in the arrayUndoGameInfo
		arrayUndoGameInfo[0]=arrayGameInfo[0];
		arrayUndoGameInfo[1]=arrayGameInfo[1];
	}

	actualizationArrayUndoHand(arrayUndoHand,arrayHand){
		arrayUndoHand[0]=arrayHand[0];
		arrayUndoHand[1]=arrayHand[1];
	}

	actualizationArrayUndoJoker(arrayUndoJoker,arrayJoker){
		arrayUndoJoker[0]=arrayJoker[0];
		arrayUndoJoker[1]=arrayJoker[1];
	}

	actualization(arrayColummn, arrayUndoColumn,arrayUndoHand,arrayHand,arrayUndoJoker,arrayJoker,arrayGameInfo, arrayUndoGameInfo){
		this.actualizationArrayUndo(arrayColummn, arrayUndoColumn);
		this.actualizationArrayUndoHand(arrayUndoHand,arrayHand);
		this.actualizationArrayUndoJoker(arrayUndoJoker,arrayJoker);
		this.actualizationArrayUndoGameInfo(arrayGameInfo, arrayUndoGameInfo);


	}
}

(function(){ 
	let column= new Column();
	let hand= new Hand();
	let joker=new Joker();
	let score=new Score();
	let numberOf2048= new NumberOf2048();
	let undo= new Undo();

	//front end.
	let viewColumn1 = document.getElementById("column1");
	let viewColumn2 = document.getElementById("column2");
	let viewColumn3 = document.getElementById("column3");
	let viewColumn4 = document.getElementById("column4");
	let viewHand = document.getElementById("hand");
	let viewUndo = document.getElementById("undo");
	let viewJoker1 = document.getElementById("joker1");
	let viewJoker2 = document.getElementById("joker2");
	//front end.

	//arrays of all of this
	let arrayColummn1=new Array(7);
	let arrayColummn2=new Array(7);
	let arrayColummn3=new Array(7);
	let arrayColummn4=new Array(7);
	let arrayHand=new Array(1);
	let arrayJoker=new Array(1);
	let arrayGameInfo=new Array(1);


	let arrayUndoColumn1=new Array(7);
	let arrayUndoColumn2=new Array(7);
	let arrayUndoColumn3=new Array(7);
	let arrayUndoColumn4=new Array(7);
	let arrayUndoHand= new Array(1);
	let arrayUndoJoker=new Array(1);
	let arrayUndoGameInfo= new Array(1);

	let per=0;
	//Arrays of all of the objects.

	column.initialize(arrayUndoColumn1);

	score.initialize(arrayGameInfo);
	numberOf2048.initialize(arrayGameInfo); //number-of-2048
	

	column.initialize(arrayColummn1);
	column.addCard(arrayColummn1,viewColumn1,0);

	column.initialize(arrayColummn2);
	column.addCard(arrayColummn2,viewColumn2,0);

	column.initialize(arrayColummn3);
	column.addCard(arrayColummn3,viewColumn3,0);

	column.initialize(arrayColummn4);
	column.addCard(arrayColummn4,viewColumn4,0);

	hand.initialize(arrayHand);

	hand.addCard(arrayHand,viewHand,0);
	hand.addCard(arrayHand,viewHand,1);

	joker.initialize(arrayJoker);

	joker.showInitialValues(arrayJoker,viewJoker1,0);
	joker.showInitialValues(arrayJoker,viewJoker2,1);

	let overlay=document.getElementsByClassName("overlay-text");
 	let overlays = Array.from(document.getElementsByClassName('overlay-text'));
 	
 

 	
 	overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
        });
    });	


	document.getElementById("column1").addEventListener("click", function(){

		column.addCardsToTheColumn(arrayColummn1,viewColumn1,arrayHand[1],arrayHand,viewHand,arrayJoker,arrayUndoColumn1,arrayUndoHand,arrayUndoJoker,arrayGameInfo, arrayUndoGameInfo);
		column.compareCards(arrayColummn1,viewColumn1,arrayGameInfo);
		joker.actualization(arrayJoker, viewJoker1,0);
		joker.actualization(arrayJoker, viewJoker2,1);
		per=1;
	});

	document.getElementById("column2").addEventListener("click", function(){

		column.addCardsToTheColumn(arrayColummn2,viewColumn2,arrayHand[1],arrayHand,viewHand,arrayJoker,arrayUndoColumn2,arrayUndoHand,arrayUndoJoker,arrayGameInfo, arrayUndoGameInfo);
		column.compareCards(arrayColummn2,viewColumn2,arrayGameInfo);
		joker.actualization(arrayJoker, viewJoker1,0);
		joker.actualization(arrayJoker, viewJoker2,1);
		per=2;
	});

	document.getElementById("column3").addEventListener("click", function(){

		column.addCardsToTheColumn(arrayColummn3,viewColumn3,arrayHand[1],arrayHand,viewHand,arrayJoker,arrayUndoColumn3,arrayUndoHand,arrayUndoJoker,arrayGameInfo, arrayUndoGameInfo);
		column.compareCards(arrayColummn3,viewColumn3,arrayGameInfo);
		joker.actualization(arrayJoker, viewJoker1,0);
		joker.actualization(arrayJoker, viewJoker2,1);
		per=3;
	});

	document.getElementById("column4").addEventListener("click", function(){

		column.addCardsToTheColumn(arrayColummn4,viewColumn4,arrayHand[1],arrayHand,viewHand,arrayJoker,arrayUndoColumn4,arrayUndoHand,arrayUndoJoker,arrayGameInfo, arrayUndoGameInfo);
		column.compareCards(arrayColummn4,viewColumn4,arrayGameInfo);
		joker.actualization(arrayJoker, viewJoker1,0);
		joker.actualization(arrayJoker, viewJoker2,1);
		per=4;

	});

	document.getElementById("joker1").addEventListener("click",function(){
			 if(per==1) 	undo.actualization(arrayColummn1,viewColumn1,arrayUndoHand,arrayHand,arrayUndoJoker,arrayJoker,arrayGameInfo, arrayUndoGameInfo);
		 else if(per==2)	undo.actualization(arrayColummn2,viewColumn2,arrayUndoHand,arrayHand,arrayUndoJoker,arrayJoker,arrayGameInfo, arrayUndoGameInfo);
		 else if(per==3)	undo.actualization(arrayColummn3,viewColumn3,arrayUndoHand,arrayHand,arrayUndoJoker,arrayJoker,arrayGameInfo, arrayUndoGameInfo);
		 else if(per==4)	undo.actualization(arrayColummn4,viewColumn4,arrayUndoHand,arrayHand,arrayUndoJoker,arrayJoker,arrayGameInfo, arrayUndoGameInfo);


		joker.useJoker(arrayJoker, viewJoker1,0,arrayHand,viewHand);

	});

	document.getElementById("joker2").addEventListener("click",function(){
		joker.useJoker(arrayJoker, viewJoker2,1,arrayHand,viewHand);
		per=0;
	});

	document.getElementById("undo").addEventListener("click", function(){
	     if(per==1)undo.useUndo(arrayColummn1,arrayUndoColumn1,viewColumn1,arrayHand,arrayUndoHand,viewHand,arrayJoker, viewJoker1, viewJoker2, arrayUndoJoker,arrayGameInfo, arrayUndoGameInfo);
	else if(per==2)undo.useUndo(arrayColummn2,arrayUndoColumn2,viewColumn2,arrayHand,arrayUndoHand,viewHand,arrayJoker, viewJoker1, viewJoker2, arrayUndoJoker,arrayGameInfo, arrayUndoGameInfo);
	else if(per==3)undo.useUndo(arrayColummn3,arrayUndoColumn3,viewColumn3,arrayHand,arrayUndoHand,viewHand,arrayJoker, viewJoker1, viewJoker2, arrayUndoJoker,arrayGameInfo, arrayUndoGameInfo);
	else if(per==4)undo.useUndo(arrayColummn4,arrayUndoColumn4,viewColumn4,arrayHand,arrayUndoHand,viewHand,arrayJoker, viewJoker1, viewJoker2, arrayUndoJoker,arrayGameInfo, arrayUndoGameInfo);
	per=0;
	});

}())