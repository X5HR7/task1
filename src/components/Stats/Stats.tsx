import React, { FC, useEffect, useState } from 'react';
import { getDataFromLocalStorage } from '../../utils/localStorage.service.ts';
import styles from './Stats.module.css';

interface IStats {
  success: number;
  failure: number;
}

const Stats: FC<IStats> = ({failure, success}) => {
  return (
    <div className={styles.stats}>
      <p className={`${styles.stats__item} ${styles.stats__item_success}`}>Success: {success}</p>
      <p className={`${styles.stats__item} ${styles.stats__item_fail}`}>Fail: {failure}</p>
    </div>
  );
};

export default Stats;
