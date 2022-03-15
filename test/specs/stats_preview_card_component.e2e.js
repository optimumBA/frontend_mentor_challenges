describe('Stats preview card component', () => {
  it('should open page in desktop viewport size', async () => {
    await browser.url(`http://localhost:4567/stats_preview_card_component`)
    await browser.pause(100)
    await browser.takeFullPageScreenshot('stats_preview_card_component-desktop')

    await expect(browser).toHaveTitle(
      'Stats preview card component • Frontend Mentor Challenges • Optimum BH Internship'
    )
    await expect($('body')).toHaveTextContaining('Frontend Mentor challenge')
    await expect($('=Frontend Mentor challenge')).toHaveHref(
      'https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62'
    )
    await expect($('body')).toHaveTextContaining('for Optimum BH Internship')
    await expect($('=Optimum BH')).toHaveHref('https://github.com/optimumBA')
    await expect($('body')).toHaveTextContaining('Source code')
    await expect($('=Source code')).toHaveHrefContaining('https://github.com')
    await expect($('=Source code')).toHaveHrefContaining(
      '/frontend_mentor_challenges/tree/stats_preview_card_component/challenges/stats_preview_card_component'
    )

    await expect($('body')).toHaveTextContaining('Get')
    await expect($('body')).toHaveTextContaining('insights')
    await expect($('body')).toHaveTextContaining(
      'that help your business grow.'
    )
    await expect($('body')).toHaveTextContaining(
      'Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.'
    )
  })

  it('should open page in mobile viewport size', async () => {
    await browser.url(`http://localhost:4567/stats_preview_card_component`)
    await browser.setWindowSize(375, 667) // iPhone 8
    await browser.pause(100)
    await browser.takeFullPageScreenshot('stats_preview_card_component-mobile')

    await expect(browser).toHaveTitle(
      'Stats preview card component • Frontend Mentor Challenges • Optimum BH Internship'
    )
    await expect($('body')).toHaveTextContaining('Frontend Mentor challenge')
    await expect($('=Frontend Mentor challenge')).toHaveHref(
      'https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62'
    )
    await expect($('body')).toHaveTextContaining('for Optimum BH Internship')
    await expect($('=Optimum BH')).toHaveHref('https://github.com/optimumBA')
    await expect($('body')).toHaveTextContaining('Source code')
    await expect($('=Source code')).toHaveHrefContaining('https://github.com')
    await expect($('=Source code')).toHaveHrefContaining(
      '/frontend_mentor_challenges/tree/stats_preview_card_component/challenges/stats_preview_card_component'
    )

    await expect($('body')).toHaveTextContaining('Get')
    await expect($('body')).toHaveTextContaining('insights')
    await expect($('body')).toHaveTextContaining(
      'that help your business grow.'
    )
    await expect($('body')).toHaveTextContaining(
      'Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.'
    )
  })
})
