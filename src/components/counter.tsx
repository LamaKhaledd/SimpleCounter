"use client";
import { useEffect, useState } from 'react';
import { Button, Container, Text, Title, Card, Image } from '@mantine/core';
import styles from './counter.module.css'; // Import CSS module for styles

export default function Counter() {
  const [initialLoadCount, setInitialLoadCount] = useState<number>(0);
  const [buttonClickCount, setButtonClickCount] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setInitialLoadCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    setButtonClickCount((prevCount) => prevCount + 1);
  };

  return (
    <Container className={styles.wrapper}>
      <Card shadow="xl" padding="lg" radius="md" className={styles.card}>   
        <Image src="/counter.png" alt="Counter"  className={styles.logo}></Image>
        <Title order={2} className={styles.title}>
            Counter Dashboard
        </Title>
        <div className={styles.divv}>
        <Text size="lg" color="dimmed" mt="md">
          Page Loaded Count: {initialLoadCount}
        </Text>
        <Text size="lg" color="dimmed" mt="sm">
          Button Click Count: {buttonClickCount}
        </Text>
        </div>
        <Button
          onClick={handleButtonClick}
          size="lg"
          radius="xl"
          className={styles.button}
          mt="lg"
        >
          Click Me
        </Button>
        
      </Card>
    </Container>
  );
}
