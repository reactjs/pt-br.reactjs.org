/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

<<<<<<< HEAD
import * as React from 'react';

export const IconCopy = React.memo<JSX.IntrinsicElements['svg']>(
  function IconCopy({className}) {
    return (
      <svg
        className={className}
        width="1em"
        height="1em"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.40382 15.3671C5.03332 15.1901 4.70081 14.9381 4.42481 14.6286C4.34831 14.5431 4.23931 14.5001 4.12981 14.5206L3.66181 14.6081C3.33531 14.6691 3.02032 14.4361 2.96232 14.0876L1.30981 4.12512C1.28181 3.95662 1.31731 3.7861 1.40981 3.6456C1.50231 3.5051 1.64082 3.41162 1.79932 3.38162L3.22131 3.00012C3.37681 2.97062 3.48981 2.82761 3.48981 2.65961V1.9101C3.48981 1.8276 3.49381 1.74561 3.49931 1.66461C3.50931 1.53461 3.35181 1.57211 3.35181 1.57211L1.64381 2.0076C1.18481 2.0936 0.751316 2.32662 0.451316 2.70612C0.0808162 3.17362 -0.0686885 3.77259 0.0293115 4.36459L1.68231 14.3281C1.84531 15.3081 2.65031 16.0001 3.55631 16.0001C3.66531 16.0001 3.77631 15.9896 3.88731 15.9691L5.36632 15.6916C5.52332 15.6626 5.54982 15.4366 5.40382 15.3671ZM14.9331 4.55801H12.9116C12.1351 4.55801 11.5001 3.91502 11.5001 3.12952V1.06802C11.5001 0.480524 11.0196 0 10.4321 0H7.44161C6.36911 0 5.50011 0.879508 5.50011 1.96451V12.1665C5.50011 13.179 6.33412 14 7.36262 14H14.1371C15.1661 14 16.0001 13.179 16.0001 12.1665V5.625C16.0001 5.038 15.5201 4.55801 14.9331 4.55801Z"
          fill="currentColor"
        />{' '}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.5888 0.0914385C12.4493 0.00843847 12.5158 0.252449 12.5158 0.252449C12.5653 0.428449 12.5918 0.613451 12.5918 0.804451V2.90296C12.5918 3.17646 12.8158 3.40046 13.0903 3.40046H15.1718C15.3883 3.40046 15.5968 3.43495 15.7918 3.49845C15.7918 3.49845 15.9373 3.50844 15.9008 3.43494C15.8383 3.33744 15.7673 3.24494 15.6833 3.16044L12.8303 0.289467C12.7558 0.214467 12.6743 0.149438 12.5888 0.0914385Z"
          fill="currentColor"
        />
      </svg>
    );
  }
);

IconCopy.displayName = 'IconCopy';
=======
import {memo} from 'react';

export const IconCopy = memo<JSX.IntrinsicElements['svg']>(function IconCopy({
  className,
}) {
  return (
    <svg
      className={className}
      width="1em"
      height="1em"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.40382 15.3671C5.03332 15.1901 4.70081 14.9381 4.42481 14.6286C4.34831 14.5431 4.23931 14.5001 4.12981 14.5206L3.66181 14.6081C3.33531 14.6691 3.02032 14.4361 2.96232 14.0876L1.30981 4.12512C1.28181 3.95662 1.31731 3.7861 1.40981 3.6456C1.50231 3.5051 1.64082 3.41162 1.79932 3.38162L3.22131 3.00012C3.37681 2.97062 3.48981 2.82761 3.48981 2.65961V1.9101C3.48981 1.8276 3.49381 1.74561 3.49931 1.66461C3.50931 1.53461 3.35181 1.57211 3.35181 1.57211L1.64381 2.0076C1.18481 2.0936 0.751316 2.32662 0.451316 2.70612C0.0808162 3.17362 -0.0686885 3.77259 0.0293115 4.36459L1.68231 14.3281C1.84531 15.3081 2.65031 16.0001 3.55631 16.0001C3.66531 16.0001 3.77631 15.9896 3.88731 15.9691L5.36632 15.6916C5.52332 15.6626 5.54982 15.4366 5.40382 15.3671ZM14.9331 4.55801H12.9116C12.1351 4.55801 11.5001 3.91502 11.5001 3.12952V1.06802C11.5001 0.480524 11.0196 0 10.4321 0H7.44161C6.36911 0 5.50011 0.879508 5.50011 1.96451V12.1665C5.50011 13.179 6.33412 14 7.36262 14H14.1371C15.1661 14 16.0001 13.179 16.0001 12.1665V5.625C16.0001 5.038 15.5201 4.55801 14.9331 4.55801Z"
        fill="currentColor"
      />{' '}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5888 0.0914385C12.4493 0.00843847 12.5158 0.252449 12.5158 0.252449C12.5653 0.428449 12.5918 0.613451 12.5918 0.804451V2.90296C12.5918 3.17646 12.8158 3.40046 13.0903 3.40046H15.1718C15.3883 3.40046 15.5968 3.43495 15.7918 3.49845C15.7918 3.49845 15.9373 3.50844 15.9008 3.43494C15.8383 3.33744 15.7673 3.24494 15.6833 3.16044L12.8303 0.289467C12.7558 0.214467 12.6743 0.149438 12.5888 0.0914385Z"
        fill="currentColor"
      />
    </svg>
  );
});
>>>>>>> d483aebbac6d3c8f059b52abf21240bc91d0b96e
