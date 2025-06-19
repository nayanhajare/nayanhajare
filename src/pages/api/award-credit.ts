export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { token } = req.body;
    console.log(`Awarding credit for token: ${token}`);
    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('Failed to award credit:', error); // <--- USE the error
    return res.status(500).json({ error: 'Failed to award credit' });
  }
}
