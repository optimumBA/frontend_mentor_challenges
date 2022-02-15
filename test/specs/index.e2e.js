describe('Index', () => {
  it('should open page', async () => {
    await browser.url(`http://localhost:4567`)

    await expect($('title')).toHaveTextContaining(
      'Frontend Mentor Challenges • Optimum BH Internship'
    )
  })
})
