# WhatsApp Business API Setup Guide

## Prerequisites

1. **Meta Business Account**: Create one at https://business.facebook.com
2. **WhatsApp Business App**: Set up in Meta for Developers (https://developers.facebook.com)
3. **Supabase Project**: Connected to this Make project

## Step 1: Get WhatsApp API Credentials

1. Go to https://developers.facebook.com
2. Create a new app or select existing app
3. Add "WhatsApp" product to your app
4. Navigate to WhatsApp > API Setup
5. Note down these values:
   - **Phone Number ID** (from WhatsApp > API Setup)
   - **WhatsApp Business Account ID**
   - **Temporary Access Token** (or create a permanent one)

## Step 2: Add Credentials to Supabase

You need to add these environment variables to your Supabase Edge Function:

1. Open your Supabase project dashboard
2. Go to Edge Functions settings
3. Add the following secrets:

```
WHATSAPP_API_TOKEN=your_access_token_here
WHATSAPP_PHONE_ID=your_phone_number_id_here
WHATSAPP_BUSINESS_ACCOUNT_ID=your_business_account_id_here
```

## Step 3: Deploy the Edge Function

1. Install Supabase CLI: `npm install -g supabase`
2. Login: `supabase login`
3. Link project: `supabase link --project-ref your-project-ref`
4. Deploy function: `supabase functions deploy whatsapp-api`

## Step 4: Update API Endpoint in Code

In `src/app/components/WhatsAppDemo.tsx`, update the fetch URL to:

```typescript
const response = await fetch('https://YOUR_PROJECT_REF.supabase.co/functions/v1/whatsapp-api', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${YOUR_ANON_KEY}`
  },
  body: JSON.stringify({
    phoneNumber: phoneNumber.replace(/\D/g, ''),
    message
  })
});
```

## Step 5: Test the Integration

1. Enter a WhatsApp number (with country code) in the demo form
2. Type a test message
3. Click "Send Live Demo"
4. Check your WhatsApp for the AI response

## Webhook Setup (For Two-Way Conversations)

To receive messages from users:

1. In Meta for Developers, go to WhatsApp > Configuration
2. Set webhook URL to: `https://YOUR_PROJECT_REF.supabase.co/functions/v1/whatsapp-webhook`
3. Set verify token (you choose this)
4. Subscribe to `messages` webhook field
5. Create another edge function to handle incoming messages

## Pricing

- WhatsApp Cloud API: Free for first 1,000 conversations/month
- After that: ~$0.005 - $0.09 per conversation (varies by country)
- See pricing: https://developers.facebook.com/docs/whatsapp/pricing

## Support

- WhatsApp API Docs: https://developers.facebook.com/docs/whatsapp
- Supabase Edge Functions: https://supabase.com/docs/guides/functions
- Need help? Contact Velora AI support

## Security Notes

⚠️ **Important**: 
- Never commit API tokens to version control
- Use Supabase environment variables for all secrets
- Rotate tokens regularly
- Enable rate limiting on your edge function
- Validate phone numbers before sending messages
