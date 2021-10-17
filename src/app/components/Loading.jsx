
import Loader from "react-loader-spinner";

const Loading = () => {
   return (
      <div className="center-loader">
          <Loader
        type="Puff"
        color="#333"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      </div>
   )
}

export default Loading
