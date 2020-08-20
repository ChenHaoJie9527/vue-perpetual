// 调用时间函数
const tiems = {
    day(date) {
        return getSubTimes.getDay(date);
    },
    month(date) {
        return getSubTimes.getMonth(date);
    },
    year(date) {
        return getSubTimes.getYear(date);
    }
}
// 处理时间函数
class getSubTimes {
    static getDay(date) {
        const value = date.getDate().toString();
        return value < 10 ? ("0" + value) : value;
    }
    static getMonth(date) {
        return (date.getMonth() + 1).toString();
    }
    static getYear(date) {
        return date.getFullYear().toString().substr(2);
    }
}
// 匹配时间函数
function getDate(type) {
    const date = new Date();
    if (!tiems[type]) {
        return;
    }
    return tiems[type](date);
}
export {
    getDate
}