import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col, Icon } from 'antd';

import Tetris from './technology-comp/Tetris';
import Column from './technology-comp/Column';
import Coordinate from './technology-comp/Coordinate';
import Building from './technology-comp/Building';


const pageData = [
  {
    title: 'Ant Design',
    content: '一个面向企业级应用的 UI 设计语言与技术实现',
    links: (<a href="tencent://message/?Menu=yes&uin=800178717" target="_blank">联系我们</a>),
    Bg: Tetris,
  },
  {
    title: '敏捷开发',
    content: '拒绝传统瀑布流式项目、加快项目交付时间',
    links: (<a href="tencent://message/?Menu=yes&uin=800178717" target="_blank">联系我们</a>), 
    Bg: Column,
  },
  {
    title: '微服务',
    content: '支持海量用户的技术架构方案',
    links: (<a href="tencent://message/?Menu=yes&uin=800178717" target="_blank">联系我们</a>),
    Bg: Coordinate,
  },
  {
    title: '一对一定制开发',
    content: '为小微企业而生, 实现您的互联网创业梦想, 上线高质量的产品',
    links: (<a href="tencent://message/?Menu=yes&uin=800178717" target="_blank">联系我们</a>),
    full: true,
    Bg: Building,
  },
];

export default class Design extends React.PureComponent {
  state = {
    hover: null,
  };
  onMouseEnter = (hover) => {
    this.setState({
      hover,
    });
  }
  onMouseLeave = () => {
    this.setState({
      hover: null,
    });
  }
  render() {
    const { isMobile } = this.props;
    const children = pageData.map((item, i) => {
      const colProps = {
        md: item.full ? 24 : 8, xs: 24,
      };
      return (
        <Col {...colProps} key={i.toString()} className="page2-item-wrapper">
          <div
            className={`page2-item${item.full ? ' full' : ''}`}
            onMouseEnter={() => { this.onMouseEnter(item.title); }}
            onMouseLeave={this.onMouseLeave}
          >
            <div className="page2-item-bg">
              {item.Bg && React.createElement(item.Bg, {
                hover: !isMobile && this.state.hover === item.title,
                isMobile,
              })}
            </div>
            <div className="page2-item-desc">
              <h4>{item.title}</h4>
              <p>{item.content}</p>
              <p className="page2-item-links">
                {item.links}
              </p>
            </div>
          </div>
        </Col>
      );
    });
    return (
      <div className="page-wrapper page2">
        <div className="page">
          <h1>简单可靠的技术</h1>
          <i />
          <OverPack className="page2-content">
            <QueueAnim component={Row} key="queue" type="bottom" leaveReverse>
              {children}
            </QueueAnim>
          </OverPack>
        </div>
      </div>);
  }
}
