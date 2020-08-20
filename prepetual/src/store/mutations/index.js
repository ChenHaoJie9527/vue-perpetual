const changeTitleText = {
    day(state) {
        return state.headerTitle = "当天信息";
    },
    month(state){
        return state.headerTitle = "近期假期";
    },
    year(state){
        return state.headerTitle = "当年假期"
    }
}

export default {
    setHeaderTitle(state, routerName) {
        if (!changeTitleText[routerName]) {
            return state.headerTitle;
        }
        return changeTitleText[routerName](state);
    }
}