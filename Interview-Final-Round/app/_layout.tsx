import { tokenCache } from '@/utils/cache';
import { ClerkLoaded, ClerkProvider } from '@clerk/clerk-expo';
import { Slot, Stack } from "expo-router";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
  )
}

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <ClerkLoaded>
        <Stack
          screenOptions={{
            headerShown: false
          }}
        />
      </ClerkLoaded>
    </ClerkProvider>
  )
}