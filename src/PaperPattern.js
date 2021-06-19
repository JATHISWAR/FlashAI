import React from 'react';
import './PaperPattern.css';

function PaperPattern() {
    return (
        <div className="paper_pattern">
        <img src="https://www.pngitem.com/pimgs/m/242-2423681_exam-paper-clipart-www-imgkid-com-the-image.png" classname="myimg"></img>
        <div className="roundedbox">
        <h1 className="title">Paper Pattern</h1>
        <table class="table">
            <tbody >
                <tr><th><center>GRE Exam Section</center></th>
                <th><center>Number of Questions</center></th>
                <th><center>Duration</center></th></tr>
                <tr><td>Analytical Writing</td>
                <td>Analyse an Issue. Analyse an Argument.</td>
                <td>30 minutes for each task</td></tr>
                <tr><td>Verbal reasoning</td>
                <td>2 sections of 20 questions each</td>
                <td>30 minutes for each section</td></tr>
                <tr><td>Quantitative reasoning</td>
                <td>2 sections of 20 questions each</td>
                <td>35 minutes for each section</td></tr>
                <tr><td>Unscored section</td>
                <td>Questions vary</td>
                <td>Time varies</td></tr>
                <tr><td>Research section (Excl. for Ph. D &amp; Post Docs.)</td>
                <td>Questions vary</td>
                <td>Time varies</td></tr>
                </tbody>
                </table>
        </div>
        </div>

    )
}

export default PaperPattern
