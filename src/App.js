import CardsList from "./containers/CardsList/CardsList";
import { Switch, Route } from 'react-router-dom';
import CreateCardContainer from "./containers/CreateCardContainer/CreateCardContainer";
import ChangeCardContainer from "./containers/ChangeCardContainer/ChangeCardContainer";

function App() {
  return (
    <main className="main">
      <Switch>
        <Route exact path="/">
          <CardsList />
        </Route>
        <Route path="/create">
          <CreateCardContainer />
        </Route>
        <Route path="/change">
          <ChangeCardContainer />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
