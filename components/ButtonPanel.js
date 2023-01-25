import { useState } from 'react';
import styles from '../styles/ButtonPanel.module.css'
// import MyFileOpenButton from './MyFileOpenButton'
import { Button } from '@mantine/core';


export default function ButtonPanel() {

  function openFile() {
    console.log("file open dialog")
  }

  return (
    <div className={styles.ButtonPanel}>
      <Button variant="default" onClick={openFile}>Open</Button>
      <Button variant="default">Save</Button>
      <Button variant="default">Close</Button>
    </div>
  )
}