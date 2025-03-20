//your code here

function findMajorityElement(nums) {

	let map = new Map();

	for(let i = 0 ; i< nums.length;i++){

		if(map.has(nums[i])){
			hm.set(nums[i],hm.get(nums[i],0)+1);
		}
		else{
			hm.set(nums[i],1);
		}

		
	}

	for(let [key,value] in map){

		if(value > 1){
				return key;			
		}
	}
}