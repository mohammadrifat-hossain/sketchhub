import { v } from 'convex/values'
import { mutation } from './_generated/server'

const images = [
  "https://img.freepik.com/free-vector/caravan-desert-background-arab-people-camels-silhouettes-sands-caravan-with-camel-camelcade-silhouette-travel-sand-desert-illustration_1284-51614.jpg?w=826&t=st=1707124878~exp=1707125478~hmac=aae2aa2edbb7556eaa39e5bafa05681cabaca507886bfee38755ff07ba586fea",
  'https://img.freepik.com/free-vector/vector-illustration-mountain-landscape_1441-72.jpg?w=826&t=st=1707124908~exp=1707125508~hmac=3fba5249c851c1afded14915af2e9144d10b88b864f555db62c5a7c1c75e89e9',
  'https://img.freepik.com/free-vector/hand-drawn-cartoon-animal-illustration_23-2150624576.jpg?w=826&t=st=1707124953~exp=1707125553~hmac=3f1faef194a92bd21a70fd32e5444dcbafb287e69256e1bdae48b20528570b3e',
  'https://img.freepik.com/free-vector/hand-drawn-venus-flytrap-cartoon-illustration_23-2151155610.jpg?w=826&t=st=1707124970~exp=1707125570~hmac=e53ca8aad3d2fb6a02216f5a476b8eb3b355fecf55ef8beeeb69108b9ba775ee',
  'https://img.freepik.com/free-vector/hand-drawn-carrot-cartoon-illustration_23-2150665564.jpg?w=826&t=st=1707125033~exp=1707125633~hmac=1e78d579aae3008ef0348a6439102817854336cfcb71badaa16ed52e09f9e82e',
  'https://img.freepik.com/free-vector/flat-design-man-forest-illustration_52683-94451.jpg?w=826&t=st=1707125105~exp=1707125705~hmac=7058b94b4b0d8ad269690d17644321656e9cfbf48af6fe420feb8d28a6626c33',
  'https://img.freepik.com/free-vector/hand-drawn-cartoon-animal-illustration_23-2150624576.jpg?w=826&t=st=1707124953~exp=1707125553~hmac=3f1faef194a92bd21a70fd32e5444dcbafb287e69256e1bdae48b20528570b3e',
  'https://img.freepik.com/free-vector/hand-drawn-monster-illustration_23-2151151647.jpg?w=826&t=st=1707125196~exp=1707125796~hmac=1d1176865babea33474d233da29bff6427a61d113673b8db927db5bfa2ccb332',
  'https://img.freepik.com/free-vector/hand-drawn-hawk-cartoon-illustration_52683-114401.jpg?w=826&t=st=1707125277~exp=1707125877~hmac=3cd2b4cc55d905b024a885edbe1d9b7682c0e441b32efbb04a8659a9ba89339e'
]

export const create = mutation({
  args: {
    orgId: v.string(),
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if(!identity){
      throw new Error('Unauthorized')
    }

    const randomImage = images[Math.floor(Math.random()*images.length)]

    const board = await ctx.db.insert("boards", {
      title: args.title,
      orgId: args.orgId,
      authorId: identity.subject,
      authorName: identity.name!,
      imageUrl: randomImage
    })

    return board
  },
})