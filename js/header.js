// dom (html 태그 로딩 완료 후 실행)
$(document).ready(function () {
  // 각 섹션의 위치값(세로스크롤 위치)
  const sectionYpos = [960, 1920, 7680];

  // 클래스 nav 의 li 를 찾아라
  // 저장한다. 재활용하기 위해서
  const navLis = $(".nav ul li");

  // li 에 a 태그를 클릭을 해서 스크롤을 이동
  const navLisA = $(".nav ul li a");
  // 클릭 기능 구현
  $.each(navLisA, function (index, item) {
    // item 은 a 태그를 말합니다.
    // item 을 클릭을 할 겁니다.
    // item 은 html 태그 (jQuery 용도)
    $(this).click(function (event) {
      // a 태그의 href 막기
      event.preventDefault();
      // li 의 모든 클래스 제거
      // navLis.removeClass("focus-active");
      // 클릭된 li 에 focus-active 추가하기
      // navLis.eq(index).addClass("focus-active");
      // 2. 클릭하면 스크롤바가 움직인다.
      $("html, body").animate(
        {
          scrollTop: sectionYpos[index],
        },
        "slow"
      );
    });
  });
});
