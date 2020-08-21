//该文件用于调用数据请求函数
import {
    getDayData,
    getMothData,
    getYearData
} from "./request";

const floorWrited = {
    async day(date) {
        return await getDayData(date);
    },
    async month(date) {
        return await getMothData(date);
    },
    async year(date) {
        return await getYearData(date)
    }
}

export default async (field, date) => {
    let data = null;
    // 对象映射
    if (!floorWrited[field]) {
        return;
    }
    data = await floorWrited[field](date);
    return data;
}