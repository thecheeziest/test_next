import styles from './project.module.css'
export const Project = () => {
    return (
        <seciton id="projects" className={`con ${styles.project}`} >
            <div className="inner">
                <h2>Projects</h2>
                <div>
                    <article>
                        <div className={styles.view} >
                            <div>
                                <img src="/projects/ev.jpg" alt="" />
                            </div>
                            <ul>
                                <li> <img src="/projects/ev.jpg" alt="" /></li>
                                <li> <img src="/projects/ev.jpg" alt="" /></li>
                                <li> <img src="/projects/ev.jpg" alt="" /></li>
                            </ul>
                        </div>
                        <div className={styles.detail}>
                            <h3> 탐라는 전기차 </h3>
                            <h4> 주제 : 제주 여행을 준비하는 여행객을 위해 전기차 이용법과 팁을 공유하는 웹 사이트 </h4>
                            <p>
                                <span>제주 여행객을 위해 전기차 이용 방법과 문제 대처법, 전기차 뉴스 등 각종 팁을 공유하는 웹 사이트</span>
                            </p>
                            <p>
                                <span></span>
                            </p>
                            <ul>
                                <li><b>주요기능</b> : <strong>카드 게시글 조회/필터링/좋아요, 게시판, 상세페이지</strong></li>
                                <li><b>기획서</b> : <strong> <a href="" target="_blank">바로가기</a> </strong></li>
                                <li><b>미리보기</b> : <strong> <a href="" target="_blank">바로가기</a> </strong></li>
                                <li><b>gitHub</b> : <strong> <a href="" target="_blank">바로가기</a></strong></li>
                                <li><b>frontend</b> : <strong> Redux toolkit, styled-component </strong></li>
                                <li><b>backend</b> : <strong> Node.js </strong></li>
                                <li><b>database</b> : <strong> MySQL </strong></li>
                                <li><b>deployment</b> : <strong> AWS </strong></li>
                            </ul>
                        </div>
                    </article>
                    {/*  */}
                    <article>
                        <div className={styles.view} >
                            <div>
                                <img src="/projects/souls.jpg" alt="" />
                            </div>
                            <ul>
                                <li> <img src="/projects/souls.jpg" alt="" /></li>
                                <li> <img src="/projects/souls.jpg" alt="" /></li>
                                <li> <img src="/projects/souls.jpg" alt="" /></li>
                            </ul>
                        </div>
                        <div className={styles.detail}>
                            <h3>환혼 : 빛과 그림자</h3>
                            <h4> 드라마 ‘환혼 : 빛과 그림자’ 등장인물 관련 콘텐츠 앱 </h4>
                            <p>
                                <span>드라마 ‘환혼 : 빛과 그림자’의 등장인물의 관련 콘텐츠를 한눈에 볼 수 있는 앱</span>
                            </p>
                            <p>
                                <span></span>
                            </p>
                            <ul>
                                <li><b>주요기능</b> : <strong>인물에 알맞은 콘텐츠 조회</strong></li>
                                <li><b>기획서</b> : <strong> <a href="" target="_blank">바로가기</a> </strong></li>
                                <li><b>미리보기</b> : <strong> <a href="" target="_blank">바로가기</a> </strong></li>
                                <li><b>gitHub</b> : <strong> <a href="" target="_blank">바로가기</a></strong></li>
                                <li><b>frontend</b> : <strong> Redux toolkit, styled-component </strong></li>
                                <li><b>backend</b> : <strong> Node.js </strong></li>
                                <li><b>database</b> : <strong> MySQL </strong></li>
                                <li><b>deployment</b> : <strong> AWS </strong></li>
                            </ul>
                        </div>
                    </article>
                </div>
            </div>
        </seciton>
    );
};