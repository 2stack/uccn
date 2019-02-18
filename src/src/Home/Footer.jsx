import React from 'react';
import { Row, Col } from 'antd';
import { footer } from './data';

export default function Footer() {
  return (
    <footer className="footer page-wrapper">
      {
        /*

        <div className="footer-wrap page">
        <Row>
          {
        footer.map((foot, index) => (
          <Col key={index.toString()} md={6} xs={24} className="footer-item-col">
            <div className="footer-item">
              <h2>
                {foot.icon && <img style={{ marginRight: 16 }} src={foot.icon} alt="img" />}
                {foot.title}
              </h2>
              {foot.children.map(child => (
                <div key={child.link}>
                  <a target="_blank " href={child.link}>
                    {child.title}
                    {child.desc && (
                    <span
                      style={{ color: 'rgba(255, 255, 255, 0.65)' }}
                    > - {child.desc}
                    </span>)}
                  </a>
                </div>))}
            </div>
          </Col>
          ))
      }
        </Row>
      </div>
          
        */
      }
      <div className="footer-bottom">
        <div className="page">
          <Row>
            <Col md={4} xs={24} style={{ textAlign: 'left' }} className="mobile-hide">
              <a
                href="#"
                rel="noopener noreferrer"
                style={{ color: 'rgba(256, 256, 256, 0.9)', textAlign: 'left' }}
              >
              诚征英才
              </a>
            </Col>
            <Col md={20} xs={24}>
              <span style={{ marginRight: 12 }}>ICP证： 鲁-18044113</span>
              <span style={{ marginRight: 12 }}>Copyright © 2017 邹城市剑指堆栈网络技术有限公司</span>
            </Col>
          </Row>
        </div>

      </div>
    </footer>);
}
