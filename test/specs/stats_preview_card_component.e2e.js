describe('Stats preview card component', () => {
  it('should open page', async () => {
    await browser.url(`http://localhost:4567/stats_preview_card_component`)

    await expect(browser).toHaveTitle(
      'Stats preview card component • Frontend Mentor Challenges • Optimum BH Internship'
    )
    await expect($('body')).toHaveTextContaining('Frontend Mentor challenge')
    await expect($('a')).toHaveHref(
      'https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62'
    )
    await expect($('body')).toHaveTextContaining('for Optimum BH Internship')
    await expect($('body')).toHaveTextContaining('Source code')
  })
})
