import React from 'react';
import styled from "styled-components";

const Theothers = () => {
    const OthersContainer = styled.section`
      padding: 0 2rem;
      display: block;

      & > h2 {
        font-size: 2.8rem;
      }
    `;
    const OthersDiv = styled.div`
      display: block;
      padding: 3rem 0;
      border-bottom: 1px solid #eee;

      & > p {
        display: block;
        margin: 0 0 1rem;
        font-size: 1.1rem;
        line-height: 1.4;
      }
    `;
    const OthersHeader = styled.h3`
      font-size: 2rem;
      margin: 0 0 1rem;
    `;
    const Period = styled.span`
      color: blueviolet;
      font-weight: bolder;
    `;


    return (
        <OthersContainer>
            <h2>学歴、他の活動<Period>。</Period></h2>
            <OthersDiv>
                <OthersHeader>
                    ブログ<Period>。</Period>
                </OthersHeader>
                <span className={"role"}>dev_yoon（筆名）</span>
                <span className={"time"}>
                       <time dateTime={"2018-04"}>2021.12</time>
                       ~
                       現在
               </span>
                <p>
                    <a href={"https://zenn.dev/dev_yoon"}>zenn</a>というITむけブログサ¡イトに毎週勉強しながらメモった内容を整理しブログに投稿しております。
                    今は主にJPA(Hibernate)に関する投稿をしております。<br/>
                    最近月閲覧数500を超えました。自分にとてはすごく嬉しい数値です😍
                </p>
            </OthersDiv>
            <OthersDiv>
                <OthersHeader>
                    Github<Period>。</Period>
                </OthersHeader>
                <span className={"role"}>Author</span>
                <span className={"time"}>
                       <time dateTime={"2021-10"}>2021.10</time>
                       ~
                       現在
               </span>
                <p>
                    <a href={"https://github.com/yoongeonung"}>Github</a>に1日1コミットを実現しています、ただの一つのコードでも毎日自分の成長のため勉強した記録を残しております。
                    開発者は本当にユニークな職業だと思います、自分が歩いて来た証拠が全て残りみんなが知ることができますからね。
                </p>
            </OthersDiv>
            <OthersDiv>
                <OthersHeader>
                    HAL東京<Period>。</Period>
                </OthersHeader>
                <span className={"role"}>高度情報処理学科　４年制</span>
                <span className={"time"}>
                       <time dateTime={"2018-04"}>2018.04</time>
                       ~
                       <time dateTime={"2018-04"}>2022.03</time>
               </span>
                <p>
                    高度情報処理学科で４年間勉強しながらJava、Javascript、Pythonなどいろんな言語を触れる経験をしました、
                    またAndroidといったモバイルアプリやWebアプリなどの科目も面白く勉強しました。４年間勉強しながら自分が
                    一番興味が深いところがWebアプリケーションの開発（JavaやSpringを用いたWAS(Web Application Server)）ということに気付くことが出来ました。
                </p>
            </OthersDiv>
        </OthersContainer>
    );
}

export default Theothers;