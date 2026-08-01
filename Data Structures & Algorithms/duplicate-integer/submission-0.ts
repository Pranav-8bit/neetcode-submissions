class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const hashset = new Map<number,number>();
        for(let i =0; i< nums.length; i++){
           const count = (hashset.get(nums[i]) ?? 0) +1;
            hashset.set(nums[i], count )
            if(hashset.get(nums[i])>1){return true}
        }
    return false;
    }
}
