var i = 1;

var testNum = {
  "1": {
    "title": "문제 1번",
    "description": "낙하준비 완료!<br>무조건 사람 많은 핫플에 뛰어내릴 것인가?",
    "type": "EI",
    "A": "다 덤벼~! 나랑 눈이 마주치면 죽.는.다",
    "B": "광탈하면 킹받아...조용한 장소로 가자"
  },
  "2": {
    "title": "문제 2번",
    "description": "유명 틱톡커가 당신과 함께 배그 영상 콘텐츠를 찍자고 한다면?",
    "type": "EI",
    "A": "좋아요! 재미있겠다!! 완전 팬이에요~",
    "B": "앗 부끄러워...다른분 찾아보세요ㅠㅎㅎ"
  },
  "3": {
    "title": "문제 3번",
    "description": "스쿼드에 참여하였다!<br>나는 보이스를 적극 활용해 팀원들과 소통하는 것을 좋아한다?!",
    "type": "EI",
    "A": "오디오 비우면 안돼!! 텐션 올려!!",
    "B": "조용히 게임할래... 마이크 키라고 그만해ㅜ"
  },
  "4": {
    "title": "문제 4번",
    "description": "이번 배그 업데이트로 새로운 모드가 나왔다!! 해볼까?",
    "type": "SN",
    "A": "난 무조건 기본 테마가 좋아!",
    "B": "당연 해봐야지! 스파이더맨 콜라보 미쳤다!!!"
  },
  "5": {
    "title": "문제 5번",
    "description": "파티원 중 한명이 갑자기 잠수 탔을 때 당신의 반응은?",
    "type": "SN",
    "A": "아..화장실 갔나?",
    "B": "핸드폰이 폭발했나?  무슨일 생긴거 아니야?!"
  },
  "6": {
    "title": "문제 6번",
    "description": "게임 플레이 도중 이성이 나한테 관심을 표현한다면?",
    "type": "SN",
    "A": "어쩔 티비, 관심 차단",
    "B": "심장이 두근두근, 나 솔로탈출 하는건가? "
  },
  "7": {
    "title": "문제 7번",
    "description": "팀원이 적한테 확킬 당해서 우울해 한다. 당신의 반응은?",
    "type": "TF",
    "A": "어느 방향? 몇 명? 혼자가지 말랬지ㅋㅋ",
    "B": "헐ㅠ괜찮아 괜찮아. 내가 복수해줄게!!"
  },
  "8": {
    "title": "문제 8번",
    "description": "보급상자가 하늘에서 떨어졌다!!<br>팀원이 AWM(에땁)을 보고 좋아한다! 내 반응은??",
    "type": "TF",
    "A": "대박 나 배율있어, AWM(에땁) 나 줘!!",
    "B": "우와! 너가 멋있게 다 잡아!"
  },
  "9": {
    "title": "문제 9번",
    "description": "자기장 밖에서 팀원이 기절했다!<br>당신의 판단은?!",
    "type": "TF",
    "A": "이번 자기장 아프고, 너무 멀어서 못살려!",
    "B": "기다려! 죽으면 안돼~내가간다!"
  },
  "10": {
    "title": "문제 10번",
    "description": "매일 접속할 때마다  치킨매달 10개씩 준다고 한다면??",
    "type": "JP",
    "A": "차곡차곡 다 모아서 한번에 까야지! ",
    "B": "받자마자 치킨매달 사용해 버리기! 상자깡 가즈아~"
  },
  "11": {
    "title": "문제 11번",
    "description": "이번 새로운 시즌이 시작되었다!<br>나의 게임 유형은?",
    "type": "JP",
    "A": "이번엔 꼭 정복자 간다! 고정멤버 구해요~",
    "B": "티어는 중요하지 않아! 즐겁게 게임할래~"
  },
  "12": {
    "title": "문제 12번",
    "description": "시험이 일주일 남은 상황!<br>당신은 배그를 잠시 중단할 것 인가?",
    "type": "JP",
    "A": "현실이 중요하니 잠깐 접어두고 시험 계획을 세우자!",
    "B": "우선 티어부터 올리고! 시험은 벼락치기가 최고!"
  }
};

var result = {
  "INTJ": {
    "mbti": "INTJ<br>메딕",
    "explain": "어떤 상황에서든 침착한 매딕으로서 항상 팀원 주위에서 도움의 손길을 내밀어 줍니다. 신중히 생각하고 다음 상황에 대한 혁신적인 통찰을 보여줍니다. 상상력이 풍부하면서도 결단력이 있고 책임감이 강하여 팀원들에게 긍정적인 애너지를 줍니다. 자신의 능력을 발휘하거나 일하는 모습을 보여주는 것을 좋아합니다. ",
    "explain2": "에너지가 넘치는 '수다쟁이'는 침착한 메딕에게 활력을 넣어주고, 서로 의지하며 힘이 되어주는 사이입니다.<br><br>반대로 단호해야 하는 '메인오더형'와 서로 바라보는 방향이 달라 서로 오해가 생길수도 있습니다.",
    "img": "INTJ.jpg",
    "sub_img" : "ming.png"
  },
  "INTP": {
    "mbti": "INTP<br>솔플매니아",
    "explain": "자신만의 세계가 뚜렷하고 개성이 강해서 팀원들의 말을 따르는 것을 싫어하며, 혼자만의 생각이 중요할 뿐만 아니라 개인주의가 강하고 직관적인 입니다. 매우 개방적이고 자유롭지만 누군가의 새로운 아이디어가 그들의 관심을 끌 때, 매우 열정적으로 변합니다! ",
    "explain2": "혼자만의 시간을 중요시 하는 당신 옆에서 같이 싸워줄 '여포형'는 함께 시너지가 날 수 있습니다.<br><br>다만, 정이많고 말거는 것을 좋아하는 '즐겜러'가 주는 호의적인 관심이 당신은 반갑지 않을 수 있습니다.",
    "img": "INTP.jpg",
    "sub_img" : "ming.png"

  },
  "ENTJ": {
    "mbti": "ENTJ<br>여포형",
    "explain": "대담하고, 넘치는 카리스마로 팀원들을 이끌고 킬을 하러 다니는 것을 좋아합니다. 치킨을 먹을 생각에 꿈이크고 변화를 즐깁니다. 고집이 센 것처럼 보이지만 자신의 판단이 잘못된 것이 확인되면 바로 수긍하는 귀여운 모습도 있습니다. 하지만 자신이 아랫사람이 되는것을 싫어합니다.",
    "explain2": "행동대장 당신을 존중하며 여포성을 이해해해 주는 '솔플메니아'는 편안한 짝꿍 입니다.<br><br>하지만 신중하면서 체계적인 '존버형'를 만나면 최악의 파트너..서로간의 의견이 안맞아 답답할 수 있으니 거리를 두는 것이 좋을 것 같아요.",
    "img": "ENTJ.jpg",
    "sub_img" : "ming.png"

  },
  "ENTP": {
    "mbti": "ENTP<br>보급불나방",
    "explain": "남들이 뭐라해도 보급은 꼭 먹어야 하는 당신은 타인의 생각에 반항을 일으킴으로써 군중을 선동하는 선의의 비판자 입니다. 자신의 생각가 다르면 '왜?' 라는 궁금증이 생기고, 모험심이 강하며, 위험을 감수해서라도 새로운 시도를 하고 경쟁심이 강한 편입니다.",
    "explain2": "생각하는 것이 비슷하고, 즉흥적이며 창의적인 활동을 좋아하는 '수류탄장인'는 환상의 파트너 입니다.<br><br>반면, 과묵하고 사람이 많은곳을 싫아하는 자유로운 영혼 '걸어다니는 3렙 가방' 와는 보급을 찾으러 다니기 어려울 것 같네요..!",
    "img": "ENTP.jpg",
    "sub_img" : "ming.png"

  },
  "INFJ": {
    "mbti": "INFJ<br>수류탄장인",
    "explain": "신중하고 깊은 통찰력으로 수류탄으로 원샷 원킬!! 직관적이고 관찰력이 뛰어나며 눈치가 빨라 공감능력이 뛰어납니다. 미래를 예측하는 것을 좋아하며 머리가 좋아 상상력, 창의력과 독창성이 뛰어납니다. 하지만 한 곳에 몰두하는 경향으로 목적달성에 주변 조건들을 경시하기 쉽습니다.",
    "explain2": "활기차며 독창적이고, 치킨을 먹기 위한 탁월하고 빠른 선택을 하는 '보급불나방'은 환상의 파트너 입니다.<br><br>하지만, 활발하고 이상주의 적인 '스쿼드매니아'와 계획을 진행하는 과정의 차이에서 충돌이 일어날 수 있습니다. ",
    "img": "INFJ.jpg",
    "sub_img" : "ming.png"

  },
  "INFP": {
    "mbti": "INFP<br>예측불가형",
    "explain": "침착하고 내성적이며 수줍음이 많은 사람같지만 갑자기 몸안의 불이 활활 타올라 어떤 행동을 할지 예상할 수 없습니다. 내면과 외면의 차이가 크고, 주변의 의식을 많이 받고 마음이 약해 쉽게 상처를 받습니다. 한번 싫어지면 끝까지 싫어하며 호불호가 정확합니다.",
    "explain2": "의외로 '치킨매니아' 와의 궁합은 이해하고 맞춰가며 감성적 소통이 잘되는, 배려해주는 친구입니다.<br><br>하지만 자신의 왜 이런 행동에 공감해주기 원하는 나와 달리 '존버형'은  구체적인 사실에 대해 언급하여 서로 오해가 생길 수 있으니 주의해 주세요.",
    "img": "INFP.jpg",
    "sub_img" : "ming.png"

  },
  "ENFJ": {
    "mbti": "ENFJ<br>치킨매니아",
    "explain": "적극적이고 책임감이 강하고 사교성이 좋아 믿음이가는 치킨을 부르는 리더십 형입니다. 자신뿐만 아니라 공동체 생활을 좋아하고 이끄는 데에서 자부심이 강하고 행복을 느낍니다. 사람을 좋아하고 의리가 강하며 타인에게 화가 나도 겉으로 표현하지 않습니다. 감성적이여서 상처도 쉽게 받는 편입니다.",
    "explain2": "치킨을 먹을 수 있는 생각하지도 못한 포인트를 만들어주는 '예측불가형'은 서로가 서로를 더 나은사람으로 만들어 주는 관계입니다.<br><br>반면, 책임감이 강한 당신의 의견에 자신의 주장을 적극 내세우는 '페셔니스타형'과 의견충돌이 있을 수 있습니다.",
    "img": "ENFJ.jpg",
    "sub_img" : "ming.png"

  },
  "ENFP": {
    "mbti": "ENFP<br>수다쟁이형",
    "explain": "스쿼드의 분위기는 내가 책임진다~! 배그의 스폰지밥! 사람을 기쁘게 해주는 타고난 능력이 있고, 깊은 유대 관계를 맺음으로써 행복을 느낍니다. 새로운 시도를 좋아하며, 항상 수다스럽고 밝은 성격으로 여겨지지만 지니지해야 할 상황이 온다면 극도로 진지한 모습을 보여줍니다.",
    "explain2": "당신의 옆에서 나무처럼 든든하게 힘이 되어 주는 고마운 '메딕' 은 최고의 단짝입니다.<br><br>조용하고 현실적인 '미어캣형'은 당신의 기분을 맞춰 주지 못해서 서운한 점이 발생 할 수 있으니 적당히 선을 지켜주세요.",
    "img": "ENFP.jpg",
    "sub_img" : "ming.png"

  },
  "ISTJ": {
    "mbti": "ISTJ<br>미어캣형",
    "explain": "논리적이고 헌신적으로 임무를 수행하고, 자신이 맡은 임무를 충실히 하는 포탑 포지션의 핵심 구성원 입니다. 승리를 위해 에너지를 긴장을 놓지 않고 신중하게 사격합니다. 실수한 것을 참지 못하고, 원리 원칙적이며 낯가림 심하고 차가워 보이나 따뜻한 모습이 있습니다. ",
    "explain2": "체계적인 당신 옆을 항상 응원해주는 '스쿼드 매니아'는 안성맞춤 성격의 활기찬 비타민 입니다.<br><br>반면, 나쁜 의미의 접근이 아니지만 적극적인 친화력으로 당신의 계획에 방해를 할 수 있는 '수다쟁이형'과는 불편한 감정이 생길 수 있으니 적당히 거리를 지켜주세요.",
    "img": "ISTJ.jpg",
    "sub_img" : "ming.png"

  },
  "ISFJ": {
    "mbti": "ISFJ<br>존버형",
    "explain": "완벽주의자며 자신이 원하는물품을 찾을 때까지 파밍합니다. 끈기가 있고 성실하며 인내심이 뛰어납니다. 공감 능력이 뛰어나며, 상대방 이야기를 경청해주고 싸움과 갈등 상황을 불편해 하여 자신의 이야기는 잘 하지 않는 타입입니다. 또한 간섭을 받는것을 좋아하지 않고 쓸모 없는 감정 낭비를 싫어합니다.",
    "explain2": "어디에나 어울릴 수 있는 성격으로 당신의 외로움 마저 함께 옆에 있어주는 '스쿼드매니아'는  고마운 사람입니다.<br><br>그러나 적극적인 '여포형' 스타일은 전투중 자꾸 신경이 쓰여 예민해질 수 있어 대립할 수 있으니 주의해주세요.",
    "img": "ISFJ.jpg",
    "sub_img" : "ming.png"

  },
  "ESTJ": {
    "mbti": "ESTJ<br>매인오더형",
    "explain": "논리적으로 계획을 세워 치킨을 향한 루트를 정해보자!! 현실적, 구체적이고 조직적인 활동을 주도하며 리더가 어울리는 유형 입니다. 겉보기에 철저하고 엄격해 보일 수 있지만 , 본인 주변에 있는 사람들에게 의리와 배려를 보여주기도 합니다.",
    "explain2": "계획적이고 신중한 '수류탄장인'은 협력적이고 당신의 오더와 리더십을 받쳐주는 든든한 지원자가 되어 줄 것입니다.<br><br>반대로 남들과는 다른 특별한 존재라고 생각하는 '예측불가형'에게 너무 주도적으로 말하면 서로간의 오해가 생길 수 있어 거리를 두는 것이 좋을 것 같습니다.",
    "img": "ESTJ.jpg",
    "sub_img" : "ming.png"

  },
  "ESFJ": {
    "mbti": "ESFJ<br>즐겜러",
    "explain": "팀원들한테 관심을 적극적으로 표현하고, 리액션이 좋아 게임에서 인기쟁이 입니다. 사람들 사이에서의 중재자 역할을 하며, 예의가 바르고 친절하며 공감능력이 뛰어납니다. 하지만 갑자기 종종 아무생각 없이 멍 때리기를 잘 합니다. ",
    "explain2": "당신의 즐거운 게임을 위해 헌신적이고, 배려심 있는 '운전기사형'과 함께 있으면 행복할 거에요!!<br><br>그.러.나 혼자만의 시간을 즐기는 '솔플매니아'는 당신과 함꼐 공감대를 형성하기 어려워 서운함을 느낄 수 있습니다.",
    "img": "ESFJ.jpg",
    "sub_img" : "ming.png"

  },
  "ISTP": {
    "mbti": "ISTP<br>걸어다니는 3랩 가방",
    "explain": "팀원들이의 든든한 만능 재주꾼으로, 타인을 잘 도우며 필요한 물건이 있다면 아낌없이 배푸는 호의를 배풉니다. 호기심도 풍부하고, 메인 총 뿐만 아니라 석궁, DBS  등 다른 총기에도 관심이 많아 새로운 기술을 하나하나 터득해 나갑니다. 틀에 박핸 생활을 싫아허고 모험을 즐겨 새로운 맵도 금방 적응하며 고정관념 편견이 없는 편입니다.",
    "explain2": "당신의 장점을 봐주며, 끝까지 같이 목표를 향해 이끌어 가는 '매인오더형'은 든든한 조력자 입니다.<br><br>반면, 비슷하면서도 활동성이 다른 '보급불나방'은 서로 파밍하는 스타일이 달라, 배려를 하면서 플레이를 하면 좋을 것 같아요.",
    "img": "ISTP.jpg",
    "sub_img" : "ming.png"

  },
  "ISFP": {
    "mbti": "ISFP<br>운전기사형",
    "explain": "팀원들을 안전한 장소로 데려다 주는 베스트 드라이버! 배려가 많고, 섬세하며  당신이 관심을 갖는 사람들과 가치에 충실하고 헌식적입니다. 내면과 외면의 차이가 크며, 주의의 시선을 많이 의식하고 비판에 약합니다.",
    "explain2": "당신과 함께 드라이브 하면서 다양한 맵의 명소를 찾으러 다니는 '즐겜러' 와 호흡이 잘 맞는 편입니다.<br><br>반면, 둘다 호기심이 강하지만 서로 보는 방향이 차이가 있을 수 있는 '수다쟁이형' 와 서로 눈치를 보게 되어 어색해질 수 있어요.",
    "img": "ISFP.jpg",
    "sub_img" : "ming.png"

  },
  "ESTP": {
    "mbti": "ESTP<br>패셔니스타형",
    "explain": "자기주장이 강한 다재다능한 독특한 모배러 입니다. 자신의 삶을 즐기며 개성을 추구하고 감각있는 스타일! 가식이 없는 진정한 자유주의자로써 금방 다가가기 쉽고 편한 게임플레이를 할 수 있습니다. 또한 도전정신이 강해 모험을 꺼려하지 않습니다.",
    "explain2": "확실하게 자신의 사고 표현을 하는 '미어캣형'은 당신의 패션에 솔직하게 말해줘 더 나은 방향으로 변화할 수 있게 도와주는 친구입니다.<br><br>하지만 목표를 위해 계획적인 '치킨매니아'는 당신에게 선을 넘는 간섭을 할 수 있어 서로 충분히 이해가 필요할 것 같습니다.",
    "img": "ESTP.jpg",
    "sub_img" : "ming.png"

  },
  "ESFP": {
    "mbti": "ESFP<br>스쿼드매니아",
    "explain": "스쿼드에 안성맞춤 성격으로 신나고 재미있고 흥분을 잘하고 목소리가 크며, 조직생활을 좋아합니다. 사람에게 집중하는 것을 좋아하고, 공감을 하는 것에 행복과 만족을 느낍니다. 갈등에서 쉽게 물러나지 않는 대담하면서 독창적인 성격도 지니고 있습니다.",
    "explain2": "상대방에게 다정다감하고 침착하며, 당신을 잘 공감해 줄 수 있는 '존버형'은 좋은 단계로 나아갈 수 있는 사이 입니다.<br><br>그러나 스스로 체계적인 판단하에 조용히 움직이는 '수류탄장인'은 플레이 성격이 다를 수 있어 거리감이 느껴질 수 있습니다. ",
    "img": "ESFP.jpg",
    "sub_img" : "ming.png"

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
    document.querySelector('#explain2').innerHTML = result[mbti]['explain2'];
    document.querySelector('#result_img').setAttribute("src", 'img/' + result[mbti]['img']);
    document.querySelector('#sub_img').setAttribute("src", 'img/' + result[mbti]['sub_img']);
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
 document.querySelector('#mymbti').innerHTML = result[mbti]['mbti'];
 document.querySelector('#explain').innerHTML = result[mbti]['explain'];
 document.querySelector("#result_img").setAttribute("src", 'img/' + result[mbti]['result_img']);
}

// 카카오 SDK 초기화
Kakao.init('8fbb1b26b7ff95e60bbab0550203594f');
Kakao.isInitialized();

// 카톡 공유 실행 함수
var kakaoShare = function(){
 var title = document.querySelector('#mymbti').textContent;
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

document.querySelector('#ingame_btn').addEventListener('click', function(){
     location.href="https://pubgmobile.kr/";
     return false;
   })
document.querySelector('#copy_btn').addEventListener('click', function(){
  var url = "";
  var textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  url = window.document.location.href;
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert("  "+ url + "  \n 복사 완료");
        return false;
      })
