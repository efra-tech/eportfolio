import React from 'react';
import resume from './resume.pdf';
import { Document, Page } from 'react-pdf';

export function ResumeBtn(props){
  return(
    <div>
      <Document file={resume} >
        <Page  />
      </Document>
    </div>
  );
}