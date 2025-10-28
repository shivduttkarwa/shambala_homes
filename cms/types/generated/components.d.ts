import type { Schema, Struct } from '@strapi/strapi';

export interface CommonCta extends Struct.ComponentSchema {
  collectionName: 'components_common_ctas';
  info: {
    displayName: 'Cta';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SectionsCircleItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_circle_items';
  info: {
    displayName: 'Circle Item';
    icon: 'landscape';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
    icon: 'folder';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    circleGallery: Schema.Attribute.Component<'sections.circle-item', true>;
    cta: Schema.Attribute.Component<'common.cta', false>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    heroSettings: Schema.Attribute.Component<'sections.hero-settings', false>;
    rotatingPhrases: Schema.Attribute.Component<
      'sections.rotating-phrase',
      true
    >;
  };
}

export interface SectionsHeroSettings extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_settings';
  info: {
    displayName: 'Hero Settings';
  };
  attributes: {
    autoplay: Schema.Attribute.Boolean;
    slideIntervalMs: Schema.Attribute.Integer;
  };
}

export interface SectionsRotatingPhrase extends Struct.ComponentSchema {
  collectionName: 'components_sections_rotating_phrases';
  info: {
    displayName: 'Rotating Phrase';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.cta': CommonCta;
      'sections.circle-item': SectionsCircleItem;
      'sections.hero': SectionsHero;
      'sections.hero-settings': SectionsHeroSettings;
      'sections.rotating-phrase': SectionsRotatingPhrase;
    }
  }
}
