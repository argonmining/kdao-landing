import React from 'react';
import styles from './App.module.css';
import Button from './components/Button';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <div style={{
        backgroundColor: '#20243f',
        padding: '40px',
        borderRadius: '12px',
        textAlign: 'center',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        width: '300px',
      }}>
        <h1 style={{ color: '#b3ffe3', fontSize: '32px', marginBottom: '8px' }}>Kaspa DAO</h1>
        <p style={{ color: '#cccccc', fontSize: '16px', marginBottom: '24px' }}>Coming Soon</p>
        
        <Button text="X (Twitter)" link="https://x.com/KaspaDAO" icon="twitter" />
        <Button text="Mint on KSPR" link="https://t.me/kspr_home_bot?start=kaspadao" icon="star" />
        <Button text="Whitepaper" link="https://drive.google.com/file/d/1_YD1qVKYI1Q36YdjbtjphTv6qPDo4d-M/view?usp=sharing" icon="file" />
        <Button text="Telegram" link="https://t.me/KASPADAO_KAS" icon="telegram" />
        <Button text="Discord" link="https://discord.gg/mBqQDxBcJY" icon="discord" />
      </div>
    </div>
  );
}

export default App;
