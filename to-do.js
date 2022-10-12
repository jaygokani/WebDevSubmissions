const todoList = () => {
	allTasks = [];
	const addTask = (todoTask) => {
		allTasks.push(todoTask);
	};

	const markAsComplete = (index) => {
		allTasks[index].completed = true;
	};
	return { allTasks, addTask, markAsComplete };
};

const todo = todoList();

todo.addTask({
	titile: "Gotta go to the gym",
	dueDate: "10 - 10 - 2022",
	completed: false,
});

todo.addTask({
	titile: "Renew insurance",
	dueDate: "07 - 10 - 2022",
	completed: false,
});
console.log(allTasks);
todo.markAsComplete(1);
console.log("===========================================");
console.log(allTasks);
