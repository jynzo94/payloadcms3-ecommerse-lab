import { CollectionOverride } from 'node_modules/@payloadcms/plugin-ecommerce/dist/types'

export const ProductsCollection: CollectionOverride = ({ defaultCollection }) => ({
  ...defaultCollection,
  fields: [
    ...defaultCollection.fields,
    {
      name: 'title',
      type: 'text',
    },
  ],
  admin: {
    useAsTitle: 'title',
  },
})
