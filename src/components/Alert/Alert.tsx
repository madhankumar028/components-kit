import React, { useEffect, useState } from 'react';
import './Alert.scss';

type alertPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
type alertType = 'error' | 'success' | 'warning' | 'info';

interface IAlert {
  alertList: IAlertItem[];
  position: alertPosition;
  autoClose: boolean;
  autoCloseTime: number;
  alertClose(id: number): void;
}

interface IAlertItem {
  id: number;
  title: string;
  description?: string;
  type: alertType;
}

export const Alert = ({
  alertList,
  position,
  autoClose,
  autoCloseTime,
  alertClose,
}: IAlert) => {
  const [list, setList] = useState(alertList);

  useEffect(() => {
    setList([...alertList]);
  }, [alertList]);

  const deleteAlert = (alertId: number, alertItemIndex: number) => {
    list.splice(alertItemIndex, 1);
    setList([...list]);
    alertClose(alertId);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoClose && alertList.length && list.length) {
        deleteAlert(alertList[0].id, 0);
      }
    }, autoCloseTime);

    return () => {
      clearInterval(interval);
    };
  }, [alertList, autoClose, autoCloseTime, list]);

  return (
    <>
      <div className={`lp__notification--container ${position}`}>
        {list.map((alert, index) => (
          <div
            key={alert.id}
            className={`lp__notification ${position} ${alert.type}`}
          >
            <div className={`lp_alert--${alert.type}`}></div>
            <div className="lp__notification--alert">
              <button
                type="button"
                onClick={() => deleteAlert(alert.id, index)}
              >
                X
              </button>
              {alert.title && (
                <p className="lp__notification--title">{alert.title}</p>
              )}
              <p className={`lp__notification--message ${alert.type}`}>
                {alert.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
