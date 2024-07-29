import "bootstrap/dist/css/bootstrap.min.css"; 

const ProgressBar = () => {
    return(
        <div className="progress" style={{height: "8px"}}>
            <div className="progress-bar" style={{width: "50%", background: "#AC883F"}}></div>
        </div>
    );
}

export default ProgressBar;