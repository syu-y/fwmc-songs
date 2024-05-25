import prisma from '$lib/server/prisma';
import type { Song } from '@/types/Youtube';
import type { PageServerLoad } from './$types';

export const load = (async () => {
  const songs: Song[] = await prisma.song.findMany({
    include: { stream: true },
  });

  return { songs };
}) satisfies PageServerLoad;
