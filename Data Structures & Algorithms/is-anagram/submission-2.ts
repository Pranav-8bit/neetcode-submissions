class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const first = new Map<string,number>();

        for(let i of s){
            const count1= (first.get(i) ?? 0)+1;
            first.set(i,count1);
        }
         for(let j of t){
            const count=first.get(j)-1;
           first.set(j,count);
            if(first.get(j)===0){first.delete(j)}

        }
        if (first.size===0){return true}

        return false;
    }

}
