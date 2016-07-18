const {TodoItem} = window.App


class TodoList extends React.Component {
	render() {
		return (
			<div>
			<h1>我的待辦清單</h1>
			<span>哈囉，Jason：你有 99 項未完成待辦事項</span>
			<ul>
				<li>
					<TodoItem />
				</li>
				<li>
					<TodoItem />
				</li>
				<li>
					<TodoItem />
				</li>
				
			</ul>
			</div>
			
			);
	}
}

window.App.TodoList = TodoList;


