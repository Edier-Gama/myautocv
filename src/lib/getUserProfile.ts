async function getUserProfile (token: any) {
  const response = await fetch('https://api.linkedin.com/v2/me', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  const data = await response.json()
}

export { getUserProfile }
