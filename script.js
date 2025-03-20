function findMajorityElement(nums) {
    let map = new Map();

   
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }

    let majorityCount = Math.floor(nums.length / 2);


    for (let [key, value] of map.entries()) {
        if (value > majorityCount) {
            return key;
        }
    }

    return -1; 
}


