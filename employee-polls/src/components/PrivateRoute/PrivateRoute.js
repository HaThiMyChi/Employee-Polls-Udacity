import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ children, isLoggedIn }) => {
    console.log('children====', children)
    console.log('children redirectUrl====', window.location.href.toString().split(window.location.host))
    const redirectUrl = window.location.href.toString().split(window.location.host)[1];

    return isLoggedIn ? children : <Navigate to={`/login?redirectTo=${redirectUrl}`} />;
};

const mapStateToProps = ({ authSliceUser }) => ({
    isLoggedIn: !!authSliceUser,
});

export default connect(mapStateToProps)(PrivateRoute);