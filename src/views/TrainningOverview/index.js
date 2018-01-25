import React from 'react';
import Showdown from 'showdown';

import { DetailLayout } from '../../component/Layout/index';
import { Paper } from '../../component/paper/index';

export const TrainingOverview = () => {

    const st = '#hello, markdown!'
    const converter = new Showdown.Converter(),
        html = converter.makeHtml(st);
    return (
        <DetailLayout
            Side={
                <ol>
                    <li><a href="#405">点击跳转</a></li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                </ol>
            }
            Contents={
                <Paper>
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: html }} ></div>
                        <div dangerouslySetInnerHTML={{ __html: html }} ></div>
                        <div dangerouslySetInnerHTML={{ __html: html }} ></div>
                        <div dangerouslySetInnerHTML={{ __html: html }} ></div>
                        <div dangerouslySetInnerHTML={{ __html: html }} ></div>
                        <div dangerouslySetInnerHTML={{ __html: html }} ></div>
                        <div dangerouslySetInnerHTML={{ __html: html }} ></div>
                        <div dangerouslySetInnerHTML={{ __html: html }} ></div>
                        <div dangerouslySetInnerHTML={{ __html: html }} ></div>
                        <div dangerouslySetInnerHTML={{ __html: html }} ></div>
                        <div dangerouslySetInnerHTML={{ __html: html }} ></div>
                        <div dangerouslySetInnerHTML={{ __html: html }} ></div>
                        <div dangerouslySetInnerHTML={{ __html: html }} ></div>
                        <div dangerouslySetInnerHTML={{ __html: html }} ></div>
                        <div dangerouslySetInnerHTML={{ __html: html }} ></div>
                        <div dangerouslySetInnerHTML={{ __html: html }} ></div>
                        <div dangerouslySetInnerHTML={{ __html: html }} ></div>
                        <div dangerouslySetInnerHTML={{ __html: html }} ></div>

                        <div id='405'>asdasdasdasd</div>
                    </div>
                </Paper>
            }
        />
    )
}