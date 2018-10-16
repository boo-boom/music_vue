const mutations = {
    modTest(state, num) {
        console.log(num)
        state.test = num
    }
}

export default mutations;