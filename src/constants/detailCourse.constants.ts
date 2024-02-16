const detailCourseConstants = {
    //model course
    courseId: '123', //string
    title: 'Lập trình C++ cơ bản, nâng cao',
    updateAt: '153029', //string
    desc: 'Khóa học lập trình C++ từ cơ bản tới nâng cao dành cho'
        + ' người mới bắt đầu. Mục tiêu của khóa học này nhằm giúp các bạn nắm được các khái niệm'
        + ' căn cơ của lập trình, giúp các bạn có nền tảng vững chắc để chinh phục con đường trở thành'
        + ' một lập trình viên', //string
    //no need:::
    getting: [
        'Được học kiến thức miễn phí với nội dung chất lượng hơn mất phí',
        'Hiểu được cách tư duy nâng cao của các lập trình viên có kinh nghiệm',
        'Có nền tảng Javascript vững chắc để làm việc với mọi thư viện, framework viết bởi Javascript',
        'Các kiến thức nâng cao của Javascript giúp code trở nên tối ưu hơn',
        'Hiểu được các khái niệm khó như từ khóa this, phương thức bind, call, apply & xử lý bất đồng bộ',
        'Nâng cao cơ hội thành công khi phỏng vấn xin việc nhờ kiến thức chuyên môn vững chắc'
    ],
    content: [
        {
            slug: 'part1',
            entry: 'Windows Terminal',
            part: [
                {
                    //model course-session
                    courseId: '123', //string
                    title: 'Giới thiệu Windows Terminal',
                    updateTime: 'Cập nhật tháng 11 năm 2022',
                    desc: 'Mình làm seri này vì nhận thấy trong lúc đang quay khóa học ReactJS,'
                        + ' khi phải đụng vào Terminal thì khá nhiều anh em bỡ ngỡ. Mình sẽ dành ra khoảng vài ngày'
                        + ' để làm xong seri này rồi mình quay ReactJS tiếp nhé anh em'
                        + '  À, anh em nhớ phải sử dụng Windows 10 hoặc 11 để theo được seri này nhé <3',
                    url: '',
                    times: 12000, //second
                },
                {
                    //model course-session
                    courseId: '456', //string
                    title: 'Giới thiệu Windows WSL',
                    updateTime: 'Cập nhật tháng 11 năm 2022',
                    desc: 'Mình làm seri này vì nhận thấy trong lúc đang quay khóa học ReactJS,'
                        + ' khi phải đụng vào Terminal thì khá nhiều anh em bỡ ngỡ. Mình sẽ dành ra khoảng vài ngày'
                        + ' để làm xong seri này rồi mình quay ReactJS tiếp nhé anh em'
                        + '  À, anh em nhớ phải sử dụng Windows 10 hoặc 11 để theo được seri này nhé <3',
                    url: '',
                    times: 15000, //second
                },
            ]
        },
        {
            slug: 'part2',
            entry: 'Các lệnh Linux cơ bản',
            part: [
                {
                    //model course-session
                    courseId: '123', //string
                    title: 'Giới thiệu Windows Terminal & WSL',
                    updateTime: 'Cập nhật tháng 11 năm 2022',
                    desc: 'Mình làm seri này vì nhận thấy trong lúc đang quay khóa học ReactJS,'
                        + ' khi phải đụng vào Terminal thì khá nhiều anh em bỡ ngỡ. Mình sẽ dành ra khoảng vài ngày'
                        + ' để làm xong seri này rồi mình quay ReactJS tiếp nhé anh em'
                        + '  À, anh em nhớ phải sử dụng Windows 10 hoặc 11 để theo được seri này nhé <3',
                    url: '',
                    times: 12000, //second
                },
                {
                    //model course-session
                    courseId: '123', //string
                    title: 'Giới thiệu Windows Terminal & WSL',
                    updateTime: 'Cập nhật tháng 11 năm 2022',
                    desc: 'Mình làm seri này vì nhận thấy trong lúc đang quay khóa học ReactJS,'
                        + ' khi phải đụng vào Terminal thì khá nhiều anh em bỡ ngỡ. Mình sẽ dành ra khoảng vài ngày'
                        + ' để làm xong seri này rồi mình quay ReactJS tiếp nhé anh em'
                        + '  À, anh em nhớ phải sử dụng Windows 10 hoặc 11 để theo được seri này nhé <3',
                    url: '',
                    times: 12000, //second
                }
            ]
        },
        {
            slug: 'part3',
            entry: 'Windows Terminal',
            part: [
                {
                    //model course-session
                    courseId: '123', //string
                    title: 'Giới thiệu Windows Terminal',
                    updateTime: 'Cập nhật tháng 11 năm 2022',
                    desc: 'Mình làm seri này vì nhận thấy trong lúc đang quay khóa học ReactJS,'
                        + ' khi phải đụng vào Terminal thì khá nhiều anh em bỡ ngỡ. Mình sẽ dành ra khoảng vài ngày'
                        + ' để làm xong seri này rồi mình quay ReactJS tiếp nhé anh em'
                        + '  À, anh em nhớ phải sử dụng Windows 10 hoặc 11 để theo được seri này nhé <3',
                    url: '',
                    times: 12000, //second
                },
                {
                    //model course-session
                    courseId: '456', //string
                    title: 'Giới thiệu Windows WSL',
                    updateTime: 'Cập nhật tháng 11 năm 2022',
                    desc: 'Mình làm seri này vì nhận thấy trong lúc đang quay khóa học ReactJS,'
                        + ' khi phải đụng vào Terminal thì khá nhiều anh em bỡ ngỡ. Mình sẽ dành ra khoảng vài ngày'
                        + ' để làm xong seri này rồi mình quay ReactJS tiếp nhé anh em'
                        + '  À, anh em nhớ phải sử dụng Windows 10 hoặc 11 để theo được seri này nhé <3',
                    url: '',
                    times: 15000, //second
                },
            ]
        },
        {
            slug: 'part4',
            entry: 'Các lệnh Linux cơ bản',
            part: [
                {
                    //model course-session
                    courseId: '123', //string
                    title: 'Giới thiệu Windows Terminal & WSL',
                    updateTime: 'Cập nhật tháng 11 năm 2022',
                    desc: 'Mình làm seri này vì nhận thấy trong lúc đang quay khóa học ReactJS,'
                        + ' khi phải đụng vào Terminal thì khá nhiều anh em bỡ ngỡ. Mình sẽ dành ra khoảng vài ngày'
                        + ' để làm xong seri này rồi mình quay ReactJS tiếp nhé anh em'
                        + '  À, anh em nhớ phải sử dụng Windows 10 hoặc 11 để theo được seri này nhé <3',
                    url: '',
                    times: 12000, //second
                },
                {
                    //model course-session
                    courseId: '123', //string
                    title: 'Giới thiệu Windows Terminal & WSL',
                    updateTime: 'Cập nhật tháng 11 năm 2022',
                    desc: 'Mình làm seri này vì nhận thấy trong lúc đang quay khóa học ReactJS,'
                        + ' khi phải đụng vào Terminal thì khá nhiều anh em bỡ ngỡ. Mình sẽ dành ra khoảng vài ngày'
                        + ' để làm xong seri này rồi mình quay ReactJS tiếp nhé anh em'
                        + '  À, anh em nhớ phải sử dụng Windows 10 hoặc 11 để theo được seri này nhé <3',
                    url: '',
                    times: 12000, //second
                }
            ]
        },
        {
            slug: 'part5',
            entry: 'Windows Terminal',
            part: [
                {
                    //model course-session
                    courseId: '123', //string
                    title: 'Giới thiệu Windows Terminal',
                    updateTime: 'Cập nhật tháng 11 năm 2022',
                    desc: 'Mình làm seri này vì nhận thấy trong lúc đang quay khóa học ReactJS,'
                        + ' khi phải đụng vào Terminal thì khá nhiều anh em bỡ ngỡ. Mình sẽ dành ra khoảng vài ngày'
                        + ' để làm xong seri này rồi mình quay ReactJS tiếp nhé anh em'
                        + '  À, anh em nhớ phải sử dụng Windows 10 hoặc 11 để theo được seri này nhé <3',
                    url: '',
                    times: 12000, //second
                },
                {
                    //model course-session
                    courseId: '456', //string
                    title: 'Giới thiệu Windows WSL',
                    updateTime: 'Cập nhật tháng 11 năm 2022',
                    desc: 'Mình làm seri này vì nhận thấy trong lúc đang quay khóa học ReactJS,'
                        + ' khi phải đụng vào Terminal thì khá nhiều anh em bỡ ngỡ. Mình sẽ dành ra khoảng vài ngày'
                        + ' để làm xong seri này rồi mình quay ReactJS tiếp nhé anh em'
                        + '  À, anh em nhớ phải sử dụng Windows 10 hoặc 11 để theo được seri này nhé <3',
                    url: '',
                    times: 15000, //second
                },
            ]
        },
        {
            slug: 'part6',
            entry: 'Các lệnh Linux cơ bản',
            part: [
                {
                    //model course-session
                    courseId: '123', //string
                    title: 'Giới thiệu Windows Terminal & WSL',
                    updateTime: 'Cập nhật tháng 11 năm 2022',
                    desc: 'Mình làm seri này vì nhận thấy trong lúc đang quay khóa học ReactJS,'
                        + ' khi phải đụng vào Terminal thì khá nhiều anh em bỡ ngỡ. Mình sẽ dành ra khoảng vài ngày'
                        + ' để làm xong seri này rồi mình quay ReactJS tiếp nhé anh em'
                        + '  À, anh em nhớ phải sử dụng Windows 10 hoặc 11 để theo được seri này nhé <3',
                    url: '',
                    times: 12000, //second
                },
                {
                    //model course-session
                    courseId: '123', //string
                    title: 'Giới thiệu Windows Terminal & WSL',
                    updateTime: 'Cập nhật tháng 11 năm 2022',
                    desc: 'Mình làm seri này vì nhận thấy trong lúc đang quay khóa học ReactJS,'
                        + ' khi phải đụng vào Terminal thì khá nhiều anh em bỡ ngỡ. Mình sẽ dành ra khoảng vài ngày'
                        + ' để làm xong seri này rồi mình quay ReactJS tiếp nhé anh em'
                        + '  À, anh em nhớ phải sử dụng Windows 10 hoặc 11 để theo được seri này nhé <3',
                    url: '',
                    times: 12000, //second
                }
            ]
        }
    ],
    //no need:::
    required: [
        'Hoàn thành khóa học Javascript cơ bản tại F8 hoặc đã nắm chắc Javascript cơ bản',
        'Tuy duy mở để dễ dàng tiếp nhận các tư tưởng mới được chia sẻ trong các bài học',
        'Máy vi tính kết nối internet (Windows, Ubuntu hoặc MacOS)',
        'Ý thức cao, trách nhiệm cao trong việc tự học. Thực hành lại sau mỗi bài học'
    ],
    general: {
        thumbnail: 'https://files.fullstack.edu.vn/f8-prod/courses/12.png', //url img
        totalParts: 12, //number
        totalTime: 12300, //second
        retail: 150000, //number
        sale: 130000, //number
        studentCounts: 0,
        level: 1, //no need
    }
}

export default detailCourseConstants;