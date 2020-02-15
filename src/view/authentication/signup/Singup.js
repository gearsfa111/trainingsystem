import React from 'react';
import logo from '../../../assets/images/kru.png';
import bg from '../../../assets/images/bg-01.jpg';

import '../../../assets/style/customStyle.css';
import '../../../assets/css/bootstrap.css';
import '../../../assets/css/bootstrap-theme.css';

const bgImage = {
    backgroundImage: "url(" + bg + ")",
    backgroundRepeat: "no-repeat",

};

class Singup extends React.Component {

    render() {
        return (
            <div className="container-login" style={bgImage}>
                <div>
                    <div className="container">
                        <div className="col-md-3"></div>
                        <div className="col-md-6" style={{ marginTop: 60 }}>
                            <div className="panel panel-primary">
                                <div className="panel-heading">ลงทะเบียน</div>
                                <form style={{ padding: 30 }}>
                                    <div className="form-group input-group">
                                        <span className="input-group-addon">@</span>
                                        <input type="text" className="form-control" placeholder="อีเมล" aria-describedby="sizing-addon1" />
                                    </div>

                                    <div className="form-group input-group ">
                                        <div className="input-group-addon">
                                            <span className="input-group-text"> <i className="glyphicon glyphicon-user"></i> </span>
                                        </div>
                                        <input name="" className="form-control" placeholder="ชื่อผู้ใช้งาน" type="text" />
                                    </div>

                                    <div className="form-group input-group ">
                                        <div className="input-group-addon">
                                            <span className="input-group-text"> <i className="glyphicon glyphicon-lock"></i> </span>
                                        </div>
                                        <input name="" className="form-control" placeholder="รหัสผ่าน" type="text" />
                                    </div>
                                    <div className="form-group input-group ">
                                        <div className="input-group-addon">
                                            <span className="input-group-text"> <i className="glyphicon glyphicon-lock"></i> </span>
                                        </div>
                                        <input name="" className="form-control" placeholder="ยืนยันรหัสผ่าน" type="text" />
                                    </div>

                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-block"> บันทึก </button>
                                    </div>

                                    <p className="text-center">เป็นสมาชิกแล้ว? <a href="form_signin.html">เข้าสู่ระบบ</a> </p>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>

            </div>

        );
    }
}

export default Singup;
