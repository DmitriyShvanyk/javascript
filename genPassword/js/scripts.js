;(function(){
	
	"use strict";
	
	
	var genRange = document.querySelector('#param-1');
	var genPasswordLength = document.querySelector('#password-length');
	
		genRange.oninput = function(){
			genPasswordLength.innerHTML = this.value;
		}
	
	var arrNumber = [1,2,3,4,5,6,7,8,9,0];
	var arrLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var arrUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	var arrSpecialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "~", "?"];
	
	var genPasswordBtn = document.querySelector('.gen-password__form-btn');
		
		genPasswordBtn.onclick = generatePassword;
		
		
		var genParamNumber = document.querySelector('#param-2');
		var genParamLowerCase = document.querySelector('#param-3');
		var genParamUpperCase = document.querySelector('#param-4');
		var genParamSpecialChar = document.querySelector('#param-5');
		
		generatePassword();
		
		function generatePassword(){
			
			var arrResult = [];
			
			if(genParamNumber.checked){
				arrResult = arrResult.concat(arrNumber);				
			}
			if(genParamLowerCase.checked){
				arrResult = arrResult.concat(arrLowerCase);				
			}
			if(genParamUpperCase.checked){
				arrResult = arrResult.concat(arrUpperCase);				
			}
			if(genParamSpecialChar.checked){
				arrResult = arrResult.concat(arrSpecialChar);				
			}
			
			arrResult.sort(compareRandom);
			//console.log(arrResult);
			
			var pass = '';
			
			for(var i = 0; i < genRange.value; i++){
				pass += arrResult[randomInteger(0, arrResult.length - 1)];
			}
			
			var genPasswordOutput = document.querySelector('.gen-password__output');
				genPasswordOutput.innerHTML = '<p>' + pass + '</p>';
			
		}
		
		function compareRandom(a, b){
			return Math.random() - .5;
		}
		
		function randomInteger(min, max){
			var rand = min - .5 + Math.random() * (max - min + 1);
			rand = Math.round(rand);
			return rand;
		}
	
})();