import React, { PureComponent } from 'react';
import ButtonWithContext from './ButtonWithContext';
import LoadingProvider from './LoadingProvider';
import Button from '../04/Button';

function RowBComponent() {
  return <Button>버튼</Button>;
}

function RowCComponent() {
  return <ButtonWithContext>버튼</ButtonWithContext>;
}

function TableComponent() {
  return (
    <table>
      <RowBComponent />
      <RowCComponent />
    </table>
  );
}

class HomePageWithProvider extends PureComponent {
  render() {
    return (
      <LoadingProvider>
        <TableComponent />
        <Button onPress={this.toggleLoading}>상태 변경</Button>
      </LoadingProvider>
    );
  }
}

export default HomePageWithProvider;
