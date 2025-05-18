import React, { useState } from 'react';
import Navbar from './Navbar';
import News from './News';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 5;
  const apikey = 'b341eec25e22428389a981d11fe048f9';

  const [progress, setProgress] = useState(15);

  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="science"
                pageSize={pageSize}
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="sports"
                pageSize={pageSize}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="general-again"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
