import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

const Introbox = () => {
  return (
    <Fragment>
      <Hidden smDown>
        <Fragment>
          <Grid container className="pagebox">
            <Grid container className="forbg">
              <Grid item xs={1}></Grid>
              <Grid item xs={10} align="center">
                <h1>회사 소개</h1>
              </Grid>
              <Grid item xs={1}></Grid>

              <Grid item xs={1}></Grid>

              <Grid item xs={10} align="center">
                <p>키친스를 소개합니다.</p>
                <p>&nbsp;</p>
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
            <Grid item xs={2}></Grid>

            <Grid container item xs={8} className="introbox">
              <Grid item xs={12}>
                <img src="./intro.jpg" alt="intro" width="100%" />
              </Grid>
              <Grid item xs={12}>
                <h1>안녕하세요 키친스입니다!</h1>
              </Grid>
              <Grid item xs={12}>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;옛날 옛적에, 토끼와 거북이가 살고
                  있었다. 토끼는 매우 빨랐고, 거북이는 매우 느렸다. 어느날
                  토끼가 거북이를 느림보라고 놀려대자, 거북이는 자극을 받고
                  토끼에게 달리기 경주를 제안하였다. 경주를 시작한 토끼는
                  거북이가 한참 뒤진 것을 보고 안심을 하고 중간에 낮잠을 잔다.
                  그런데 토끼가 잠을 길게 자자 거북이는 토끼를 지나친다. 잠에서
                  문득 깬 토끼는 거북이가 자신을 추월했다는 사실을 깨닫게 되고
                  빨리 뛰어가보지만 결과는 거북이의 승리였다. "천천히 노력하는
                  자가 승리한다" 는 교훈이 담겨 있는 이야기다. 이러한 교훈을
                  통해 우리는 헛된 삶을 살지 않게 노력해야 된다는 것을
                  느끼게된다. 이처럼 토끼와 거북이는 옛날동화로 좋은 내용을
                  담고있다.
                </p>
              </Grid>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
        </Fragment>
      </Hidden>
      <Hidden mdUp>
        <Fragment>
          <Grid container className="pageboxsmall">
            <Grid container className="forbg">
              <Grid item xs={1}></Grid>
              <Grid item xs={10} align="center">
                <h1>회사 소개</h1>
              </Grid>
              <Grid item xs={1}></Grid>

              <Grid item xs={1}></Grid>

              <Grid item xs={10} align="center">
                <p>키친스를 소개합니다.</p>
                <p>&nbsp;</p>
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
            <Grid container item xs={12} className="introbox">
              <Grid item xs={12}>
                <img src="./intro.jpg" alt="intro" width="100%" />
              </Grid>
              <Grid item xs={12}>
                <h1>안녕하세요 키친스입니다!</h1>
              </Grid>
              <Grid item xs={12}>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;옛날 옛적에, 토끼와 거북이가 살고
                  있었다. 토끼는 매우 빨랐고, 거북이는 매우 느렸다. 어느날
                  토끼가 거북이를 느림보라고 놀려대자, 거북이는 자극을 받고
                  토끼에게 달리기 경주를 제안하였다. 경주를 시작한 토끼는
                  거북이가 한참 뒤진 것을 보고 안심을 하고 중간에 낮잠을 잔다.
                  그런데 토끼가 잠을 길게 자자 거북이는 토끼를 지나친다. 잠에서
                  문득 깬 토끼는 거북이가 자신을 추월했다는 사실을 깨닫게 되고
                  빨리 뛰어가보지만 결과는 거북이의 승리였다. "천천히 노력하는
                  자가 승리한다" 는 교훈이 담겨 있는 이야기다. 이러한 교훈을
                  통해 우리는 헛된 삶을 살지 않게 노력해야 된다는 것을
                  느끼게된다. 이처럼 토끼와 거북이는 옛날동화로 좋은 내용을
                  담고있다.
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Fragment>
      </Hidden>
    </Fragment>
  );
};

export default Introbox;
