# news-viewer

## 학습 내용
- https://newsapi.org/register 에서 API 키를 받아온 뒤 axios로 호출해 받아오기
- 카테고리를 나눠서 API 호출하기

## 결과
![image](https://user-images.githubusercontent.com/90260242/210165718-3f4126d1-17f9-49b6-84af-d5951230eea0.png)

- 비동기 작업에 대한 전반적인 이해
- src-components 폴더에 전반적인 기능을 구현

# news-viewer-router

- 학습 내용
  - 리액트 라우터 적용(pages 폴더의 Newspage 파일을 SPA 페이지로 사용)
  - index.js 파일에서 리액트 라우터를 적용
  - useParams 사용(url로 부터 파라미터를 가져오는 역할)
  - NavLink 사용(Link 컴포넌트를 사용하지 않고 다른 페이지로 이동할 때 사용하는 Hook)

# news-viewer-Hook

- 학습 내용
  - usePromise Hook은 Promise의 대기 중, 완료, 실패에 대한 상태를 관리하며, deps를 파라미터로 받아옴
  - EsLint 경고를 무시하기 위해 eslint-disable-next-line react-hooks/exhaustive-deps 를 추가해 주어야 함
