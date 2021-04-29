import CardsList from "./containers/CardsList/CardsList";
import { Switch, Route } from 'react-router-dom';
import CreateCardContainer from "./containers/CreateCardContainer/CreateCardContainer";
import ChangeCardContainer from "./containers/ChangeCardContainer/ChangeCardContainer";
import MagnifierContainer from "./containers/MagnifierContainer/MagnifierContainer";

function App() {
  return (
    <main className="main">
      <Switch>
        <Route exact path="/test-inter">
          <CardsList />
        </Route>
        <Route path="/test-inter/create">
          <CreateCardContainer />
        </Route>
        <Route path="/test-inter/change">
          <ChangeCardContainer />
        </Route>
      </Switch>
      <MagnifierContainer />
    </main>
  );
}

export default App;
