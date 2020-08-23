//该文件用于调用数据请求函数
import {
    getDayData,
    getMothData,
    getYearData
} from "./request";

import { FormatCharDate, MapForcharDate } from "../libs/utils";

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


export default async (store, field, date) => {
    let data = null;
    // 对象映射
    if (!floorWrited[field]) {
        return;
    }
    data = await floorWrited[field](date);

    if (data.error_code !== 0) {
        store.commit("setErrorCode", data.error_code);
        return;
    }

    let res = null;
    switch (field) {
        case "day":
            res = data.reslut.data;
            res.date = FormatCharDate(res.date, "day");
            res["year-month"] = FormatCharDate(res["year-month"], "month")
        default:
            break;
    }

    // return data;
}