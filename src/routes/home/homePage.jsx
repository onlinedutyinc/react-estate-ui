import SearchBar from "../../components/searchBar/SearchBar"
import "./homePage.scss"


function HomePage() {
    return(
        <div className="homePage">

            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">Welcome to Tryphe Real Estate: The Top of Luxury Living
                    </h1>
                    <p>
                    Experience the extraordinary with Tryphe Real Estate, your premier destination for 
                    the world's most exclusive penthouses and luxury homes. Specializing in properties 
                    that transcend the ordinary, we curate a collection of residences that epitomize 
                    sophistication, elegance, and opulence.
                    </p>
                    <SearchBar/>
                    <div className="boxes">
                        <div className="box">
                            <h1>+16</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="box">
                            <h1>2000+</h1>
                            <h2>Properties Listed</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>


        </div>
    )
}

export default HomePage 