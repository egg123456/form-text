/*
 * @Author: wb-yangergang
 * @Date: 2021-07-19 11:49:07
 * @LastEditors: wb-yangergang
 * @LastEditTime: 2021-07-19 11:50:53
 * @Description: file content
 */
import React, { Component } from 'react';

/**
 * 用于 Form 表单内部受控展示文本
 */
export default class FormText extends Component {
  render() {
    const { value, formatMethod = a => a, defaultText = '-', ...resetProps } = this.props;
    return <span {...resetProps}>{formatMethod(value) || defaultText}</span>;
  }
}
