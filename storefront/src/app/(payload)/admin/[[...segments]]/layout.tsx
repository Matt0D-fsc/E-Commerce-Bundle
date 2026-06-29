/* This file generates the Payload Admin Layout */
import config from '@payload-config'
import { RootLayout } from '@payloadcms/next/templates'
import { importMap } from '../importMap'
import '@payloadcms/next/css'
import React from 'react'

type Args = {
  children: React.ReactNode
}

const Layout = ({ children }: Args) => (
  <RootLayout config={config} importMap={importMap}>
    {children}
  </RootLayout>
)

export default Layout
