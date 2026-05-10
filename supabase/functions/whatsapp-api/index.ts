import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { phoneNumber, message } = await req.json();

    // Get WhatsApp API credentials from environment
    const WHATSAPP_API_TOKEN = Deno.env.get('WHATSAPP_API_TOKEN');
    const WHATSAPP_PHONE_ID = Deno.env.get('WHATSAPP_PHONE_ID');
    const WHATSAPP_BUSINESS_ACCOUNT_ID = Deno.env.get('WHATSAPP_BUSINESS_ACCOUNT_ID');

    if (!WHATSAPP_API_TOKEN || !WHATSAPP_PHONE_ID) {
      throw new Error('WhatsApp API credentials not configured');
    }

    // WhatsApp Cloud API endpoint
    const whatsappApiUrl = `https://graph.facebook.com/v18.0/${WHATSAPP_PHONE_ID}/messages`;

    // Send message via WhatsApp Cloud API
    const whatsappResponse = await fetch(whatsappApiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${WHATSAPP_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: phoneNumber,
        type: 'text',
        text: {
          preview_url: false,
          body: `Thanks for trying Velora AI! You asked: "${message}"\n\n🤖 AI Response: Great question! This is a demo of how our AI responds instantly to customer inquiries. In a real setup, I would provide a detailed answer based on your business knowledge base.\n\nKey benefits:\n✓ 24/7 availability\n✓ Instant responses\n✓ Multi-language support\n✓ Learn from conversations\n\nReply with any other question to continue the demo!`
        }
      })
    });

    if (!whatsappResponse.ok) {
      const error = await whatsappResponse.text();
      console.error('WhatsApp API error:', error);
      throw new Error(`WhatsApp API error: ${error}`);
    }

    const result = await whatsappResponse.json();

    return new Response(
      JSON.stringify({ success: true, messageId: result.messages[0].id }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
