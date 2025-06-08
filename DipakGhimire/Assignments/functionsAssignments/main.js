function addStudent(n){
    let arry = [];
    for(let i = 1; i<= n; i++){
        let id = Number(prompt("Enter a ID :"));
        let name = prompt("Enter Name");
        let faculty = prompt("Enter Faculty");
        let batch = prompt("Enter Batch");
        let email = prompt("Enter Email");

        arry.push(id);
        arry.push(name);
        arry.push(faculty);
        arry.push(batch);
        arry.push(email);

    }
let detail = ["ID", "Name", "Faculty", "Batch", "Email"]
    let j = 0;

for(let i = 0; i<arry.length; i++){
    console.log(`${detail[j]} : ${arry[i]}`);

    if(j == detail.length-1 ){
        j = 0;
    }
    else{
        j++;
    }
}

}
let n = Number(prompt("Enter How many Students you want to add: "))
addStudent(n)
