import { TestBed } from '@angular/core/testing';
import { getUmdAccessibilityPath } from 'src/app/info/info-routing-paths';

import { MenuItemType } from '../menu-item-type.model';
import { PartialMenuSection } from '../menu-provider.model';
import { UmdAccessibilityMenuProvider } from './umd-accessibility.menu';

describe('UmdAccessibilityMenuProvider', () => {
  const expectedSections: PartialMenuSection[] = [
    {
      visible: true,
      model: {
        type: MenuItemType.LINK,
        text: `menu.section.umd-accessibility`,
        link: getUmdAccessibilityPath(),
      },
    },
  ];

  let provider: UmdAccessibilityMenuProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UmdAccessibilityMenuProvider,
      ],
    });
    provider = TestBed.inject(UmdAccessibilityMenuProvider);
  });

  it('should be created', () => {
    expect(provider).toBeTruthy();
  });

  it('getSections should return expected menu sections', (done) => {
    provider.getSections().subscribe((sections) => {
      expect(sections).toEqual(expectedSections);
      done();
    });
  });
});
