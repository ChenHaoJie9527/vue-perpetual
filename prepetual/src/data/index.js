import {
    getDate
} from "@/libs/utils";

export default [{
        icontext: getDate("day"),
        tabText: "当天",
        path: "/"
    },
    {
        icontext: getDate("month"),
        tabText: "近期",
        path: "/month"
    },
    {
        icontext: getDate("year"),
        tabText: "当年",
        path: "/year"
    }
]