/* This file generates the Payload Admin UI */
import config from '@payload-config'
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import { importMap } from '../importMap'
import '@payloadcms/next/css'

type Args = {
  params: Promise<{
    segments: string[]
  }>
  searchParams: Promise<{
    [key: string]: string | string[]
  }>
}

export const generateMetadata = ({ params, searchParams }: Args) =>
  generatePageMetadata({ config, params, searchParams })

const Page = async ({ params, searchParams }: Args) => (
  <RootPage config={config} importMap={importMap} params={params} searchParams={searchParams} />
)

export default Page
