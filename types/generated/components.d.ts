import type { Schema, Struct } from '@strapi/strapi';

export interface ImageImageBlock extends Struct.ComponentSchema {
  collectionName: 'components_image_image_blocks';
  info: {
    displayName: 'image block';
  };
  attributes: {
    caption: Schema.Attribute.String;
    imge: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface RichTextTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_rich_text_text_blocks';
  info: {
    displayName: 'text block';
  };
  attributes: {
    textContent: Schema.Attribute.RichText;
  };
}

export interface RichTextTextContent extends Struct.ComponentSchema {
  collectionName: 'components_rich_text_text_contents';
  info: {
    displayName: 'text content';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'image.image-block': ImageImageBlock;
      'rich-text.text-block': RichTextTextBlock;
      'rich-text.text-content': RichTextTextContent;
    }
  }
}
