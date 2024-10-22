"use client";
import Counter from '@/components/counter';
import { MantineProvider } from '@mantine/core';

export default function RootLayout() {
  return (
    <MantineProvider
    >
      <Counter />
    </MantineProvider>
  );
}
