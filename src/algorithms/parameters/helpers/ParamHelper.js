/* eslint-disable no-param-reassign */
import React from 'react';
import ParamMsg from './ParamMsg';

export const commaSeparatedNumberListValidCheck = (t) => {
  const regex = /^[0-9]+(,[0-9]+)*$/g;
  return t.match(regex);
};

export const singleNumberValidCheck = (t) => {
  const regex = /^\d+$/g;
  return t.match(regex);
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const genRandNumList = (num, min, max) => {
  const list = [];
  for (let x = 0; x < num; x += 1) {
    list.push(getRandomInt(min, max));
  }
  return list;
};

/**
 *
 * @param {string} type algorithm type
 */
export const successParamMsg = (type) => (
  <ParamMsg
    logWarning={false}
    logTag={`${type} success!`}
    logMsg={`Input for ${type} algorithm is valid.`}
  />
);

/**
 *
 * @param {string} type algorithm type
 * @param {string} exmaple optional provided
 * @param {string} reason optional provided, if not provide, use default value
 */
export const errorParamMsg = (
  type,
  exmaple,
  reason = `Input for ${type} algorithm is not valid.`,
) => (
  <ParamMsg
    logWarning
    logTag={`${type} failure!`}
    logMsg={`${reason}. ${exmaple || ''}`}
  />
);

export const makeColumnArray = (len) => {
  const arr = [];
  for (let i = 0; i < len; i += 1) {
    arr.push({
      Header: i,
      accessor: `col${i}`, // accessor is the "key" in the data,
    });
  }
  return arr;
};

export const makeData = (len) => {
  const arr = [];
  for (let i = 0; i < len; i += 1) {
    const data = {};
    for (let j = 0; j < len; j += 1) {
      data[`col${j}`] = `${getRandomInt(0, 9)}`;
    }
    arr.push(data);
  }
  return arr;
};
