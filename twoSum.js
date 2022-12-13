
testArr1 = [2, 7, 11, 15]
testArr2 = [3, 2, 3]
testArr3 = [3, 3]
testArr4 = [45, 23, 11, 16]
testArr5 = [2, 5, 5, 11]
testArr6 = [3, 2, 4]
testArr7 = [1, 3, 4, 2]

// const twoSum = (nums, target) => {
//     for (let i = 0, j = nums.length; i < nums.length; i++, j--) {
//         console.log(i)
//         console.log(j)
//         console.log(nums[i] + nums[j])
//         if (nums[i] + nums[j] == target) {
//             if (nums[i] === nums[j]) {
//                 return [nums.indexOf(nums[i]), nums.indexOf(nums[i]) + 1]
//             } else {
//                 return [nums.indexOf(nums[i]), nums.indexOf(nums[j])]
//             }
//         }
//     }
//     return 'No Match'        
// };


// console.log(twoSum(testArr2, 6))

// const twoSum = (nums, target) => {

//     for (let i = 0; i <= nums.length - 2; i++) {
//         let anchor = nums[0]
//         // console.log(i)
//         // console.log(j)
//         console.log(`${anchor} + ${nums[i + 1]}`)
//         anchor = nums[i]
//         // if (anchor + nums[i] == target) {
//         //     return [nums.indexOf(anchor), nums.indexOf(nums[i], 1)]
//         // } else {
//         //     console.log(anchor + nums[i])
//         //     twoSum(nums, target)
//         // }
//     }
//     return 'No Match'
// };



// const twoSum = (nums, target) => {
//     for (let i = 0; i <= nums.length - 1; i++) {
//         let anchor = nums[i]
//         for (let j = 1; j < nums.length; j++) {
//             let check = nums[j]
//             console.log(anchor, check)
//             if (anchor + nums[j] == target ) {
//                 if (anchor + check == target && anchor == check && nums.indexOf(anchor) != nums.indexOf(check)) {
//                     console.log(anchor, check)
//                     return [nums.indexOf(anchor), nums.indexOf(check, j + nums.indexOf(nums[i]))]
//                 } else if (anchor != nums[j]) {
//                     return [nums.indexOf(anchor), nums.indexOf(check, j)]
//                 } else {
//                     console.log("This is nums anchor" + nums[i] + nums.indexOf(anchor))
//                     console.log("This is nums match" + nums[j] + nums.indexOf(nums[j], 1))
//                     console.log(anchor + nums[j] == target)
//                 }
//             } else {
//             console.log(anchor + nums[j])
//             }
//         }
//     }
//     return 'No Match'
// };




const twoSum = (nums, target) => {
    let answer = []
    for (let i = 0; i < nums.length; i++) {
        let anchor = nums[i]
        for (let j = 1; j < nums.length; j++) {
            let check = nums[j]
            let difference = nums.indexOf(check) - nums.indexOf(anchor)
            console.log(`J${j} - I${i} = ${difference}`)
                console.log(anchor, '+', check, '=', anchor + check)
                if (anchor + check == target) {
                    console.log('target matched')
                    if (anchor == check && nums.indexOf(anchor) == nums.indexOf(check)) {
                        console.log('target matched, equal, same indexes')
                        nums.forEach((num, idx) => num == anchor ? answer.push(idx) : null)
                        return answer
                    } else if (anchor == check && nums.indexOf(anchor) != nums.indexOf(check)) {
                        console.log('target matched, equal, different indexes')
                        console.log(difference)
                        return [nums.indexOf(anchor), nums.indexOf(check)]
                    } else if (anchor != check && nums.indexOf(anchor) != nums.indexOf(check)) {
                        console.log('target matched and unequal')
                        return [nums.indexOf(anchor), nums.indexOf(check)]
                    } else {
                        console.log('No Match')
                    }
                }
                console.log('No match yet')
                continue
            }
    }
};


console.log(twoSum(testArr7, 6))