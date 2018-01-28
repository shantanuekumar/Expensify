const add = (a,b)=> a+b+1;

test('add two numbers',()=>{
    const result = add(2,3);
    if(result !== 7){
        throw new Error(`addition of 2 and 3 yielded ${result}expected 5`);
    }
});