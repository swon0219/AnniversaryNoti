
import React from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { StyleSheet } from "react-native";

function CalendarView() { //캘린더 출력
  return (
    <Calendar style={styles.calendar} monthFormat={'yyyy년 MMMM'} theme={{}}/>
  );
}

LocaleConfig.locales['kor']={ //언어설정 : 한국어
  monthNames:[
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월'
  ],
  monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11','12',],
  dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],

}
LocaleConfig.defaultLocale = 'kor'; // 기본 언어 한국어로 설정
const styles = StyleSheet.create({ //스타일 모음
  calendar: { // 캘린더 스타일
    borderBottomWidth: 10, //밑면 여백
    borderBottomColor: '#86469C', //밑면 색깔
    margin: 3, //캘린더 여백
    borderRadius: 15, //모서리 둥근 정도
    textDayFontWeight: '500',
    arrowColor: '#86469C',
    calendarBackground:'#86469C'
  }
});
/*const theme= ({

});*/
type Theme={

};
export default CalendarView;