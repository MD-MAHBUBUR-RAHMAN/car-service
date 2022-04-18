import google from "../../../images/social/GoogleLogo.svg.png";
import facebook from "../../../images/social/facebook.png";
import Github from "../../../images/social/github.webp";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const navigate = useNavigate();

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

  let errorElement;
  if (loading || loading1) {
    return <Loading />;
  }
  if (error || error1) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message}
        {error1?.message}
      </p>
    );
  }
  if (user || user1) {
    navigate("/home");
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50 "></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50 "></div>
      </div>
      <div>
        {errorElement}
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-primary w-50 d-block mx-auto"
        >
          <img
            className="me-3 rounded-3"
            style={{ width: "20px" }}
            src={google}
            alt=""
          />
          <span>Google Sign-in</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-primary w-50 d-block mx-auto my-3"
        >
          <img
            className="me-3 rounded-3"
            style={{ width: "20px" }}
            src={Github}
            alt=""
          />
          <span>Github Sign-in</span>
        </button>
        <button className="btn btn-primary w-50 d-block mx-auto">
          <img
            className="me-3 rounded-3"
            style={{ width: "20px" }}
            src={facebook}
            alt=""
          />
          <span>Facebook SignIn</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
