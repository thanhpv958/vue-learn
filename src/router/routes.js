import Home from '../page/Home';
import TodoList from '../page/Todo/List';
import TodoCreate from '../page/Todo/Create';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/todos',
    component: {
      render(c) {
        return c('router-view');
      }
    },
    children: [
      {
        path: '/',
        name: 'todos_list',
        component: TodoList,
      },
      {
        path: '/create',
        name: 'todos_create',
        component: TodoCreate,
      }
    ]
  },
];

export default routes;
