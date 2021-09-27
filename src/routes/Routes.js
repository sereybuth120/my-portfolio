import { lazy } from 'react';

// const Home = lazy(() => import('pages/Sections/_Home'));
const About = lazy(() => import('pages/Sections/_About'));
const Contact = lazy(() => import('pages/Sections/_WorkExperience'));
const Work = lazy(() => import('pages/Sections/_Projects'));
// const Index = lazy(() => import('pages'));

export const RoutePaths = {
  Home: '/',
  About: '/about',
  Contact: '/contact',
  Work: '/work',
};

export const Routes = [
  // { path: RoutePaths.Home, component: Index },
  { path: RoutePaths.About, component: About },
  { path: RoutePaths.Contact, component: Contact },
  { path: RoutePaths.Work, component: Work },
];
