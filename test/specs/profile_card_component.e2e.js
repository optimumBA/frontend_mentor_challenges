describe('Profile card component', () => {
  it('should open page', async () => {
    await browser.url(`http://localhost:4567/profile_card_component`)

    await expect(browser).toHaveTitle(
      'Profile card component • Frontend Mentor Challenges • Optimum BH Internship'
    )
    await expect($('body')).toHaveTextContaining('Frontend Mentor challenge')
    await expect($('=Frontend Mentor challenge')).toHaveHref(
      'https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ'
    )
    await expect($('body')).toHaveTextContaining('for Optimum BH Internship')
    await expect($('body')).toHaveTextContaining('Source code')
    await expect($('=Source code')).toHaveHrefContaining(
      '/frontend_mentor_challenges/tree/profile_card_component/challenges/profile_card_component'
    )
  })
})
