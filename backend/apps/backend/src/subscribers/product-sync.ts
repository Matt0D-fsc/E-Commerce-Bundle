import { type SubscriberConfig, type SubscriberArgs } from "@medusajs/medusa"

export default async function productSyncHandler({
  data,
  eventName,
  container,
}: SubscriberArgs<any>) {
  const logger = container.resolve("logger")
  const productModuleService = container.resolve("productModuleService")

  try {
    // Fetch the full product to get its title
    const product = await productModuleService.retrieveProduct(data.id)

    const payloadUrl = process.env.PAYLOAD_FRONTEND_URL || "http://localhost:3000"
    const secret = process.env.PAYLOAD_SECRET || "payload-secret-maison-2026"

    const response = await fetch(`${payloadUrl}/api/sync/product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${secret}`,
      },
      body: JSON.stringify({
        data: {
          id: product.id,
          title: product.title,
        },
      }),
    })

    if (!response.ok) {
      throw new Error(`Payload returned ${response.status}: ${await response.text()}`)
    }

    logger.info(`Successfully synced product ${product.id} to Payload CMS`)
  } catch (error) {
    logger.error(`Failed to sync product ${data.id} to Payload CMS: ${error.message}`)
  }
}

export const config: SubscriberConfig = {
  event: [
    "product.created",
    "product.updated",
  ],
}
