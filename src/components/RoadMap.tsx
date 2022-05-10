import { Row } from 'antd';
import { useIntl } from 'umi';
import { css } from '@emotion/css';

type StepStatus = 'Finished' | 'Progress' | 'Waiting';
interface StepProps {
  name: string;
  content: Array<string>;
  current: number;
  index: number;
}

const ColorConfig = {
  Finished: {
    circle: ['#2D78FF', '#1443FF'],
    line: ['rgba(19,31,74,0)', 'rgba(24,60,170,0.53) 20%', 'rgba(28,85,255,1)'],
    block: ['#1443FF', '#000E47'],
  },
  Progress: {
    circle: ['#5596E1', '#17BBE2'],
    line: ['rgba(19,31,74,0)', 'rgba(24,60,170,0.53) 20%', 'rgba(0,170,229,1)'],
    block: ['#001F9B', '#3FDAFF'],
  },
  Waiting: {
    circle: ['#BEBEBE', '#242424'],
    line: ['rgba(82,91,125,0)', 'rgba(65,70,87,0.5) 20%', 'rgba(49,49,49,1)'],
    block: ['#BEBEBE', '#242424'],
  },
};

const Step = (props: StepProps) => {
  const { formatMessage } = useIntl();
  const { name, content, current, index } = props;
  const status =
    current === index ? 'Progress' : index < current ? 'Finished' : 'Waiting';
  return (
    <div
      className={css(`
        flex:1;
        display:flex;
        flex-direction:column;
        align-items:center;
        position:relative;
      `)}
    >
      <div
        className={css(`
          font-size:20px;
          letter-spacing:0.06px;
          line-height:28px;
          font-family: 苹方-简;
        `)}
      >
        {name}
      </div>
      {status === 'Progress' && (
        <div
          className={css(`
          position:absolute;
          top: 40px;
          width: 69px;
          height: 18px;
          border-radius:18px;
          background: linear-gradient(to bottom right, #2863A8,#3366B8);
          font-size:10px;
          letter-spacing:0.03px;
          line-height:14px;
          font-family: 苹方-简;
          display:flex;
          justify-content:center;
          align-items:center;
        `)}
        >
          {formatMessage({ id: 'index_roadmap_in_progress' })}
        </div>
      )}
      <div
        className={css(`
          width:100%;
          margin:45px 0 30px 0;
          display:flex;
          justify-content:center;
          position:relative;
          &:after{
            content:'';
            display:${index === 1 ? 'none' : 'inline-block'};
            width:calc(100% - 50px);
            height:5px;
            border-radius:2.5px;
            background: linear-gradient(to right, ${
              ColorConfig[status].line[0]
            },${ColorConfig[status].line[1]}, ${ColorConfig[status].line[2]});
            position:absolute;
            top:10px;
            right:calc(50% + 20px);
          }
        `)}
      >
        <div
          className={css(`
          width:25px;
          height: 25px;
          background: linear-gradient(to bottom right, ${ColorConfig[status].circle[0]}, ${ColorConfig[status].circle[1]});
          border-radius:50%;
        `)}
        ></div>
      </div>
      <div
        className={css(`
          width:180px;
          height: 126px;
          background: linear-gradient(to bottom right, ${ColorConfig[status].block[0]}, ${ColorConfig[status].block[1]});
          border-radius:12px;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          font-size:16px;
          letter-spacing:0.05px;
          line-height:30px;
          font-family: 苹方-简;
        `)}
      >
        {content.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default () => {
  const { formatMessage } = useIntl();
  const StepContent = [
    {
      name: formatMessage({ id: 'index_roadmap_step_one' }),
      content: [
        formatMessage({ id: 'index_roadmap_step_one_1' }),
        formatMessage({ id: 'index_roadmap_step_one_2' }),
      ],
    },
    {
      name: formatMessage({ id: 'index_roadmap_step_two' }),
      content: [
        formatMessage({ id: 'index_roadmap_step_two_1' }),
        formatMessage({ id: 'index_roadmap_step_two_2' }),
        formatMessage({ id: 'index_roadmap_step_two_3' }),
      ],
    },
    {
      name: formatMessage({ id: 'index_roadmap_step_three' }),
      content: [
        formatMessage({ id: 'index_roadmap_step_three_1' }),
        formatMessage({ id: 'index_roadmap_step_three_2' }),
      ],
    },
    {
      name: formatMessage({ id: 'index_roadmap_step_four' }),
      content: [
        formatMessage({ id: 'index_roadmap_step_four_1' }),
        formatMessage({ id: 'index_roadmap_step_four_2' }),
      ],
    },
    {
      name: formatMessage({ id: 'index_roadmap_step_five' }),
      content: [
        formatMessage({ id: 'index_roadmap_step_five_1' }),
        formatMessage({ id: 'index_roadmap_step_five_2' }),
        formatMessage({ id: 'index_roadmap_step_five_3' }),
      ],
    },
  ];
  return (
    <div
      className={css(`
          width:100%;
          height: 900px;
          background-image:url('/index-bg-2.png');
          background-size:100% 100%;
        `)}
    >
      <Row
        className={css(`
              display:flex;
              flex-direction:column;
              justify-content:center;
              align-items:center;
            `)}
      >
        <div
          className={css(`
              font-size:40px;
              letter-spacing:0.13px;
              line-height:60px;
              font-family: 苹方-简;
              margin-bottom: 10px;
              font-weight:bold;
              margin-top:80px;
            `)}
        >
          {formatMessage({ id: 'index_roadmap_title' })}
        </div>
        <div
          className={css(`
              width:119px;
              height:11px;
              background-color:#1443FF;
            `)}
        ></div>
      </Row>
      <Row
        className={css(`
          height: 456px;
          margin:83px 110px;
          background-image:url('/roadmap-bg.png');
          // background: linear-gradient(to bottom, rgba(0,0,0,0.24),rgba(0,0,0,0.5);
          background-size: 100% 100%;
        `)}
      >
        <div
          className={css(`
          display:flex;
          flex-direction:row;
          justify-content:space-around;
          width:100%;
          margin: 100px 50px;
          
        `)}
        >
          {StepContent.map((item, index) => {
            return (
              <Step
                current={3}
                index={index + 1}
                name={item.name}
                content={item.content}
              ></Step>
            );
          })}
        </div>
      </Row>
    </div>
  );
};
