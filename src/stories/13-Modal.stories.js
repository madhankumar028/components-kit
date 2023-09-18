import React from 'react';

import {select, withKnobs, boolean} from "@storybook/addon-knobs";

import {Modal} from '../components/Modal';

export default {
  title: "Modal",
  decorators: [withKnobs]
};

const modalHeader = () => {
  return (
    <div>Header</div>
  )
};

const modalFooter = () => {
  return (
    <div>Footer</div>
  )
};

export const modal = () => {
  const defaultSize = select('Modal Size', {
    sm: 'sm',
    md: 'md',
    lg: 'lg',
  }, 'md');
  const isOpen = boolean('isOpen', true);

  return (
    <>
      <Modal
        header={modalHeader()}
        footer={modalFooter()}
        isOpen={isOpen}
        defaultSize={defaultSize}
      >
        <>Body</>
      </Modal>
    </>
  )
};
