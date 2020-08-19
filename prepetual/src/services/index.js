//该文件用于调用数据请求函数
import {
    getDatData,
    getMonthData,
    getYearData
} from "./request";

const floorWrited = {
    async day(date) {
        return await getDatData(date);
    },
    async month(date) {
        return await getMonthData(date);
    },
    async year(date) {
        return await getYearData(date)
    }
}

export default async (field, date) => {
    let data = null;
    // 对象映射关系

    if (!floorWrited[field]) {
        return;
    }
    data = floorWrited[field](date);
    return data;
}