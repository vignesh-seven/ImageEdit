import { useState } from 'react';
import styles from '../styles/ButtonPanel.module.css'

export default function ButtonPanel() {
  return (
    <div className={styles.ButtonPanel}>
      <button>A</button>
      <button>B</button>
      <button>C</button>
    </div>
  )
}