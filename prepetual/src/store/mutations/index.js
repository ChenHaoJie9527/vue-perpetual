const changeTitleText = {
    day(state) {
        return state.headerTitle = "当天信息";
    },
    month(state) {
        return state.headerTitle = "近期假期";
    },
    year(state) {
        return state.headerTitle = "当年假期"
    },

}

// 用于解决出现undefenend无法匹配路由信息的方案
function Undefen(state, types) {
    if (types == undefined) {
        return state.headerTitle = "当天信息";
    }
    return;
}

const changeInputLength = {
    day(state) {
        return state.maxlength = 8;
    },
    month(state) {
        return state.maxlength = 6;
    },
    year(state) {
        return state.maxlength = 4;
    },
}

function Unlength(state, types) {
    if (types == undefined) {
        return state.maxlength = 8;
    }
    return
}

// 调用时间类
const changePlaceHolder = {
    day(state) {
        return state.placeholder = `${newDate.setDay()} (${install.Inday()})`;
    },
    month(state) {
        return state.placeholder = `${newDate.setMonth()} (${install.Inmonth()})`;
    },
    year(state) {
        return state.placeholder = `${newDate.setYear()} (${install.Inyear()})`;
    },
}

// 时间类
class newDate {
    static date = new Date();
    static setDay() {
        let year = newDate.year();
        let month = newDate.month();
        let day = newDate.day();
        return `格式: ${year}${month}${day}`;
    }
    static setMonth() {
        return `格式: ${newDate.year()}${newDate.month()}`;
    }
    static setYear() {
        return `格式: ${newDate.year()}`;
    }
    static year() {
        return newDate.date.getFullYear();
    }
    static month() {
        let month = newDate.date.getMonth() + 1;
        month = month < 10 ? ("0" + month) : month;
        return month;
    }
    static day() {
        let day = newDate.date.getDate();
        day = day < 10 ? ("0" + day) : day;
        return day;
    }
}

// 时间类装饰器
class Install extends newDate {
    constructor() {
        super()
    }
    Inday() {
        return (`${newDate.year()}年${newDate.month()}月${newDate.day()}日`);
    }
    Inmonth() {
        return (`${newDate.year()}年${newDate.month()}月`);
    }
    Inyear() {
        return (`${newDate.year()}年`)
    }
}
const install = new Install();

// 当匹配到空是进行处理
function UnHouder(state, types) {
    if (types == undefined) {
        return state.placeholder = `${newDate.setDay()} (${install.Inday()})`;
    }
    return;
}

export default {
    setHeaderTitle(state, routerName) {
        if (!changeTitleText[routerName]) {
            return Undefen(state, changeTitleText[routerName]);
        }
        return changeTitleText[routerName](state);
    },
    setMaxlength(state, routerName) {
        if (!changeInputLength[routerName]) {
            return Unlength(state, changeInputLength[routerName]);
        }
        return changeInputLength[routerName](state);
    },
    setPlaceholder(state, routerName) {
        if (!changePlaceHolder[routerName]) {
            return UnHouder(state, changePlaceHolder[routerName]);
        }
        return changePlaceHolder[routerName](state);
    },
    setErrorCode(state, errorCode) {
        state.errorCode = errorCode;
    }
}