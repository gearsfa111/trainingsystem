import React from 'react';
import logo from '../../../assets/images/kru.png';
import bg from '../../../assets/images/bg-01.jpg';

import '../../../assets/style/customStyle.css';
import '../../../assets/css/bootstrap.css';


const bgImage = {
    backgroundImage: "url(" + bg + ")",
    backgroundRepeat: "no-repeat",

};

class Signin extends React.Component {

    render() {
        return (
            <div className="container-login" style={bgImage}>
                <div className="col-md-12">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="account-wall">
                            <h4 className="text-center">เข้าสู่ระบบ</h4>
                            <img className="logo-img" src={logo} alt="" />
                            <form className="form-signin" action="">
                                <div className="txtInput">
                                    <input type="text" className="form-control" placeholder="อีเมล" required autoFocus />
                                </div>
                                <div className="txtInput">
                                    <input type="password" className="form-control" placeholder="รหัสผ่าน" required autoFocus />
                                </div>
                                <div className="txtInput">
                                    <button className="btn btn-sm btn-primary btn-block" type="submit">เข้าสู่ระบบ</button>
                                </div>
                                <br />
                                <label className=" pull-left">
                                    <input type="checkbox" value="remember-me" />
                                    จำฉันไว้
                                    </label>
                                <a href="form_signup.html" className="pull-right">ยังไม่ได้เป็นสมาชิก? ลงทะเบียน </a>

                            </form>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        );
    }
}

export default Signin;
