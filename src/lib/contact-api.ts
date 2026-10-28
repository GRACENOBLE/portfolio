/**
 * The contact API (POST /api/contact) and its public description: the request
 * schema, the OpenAPI spec at /openapi.json, the docs at /api.md and the
 * RFC 9727 catalog at /.well-known/api-catalog. The spec's request body is
 * generated from the same zod schema the route validates with, so the two
 * can't drift.
 */

import { z } from "zod";
import { abs, SITE } from "./site";

export const contactSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.email(),
  message: z.string().min(10).max(500),
});

export const RATE_LIMIT = {
  windowMs: 10 * 60 * 1000,
  perSender: 3,
  perInstance: 20,
};

export const CONTACT_API = abs("/api/contact");
export const OPENAPI_URL = abs("/openapi.json");
export const API_DOCS_URL = abs("/api.md");

const errorBody = {
  type: "object",
  properties: { error: { type: "string" } },
  required: ["error"],
};

export function openApiSpec() {
  const { $schema: _, ...request } = z.toJSONSchema(contactSchema, {
    io: "input",
  });
  return {
    openapi: "3.1.0",
    info: {
      title: `${SITE.name} contact API`,
      version: "1.0.0",
      description: `Send a message to ${SITE.name}. It arrives by email, and replies go to the address you give.`,
    },
    externalDocs: { url: API_DOCS_URL },
    servers: [{ url: SITE.url }],
    paths: {
      "/api/contact": {
        post: {
          operationId: "sendMessage",
          summary: `Send a message to ${SITE.name}`,
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/ContactMessage" },
              },
            },
          },
          responses: {
            "200": {
              description: "The message was delivered.",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" },
                      data: {
                        type: "object",
                        properties: { id: { type: "string" } },
                      },
                    },
                  },
                },
              },
            },
            "400": {
              description: "The body failed validation.",
              content: {
                "application/json": {
                  schema: {
                    ...errorBody,
                    properties: {
                      ...errorBody.properties,
                      details: { type: "array", items: { type: "object" } },
                    },
                  },
                },
              },
            },
            "429": {
              description: `Too many messages. At most ${RATE_LIMIT.perSender} per ${RATE_LIMIT.windowMs / 60000} minutes from one sender.`,
              headers: {
                "Retry-After": {
                  description: "Seconds to wait before trying again.",
                  schema: { type: "integer" },
                },
              },
              content: { "application/json": { schema: errorBody } },
            },
            "500": {
              description: "The message could not be sent.",
              content: { "application/json": { schema: errorBody } },
            },
          },
        },
      },
    },
    components: { schemas: { ContactMessage: request } },
  };
}

export function apiDocs(): string {
  const minutes = RATE_LIMIT.windowMs / 60000;
  return `# ${SITE.name} contact API

Send a message to ${SITE.name}. It arrives by email, and replies go to the address you give.

- Endpoint: \`POST ${CONTACT_API}\`
- OpenAPI spec: ${OPENAPI_URL}

## Request

JSON body:

| Field | Type | Rules |
| --- | --- | --- |
| \`name\` | string | 2 to 50 characters |
| \`email\` | string | A valid email address. Replies go here. |
| \`message\` | string | 10 to 500 characters |

\`\`\`sh
curl -X POST ${CONTACT_API} \\
  -H "Content-Type: application/json" \\
  -d '{"name": "Ada", "email": "ada@example.com", "message": "Hello Grace, I would like to talk about..."}'
\`\`\`

## Responses

- \`200\`: delivered. \`{"message": "Email sent successfully", "data": {"id": "..."}}\`
- \`400\`: the body failed validation. \`details\` lists each problem.
- \`429\`: too many messages. At most ${RATE_LIMIT.perSender} per ${minutes} minutes from one sender; wait for the \`Retry-After\` seconds.
- \`500\`: the message could not be sent.

## Use

Send a message only when a person has asked you to contact ${SITE.name} on their behalf, and use their real email address. No copy is emailed back to the sender.
`;
}
