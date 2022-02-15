describe('Index', () => {
  it('should open page', async () => {
    await browser.url(`http://localhost:4567`)

    await expect(browser).toHaveTitle(
      'Frontend Mentor Challenges • Optimum BH Internship'
    )
    await expect($('body')).toHaveTextContaining(
      'Front-end development Challenges'
    )
    await expect($('body')).toHaveTextContaining('by Frontend Mentor')
    await expect($('body')).toHaveTextContaining('for Optimum BH Internship.')
    await expect($('body')).toHaveTextContaining('Source code')
  })
})
