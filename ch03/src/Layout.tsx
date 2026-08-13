import './Layout.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Article';
import Aside from './components/Aside';
import Section from './components/Section';
import Footer from './components/Footer';
import User from './components/User';

function Layout(){
  const userObj = {
    name:'철수',
    age:20,
  }
  const clickHandler=() =>{
    console.log('click');
  }
  return(
    <div className="wrap">
      <User userObj={userObj} clickHandler={clickHandler}/>
      <Header/>
      <Nav/>
      <Article/>
      <Section />
      <Aside/>
      <Footer/>
    </div>
  )
}

export default Layout;