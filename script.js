// list_one 증상 : [병명...]

// list_two 병명 : [[증상....], 유병률]


const list_one = { }
const list_two = { }




for (i in list){console.log(i)}




// 개수도 세야하는데..?


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
    // 나 지금 심정이 약간 긱사 들어가고 싫고 들어가지 않는것도 싫고 집 가기도 싫고 집 가지 않는 것도 싫어
    // 제주도 가면 나 맛있는거 먹음? 아 진짜? 비행기 얼마.
    // 

    
}