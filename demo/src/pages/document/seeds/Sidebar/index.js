import React, {Component} from 'react';
import ExampleContainer from 'demo/ExampleContainer';
import PropTypeDescription from 'demo/PropTypeDescription';
import MultiLangMarkdown from 'demo/MultiLangMarkdown';

import sidebarCode from '!raw-loader!hana-ui/seeds/Sidebar/Sidebar';
import ReadmeText from './README';

import ExampleBase from './ExampleBase';
import ExampleBaseCode from '!raw-loader!./ExampleBase';

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <MultiLangMarkdown text={ReadmeText} />
        <ExampleContainer
          code={ExampleBaseCode}
        >
          <ExampleBase />
        </ExampleContainer>
        <PropTypeDescription code={sidebarCode} header={'### Sidebar Properties'} />
      </div>
    );
  }
}
