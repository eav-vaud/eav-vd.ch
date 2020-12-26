import Prismic from "prismic-javascript"

const REPOSITORY = "eav-vd"
const REF_API_URL = `https://${REPOSITORY}.prismic.io/api/v2`
const GRAPHQL_API_URL = `https://${REPOSITORY}.prismic.io/graphql`
// export const API_URL = 'https://eav-vd.cdn.prismic.io/api/v2'
export const API_TOKEN =
  "MC5YOGFIOUJJQUFDUUFpU3Rx.77-9TAJYd--_ve-_ve-_vVN4ee-_vU3vv70CGW4L77-9Enrvv71V77-9OhRW77-977-9M--_vSY"
export const API_LOCALE = "fr-fr"

export const PrismicClient = Prismic.client(REF_API_URL, {
  accessToken: API_TOKEN,
})

async function fetchAPI(query) {
  const prismicAPI = await PrismicClient.getApi()
  const res = await fetch(`${GRAPHQL_API_URL}?query=${query}`, {
    headers: {
      "Prismic-Ref": prismicAPI.masterRef.ref,
      "Content-Type": "application/json",
      "Accept-Language": API_LOCALE,
      Authorization: `Token ${API_TOKEN}`,
    },
  })

  if (res.status !== 200) {
    console.log(await res.text())
    throw new Error("Failed to fetch API")
  }

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error("Failed to fetch API")
  }
  return json.data
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      allBlog_posts {
        edges {
          node {
            _meta {
              uid
            }
          }
        }
      }
    }
  `)

  return data?.allBlog_posts?.edges
}

export async function getPostData() {
  const data = await fetchAPI(`
    query BlogPostQuery($uid: String) {
      allBlog_posts(uid: $uid) {
        edges {
          node {
            title
            date
            post_body
          }
        }
      }
    }
  `)

  return data
}

export async function getHomepageData() {
  const data = await fetchAPI(`
    query HomepageQuery {
      allHomepages {
        edges {
          node {
            title
          }
        }
      }
      allBlog_posts(sortBy: date_DESC) {
        edges {
          node {
            title
            date
            post_body
            _meta {
              id
              uid
              type
            }
          }
        }
      }
    }
  `)

  return data
}

export async function getNewsData() {
  const data = await fetchAPI(`
    query {
      allNews_pages(uid: "actualites") {
        edges {
          node {
            title
            body
          }
        }
      }
      allBlog_posts(sortBy: date_DESC) {
        edges {
          node {
            title
            date
            post_body
            _meta {
              id
              uid
              type
            }
          }
        }
      }
    }
  `)

  return data
}

export async function getResourcesData() {
  const data = await fetchAPI(`
    query ResourcesPageQuery {
      allResources_pages {
        edges {
          node {
            body
            title
            files {
              file_link {
                ... on _FileLink {
                  url
                }
                ... on _ImageLink {
                  url
                }
              }
              file_title
            }
            links {
              link_title
              link_url {
                ... on _ExternalLink {
                  url
                }
                ... on _FileLink {
                  url
                }
                ... on _ImageLink {
                  url
                }
              }
              link_description
            }
          }
        }
      }
    }
  `)

  return data
}

export async function getContactData() {
  const data = await fetchAPI(`
    query ContactPageQuery {
      allPages(uid: "contact") {
        edges {
          node {
            title
            page_body
          }
        }
      }
    }
  `)

  return data
}

export async function getAboutData() {
  const data = await fetchAPI(`
    query AboutPageQuery {
      allPages(uid: "a-propos") {
        edges {
          node {
            title
            page_body
          }
        }
      }
    }
  `)

  return data
}
