import React, { useState, useEffect } from 'react';
import logo from "../../assets/images/logo-symbol-black.png"
import image1 from "../../assets/images/undraw_educator_re_ju47 1.svg"
import image2 from "../../assets/images/undraw_questions_re_1fy7 1.svg"
import image3 from "../../assets/images/undraw_searching_re_3ra9 1.svg"
import image4 from "../../assets/images/undraw_online_learning_re_qw08 1.svg"
import image5 from "../../assets/images/undraw_preparation_re_t0ce 1.svg"
import image6 from "../../assets/images/undraw_respond_re_iph2 1.svg"
import image7 from "../../assets/images/undraw_group_video_re_btu7 1.svg"
import styles from './styles';
import Button from '../../components/button/button';
import LoginForm from '../../components/login/login';

// Material UI
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';



const Home = () => {
    const classes = styles();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div>
            <header className={classes.header}>
                <a href='.'><img src={logo} alt="logo" height={70}/></a>
                <ul className={classes.links}>
                    <li><button onClick={()=>console.log("button")} href='#'>How it works</button></li>
                    <li><button onClick={()=>console.log("button")} href='#'>FAQ</button></li>
                    <li><button onClick={()=>console.log("button")} href='#'>Become a Tutor</button></li>
                </ul>
                <Button onClick={handleClickOpen}>LOGIN</Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogContent>
                        <span className={classes.closeIcon}><CloseIcon onClick={handleClose}/></span>
                        <LoginForm />
                    </DialogContent>
                </Dialog>
            </header>
            <main className={classes.main}>
                {/* Landing Section */}
                <section className={classes.section}>
                    <div className={classes.landing}>
                        <h1>DevExchange</h1>
                        <h2>Your Place </h2>
                        <h2>to Exchange</h2>
                        <h2>Your Knowledge</h2>
                        <div className={classes.button}>
                            <Button>JOIN OUR COMMUNITY</Button>
                        </div>
                    </div>
                    <div className={classes.image}>
                        <img src={image1}/>
                    </div>
                </section>
                
                {/* Description Section */}
                <section className={classes.section}>
                    <div className={classes.description}>
                        <img src={image2}/>
                        <h2>Ask Your</h2>
                        <h2>Question</h2>
                    </div>
                    <div className={classes.description}>
                        <img src={image3}/>
                        <h2>Find Your</h2>
                        <h2>Answer</h2>
                    </div>
                    <div className={classes.description}>
                        <img src={image4}/>
                        <h2>Book a Session</h2>
                        <h2>With a Tutor</h2>
                    </div>
                </section>
                
                {/* Ask Section */}
                <section className={classes.section}>
                    <div className={classes.title}>
                        <h1>Ask</h1>
                        <h2>Your Question</h2>
                        <h2 className='subtitle'>and let other experienced developers answer or solve your problems.</h2>
                    </div>
                    <div className={classes.image}>
                        <img src={image5}/>
                    </div>
                </section>

                {/* Answer Section */}
                <section className={classes.section}>
                    <div className={classes.image}>
                        <img src={image6}/>
                    </div>
                    <div className={classes.title}>
                        <h1>Answer</h1>
                        <h2>Others Questions</h2>
                        <h2 className='subtitle'>and help them bypass there dev problems. Earn “Dev Coins” for your answers.</h2>
                    </div>
                </section>

                {/* Book Section */}
                <section className={classes.section}>
                    <div className={classes.title}>
                        <h1>Book a Session</h1>
                        <h2>With a Tutor</h2>
                        <h2 className='subtitle'>and get your live tutoring session with our video/voice call feature.</h2>
                    </div>
                    <div className={classes.image}>
                        <img src={image7}/>
                    </div>
                </section>
            </main>

            <footer className={classes.footer}>
                <p>©2022 DevExpress. All Rights Reserved.</p>
            </footer>
        </div>
    )
}

export default Home;