import { lazy } from 'react';

const Home = lazy(() => import('../pages/home'));
const Courses = lazy(() => import('../pages/courses'));
const Notification = lazy(() => import('../pages/notification'));
const Profile = lazy(() => import('../pages/profile'));

const dashboardRoutes = [
  {
    path: '/home',
    title: 'Home',
    component: Home,
  },
  {
    path: '/courses',
    title: 'Courses',
    component: Courses,
  },
  {
    path: '/notifications',
    title: 'Notifications',
    component: Notification,
  },
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  }
];

const routes = [...dashboardRoutes];
export default routes;
