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
// 时间函数具体业务逻辑
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

// 对返回数据进行处理的工具函数
// date: 返回的时间 
// type: 判断返回的数据类型
// 该方法用于处理day组件
function FormatCharDate(date, type) {
    const arg = date.split("-");
    switch (arg) {
        case "day":
            return `${arg[0]}年${arg[1]}月${arg[2]}日`;
        case "month":
            return `${arg[0]}年${arg[1]}月`;
        case "year":
            return `${arg[0]}年`;
        default:
            return `${arg[0]}年${arg[1]}月${arg[2]}日`;
    }
}
// 如果返回的是数组的话，调用函数返回
// 该方法用于处理month year组件
function MapForcharDate(data, key) {
    return data.map(item => {
        item[key] = FormatCharDate(item[key]);
        return item;
    })
}



export {
    getDate,
    FormatCharDate,
    MapForcharDate
}