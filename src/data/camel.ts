export const camelData = {
  orderSystem: {
    version: "2.5.1",
    lastUpdated: "2025-02-20T14:30:00Z",
    orders: [
      {
        orderId: "ORD-2025-0001",
        customer: {
          id: "CUST-789",
          profile: {
            firstName: "Jane",
            lastName: "Smith",
            email: "jane.smith@email.com",
            preferences: {
              marketing: false,
              notifications: ["email", "sms"],
              language: "en-US",
            },
            shippingAddresses: [
              {
                isDefault: true,
                type: "home",
                details: {
                  street: "123 Main St",
                  unit: "Apt 4B",
                  city: "Boston",
                  state: "MA",
                  zipCode: "02108",
                  coordinates: {
                    latitude: 42.3601,
                    longitude: -71.0589,
                  },
                },
              },
            ],
          },
        },
        items: [
          {
            productId: "PROD-567",
            name: "Premium Wireless Headphones",
            quantity: 2,
            price: {
              amount: 299.99,
              currency: "USD",
            },
            specifications: {
              color: "midnight black",
              features: ["noise-cancelling", "bluetooth 5.0", "40h battery life"],
              dimensions: {
                width: 18.5,
                height: 22.0,
                depth: 9.0,
                unit: "cm",
              },
            },
            warranty: {
              type: "extended",
              durationMonths: 24,
              coverage: [
                "manufacturing defects",
                "battery replacement",
                "accidental damage",
              ],
            },
          },
        ],
        payment: {
          transactionId: "TXN-123456",
          method: {
            type: "credit_card",
            lastFour: "4242",
            expiryMonth: 12,
            expiryYear: 2026,
            billingAddress: {
              sameAsShipping: true,
            },
          },
          status: {
            code: "COMPLETED",
            timestamp: "2025-02-20T14:25:30Z",
            verification: {
              avs: "Y",
              cvv: "M",
            },
          },
        },
        fulfillment: {
          status: "processing",
          estimatedDelivery: "2025-02-23T17:00:00Z",
          tracking: {
            carrier: "FedEx",
            method: "2-day",
            number: null,
            events: [],
          },
          warehouse: {
            id: "WH-005",
            location: "Boston-Central",
            inventory: {
              status: "reserved",
              shelf: "B-42-L3",
            },
          },
        },
        metadata: {
          source: "mobile_app",
          deviceInfo: {
            platform: "iOS",
            version: "17.3.1",
            deviceId: "iPhone13,4",
          },
          sessionId: "SESSION-987654",
          tags: ["high-value", "premium-customer"],
        },
      },
    ],
    analytics: {
      totalOrders: 1,
      averageOrderValue: 599.98,
      topCategories: [
        {
          name: "Electronics",
          percentage: 100,
        },
      ],
    },
  },
};
