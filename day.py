import requests
from pprint import pprint
from bs4 import BeautifulSoup
import json

html = requests.get('https://www.mois.go.kr/chd/sub/a05/feteDay/screen.do') # 크롤링할 주소 지정
soup = BeautifulSoup(html.text, 'html.parser') # bs4 soup으로 로드
soup = soup.find('div', "basic-list mobile mt20 f90") # 기념일 정보가 담겨있는 div 태그 class = basic-list mobile mt20 f90 를 검색
# find_all 이라는 함수는 괄호 안의 태그들을 모두 검색하여 list 형태로 반환함
tmp = soup.select('tr') # tr 태그들을 리스트로 변환함
for i in range(1,len(tmp)) : # 1 ~ tmp라는 배열의 길이
    l = tmp[i].select('td') # tr 태그 안에 td들이 또 들어있으므로 find_all 로 리스트로 다시 변환
    print("번호 :", l[0].text)
    print("기념일 :", l[1].text.strip())
    print("날짜 :",l[2].text.strip())
    print("주관부처 :",l[3].text.strip())
    print("설명 :",l[4].text)
    print()
