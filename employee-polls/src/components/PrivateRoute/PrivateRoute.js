import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ children, isLoggedIn }) => {
    console.log('children====', children)
    console.log('children redirectUrl====', window.location.href.toString().split(window.location.host))
    const redirectUrl = window.location.href.toString().split(window.location.host)[1];

    return isLoggedIn ? children : <Navigate to={`/login?redirectTo=${redirectUrl}`} />;
};

const mapStateToProps = ({ authedUser }) => ({
    isLoggedIn: !!authedUser,
});

export default connect(mapStateToProps)(PrivateRoute);