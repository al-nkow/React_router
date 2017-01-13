import React from "react";
import { render } from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router";
// IndexRoute - роут по умолчанию

import { Root } from "./components/Root.js";
import { Home } from "./components/Home.js";
import { User } from "./components/User.js";
import { Start } from "./components/Start.js";

// history={browserHistory}  - для привычного отображения url'ов - без ../#/..

class App extends React.Component {
    render() {
        return (
            <div>
                {/*<h3> The router example </h3>*/}
                {/*<hr/>*/}

                {/* Вложенные роуты грузятся в {this.props.children} родительского роута (Root в данном случае)*/}
                <Router history={browserHistory}>
                    <Route path={"/"} component={Root}>
                        <IndexRoute component={Start} />
                        <Route path={"user"} component={User} />
                        <Route path={"user/:id"} component={User} />
                        <Route path={"home"} component={Home} />
                    </Route>
                </Router>

                {/* Роуты */}
                {/*<Router history={browserHistory}>*/}
                    {/*<Route path={"user"} component={User} />*/}
                    {/*<Route path={"home"} component={Home} />*/}
                {/*</Router>*/}
            </div>
        );
    }
}

render( <App/>, window.document.getElementById('app') );