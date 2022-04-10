
import "./App.css";
import Profile from "./Profiles/Profile/Profile"
import User from "../src/user.webp"
import ProfilePhoto from "./Profiles/ProfilePhoto/ProfilePhoto";
function App() {
  const handleName = (name) => alert(name);
  return (
    <div className="App">
      
      <ProfilePhoto>
         <img src={User}/>
      </ProfilePhoto>

        <Profile
        
          fullName={"Abednebi Wael"}
          profession={"Full Stack Developer"}
          bio="A Full Stack Developer with experience in Javascript, React,  etc...."
          handleName={handleName}
        >
        </Profile>
      
    </div>
  );
}

export default App;