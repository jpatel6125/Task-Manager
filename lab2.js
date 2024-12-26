// Example of a task object
const task = {
    title: "Submit Assignment",
    dueTime: 10, // In minutes
    priority: "High", // Priority levels: High, Medium, Low
};

// tasks.js
export const tasks = [];

// tasks.js
function addTask(task) {
    try {
        if (!task.title || !task.dueTime || !task.priority) {
            throw new Error("Task must have title, dueTime, and priority.");
        }
        tasks.push(task);
        console.log("Task added successfully!");
    } catch (error) {
        console.error(error.message);
    }
}

// tasks.js
function sortTasksByPriority() {
    tasks.sort((a, b) => {
        const priorityOrder = { High: 1, Medium: 2, Low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
    console.log("Tasks sorted by priority:", tasks);
}

// tasks.js
 function getTasksDueWithin(minutes) {
    const now = 0; // Assume current time is 0 minutes from now
    const dueTasks = tasks.filter(task => task.dueTime <= now + minutes);
    console.log(`Tasks due within ${minutes} minutes:`, dueTasks);
    return dueTasks;
}

// tasks.js
function scheduleReminders() {
    tasks.forEach(task => {
        setTimeout(() => {
            console.log(`Reminder: Task "${task.title}" is due now!`);
        }, task.dueTime * 60000); // Convert minutes to milliseconds
    });
}

try {
    addTask({ title: "Incomplete Task" }); // Missing dueTime and priority
} catch (error) {
    console.error("Error adding task:", error.message);
}

export { addTask, sortTasksByPriority, getTasksDueWithin, scheduleReminders };
