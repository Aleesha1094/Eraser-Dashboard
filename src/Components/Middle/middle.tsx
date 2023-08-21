import { FaAlgolia, FaAmazon,FaAngular,FaBimobject,FaCanadianMapleLeaf,FaCcApplePay,FaCcJcb,FaFacebookSquare, FaXingSquare, FaYahoo, FaYarn } from "react-icons/fa";
import './middle.css';
import ImageText from '../imageText/imageText';

function Middle() {

  const centerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '100px', 
  };

  const iconContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: '50px auto',
    width: '55%',
  };

  const icon: React.CSSProperties = {
    fontSize: '40px', 
    color: 'rgba(145, 142, 142, 0.685)',
    margin: '15px 40px'
  };

  return (

    <div style={centerStyle}>
        <h1 className='heading'>Trusted by leading</h1>
        <h1 className='heading'>engineering teams globally</h1>
        <div style={iconContainerStyle}>
          <FaAmazon style={icon}></FaAmazon>
          <FaBimobject style={icon}></FaBimobject>
          <FaCanadianMapleLeaf style={icon}/>
          <FaCcApplePay style={icon}/>
          <FaCcJcb style={icon}></FaCcJcb>
          <FaFacebookSquare style={icon}/>
          <FaCanadianMapleLeaf style={icon}></FaCanadianMapleLeaf>
          <FaAlgolia style={icon}></FaAlgolia>
          <FaYarn style={icon}/>
          <FaXingSquare style={icon}/>
          <FaAngular style={icon}></FaAngular>
          <FaYahoo style={icon}/>
        </div>

        <h1 className='heading' style={{marginTop: '5vw'}}>By engineers</h1>
        <h1 className='heading'style={{marginBottom: '4vw', marginLeft: "150px"}}>For engineers</h1>
        <ImageText/>
    </div>
  );
}

export default Middle;
