import React from 'react';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';
import Header from './Header';
import Banner3 from './Banner3';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Footer from './Footer';
import { banner3 } from './data';
import './static/style';



let isMobile = false;
enquireScreen((b) => {
  isMobile = b;
});


class Home extends React.PureComponent {
  state = {
    isMobile,
    showShadow: false,
  };

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }
  navToShadow = (e) => {
    this.setState({ showShadow: e.mode === 'leave' });
  }
  render() {
    return (
      [
        <Header key="header" className={this.state.showShadow ? 'show-shadow' : ''} />,
		<Banner3
			id="Banner3_0"
			key="Banner3_0"
			dataSource={banner3}
			isMobile={this.state.isMobile}
		  />,
        <Page1 key="page1" isMobile={this.state.isMobile} />,
        <Page2 key="page2" isMobile={this.state.isMobile} />,
        <Page3 key="page3" isMobile={this.state.isMobile} />,
        <Page4 key="page4" />,
        <Footer key="footer" />,
        <DocumentTitle title="手机APP软件开发,网站建设,商城系统开发_剑指堆栈网络技术_小微企业高端一对一服务" key="title" />,
      ]
    );
  }
}
export default Home;
