// import React, { Suspense } from 'react';
// import { MuiThemeProvider } from '@material-ui/core/styles';
// import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
// import About from './Sections/_About';
// import Work from './Sections/_Projects';
// import WorkExperience from './Sections/_WorkExperience';
// import Skill from './Sections/_Skills';
// import Contact from './Sections/_Contact';

// import Section from 'components/Section';
// import theme from 'theme';
// import { Routes } from 'routes/Routes';

// function App() {
//   return (
//     <div>
//         <Router>
//           <Suspense fallback={<div></div>}>
//             <Switch>
//               {Routes.map((route, idx) => (
//                 <Route path={route.path} component={route.component} exact key={idx} />
//               ))}
//             </Switch>
//           </Suspense>
//         </Router>
//     </div>
//   );
// }

// export default App;

import React from 'react';

import theme from 'theme';
import About from 'pages/Sections/_About';
import Work from 'pages/Sections/_Projects';
import WorkExperience from 'pages/Sections/_WorkExperience';
import Skill from 'pages/Sections/_Skills';
import Contact from 'pages/Sections/_Contact';
import NavBar from 'components/NavBar';
import Section from 'components/Section';
import { MySocials, MyEmailSocials } from 'components/Social';
function App() {
  return (
    <div style={{ background: theme.palette.background.darkPrimary }}>
      <NavBar />
      <MySocials />
      <Section backgroundColor="primary" isCenter>
        <About />
      </Section>
      <Section backgroundColor="secondary" isCenter>
        <Work />
      </Section>
      <Section backgroundColor="primary" isCenter>
        <WorkExperience />
      </Section>
      <Section backgroundColor="secondary" isCenter>
        <Skill />
      </Section>
      <Section backgroundColor="primary" isCenter>
        <Contact />
      </Section>
      <MyEmailSocials />
    </div>
  );
}

export default App;
