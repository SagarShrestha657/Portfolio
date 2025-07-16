import { sendEmail, EmailData } from '../../lib/email';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const emailData: EmailData = req.body;
    
    // Basic validation
    if (!emailData.name || !emailData.email || !emailData.subject || !emailData.message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const result = await sendEmail(emailData);
    
    if (result.success) {
      return res.status(200).json({ success: true, messageId: result.messageId });
    } else {
      return res.status(500).json({ success: false, error: result.error });
    }
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Internal server error' 
    });
  }
}