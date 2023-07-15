const ContentBtn = ({textDisplay,setTextDisplay, handleBtn}) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                    <h2>Display Text using click Button</h2>
                    <textarea id="textArea" rows="4" cols="50" placeholder="Type Here" />
                    <br />
                    <button onClick={handleBtn}>Display Text</button>
                    <br />  
                    <div><p>{textDisplay}</p></div>            
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentBtn;