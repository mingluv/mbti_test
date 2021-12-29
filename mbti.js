var i = 1;

var testNum = {
  "1": {
    "title": "문제 1번",
    "description": "낙하준비 완료!<br>무조건 사람 많은 핫플에 뛰어내릴 것인가?",
    "type": "EI",
    "A": "다 덤벼~다들 로비로 나갈준비 해라~ㅋㅋㅋ",
    "B": "광탈하면 킹받아...안전 빵으로 가자"
  },
  "2": {
    "title": "문제 2번",
    "description": "유명 틱톡커가 당신과 함께<br>배그 영상 콘텐츠를 찍자고 한다면?",
    "type": "EI",
    "A": "완전 좋아! 나도나도 틱톡커 인데! 떡상 가즈아~~",
    "B": "앗 부끄러웡...죄송해요..다른분 찾아보세요ㅎㅎ"
  },
  "3": {
    "title": "문제 3번",
    "description": "스쿼드에 참여하였다!<br>나는 보이스를 적극 활용해 팀원들과 소통하는 것을 좋아한다?!",
    "type": "EI",
    "A": "오디오 비우면 안돼!! 옥수수 털어털어~!!",
    "B": "whdydgl gkf tn ehddlTwl... 마이크 키라고 그만해ㅜ"
  },
  "4": {
    "title": "문제 4번",
    "description": "이번 배그 업데이트로 새로운 모드가 나왔다!! 해볼까?",
    "type": "SN",
    "A": "난 무조건 기본 테마가 좋아, 오리지널 굳굳굳",
    "B": "당연 해봐야지! 아케인 콜라보 미쳤다!!!"
  },
  "5": {
    "title": "문제 5번",
    "description": "파티원 중 한명이 갑자기<br>잠수 탔을 때 당신의 반응은?",
    "type": "SN",
    "A": "아..화장실 갔나?",
    "B": "핸드폰이 폭발했나?  무슨일 생긴거 아니야?!!"
  },
  "6": {
    "title": "문제 6번",
    "description": "게임 플레이를 하는데<br>이성이 나한테 관심을 표현한다면?",
    "type": "SN",
    "A": "게임 세상 관심 차단",
    "B": "심장이 두근두근, 나 솔로탈출 하는건가? "
  },
  "7": {
    "title": "문제 7번",
    "description": "팀원이 적한테 확킬 당해서 우울해 한다ㅠㅠ<br>당신의 반응은?",
    "type": "TF",
    "A": "어느 방향? 몇 명? 혼자가지 말랬지ㅋㅋ",
    "B": "헐ㅠ괜찮아 괜찮아. 내가 복수해줄게!!"
  },
  "8": {
    "title": "문제 8번",
    "description": "보급상자가 하늘에서 떨어졌다!!<br>팀원이 에땁을 보고 좋아한다! 내 반응은?",
    "type": "TF",
    "A": "오오 대박 나 배율있음 에땁 가져와.",
    "B": "우와! 너 SR 잘 사용하니까 너가 멋있게 다 잡아!"
  },
  "9": {
    "title": "문제 9번",
    "description": "자기장 밖에서 팀원이 기절했다! 당신의 판단은?!",
    "type": "TF",
    "A": "이번 자기장 아프고, 너무 멀어 가능성이 없어! 못살려!",
    "B": "안돼! 죽으면 안돼! 내가간다~ 기다려!"
  },
  "10": {
    "title": "문제 10번",
    "description": "비행기에서 내리기 직전에 팀원이 어디 내릴건지 물어본다.<br>당신의 판단은?",
    "type": "JP",
    "A": "파라다이스 갔다가~ 부캠정리하고~치긴먹을게요!",
    "B": "저 부캠 갈게요! 아아아악! 사람 너무 많이 내려 저 빠질게요~"
  },
  "11": {
    "title": "문제 11번",
    "description": "7일동안 접속 하면 이벤트로 치킨메달 100개!!<br>언제 상자깡 할까?",
    "type": "JP",
    "A": "차곡차곡 다 모아서 한번에 까야지! ",
    "B": "모을까 말까? 지금 느낌 좋은데!? 일단 모아둔걸로 상자깡 가즈아!"
  },
  "12": {
    "title": "문제 12번",
    "description": "이번 새로운 시즌이 시작되었다!<br>나의 게임 유형은?",
    "type": "JP",
    "A": "이번엔 꼭 정복자 간다! 고정팟 구해요~",
    "B": "무조건 즐겜! 후라이팬으로 궁둥이 때리기~"
  }
};

var result = {
  "INTJ": {
    "mbti": "INTJ",
    "explain": "용의주도한 전략가",
    "img": "INTJ.jpg"
  },
  "INTP": {
    "mbti": "INTP",
    "explain": "논리적인 사색가",
    "img": "INTP.jpg"
  },
  "ENTJ": {
    "mbti": "ENTJ",
    "explain": "대담한 통솔자",
    "img": "ENTJ.jpg"
  },
  "ENTP": {
    "mbti": "ENTP",
    "explain": "뜨거운 논쟁을 즐기는 변론가",
    "img": "ENTP.jpg"
  },
  "INFJ": {
    "mbti": "INFJ",
    "explain": "선의의 옹호자",
    "img": "INFJ.jpg"
  },
  "INFP": {
    "mbti": "INFP",
    "explain": "열정적인 중재자",
    "img": "INFP.jpg"
  },
  "ENFJ": {
    "mbti": "ENFJ",
    "explain": "정의로운 사회운동가",
    "img": "ENFJ.jpg"
  },
  "ENFP": {
    "mbti": "ENFP",
    "explain": "재기발랄한 활동가",
    "img": "ENFP.jpg"
  },
  "ISTJ": {
    "mbti": "ISTJ",
    "explain": "청렴결백한 논리주의자",
    "img": "ISTJ.jpg"
  },
  "ISFJ": {
    "mbti": "ISFJ",
    "explain": "용감한 수호자",
    "img": "ISFJ.jpg"
  },
  "ESTJ": {
    "mbti": "ESTJ",
    "explain": "엄격한 관리자",
    "img": "ESTJ.jpg"
  },
  "ESFJ": {
    "mbti": "ESFJ",
    "explain": "사교적인 외교관",
    "img": "ESFJ.jpg"
  },
  "ISTP": {
    "mbti": "ISTP",
    "explain": "만능 재주꾼",
    "img": "ISTP.jpg"
  },
  "ISFP": {
    "mbti": "ISFP",
    "explain": "호기심 많은 예술가",
    "img": "ISFP.jpg"
  },
  "ESTP": {
    "mbti": "ESTP",
    "explain": "모험을 즐기는 사업가",
    "img": "ESTP.jpg"
  },
  "ESFP": {
    "mbti": "ESFP",
    "explain": "자유로운 영혼의 연예인",
    "img": "ESFP.jpg"
  }
};

//테스트 시작함수
var testStart = function(){
  document.querySelector('#main').style.display = "none";
  document.querySelector('#test').style.display = "block";
  next();
}

document.querySelector('#start_btn').addEventListener('click', testStart);

//테스트 다시시작
var retry = function(){
  document.querySelector('#result').style.display = "none";
  document.querySelector('#test').style.display = "block";
  i = 1;
  EI.value=SN.value=TF.value=JP.value= 0;
  history.replaceState({}, null, location.pathname);
  next();
}

document.querySelector('#retry_btn').addEventListener('click', retry);

//타입 선택을 위한 함수
document.querySelector('#A').addEventListener('click',function(){
  var type = document.querySelector('#type').value;
  var preValue = document.querySelector('#'+type).value;
  document.querySelector('#'+type).value = preValue+1;
  next();
})

document.querySelector('#B').addEventListener('click',function(){
  next();
})

//문제 넘기기 + 결과 도출 함수
var next = function(){
  if(i==13){
    document.querySelector('#test').style.display = "none";
    document.querySelector('#result').style.display = "block";
    var mbti = '';
    if(document.querySelector('#EI').value < 2){
      mbti += 'I';
    }else{
      mbti += 'E';
    }
    if(document.querySelector('#SN').value < 2){
      mbti += 'N';
    }else{
      mbti += 'S';
    }
    if(document.querySelector('#TF').value < 2){
      mbti += 'F';
    }else{
      mbti += 'T';
    }
    if(document.querySelector('#JP').value < 2){
      mbti += 'P';
    }else{
      mbti += 'J';
    }
    console.log(mbti);
    document.querySelector('#mymbti').innerHTML = result[mbti]['mbti'];
    document.querySelector('#explain').innerHTML = result[mbti]['explain'];
    document.querySelector('#result_img').setAttribute("src", 'img/' + result[mbti]['img']);
    history.replaceState({result: result}, '', '?result='+ mbti); // MBTI 결과 쿼리 파라미터 삽입
  }
  else{
    document.querySelector('#number').innerHTML = i+'/12';
    document.querySelector('#progress').style.width = (i/12)*100+'%';
    document.querySelector('#title').innerHTML = testNum[i]['title'];
    document.querySelector('#description').innerHTML = testNum[i]['description'];
    document.querySelector('#type').value = testNum[i]['type'];
    document.querySelector('#A').innerHTML = testNum[i]['A'];
    document.querySelector('#B').innerHTML = testNum[i]['B'];
    i++;
  }

}

// 쿼리 파라미터 값이 있을 경우 결과 페이지로 직접 이동
var shareParams = new URL(location.href).searchParams.get('result');
if (Object.keys(result).includes(shareParams) === true){
 document.querySelector('#main').style.display = "none";
 document.querySelector('#result').style.display = "block";
 var mbti = shareParams;
 document.querySelector('#explain').innerHTML = result[mbti]['explain'];
 document.querySelector('#explain2').innerHTML = result[mbti]['explain2'];
 document.querySelector("#result_img").setAttribute("src", 'img/' + result[mbti]['result_img']);
 document.querySelector("#cardlike").setAttribute("src", 'img/' + result[mbti]['cardlike']);
}

// 카카오 SDK 초기화
Kakao.init('8fbb1b26b7ff95e60bbab0550203594f');
Kakao.isInitialized();

// 카톡 공유 실행 함수
var kakaoShare = function(){
 dataLayer.push({
   'event': 'kakao_share'
 });
 var title = document.querySelector('.r-title').textContent;
 var desc = document.querySelector('#explain').textContent;
 var imgUrl = document.querySelector('#result_img').src;
 var mbti = new URL(location.href).searchParams.get('result');

 Kakao.Link.sendDefault({
objectType: 'feed',
content: {
 title: title,
 description: desc,
 imageUrl:
   imgUrl,
 link: {
   mobileWebUrl: 'http://battlegrounds-mbti.com?result='+mbti,
 },
},
buttons: [
 {
   title: '결과 확인',
   link: {
     mobileWebUrl: 'http://battlegrounds-mbti.com?result='+mbti,
     webUrl: 'http://battlegrounds-mbti.com?result='+mbti,
   },
 },
 {
   title: '테스트하기',
   link: {
     mobileWebUrl: 'http://battlegrounds-mbti.com',
     webUrl: 'http://battlegrounds-mbti.com',
   },
 },
]
});
}

document.querySelector('#share_btn').addEventListener('click', kakaoShare);
