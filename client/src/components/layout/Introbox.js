import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const Introbox = () => {
  return (
    <Fragment>
      <Grid container className="pagebox">
        <Grid container item xs={2} justify="center" className="navbar-column">
          <Grid container item xs={12} direction="column" align="center">
            <h2>회사 소개</h2>
            <Grid align="center">
              <Link to="./intro">회사 소개</Link>
            </Grid>
            <Grid align="center">
              <Link to="./map">오시는 길</Link>
            </Grid>
          </Grid>
        </Grid>

        <Grid container item xs={10} className="introbox">
          <Grid item xs={12}>
            <img src="./intro.jpg" alt="intro" width="100%" />
          </Grid>
          <Grid item xs={12}>
            <h1>안녕하세요 키친스입니다!</h1>
          </Grid>
          <Grid item xs={12}>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;옛날 옛적에, 토끼와 거북이가 살고 있었다.
              토끼는 매우 빨랐고, 거북이는 매우 느렸다. 어느날 토끼가 거북이를
              느림보라고 놀려대자, 거북이는 자극을 받고 토끼에게 달리기 경주를
              제안하였다. 경주를 시작한 토끼는 거북이가 한참 뒤진 것을 보고
              안심을 하고 중간에 낮잠을 잔다. 그런데 토끼가 잠을 길게 자자
              거북이는 토끼를 지나친다. 잠에서 문득 깬 토끼는 거북이가 자신을
              추월했다는 사실을 깨닫게 되고 빨리 뛰어가보지만 결과는 거북이의
              승리였다. "천천히 노력하는 자가 승리한다" 는 교훈이 담겨 있는
              이야기다. 이러한 교훈을 통해 우리는 헛된 삶을 살지 않게 노력해야
              된다는 것을 느끼게된다. 이처럼 토끼와 거북이는 옛날동화로 좋은
              내용을 담고있다. 토끼는 게으른 인간, 거북이는 성실한 인간을
              상징한다. 초등학교 시간에 토론으로 자주 인용된다. 하지만 서양에
              어떤 사람들은 반대로 거북이가 토끼를 보고도 그냥 뛰어갔기에
              공정하지 않으므로 거북이가 더 나쁘다고 하는 경우도 있다. 그리고
              비슷한 이야기로는 별주부전이 있다 토끼전에서도 거북이 대신 자라가
              등장하면서 자라는 비록 마지막에는 꾀많은 토끼에게 속았으나
              용왕님의 병이 걸려 토끼의 간을 구해 낫기 위해 육지까지 올라와
              토끼를 데려오는 충성심이 나타낸다. 반면 거기서도 토끼는 자신의
              죽음을 피하기 위해 용왕님을 속이고 자라에게도 화풀이를 하는 마치
              나쁜 주인공처럼 등장한다. 즉, 토끼와 거북이 , 혹은 토끼와 자라
              등이 등장할 경우 공통적으로 토끼가 어리석거나 나쁘다는 식처럼
              보이게 된다. 반면 토끼에게 뒤떨어지기도 하는 거북이나 자라 등은
              적어도 충성심이 있고 충성심을 알거나, 게으름없이 부지런하고
              성실하는 주인공으로 등장하는 것이 같다.
            </p>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Introbox;
