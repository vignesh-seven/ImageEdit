import { useState } from 'react';
import styles from '../styles/ButtonPanel.module.css'

export default function ButtonPanel() {
  return (
    <div className={styles.ButtonPanel}>
      <button>Open</button>
      <button>Save</button>
      <button>Close</button>
    </div>
  )
}