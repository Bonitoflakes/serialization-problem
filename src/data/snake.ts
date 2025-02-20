export const snakeData = {
  order_system: {
    version: "2.5.1",
    last_updated: "2025-02-20T14:30:00Z",
    orders: [
      {
        order_id: "ORD-2025-0001",
        customer: {
          id: "CUST-789",
          profile: {
            first_name: "Jane",
            last_name: "Smith",
            email: "jane.smith@email.com",
            preferences: {
              marketing: false,
              notifications: ["email", "sms"],
              language: "en-US",
            },
            shipping_addresses: [
              {
                is_default: true,
                type: "home",
                details: {
                  street: "123 Main St",
                  unit: "Apt 4B",
                  city: "Boston",
                  state: "MA",
                  zip_code: "02108",
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
            product_id: "PROD-567",
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
              duration_months: 24,
              coverage: [
                "manufacturing defects",
                "battery replacement",
                "accidental damage",
              ],
            },
          },
        ],
        payment: {
          transaction_id: "TXN-123456",
          method: {
            type: "credit_card",
            last_four: "4242",
            expiry_month: 12,
            expiry_year: 2026,
            billing_address: {
              same_as_shipping: true,
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
          estimated_delivery: "2025-02-23T17:00:00Z",
          tracking: {
            carrier: "FedEx",
            method: "2-day",
            number: null,
            events: [],
            location: {
              user_points: {
                current_lat: 12.21,
                current_long: 231,
                test_name_big_words_superID: {
                  hello_hawai: {
                    five_levels_deep: {
                      oh_my_god_6: true,
                    },
                  },
                },
              },
            },
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
          device_info: {
            platform: "iOS",
            version: "17.3.1",
            device_id: "iPhone13,4",
          },
          session_id: "SESSION-987654",
          tags: ["high-value", "premium-customer"],
        },
      },
    ],
    analytics: {
      total_orders: 1,
      average_order_value: 599.98,
      top_categories: [
        {
          name: "Electronics",
          percentage: 100,
        },
      ],
    },
  },
};
