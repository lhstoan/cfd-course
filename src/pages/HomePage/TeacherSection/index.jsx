import {Empty} from 'antd'
import React,{useEffect} from 'react'
import TeacherItem from './TeacherItem';

function teacherSlider() {
	let courseComingSlider=$(".teacher .teacher__list .teacher__list-inner");
	courseComingSlider.flickity({
		cellAlign: "left",
		contain: true,
		prevNextButtons: false,
		pageDots: false,
		dragThreshold: 0
	});

	$(".teacher .control .control__next").on(
		"click",
		function (e) {
			e.preventDefault();
			courseComingSlider.flickity("next");
		}
	);
	$(".teacher .control .control__prev").on(
		"click",
		function (e) {
			e.preventDefault();
			courseComingSlider.flickity("previous");
		}
	);
	courseComingSlider.flickity("resize");
}

const TeacherSection=({data=[],loading=false}) => {

	useEffect(() => {
		const myTime=setTimeout(() => {
			teacherSlider()
		},300);

		return () => {
			clearTimeout(myTime)
		};
	},[data]);

	return (
		<section className="teacher --scpadding">
			<div className="container">
				<div className="heading">
					<h2 className="heading__title title --t2">Đội Ngũ <span className="color--primary">CFD Circle</span></h2>
					<div className="heading__content">
						<p className="text">
							Đội ngủ giảng viên và mentor tâm huyết nhiều kinh nghiệm được tích luỹ từ những dự án thực
							tế sẽ đồng hành cùng bạn
							xuyên suốt quá trình học và con đường phát triển sự nghiệp.
						</p>
						<div className="control">
							<div className="control__prev">
								<img src="/img/icon-btn-control.svg" alt="icon prev" />
							</div>
							<div className="control__next">
								<img src="/img/icon-btn-control.svg" alt="icon next" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="teacher__list">
				<div className="container">
					{!loading&&data?.length===0?
						(<Empty description="Không tìm thấy dữ liệu nào" style={{margin: "0 auto"}} />)
						:(
							<div className="teacher__list-inner">
								{
									data?.map((team,index) => (<TeacherItem key={team.id||index} {...team} />))
								}
							</div>
						)
					}
				</div>
			</div>
		</section>
	)
}

export default TeacherSection