import './App.css'
import SvgPencill from './components/svg/SvgPencill';
import SvgClose from './components/svg/SvgClose';
import Button from './components/html/Button';
import Input from './components/html/Input';
import Checkbox from './components/html/Checkbox';
import TodoHeader from './components/TodoHeader';
function App() {

  return (
    <>
      <div className="todo">
        <TodoHeader />
        {/* <!-- 할 일 등록 --> */}
        <form className="todo__form">
          <div className="todo__editor">
            <Input
              type="text"
              className="todo__input"
              placeholder="Enter Todo List"
            />
            <Button className="todo__button" type="submit">Add</Button>
          </div>
        </form>
        {/* <!-- 할 일 목록 --> */}
        <ul className="todo__list">
          {/* <!-- 할 일 목록이 없을 때 --> */}
          <li className="todo__item todo__item--empty">
            <p className="todo__text--empty">There are no registered tasks</p>
          </li>
          {/* <!-- 할 일 목록이 있을 때 --> */}
          {/* <!-- 할 일이 완료되면 .todo__item--complete 추가 --> */}
          <li className="todo__item todo__item--complete">
            <Checkbox parentClassName='todo__checkbox-group' type="checkbox" className="todo__checkbox" checked>
              Eat Breakfast
            </Checkbox>
            {/*할 일을 수정할 때만 노출 (.todo__checkbox-group은 비노출) */}
            {/*     <input type="text" className="todo__modify-input" /> */}
            <div className="todo__button-group">
              <Button className="todo__action-button">
                <SvgPencill />
              </Button>
              <Button className="todo__action-button">
                <SvgClose />
              </Button>
            </div>
          </li>
          <li className="todo__item todo__item--complete">
            {/*   <!-- <div className="todo__checkbox-group">
              <input type="checkbox" className="todo__checkbox" checked />
              <label>Eat Breakfast</label>
            </div> --> */}
            {/*     <!-- 할 일을 수정할 때만 노출 (.todo__checkbox-group은 비노출) --> */}
            <Input type="text" className="todo__modify-input" />
            <div className="todo__button-group">
              <Button className="todo__action-button">
                <SvgPencill />
              </Button>
              <Button className="todo__action-button">
                <SvgClose />
              </Button>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default App
