const Content = ({text, setText, handleButtonClick}) => {
    return (
        <div>
            <section>
            <div className="container">
            <h2 className="content">Content section without button</h2>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="textDisplay">
                            <textarea cols={30} rows={10} placeholder="Type Here" value={text} onChange={(e) =>setText(e.target.value)}/> <br/>
                            {/* <button onClick={handleButtonClick}>Display Text</button> */}
                           <span> {text && <p>{text}</p>}</span>
                            
                      

                        </div>
                    </div>
                </div>
            </div>     
            </section>       
        </div>
    );
};

export default Content;