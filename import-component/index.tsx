import * as React from 'react';
import Hello from './hello';
import World from './world';

class A extends React.Component<void,void> {
  render() {
    return (
      <div>
        <Hello/><World/>
      </div>
    );
  }
}
