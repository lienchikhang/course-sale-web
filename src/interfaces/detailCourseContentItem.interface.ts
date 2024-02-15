export interface IDetailCourseContentItem {
    contentItem: {
        entry: string;
        part: {
            courseId: string;
            title: string;
            updateTime: string;
            desc: string;
            url: string;
            times: number;
        }[];
    },
    index: number,
}