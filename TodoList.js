const {TodoItem} = window.App


class TodoList extends React.Component {
	render() {
		return (
			<div>
			<h1>我的待辦清單</h1>
			<span>哈囉，Jason：你有 99 項未完成待辦事項</span>
			<ul>
				
					<TodoItem 
					title = "Item 1"
					complete= {false} />
				
					<TodoItem title = "Item 1"
					complete= {false} />
				
					<TodoItem title = "Item 1"
					complete= {false} />
				
				
			</ul>
			</div>
			
			);
	}
}

window.App.TodoList = TodoList;


