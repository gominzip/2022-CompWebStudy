// 컴포넌트 파일
import React from "react";

function Box(props){
    const clickMe=()=>{
        alert("벌써 콤프 1학기 스터디가 끝났네요! 부회장님이 스터디 커리큘럼을 너무 잘 준비해 주셔서 코린이도 쉽게 프로그래밍에 입문할 수 있었습니다👍 그리고 콤프에 좋은 분들만 계셔서 동아리 활동이 너무 행복합니다~!! 다들 시험기간 파이팅 하시고 종강 후 또 만나요~!💙")
    }
    return (
        <div className='box'>
        {props.num}. {props.name}
        <button onClick={clickMe}>💙</button>
        </div>
    )
}

export default Box