class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const Hash = new Map<number,number>( nums.map((item,index)=> [item, index]));

        for(let i =0; i<=nums.length-1; i++){
            let requiredNumber = target-nums[i];

            if(Hash.has(requiredNumber)){
                const j =Hash.get(requiredNumber)
                if(i !==j){
                return [i,j]}
            }
        }
    }
}
