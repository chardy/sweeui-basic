import React from 'react';
import inputModule from '../Input/Input.module.css';
import { classNames, classNameObject } from '../../utils/format';

export default function Label({ children, className }) {
  const classes = { ...classNameObject(className), [inputModule.Input]: true };

  return (
    <label className={classNames(classes)}>
      { children }
    </label>
  );
}
