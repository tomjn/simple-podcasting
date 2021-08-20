/**
 * WordPress dependencies
 */
import { visitAdminPage } from '@wordpress/e2e-test-utils';

export async function deleteAllTaxonomies() {
	await visitAdminPage('edit-tags.php', 'taxonomy=podcasting_podcasts&podcasts=true');
	await page.waitForSelector('.wp-list-table.tags');
	await expect(page).toClick('#cb-select-all-1');
	await expect(page).toSelect('#bulk-action-selector-top', 'Delete');
	await expect(page).toClick('#doaction');
	return page.waitForSelector('.wp-list-table.tags');
}
