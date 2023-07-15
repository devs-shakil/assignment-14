const ContentBtn = ({handleButtonClick, text}) => {
    return (
        <div>
            <textarea id="textArea" rows="4" cols="50" />
            <br />
            <button onClick={handleButtonClick}>Display Text</button>
            <br />
            <div>{text}</div>            
        </div>
    );
};

export default ContentBtn;