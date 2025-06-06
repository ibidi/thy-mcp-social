import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/db';
import Post from '../../../models/Post';

export async function GET() {
  try {
    await dbConnect();
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .populate('author', 'name profileImage tier')
      .limit(10);

    return NextResponse.json(posts);
  } catch (error) {
    console.error('Gönderiler alınırken hata:', error);
    return NextResponse.json(
      { error: 'Gönderiler alınamadı' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await dbConnect();

    const post = await Post.create({
      ...body,
      createdAt: new Date(),
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error('Gönderi oluşturulurken hata:', error);
    return NextResponse.json(
      { error: 'Gönderi oluşturulamadı' },
      { status: 500 }
    );
  }
} 