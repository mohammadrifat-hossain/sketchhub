'use client'

import { ClerkProvider, useAuth} from '@clerk/nextjs'
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import {
  AuthLoading,
  Authenticated,
  ConvexReactClient
} from 'convex/react'
import Loading from '@/components/auth/Loading'

interface ConvexClientProps {
  children: React.ReactNode
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({children}: ConvexClientProps) =>{
  return(
    <ClerkProvider>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <Authenticated>
          {children}
        </Authenticated>
        <AuthLoading>
          <Loading />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}