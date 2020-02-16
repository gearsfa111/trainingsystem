import React from 'react';

import bg from '../../assets/images/bg-01.jpg';

const bgImage = {
    backgroundImage: "url(" + bg + ")",
    backgroundRepeat: "no-repeat",
};

class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            username: '',
            password: '',
            passwordComfirm: '',
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onPasswordComfirmChange = this.onPasswordComfirmChange.bind(this);

    }

    onEmailChange(e) {
        this.setState({ email: e.target.value });
    }
    onUsernameChange(e) {
        this.setState({ username: e.target.value });
    }
    onPasswordChange(e) {
        this.setState({ password: e.target.value });
    }
    onPasswordComfirmChange(e) {
        this.setState({ passwordComfirm: e.target.value });
    }


    onSubmit(e) {

        let email = this.state.email;
        let username = this.state.username;
        let password = this.state.password;
        let passwordComfirm = this.state.passwordComfirm;
        if (username == '' || password == '' || passwordComfirm == '') {
            alert('กรุณากรอกข้อมูลให้ครบ');
        } else if (password != passwordComfirm) {
            alert('รหัสผ่านไม่ตรงกัน');
        } else {
            let url = 'http://127.0.0.1/php_sample/api/index.php/Authen/register?email=' + email + '&username=' + username + '&password=' + password;
            fetch(url)
                .then(res => res.json())
                .then(result => {
                    alert(result.message)
                },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                );
        }
        e.preventDefault();
    }

    render() {
        return (
            <div className="container-login" style={bgImage}>
                <div>
                    <div className="container">
                        <div className="col-md-3"></div>
                        <div className="col-md-6" style={{ marginTop: "60px" }}>
                            <div className="panel panel-primary">
                                <div className="panel-heading">ลงทะเบียน</div>
                                <form style={{ padding: "30px" }} onSubmit={this.onSubmit}>
                                    <div className="form-group input-group">
                                        <span className="input-group-addon">@</span>
                                        <input type="text" className="form-control" placeholder="อีเมล" aria-describedby="sizing-addon1"
                                            onChange={this.onEmailChange} />
                                    </div>

                                    <div className="form-group input-group ">
                                        <div className="input-group-addon">
                                            <span className="input-group-text"> <i className="glyphicon glyphicon-user"></i> </span>
                                        </div>
                                        <input name="" className="form-control" placeholder="ชื่อผู้ใช้งาน" type="text"
                                            onChange={this.onUsernameChange} />
                                    </div>

                                    <div className="form-group input-group ">
                                        <div className="input-group-addon">
                                            <span className="input-group-text"> <i className="glyphicon glyphicon-lock"></i> </span>
                                        </div>
                                        <input name="" className="form-control" placeholder="รหัสผ่าน" type="text"
                                            onChange={this.onPasswordChange} />
                                    </div>
                                    <div className="form-group input-group ">
                                        <div className="input-group-addon">
                                            <span className="input-group-text"> <i className="glyphicon glyphicon-lock"></i> </span>
                                        </div>
                                        <input name="" className="form-control" placeholder="ยืนยันรหัสผ่าน" type="text"
                                            onChange={this.onPasswordComfirmChange} />
                                    </div>

                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-block"> บันทึก </button>
                                    </div>

                                    <p className="text-center">เป็นสมาชิกแล้ว? <a href="#signin">เข้าสู่ระบบ</a> </p>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div >
        )
    }
}

export default SignUp;