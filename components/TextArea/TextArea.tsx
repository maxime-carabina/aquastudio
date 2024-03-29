'use client';

import { ComponentPropsWithoutRef } from 'react';

interface TextAreaProps extends ComponentPropsWithoutRef<'textarea'> {
  error?: string | undefined;
  warning?: string | undefined;
  success?: string | undefined;
  customClass?: string;
}

export function TextArea(props: TextAreaProps) {
  const { error, warning, success, customClass, ...rest } = props;

  const errorClass = error ? 'border-s-error' : '';
  const warningClass = warning ? 'border-s-warning' : '';
  const successClass = success ? 'border-s-success' : '';
  const messageClass = errorClass || warningClass || successClass;

  return (
    <>
      <textarea
        data-testid="text-area"
        data-type="text-area"
        rows={4}
        className={`w-full h-auto default-input font-GothamLight lg:text-[22px] resize-none
          px-3 py-2 lg:py-[25px] lg:px-[26px] placeholder-white/35 ${messageClass} ${customClass}`}
        {...rest}
      />
      <TextAreaMessage error={error} warning={warning} success={success} />
    </>
  );
}

export function TextAreaMessage(props: TextAreaProps) {
  const { error, warning, success } = props;

  const errorClass = error ? 'aqua-h3 text-s-error' : '';
  const warningClass = warning ? 'aqua-h3 text-s-warning' : '';
  const successClass = success ? 'aqua-h3 text-s-success' : '';

  const messageClass = errorClass || warningClass || successClass;
  const hasMessage = error || warning || success;

  if (hasMessage) {
    return (
      <div data-testid="text-area-message" className={messageClass}>
        {error || warning || success}
      </div>
    );
  } else {
    return null;
  }
}
