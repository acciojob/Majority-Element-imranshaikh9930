//your code here

function majortyNumber(arr,n) {
	let count = 0;
	for(let i of arr){

		if(i == i+1){
			count++;
		}


		if(count>Math.floor(n/2)){
			return i;
		}
		
		
	}
	return 0;
}