const contentful = require('contentful')

const client = contentful.createClient({
  space: 'tnqwt2sivmma',
  accessToken: '5c2mVS2UkFTYxfduSSlfo0bn0bA_rYNWzu8H7iJjYVo'
})

export const fetchEntry = (entryToFetch) => {
    return client.getEntry(entryToFetch, {include:5})
    .catch(console.error)
}