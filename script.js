// list_one 증상 : [병명...]

// list_two 병명 : [[증상....], 유병률]


const list_one = { }
const list_two = { }




for (i in list){console.log(i)}





// 개수도 세야하는데..?
// 

function get_probability(symptoms){
    let expected_symptoms = {};
    for (i of symptoms){
        for (j of list_one[i]){
            try {
                expected_symptoms[j] += 1
            }
            catch {
                expected_symptoms[j] = 1
            }
        }
    }
    return expected_symptoms
}


for (i in get_probability()){

    // 


}