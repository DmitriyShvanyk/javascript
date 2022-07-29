;(function(){
	
	"use strict";		
	
	//Simple Generator BorderRadius
	function generatorBR(){
		
		var inputTLBR = document.querySelector('#inputTLBR').value,
			inputTRBR = document.querySelector('#inputTRBR').value,
			inputBLBR = document.querySelector('#inputBLBR').value,
			inputBRBR = document.querySelector('#inputBRBR').value,				
			changeableBlock = document.querySelector('.gbr__changeable'),
			codeBorderRadius = document.querySelector('.gbr__content-code-count');
			
		
		changeableBlock.style.borderRadius = inputTLBR + 'px ' + inputTRBR + 'px ' + inputBLBR + 'px ' + inputBRBR + 'px';	
		
		
		if((inputTLBR == inputTRBR) && (inputTLBR == inputBLBR) && (inputTLBR == inputBLBR) && (inputTLBR == inputBRBR)){
			
			codeBorderRadius.innerHTML = inputTLBR + 'px';	
			codeBorderRadius.innerHTML = inputTRBR + 'px';
			codeBorderRadius.innerHTML = inputBLBR + 'px';
			codeBorderRadius.innerHTML = inputBRBR + 'px';
		}	
		
		else{
			codeBorderRadius.innerHTML = inputTLBR + 'px ' + inputTRBR + 'px ' + inputBLBR + 'px ' + inputBRBR + 'px';
		}
		
	}
	
	inputTLBR.addEventListener('change', generatorBR, false);
	inputTRBR.addEventListener('change', generatorBR, false);
	inputBLBR.addEventListener('change', generatorBR, false);
	inputBRBR.addEventListener('change', generatorBR, false);
	
	
	// Copy Code Border Radius
	var codeTotalBorderRadius = document.querySelector('.gbr__content-code');
	function copyCodeTotalBorderRadius(){
		
		var range = window.getSelection().getRangeAt(0);
			range.selectNode(codeTotalBorderRadius);
			window.getSelection().addRange(range);
			document.execCommand("copy");
			alert('Code copy');
	}
	codeTotalBorderRadius.addEventListener('click', copyCodeTotalBorderRadius, false);	
	
	
})();