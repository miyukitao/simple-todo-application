/**
 * やることリスト
 * title: やることのタイトル
 * isDone: 達成状況　trueになると、チェックが着く
 */
let tasks = [
    { title: "お洗濯", isDone: false },
]

/**
 * [学生1]
 * 引数で与えられるタイトルで「やること」が作成されるように修正してください。
 * 
 * 注) 登録ボタンを押したときに、この関数が呼ばれる処理は既に書かれています。
 */
function addTask(title) {
    const task = { isDone: false }

    // やることのタイトルを設定
    task.title = title;

    tasks.push(task);
    drawTask(task, tasks.length - 1);
}

/**
 * [学生2]
 * 「チェックボックス」をクリックしたときに、
 * 引数で与えられる「やること」の達成状態(isDone)を、
 * 現在の状態と反対になるように更新してください。
 */
function onUpdateIsDone(task) {
    console.log("チェックボックスがクリックされました。", task);

<<<<<<< HEAD
    // 達成状態を反転
=======
    // 達成状態を反転したよ
>>>>>>> 3c27f07843205c267737e2493bb0abb9779b60a4
    task.isDone = !task.isDone;

    return task;
}

/**
 * [学生3]
 * 「タスクのタイトル」をクリックしたときに、
 * 引数で与えられる「やること」の達成状態(isDone)を、
 * 現在の状態と反対になるように更新してください。
 */
function onTaskTitleClicked(task) {
    console.log("タイトルがクリックされました。", task);

    // 達成状態を反転
    task.isDone = !task.isDone;

    return task;
}
