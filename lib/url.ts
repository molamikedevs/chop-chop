import qs from "query-string"

interface FormUrlQueryParams {
  params: string
  key: string
  value: string
}

interface removeKeysFormUrlQueryParams {
  params: string
  keysToRemove: string[]
}

export function formUrlQuery({ params, key, value }: FormUrlQueryParams) {
  const queryString = qs.parse(params)

  queryString[key] = value

  return qs.stringifyUrl({
    url: window.location.pathname,
    query: queryString,
  })
}

export function removeKeysFormUrlQuery({
  params,
  keysToRemove,
}: removeKeysFormUrlQueryParams) {
  const queryString = qs.parse(params)

  keysToRemove.forEach((key) => {
    delete queryString[key]
  })

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: queryString,
    },
    { skipNull: true }
  )
}
