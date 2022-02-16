describe('Profile card component', () => {
  it('should open page in desktop viewport size', async () => {
    await browser.url(`http://localhost:4567/profile_card_component`)
    await browser.pause(100)
    await browser.takeFullPageScreenshot('profile_card_component-desktop')

    await expect(browser).toHaveTitle(
      'Profile card component • Frontend Mentor Challenges • Optimum BH Internship'
    )
    await expect($('body')).toHaveTextContaining('Frontend Mentor challenge')
    await expect($('=Frontend Mentor challenge')).toHaveHref(
      'https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ'
    )
    await expect($('body')).toHaveTextContaining('for Optimum BH Internship')
    await expect($('=Optimum BH')).toHaveHref('https://github.com/optimumBA')
    await expect($('body')).toHaveTextContaining('Source code')
    await expect($('=Source code')).toHaveHrefContaining('https://github.com')
    await expect($('=Source code')).toHaveHrefContaining(
      '/frontend_mentor_challenges/tree/profile_card_component/challenges/profile_card_component'
    )

    await expect($('body')).toHaveTextContaining('Victor Crest')
    await expect($('body')).toHaveTextContaining('London')
  })

  it('should open page in mobile viewport size', async () => {
    await browser.url(`http://localhost:4567/profile_card_component`)
    await browser.setWindowSize(375, 667) // iPhone 8
    await browser.pause(100)
    await browser.takeFullPageScreenshot('profile_card_component-mobile')

    await expect(browser).toHaveTitle(
      'Profile card component • Frontend Mentor Challenges • Optimum BH Internship'
    )
    await expect($('body')).toHaveTextContaining('Frontend Mentor challenge')
    await expect($('=Frontend Mentor challenge')).toHaveHref(
      'https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ'
    )
    await expect($('body')).toHaveTextContaining('for Optimum BH Internship')
    await expect($('=Optimum BH')).toHaveHref('https://github.com/optimumBA')
    await expect($('body')).toHaveTextContaining('Source code')
    await expect($('=Source code')).toHaveHrefContaining('https://github.com')
    await expect($('=Source code')).toHaveHrefContaining(
      '/frontend_mentor_challenges/tree/profile_card_component/challenges/profile_card_component'
    )

    await expect($('body')).toHaveTextContaining('Victor Crest')
    await expect($('body')).toHaveTextContaining('London')
  })
})
