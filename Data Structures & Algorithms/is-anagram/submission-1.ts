class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const first = new Map<string,number>();
        const second = new Map<string,number>();

        for(let i of s){
            const count1= (first.get(i) ?? 0)+1;
            first.set(i,count1);
        }
         for(let j of t){
            const count2= (second.get(j)?? 0)+1;
            second.set(j,count2);
        }

        if(this.areMapsEqual(first,second)){
            return true
        }
        return false;
    }

    areMapsEqual(one: Map<string,number>, two:Map<string,number>):boolean{
        if(one.size !== two.size){
            return false
        }else{
            for(const [key, value] of one){
                if(!two.has(key) ||two.get(key) !== value){
                    return false;
                }
            }
                return true

        }
        return false
    }
}
