import { z } from 'zod';

const coordinatesSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
});

const addressDetailsSchema = z.object({
  street: z.string(),
  unit: z.string(),
  city: z.string(),
  state: z.string(),
  zipCode: z.string(),
  coordinates: coordinatesSchema,
});

const shippingAddressSchema = z.object({
  isDefault: z.boolean(),
  type: z.string(),
  details: addressDetailsSchema,
});

const customerPreferencesSchema = z.object({
  marketing: z.boolean(),
  notifications: z.array(z.string()),
  language: z.string(),
});

const customerProfileSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  preferences: customerPreferencesSchema,
  shippingAddresses: z.array(shippingAddressSchema),
});

const customerSchema = z.object({
  id: z.string(),
  profile: customerProfileSchema,
});

const priceSchema = z.object({
  amount: z.number(),
  currency: z.string(),
});

const dimensionsSchema = z.object({
  width: z.number(),
  height: z.number(),
  depth: z.number(),
  unit: z.string(),
});

const warrantySchema = z.object({
  type: z.string(),
  durationMonths: z.number(),
  coverage: z.array(z.string()),
});

const productSpecificationsSchema = z.object({
  color: z.string(),
  features: z.array(z.string()),
  dimensions: dimensionsSchema,
});

const orderItemSchema = z.object({
  productId: z.string(),
  name: z.string(),
  quantity: z.number(),
  price: priceSchema,
  specifications: productSpecificationsSchema,
  warranty: warrantySchema,
});

const paymentMethodSchema = z.object({
  type: z.string(),
  lastFour: z.string(),
  expiryMonth: z.number(),
  expiryYear: z.number(),
  billingAddress: z.object({
    sameAsShipping: z.boolean(),
  }),
});

const paymentStatusSchema = z.object({
  code: z.string(),
  timestamp: z.string(),
  verification: z.object({
    avs: z.string(),
    cvv: z.string(),
  }),
});

const paymentSchema = z.object({
  transactionId: z.string(),
  method: paymentMethodSchema,
  status: paymentStatusSchema,
});

const warehouseSchema = z.object({
  id: z.string(),
  location: z.string(),
  inventory: z.object({
    status: z.string(),
    shelf: z.string(),
  }),
});

const trackingSchema = z.object({
  carrier: z.string(),
  method: z.string(),
  number: z.null(),
  events: z.array(z.unknown()),
});

const fulfillmentSchema = z.object({
  status: z.string(),
  estimatedDelivery: z.string(),
  tracking: trackingSchema,
  warehouse: warehouseSchema,
});

const deviceInfoSchema = z.object({
  platform: z.string(),
  version: z.string(),
  deviceId: z.string(),
});

const metadataSchema = z.object({
  source: z.string(),
  deviceInfo: deviceInfoSchema,
  sessionId: z.string(),
  tags: z.array(z.string()),
});

const categorySchema = z.object({
  name: z.string(),
  percentage: z.number(),
});

const analyticsSchema = z.object({
  totalOrders: z.number(),
  averageOrderValue: z.number(),
  topCategories: z.array(categorySchema),
});

const orderSchema = z.object({
  orderId: z.string(),
  customer: customerSchema,
  items: z.array(orderItemSchema),
  payment: paymentSchema,
  fulfillment: fulfillmentSchema,
  metadata: metadataSchema,
});

// Main schema
const orderSystemSchema = z.object({
  orderSystem: z.object({
    version: z.string(),
    lastUpdated: z.string(),
    orders: z.array(orderSchema),
    analytics: analyticsSchema,
  }),
});

export type OrderSystem = z.infer<typeof orderSystemSchema>;

export default orderSystemSchema;
