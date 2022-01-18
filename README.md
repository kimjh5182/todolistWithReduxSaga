# todolistWithReduxSaga

우선 전체 store에선 불러온 todo list와 수정시 선택한 todo id, 두 변수를 관리합니다.

src내 actions에 필요한 action들과 action creator가 선언되어 있습니다.

1. setId는 수정시 선택한 todo id를 설정하는 creator이고 payload로 id를 넘겨줍니다.
2. createTodo는 입력한 내용을 content로 넘겨줍니다.
3. updateTodo는 수정한 id와 content를 payload 객체로 묶어 보내줍니다.
4. deleteTodo는 삭제한 id를 넘겨줍니다.

sagas내에는 get, delete, create, update에 필요한 saga 함수들을 정의되있습니다.
각 함수안에서 필요한 api를 호출하고 에러가 발생하면 에러 로그를 console로 출력하게 했습니다.

reducer에는 setId와 4개의 기능들에 대해 총 5가지의 case로 나누어 처리했습니다.

main component에서는 todolist와 editId 2개의 state를 불러오고 editId가 null이 아니라 다른 값이 들어있다면 수정할 todo를 선택한 것으로 보고 detail를 render하게 했습니다.

*완료 여부체크와 디자인 및 jest를 통한 test는 시간이 부족해 완성하지 못했습니다.
