import config from '@/lib/config';
import ImageKit from 'imagekit';
import { NextResponse } from 'next/server';

const {
  env: {
    imagekit: { publicKey, privateKey, urlEndpoint },
  },
} = config;

const imagekit = new ImageKit({
  publicKey: config.env.imagekit.publicKey,
  privateKey: config.env.imagekit.privateKey,
  urlEndpoint: config.env.imagekit.urlEndpoint,
});

// export async function GET() {
//     return NextResponse.json(imagekit.getAuthenticationParameters());
// }

export async function GET() {
  const authParams = imagekit.getAuthenticationParameters();

  const res = NextResponse.json(authParams);

  // ✅ Tambahkan header CORS
  res.headers.set('Access-Control-Allow-Origin', `${config.env.prodApiEndpoint}`); // Ganti '*' ke origin frontend untuk keamanan
  res.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type');

  return res;
}

// ✅ Tangani preflight request (OPTIONS)
export async function OPTIONS() {
  const res = new NextResponse(null, { status: 200 });
  res.headers.set('Access-Control-Allow-Origin', `${config.env.prodApiEndpoint}`);
  res.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  return res;
}
