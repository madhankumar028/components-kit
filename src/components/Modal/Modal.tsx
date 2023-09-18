import React, {ReactElement, useState, useEffect} from 'react';
import {CSSTransition} from 'react-transition-group';

import {useMediaQuery} from "../../utils/hooks/useMediaQuery";
import {BREAK_POINTS} from "../../utils/breakpoint";

import './Modal.scss';

interface IModal {
  isOpen: boolean,
  header?: () => ReactElement,
  footer?: () => ReactElement,
  defaultSize: 'sm' | 'md' | 'lg',
  className?: string,
  children: ReactElement | string,
}

export const Modal: React.FunctionComponent<IModal> = (props) => {
  const [size, setSize] = useState(props.defaultSize);
  const [openModal, setOpenModal] = useState(props.isOpen);

  const isDesktop = useMediaQuery(BREAK_POINTS.desktop);
  const isTablet = useMediaQuery(BREAK_POINTS.tablet);

  // when user resizes the window it's equivalent effect on visible slides
  useEffect(() => {
    if (isDesktop) {
      setSize(props.defaultSize);
    } else if (isTablet) {
      setSize('md');
    } else {
      setSize('sm');
    }
  }, [isTablet, isDesktop]);

  const classIsShow = openModal ? 'show' : '';
  const classSize = `lp__modal-dialog--${size}`;
  const classNameParent = props.className ? props.className : '';

  const buttonClose = () => (
    <button
      type="button"
      className={`lp__modal-close-button`}
      onClick={() => setOpenModal(false)}
      aria-label="Close"
    >
      <span aria-hidden="true">×</span>
    </button>
  )

  return (
    <>
      <div className={`lp__modal ${classNameParent} ${classIsShow}`}>
        <CSSTransition
          in={openModal}
          timeout={300}
          classNames="lp__modal-dialog"
        >
          <div className={`lp__modal-dialog ${classSize}`}>
            <div className={`lp__modal-content`}>
              {
                props.header && (
                  <div className={`lp__modal-header`}>
                    {buttonClose()}
                    {props.header}
                  </div>
                )
              }
              <div className={`lp__modal-body`}>
                {
                  !props.header && buttonClose()
                }
                {props.children}
              </div>
              {
                props.footer && (
                  <div className={`lp__modal-footer`}>
                    {props.footer}
                  </div>
                )
              }
            </div>
          </div>
        </CSSTransition>
      </div>
      <div className={`lp__modal-backdrop ${classIsShow}`}/>
    </>
  );
};
