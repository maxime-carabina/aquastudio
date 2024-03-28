'use client';

import { ComponentPropsWithoutRef, ChangeEvent, cloneElement } from 'react';

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  error?: string | undefined;
  warning?: string | undefined;
  success?: string | undefined;
  disable?: boolean;
  icon?: JSX.Element;
  customClass?: string;
  onClickIcon?: () => void;
}

export function Input(props: InputProps) {
  const { icon } = props;

  return icon ? <IconInput {...props} /> : <RawInput {...props} />;
}

export function IconInput(props: InputProps) {
  const {
    error,
    warning,
    success,
    disable,
    icon,
    onClickIcon,
    customClass,
    ...rest
  } = props;

  const disabledClass = disable ? 'border-0' : '';
  const errorClass = error ? 'border-s-error' : '';
  const warningClass = warning ? 'border-s-warning' : '';
  const successClass = success ? 'border-s-success' : '';
  const messageClass =
    errorClass || warningClass || successClass || disabledClass;

  const clonedIcon = icon
    ? cloneElement(icon, {
        className: 'w-5 h-5 inline-block align-text-bottom text-neutral',
      })
    : null;

  function handleOnClick(e: ChangeEvent<unknown>) {
    e.preventDefault();

    onClickIcon?.();
  }

  return (
    <div className="flex-row">
      <div className="grid-cols-2">
        <div className="inline h-12">
          <input
            data-testid="password-input"
            className={`w-full default-input h-12 pl-3 pr-10 mb-1 ${messageClass} ${customClass}`}
            type="text"
            disabled={disable}
            {...rest}
          />
        </div>
        <div className="inline -ml-10">
          <button
            type="button"
            className="w-10 h-10 bg-transparent"
            data-testid="password-icon"
            onClick={handleOnClick}
          >
            {clonedIcon}
          </button>
        </div>
        <InputMessage error={error} warning={warning} success={success} />
      </div>
    </div>
  );
}

export function RawInput(props: InputProps) {
  const { error, warning, success, disable, customClass, ...rest } = props;

  const disabledClass = disable ? 'border-0' : '';
  const errorClass = error ? 'border-red-500' : '';
  const warningClass = warning ? 'border-orange-500' : '';
  const successClass = success ? 'border-green-500' : '';
  const messageClass =
    errorClass || warningClass || successClass || disabledClass;

  return (
    <div className="flex-row">
      <div className="grid-cols-2">
        <div className="inline h-12">
          <input
            data-testid="input-field"
            className={`w-full default-input h-[51px] lg:h-[71px] lg:pl-[23px] pl-3 py-1 lg:py-5 pr-10 mb-1 ${messageClass} ${customClass}`}
            type="text"
            disabled={disable}
            {...rest}
          />
          <InputMessage error={error} warning={warning} />
        </div>
      </div>
    </div>
  );
}

export function InputMessage(props: InputProps) {
  const { error, warning, success } = props;

  const errorClass = error ? 'aqua-h3 text-red-500' : '';
  const warningClass = warning ? 'aqua-h3 text-orange-500' : '';
  const successClass = success ? 'aqua-h3 text-green-500' : '';

  const messageClass = errorClass || warningClass || successClass;
  const hasMessage = error || warning || success;

  if (hasMessage) {
    return (
      <div data-testid="input-field-message" className={messageClass}>
        {error || warning || success}
      </div>
    );
  } else {
    return null;
  }
}
