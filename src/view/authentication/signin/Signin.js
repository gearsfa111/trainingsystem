import React from 'react';

class Signin extends React.Component {

    render() {
        return (
            <div class="container-login" style="background-image: url('assets/images/bg-01.jpg');">
                <div class="col-md-12">
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                        <div class="account-wall">
                            <h4 class="text-center">เข้าสู่ระบบ</h4>
                            <img class="logo-img" src="assets/images/kru.png" alt="" />
                            <form class="form-signin" action="">
                                <div class="txtInput">
                                    <input type="text" class="form-control" placeholder="อีเมล" required autofocus />
                                </div>
                                <div class="txtInput">
                                    <input type="password" class="form-control" placeholder="รหัสผ่าน" required autofocus />
                                </div>
                                <div class="txtInput">
                                    <button class="btn btn-sm btn-primary btn-block" type="submit">เข้าสู่ระบบ</button>
                                </div>
                                <br />
                                <label class=" pull-left">
                                    <input type="checkbox" value="remember-me" />
                                    จำฉันไว้
                                    </label>
                                <a href="form_signup.html" class="pull-right">ยังไม่ได้เป็นสมาชิก? ลงทะเบียน </a>

                            </form>
                        </div>
                    </div>
                    <div class="col-md-4"></div>
                </div>
            </div>
        );
    }
}
export default Signin;
