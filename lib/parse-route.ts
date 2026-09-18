export type ParsedSlug =
  | { success: true; name: string; id: string }
  | { success: false; error: string };

export type SlugType = 'i' | 'v' | 'd' | 'p';

/**
 * Parse slug theo loại (`i`, `v`, `d`, `p`)
 * Ví dụ:
 *   routeParams('san-pham-i123', 'i') → { success: true, name: 'san-pham', id: '123' }
 *   routeParams('tin-tuc-v456', 'v') → { success: true, name: 'tin-tuc', id: '456' }
 */
export function routeParams(slug: string, type: SlugType): ParsedSlug {
  const patterns: Record<SlugType, RegExp> = {
		i: /^(.+)-i(\d+)$/,
		v: /^(.+)-v(\d+)$/,
		d: /^(.+)-d(\d+)$/,
		p: /^(.+)-p(\d+)$/,
  };

  const regex = patterns[type];
  const match = slug.match(regex);
  if (!match) {
		return { success: false, error: 'Invalid slug format' };
  }

  const [, name, id] = match;
  if (!name || !id) {
		return { success: false, error: 'Missing name or id' };
  }
  return { success: true, name, id };
};

/**
 * getUrl('Sản Phẩm Mới', 'i', 123);
 * @param name
 * @param type
 * @param id
 * @returns string
*/
export function getUrl(
  name: string,
  type: SlugType,
  id: string | number
): string {

  /* Chuẩn hóa name: loại bỏ ký tự không hợp lệ, thay khoảng trắng bằng dấu gạch ngang */
  const cleanName = name
	.trim()
	.toLowerCase()
	.normalize('NFD')
	.replace(/[\u0300-\u036f]/g, '')
	.replace(/[^a-z0-9\s-]/g, '')
	.replace(/\s+/g, '-')
	.replace(/-+/g, '-')
	.replace(/^-|-$/g, '');

  if (!cleanName) {
		throw new Error('Name cannot be empty or invalid after cleaning');
  }

  const idStr = String(id).trim();
  if (!/^\d+$/.test(idStr)) {
		throw new Error('ID must be a valid number');
  }
  return `${cleanName}-${type}${idStr}`;
};

/**
 * getProductUrl('category', 'Sản Phẩm Mới 2025!', 123);
 * @param name
 * @param type
 * @param id
 * @returns string
*/
export function getProductUrl(
  cate: string,
  name: string,
  id: string | number
): string {
	const slug = getUrl(name, 'i', id);
	return `/${cate}/-${slug}`;
};

export function getRootDomain (input: string | URL): string {
  let hostname: string;
  try {
    if (typeof input === 'string') {
      const url = input.includes('://') ? input : 'https://' + input;
      hostname = new URL(url).hostname;
    } else {
      hostname = input.hostname;
    }
  } catch {
    hostname = input.toString().replace(/^.*\/\//, '').replace(/[:/].*$/, '');
  }
  return hostname
};
