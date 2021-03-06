import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
  text: string;
  className: string;
};

const BaseText: FC<Props> = (props) => {
  return <p className={props.className}>{props.text}</p>;
};

export default BaseText;
