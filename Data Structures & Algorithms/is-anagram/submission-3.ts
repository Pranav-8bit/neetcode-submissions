class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const first = new Map<string,number>();
if (s.length !== t.length) return false;
        for(let i of s){
            const count1= (first.get(i) ?? 0)+1;
            first.set(i,count1);
        }
         for(let j of t){
            if (!first.has(j)) {
    return false;
}
            const count=first.get(j)-1;
            
           first.set(j,count);
            if(first.get(j)===0){first.delete(j)}

        }
        
        return first.size === 0;
    }

}
