import React from 'react';
import styled from "styled-components";

const Career = () => {
    const CareerContainer = styled.section`
      padding: 0 2rem;
    `;

    const CareerHeader = styled.h2`
      margin: 4rem 0 2rem;
      font-size: 2.8rem;
    `;
    const Period = styled.span`
      color: blueviolet;
      font-weight: bolder;
    `;
    const RowLeftHeader = styled.h3`
      font-size: 2rem;
      margin: 0 0 1rem;
    `
    const Project = styled.div`
      &:first-child {
        padding-top: 0;
      }

      box-sizing: border-box;
      padding: 1.5rem 0;

      & > h4 {
        font-size: 1.5rem;
        margin: 0 0 1rem;
      }

      & > .time {
        display: block;
        margin-bottom: 1.5rem;
      }

      & > h5 {
        font-size: 1.3rem;
        margin: 0 0 0.5rem;
      }
    `;

    return (
        <CareerContainer>
            <CareerHeader>職務経歴<Period>。</Period></CareerHeader>
            {/*<div className={"row"}>*/}
            {/*    <div className={"row-left"}>*/}
            {/*        <RowLeftHeader>companyName<Period>。</Period></RowLeftHeader>*/}
            {/*        <span className={"role"}>RoleName</span>*/}
            {/*        <span className={"time"}>*/}
            {/*           <time dateTime={"2022-04"}>2022.04</time>*/}
            {/*           ~*/}
            {/*           現在*/}
            {/*   </span>*/}
            {/*    </div>*/}
            {/*    <div className={"row-right"}>*/}
            {/*        <Project>*/}
            {/*            <h4>projectName</h4>*/}
            {/*            <span className={"time"}>*/}
            {/*                <time dateTime={"2022-05"}>2022.05</time>~現在*/}
            {/*            </span>*/}
            {/*            <h5>詳細</h5>*/}
            {/*            <p>旧環境から新環境へのマイグレーションをしております、システム改善はない見込みです。Javaや.NETのバージョンアップに対応します。</p>*/}
            {/*            <h5>私がやった事</h5>*/}
            {/*            <p>現在旧環境での結合テストを担当しております。</p>*/}
            {/*        </Project>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </CareerContainer>
    );
}

export default Career;