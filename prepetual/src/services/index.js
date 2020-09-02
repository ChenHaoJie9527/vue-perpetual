//该文件用于调用数据请求函数
import {
    getDayData,
    getMothData,
    getYearData
} from "./request";

import {
    FormatCharDate,
    MapForcharDate
} from "../libs/utils";

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
            res = data.result.data;
            res.date = FormatCharDate(res.date, "day");
            res["year-month"] = FormatCharDate(res["year-month"], "month");
            break;
        case "month":
            res = data.result.data.holiday_array;
            res = MapForcharDate(res, "festival");
            break;
        case "year":
            res = data.result.data.holiday_list;
            res = MapForcharDate(res, "startday");
            break;
        default:
            break;
    }
    store.commit("setData", {
        field,
        data: res
    })
}