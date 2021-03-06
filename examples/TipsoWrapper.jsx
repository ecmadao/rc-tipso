import React from 'react';
import { Button } from 'light-ui';
import Tipso from '../components/index';

class TipsoWrapper extends React.Component {
  render() {
    return (
      <div id="components-container">
        <h3>Tipso</h3>
        <h4>Use hover as trigger</h4>
        <div>
          <Tipso
            tipsoContent={(
              <div style={{
                width: '95px',
                textAlign: 'center'
              }}>This is an example</div>
            )}>
            <Button
              value="hover to show"
            />
          </Tipso>

          <Tipso
            theme="dark"
            tipsoContent={(
              <div style={{
                width: '95px',
                textAlign: 'center'
              }}>This is an example</div>
            )}>
            <Button
              value="hover to show"
            />
          </Tipso>

          <Tipso
            position="bottom"
            tipsoContent={(
              <div style={{
                width: '95px',
                textAlign: 'center'
              }}>This is an example</div>
            )}>
            <Button
              value="hover to show"
            />
          </Tipso>

          <Tipso
            theme="dark"
            position="bottom"
            tipsoContent={(
              <div style={{
                width: '95px',
                textAlign: 'center'
              }}>This is an example</div>
            )}>
            <Button
              value="hover to show"
            />
          </Tipso>

          <br />

          <Tipso
            position="left"
            tipsoContent={(
              <div style={{
                width: '95px',
                textAlign: 'center'
              }}>This is an example</div>
            )}>
            <Button
              value="hover to show"
            />
          </Tipso>

          <Tipso
            position="right"
            tipsoContent={(
              <div style={{
                width: '95px',
                textAlign: 'center'
              }}>This is an example</div>
            )}>
            <Button
              value="hover to show"
            />
          </Tipso>
        </div>
        <h4>Use click as trigger</h4>
        <div>
          <Tipso
            trigger="click"
            tipsoContent={(
              <div style={{
                width: '95px',
                textAlign: 'center'
              }}>This is an example</div>
            )}>
            <Button
              value="click to show"
            />
          </Tipso>
          <Tipso
            theme="dark"
            trigger="click"
            tipsoContent={(
              <div style={{
                width: '95px',
                textAlign: 'center'
              }}>This is an example</div>
            )}>
            <Button
              value="click to show"
            />
          </Tipso>
          <Tipso
            trigger="click"
            position="bottom"
            tipsoContent={(
              <div style={{
                width: '95px',
                textAlign: 'center'
              }}>This is an example</div>
            )}>
            <Button
              value="click to show"
            />
          </Tipso>
          <Tipso
            theme="dark"
            position="bottom"
            trigger="click"
            tipsoContent={(
              <div style={{
                width: '95px',
                textAlign: 'center'
              }}>This is an example</div>
            )}>
            <Button
              value="click to show"
            />
          </Tipso>

          <br/>

          <Tipso
            trigger="click"
            position="left"
            tipsoContent={(
              <div style={{
                width: '95px',
                textAlign: 'center'
              }}>This is an example</div>
            )}>
            <Button
              value="click to show"
            />
          </Tipso>
          <Tipso
            theme="dark"
            position="right"
            trigger="click"
            tipsoContent={(
              <div style={{
                width: '95px',
                textAlign: 'center'
              }}>This is an example</div>
            )}>
            <Button
              value="click to show"
            />
          </Tipso>

        </div>

        <h4>Always disable Tipso</h4>
        <div>
          <Tipso
            show={true}
            theme="dark"
            position="bottom"
            disabled={true}
            tipsoContent={(
              <div style={{
                width: '95px',
                textAlign: 'center'
              }}>This is an example</div>
            )}>
            <Button
              value="tip is disabled"
            />
          </Tipso>
        </div>

        <h4>Show Tipso in default</h4>
        <div>
          <Tipso
            show={true}
            theme="dark"
            position="bottom"
            trigger="click"
            tipsoContent={(
              <div style={{
                width: '95px',
                textAlign: 'center'
              }}>This is an example</div>
            )}>
            <Button
              value="show in default"
            />
          </Tipso>
        </div>
      </div>
    );
  }
}

export default TipsoWrapper;
