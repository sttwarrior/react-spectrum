/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import {action} from '@storybook/addon-actions';
import {ErrorBoundary} from '@react-spectrum/story-utils';
import {RangeSlider} from '../';
import React from 'react';
import {SpectrumRangeSliderProps} from '@react-types/slider';

let message = 'Your browser may not support this set of format options.';

export default {
  title: 'Slider/RangeSlider',

  decorators: [
    (story) => <ErrorBoundary message={message}>{story()}</ErrorBoundary>
  ]
};

export const Default = () => render({'aria-label': 'Label'});
export const Label = () => render({label: 'Label'});

Label.story = {
  name: 'label'
};

export const IsDisabled = () =>
  render({
    label: 'Label',
    defaultValue: {start: 30, end: 70},
    isDisabled: true
  });

IsDisabled.story = {
  name: 'isDisabled'
};

export const CustomWidth = () => render({label: 'Label', width: '300px'});

CustomWidth.story = {
  name: 'custom width'
};

export const LabelOverflow = () =>
  render({
    label: 'This is a rather long label for this narrow slider element.',
    maxValue: 1000,
    width: '300px'
  });

LabelOverflow.story = {
  name: 'label overflow'
};

export const ShowValueLabelFalse = () =>
  render({label: 'Label', showValueLabel: false});

ShowValueLabelFalse.story = {
  name: 'showValueLabel: false'
};

export const FormatOptionsPercent = () =>
  render({
    label: 'Label',
    minValue: 0,
    maxValue: 1,
    step: 0.01,
    formatOptions: {style: 'percent'}
  });

FormatOptionsPercent.story = {
  name: 'formatOptions percent'
};

export const FormatOptionsCentimeter = () => // @ts-ignore TODO why is "unit" even missing? How well is it supported?
  render({
    label: 'Label',
    maxValue: 1000,
    formatOptions: {style: 'unit', unit: 'centimeter'}
  });

FormatOptionsCentimeter.story = {
  name: 'formatOptions centimeter'
};

export const CustomValueLabel = () =>
  render({
    label: 'Label',
    getValueLabel: (value) => `${value.start} <-> ${value.end}`
  });

CustomValueLabel.story = {
  name: 'custom valueLabel'
};

export const CustomValueLabelWithLabelOverflow = () =>
  render({
    label: 'This is a rather long label for this narrow slider element.',
    getValueLabel: (value) => `${value.start} <-> ${value.end}`
  });

CustomValueLabelWithLabelOverflow.story = {
  name: 'custom valueLabel with label overflow'
};

export const LabelPositionSide = () =>
  render({label: 'Label', labelPosition: 'side'});

LabelPositionSide.story = {
  name: 'labelPosition: side'
};

export const MinMax = () =>
  render({label: 'Label', minValue: 30, maxValue: 70});

MinMax.story = {
  name: 'min/max'
};

function render(props: SpectrumRangeSliderProps = {}) {
  if (props.onChange == null) {
    props.onChange = (v) => {
      action('change')(v.start, v.end);
    };
  }
  return <RangeSlider {...props} />;
}
