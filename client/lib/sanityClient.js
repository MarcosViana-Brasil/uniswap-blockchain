import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'tuanmdq0',
    dataset: 'production',
    apiVersion: 'v1',
    token: 'skmNFdUipVlbiQgJvoB54vkTfxgd2qnhbNSUwdD5dVn5CTh8BrGqI8g9lZsmz2ynk2Vxmpew4m5VBgK4LzhfS1NnsmP1YvgyTRorUXRLgTwyiroVJ3OhrTBPx4GneoMMJAnTcmjrKZeEHc9PKqYwn0wJjm73Vn0xcKe5p16oUhd8TR0BRzFL',
    useCdn: false,
})
