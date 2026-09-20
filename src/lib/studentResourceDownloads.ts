import { supabase } from './supabaseClient';

const PRIVATE_RESOURCE_BUCKET = 'student-resources';

export async function getStudentResourceDownload(
  storagePath: string,
  downloadName: string,
): Promise<string> {
  const { data, error } = await supabase.storage
    .from(PRIVATE_RESOURCE_BUCKET)
    .createSignedUrl(storagePath, 90, { download: downloadName });

  if (error || !data?.signedUrl) {
    throw new Error(error?.message ?? 'resource_download_failed');
  }

  return data.signedUrl;
}
