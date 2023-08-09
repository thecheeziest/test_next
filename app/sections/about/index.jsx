import { AiFillGithub } from 'react-icons/ai';
import styles from './about.module.css'
import 'animate.css';

export const About = () => {
    return (
        <section id='about' className={`con`}>
            <div className="inner">
                <h2>About me</h2>
                <div>
                    <div className={styles.about_wrap}>
                    <article className={`animate__animated animate__bounceInLeft ${styles.pic}`} style={{ "animation-delay": "0.3s" }}>
                        <img src="/about/img1.jpg" width='500px' height='600px' alt="" />
                    </article>

                    <article className={styles.desc}>
                        <h3>조현아</h3>
                        <ul>
                            <li><b>이름</b><strong>조현아</strong></li>
                            <li><b>연락처</b><strong>010-6691-0402</strong></li>
                            <li><b>생년월일</b><strong>96.10.02</strong></li>
                            <li><b>주소</b><strong>인천시 송도동</strong></li>
                            <li><b>이메일</b><strong>zoa@gmail.com</strong></li>
                            <li><b>교육 과정</b><strong>AWS 기반 풀스택 웹개발 (react.js, node.js)</strong></li>
                        </ul>
                        <p>
                            <a href="#" target='_blank'><i><AiFillGithub /></i></a>
                            <a href="#" target='_blank'><i><AiFillGithub /></i></a>
                        </p>
                    </article>
                </div>

                    <div className={styles.about_bottom}>
                    프론트엔드를 목표로 하는 주니어 개발자입니다.<br />
                    Javascript와 React를 주력하여 성장 중입니다.<br />
                    Node.js를 통해 백엔드 개발까지도 관심사를 넓혀나가고 있습니다.<br />
                    회사에 실질적인 도움이 되는 개발자로 일하고 싶습니다.
                    </div>

                </div>
            </div>
        </section>
    );
};