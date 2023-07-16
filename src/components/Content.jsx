const Content = ({text, setText}) => {
    return (
        <div>
            <section>
            <div className="container bg-info">
            <h2 className="content">Display text using onChange</h2>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="textDisplay">
                            <textarea cols={50} rows={4} placeholder="Type Here" value={text} onChange={(e) =>setText(e.target.value)}/> <br/>
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