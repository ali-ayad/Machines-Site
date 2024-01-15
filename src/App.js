// import { Route, Routes } from "react-router";
import { ContactUs } from "./components/ContactUs";
import { Goals } from "./components/Goals";
import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";
import { Services } from "./components/Services";
import { WhoWeAre } from "./components/WhoWeAre";
import './Fonts/ArbFONTS-PNU-Bold.ttf'

const divStyle = {
  fontFamily: 'Medium',
};

function App() {
  return (
    <div style={divStyle} className="scroll-smooth">
   <Navbar></Navbar>
  

   <Hero main="أتشعرُ أنّك مرهقٌ جداً يا فتى؟ متعبٌ من كلّ شيءٍ، وساخطٌ على كلّ شيءْ، تبدُو لِي كذلك، وعيناكَ الضيّقتانِ، تزيدانِ من حدّتكْ، كلّما اكتملتْ تلكَ العقدةُ الّتي تعلُو وجهكْ"
         title ="شركة برمجية" />
    <WhoWeAre 
    main="أتشعرُ أنّك مرهقٌ جداً يا فتى؟ متعبٌ من كلّ شيءٍ، وساخطٌ على كلّ شيءْ، تبدُو لِي كذلك، وعيناكَ الضيّقتانِ، تزيدانِ من حدّتكْ، كلّما اكتملتْ تلكَ العقدةُ الّتي تعلُو وجهكْ أتشعرُ أنّك مرهقٌ جداً يا فتى؟ متعبٌ من كلّ شيءٍ، وساخطٌ على كلّ شيءْ، تبدُو لِي كذلك، وعيناكَ الضيّقتانِ، تزيدانِ من حدّتكْ، كلّما اكتملتْ تلكَ العقدةُ الّتي تعلُو وجهكْ أتشعرُ أنّك مرهقٌ جداً يا فتى؟ متعبٌ من كلّ شيءٍ، وساخطٌ على كلّ شيءْ، تبدُو لِي كذلك، وعيناكَ الضيّقتانِ، تزيدانِ من حدّتكْ، كلّما اكتملتْ تلكَ العقدةُ الّتي تعلُو وجهكْ"
    ></WhoWeAre>     
    <Services></Services>
    <Goals></Goals>
    <ContactUs ></ContactUs>

     {/* <Routes>
      <Route path="/" element={<Hero/>}></Route>
      <Route path="whoweare" element={<WhoWeAre/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/goals" element={<Goals/>}></Route>
      <Route path="/contactus" element={<ContactUs/>}></Route>
      
     </Routes> */}
    </div>
  );
}

export default App;
