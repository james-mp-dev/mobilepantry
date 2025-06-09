// apps/client-app/app/_layout.tsx
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { Stack } from "expo-router";
import { getToken, saveToken } from "@mobilepantry/utils/tokenCache";

// Retrieve your publishable key from the environment variables
const clerkPublishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!clerkPublishableKey) {
  // This is a critical error, so we throw an exception
  throw new Error(
    "Missing Clerk Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env file."
  );
}

function RootLayoutNav() {
  return (
    <>
      {/* The SignedIn component will render its children when the user is authenticated. */}
      <SignedIn>
        <Stack>
          <Stack.Screen name="index" options={{ title: "Home" }} />
          {/* You can add other screens that should only be accessible when signed in here */}
        </Stack>
      </SignedIn>

      {/* The SignedOut component will render its children when the user is not authenticated. */}
      <SignedOut>
        <Stack>
          {/* We will create these screens in the next step.
              The headerShown: false option hides the navigation bar for these auth screens. */}
          <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
          <Stack.Screen
            name="(auth)/sign-up"
            options={{ headerShown: false }}
          />
        </Stack>
      </SignedOut>
    </>
  );
}

export default function RootLayout() {
  // Define the token cache strategy using our utility functions
  const tokenCache = {
    getToken,
    saveToken,
  };

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={clerkPublishableKey}>
      <RootLayoutNav />
    </ClerkProvider>
  );
}
