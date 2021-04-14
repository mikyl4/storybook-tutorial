import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';

import { CommonModule } from '@angular/common';

import { TaskListComponent } from './task-list.component';
import { TaskComponent } from '../task/task.component';

import * as TaskStories from '../task/task.stories';

export default {
    component: TaskListComponent,
    decorators: [
        moduleMetadata({
            declarations: [TaskListComponent, TaskComponent],
            imports: [CommonModule]
        })
    ],
    title: 'TaskList'
} as Meta;

const Template: Story<TaskListComponent> = args => ({
    props: {
        ...args,
        onPinTask: TaskStories.actionsData.onPinTask,
        onArchiveTask: TaskStories.actionsData.onArchiveTask
    },
    template: `
        <div style="padding: 3rem">
            <app-task-list [tasks]="tasks" [loading]=loading (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)"></app-task-list>
        </div> `
});

export const Default = Template.bind({});
Default.args = {
    tasks: [
        {...TaskStories.Default.args.task, id: '1', title: 'Task 1' },
        {...TaskStories.Default.args.task, id: '2', title: 'Task 2' },
        {...TaskStories.Default.args.task, id: '3', title: 'Task 3' },
        {...TaskStories.Default.args.task, id: '4', title: 'Task 4' },
        {...TaskStories.Default.args.task, id: '5', title: 'Task 5' },
        {...TaskStories.Default.args.task, id: '6', title: 'Task 6' },
    ]
};

export const WithPinnedtasks = Template.bind({});
WithPinnedtasks.args = {
    tasks: [
        ...Default.args.tasks.slice(0, 5),
        { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED'}
    ]
};

export const Loading = Template.bind({});
Loading.args = {
    tasks: [],
    loading: true
};

export const Empty = Template.bind({});
Empty.args = {
    ...Loading.args,
    loading: false
};
