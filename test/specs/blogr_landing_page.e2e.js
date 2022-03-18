describe('Blogr landing page', () => {
  it('should open page in desktop viewport size and expand menu items', async () => {
    await browser.url(`http://localhost:4567/blogr_landing_page`)
    await browser.pause(100)
    await browser.takeFullPageScreenshot('blogr_landing_page-desktop')

    await expect(browser).toHaveTitle(
      'Blogr landing page • Frontend Mentor Challenges • Optimum BH Internship'
    )
    await expect($('body')).toHaveTextContaining('Frontend Mentor challenge')
    await expect($('=Frontend Mentor challenge')).toHaveHref(
      'https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP'
    )
    await expect($('body')).toHaveTextContaining('for Optimum BH Internship')
    await expect($('=Optimum BH')).toHaveHref('https://github.com/optimumBA')
    await expect($('body')).toHaveTextContaining('Source code')
    await expect($('=Source code')).toHaveHrefContaining('https://github.com')
    await expect($('=Source code')).toHaveHrefContaining(
      '/frontend_mentor_challenges/tree/blogr_landing_page/challenges/blogr_landing_page'
    )

    await expect($('body')).toHaveTextContaining('A modern publishing platform')

    await expect($$('=Overview').length).toEqual(1)
    await expect($$('=About').length).toEqual(1)
    await expect($$('=Contact').length).toEqual(1)

    await $('=Product').click()
    await expect($$('=Overview').length).toEqual(2)
    await expect($$('=About').length).toEqual(1)
    await expect($$('=Contact').length).toEqual(1)

    await $('=Company').click()
    await expect($$('=Overview').length).toEqual(1)
    await expect($$('=About').length).toEqual(2)
    await expect($$('=Contact').length).toEqual(1)

    await $('=Connect').click()
    await expect($$('=Overview').length).toEqual(1)
    await expect($$('=About').length).toEqual(1)
    await expect($$('=Contact').length).toEqual(2)
  })

  it('should open page in mobile viewport size and toggle mobile menu', async () => {
    await browser.url(`http://localhost:4567/blogr_landing_page`)
    await browser.setWindowSize(375, 667) // iPhone 8
    await browser.pause(100)
    await browser.takeFullPageScreenshot('blogr_landing_page-mobile')

    await expect(browser).toHaveTitle(
      'Blogr landing page • Frontend Mentor Challenges • Optimum BH Internship'
    )
    await expect($('body')).toHaveTextContaining('Frontend Mentor challenge')
    await expect($('=Frontend Mentor challenge')).toHaveHref(
      'https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP'
    )
    await expect($('body')).toHaveTextContaining('for Optimum BH Internship')
    await expect($('=Optimum BH')).toHaveHref('https://github.com/optimumBA')
    await expect($('body')).toHaveTextContaining('Source code')
    await expect($('=Source code')).toHaveHrefContaining('https://github.com')
    await expect($('=Source code')).toHaveHrefContaining(
      '/frontend_mentor_challenges/tree/blogr_landing_page/challenges/blogr_landing_page'
    )

    await expect($('body')).toHaveTextContaining('A modern publishing platform')

    await expect($$('=Overview').length).toEqual(1)
    await expect($$('=About').length).toEqual(1)
    await expect($$('=Contact').length).toEqual(1)

    await expect($$('=Product').length).toEqual(0)
    await expect($$('=Company').length).toEqual(0)
    await expect($$('=Connect').length).toEqual(0)

    await $('#mobile-menu-toggle').click()

    await expect($$('=Product').length).toEqual(1)
    await expect($$('=Company').length).toEqual(1)
    await expect($$('=Connect').length).toEqual(1)

    await expect($$('=Overview').length).toEqual(1)
    await expect($$('=About').length).toEqual(1)
    await expect($$('=Contact').length).toEqual(1)

    await $('=Product').click()
    await expect($$('=Overview').length).toEqual(2)
    await expect($$('=About').length).toEqual(1)
    await expect($$('=Contact').length).toEqual(1)

    await $('=Company').click()
    await expect($$('=Overview').length).toEqual(1)
    await expect($$('=About').length).toEqual(2)
    await expect($$('=Contact').length).toEqual(1)

    await $('=Connect').click()
    await expect($$('=Overview').length).toEqual(1)
    await expect($$('=About').length).toEqual(1)
    await expect($$('=Contact').length).toEqual(2)

    await $('#mobile-menu-toggle').click()

    await expect($$('=Product').length).toEqual(1)
    await expect($$('=Company').length).toEqual(1)
    await expect($$('=Connect').length).toEqual(1)

    await expect($$('=Overview').length).toEqual(1)
    await expect($$('=About').length).toEqual(1)
    await expect($$('=Contact').length).toEqual(1)
  })
})
