// 该文件是数据请求层
import {
    axiosPost
} from "@/libs/http";

function getDayData(date) {
    return new Promise((resolve, reject) => {
        axiosPost({
            url: "/api/calendar/day",
            data: {
                date
            },
            success(data) {
                resolve(data);
            },
            error(err) {
                reject(err);
            }
        })
    })
}

function getMothData(month) {
    return new Promise((resolve, reject) => {
        axiosPost({
            url: "/api/calendar/month",
            data: {
                "year-month": month,
            },
            success(data) {
                resolve(data);
            },
            error(err) {
                reject(err);
            }
        })
    })
};

function getYearData(year) {
    return new Promise((resolve, reject) => {
        axiosPost({
            url: "/api/calendar/year",
            data: {
                year
            },
            success(data) {
                resolve(data);
            },
            error(err) {
                reject(err);
            }
        })
    })
};
export {
    getDayData,
    getMothData,
    getYearData
}