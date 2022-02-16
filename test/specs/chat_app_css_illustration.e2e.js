describe('Chat app CSS illustration', () => {
  it('should open page in desktop viewport size', async () => {
    await browser.url(`http://localhost:4567/chat_app_css_illustration`)
    await browser.pause(100)
    await browser.takeFullPageScreenshot('chat_app_css_illustration-desktop')

    await expect(browser).toHaveTitle(
      'Chat app CSS illustration • Frontend Mentor Challenges • Optimum BH Internship'
    )
    await expect($('body')).toHaveTextContaining('Frontend Mentor challenge')
    await expect($('=Frontend Mentor challenge')).toHaveHref(
      'https://www.frontendmentor.io/challenges/chat-app-css-illustration-O5auMkFqY'
    )
    await expect($('body')).toHaveTextContaining('for Optimum BH Internship')
    await expect($('=Optimum BH')).toHaveHref('https://github.com/optimumBA')
    await expect($('body')).toHaveTextContaining('Source code')
    await expect($('=Source code')).toHaveHrefContaining('https://github.com')
    await expect($('=Source code')).toHaveHrefContaining(
      '/frontend_mentor_challenges/tree/chat_app_css_illustration/challenges/chat_app_css_illustration'
    )

    await expect($('body')).toHaveTextContaining('Simple booking')
    await expect($('body')).toHaveTextContaining(
      'Stay in touch with our dog walkers through the chat interface. This makes it easy to discuss arrangements and make bookings.Once the walk has been completed you can rate your walker and book again all through the chat.'
    )
    await expect($('body')).toHaveTextContaining('Samuel Green')
    await expect($('body')).toHaveTextContaining('30 minute walk')
    await expect($('body')).toHaveTextContaining('$29')
  })

  it('should open page in mobile viewport size', async () => {
    await browser.url(`http://localhost:4567/chat_app_css_illustration`)
    await browser.setWindowSize(375, 667) // iPhone 8
    await browser.pause(100)
    await browser.takeFullPageScreenshot('chat_app_css_illustration-mobile')

    await expect(browser).toHaveTitle(
      'Chat app CSS illustration • Frontend Mentor Challenges • Optimum BH Internship'
    )
    await expect($('body')).toHaveTextContaining('Frontend Mentor challenge')
    await expect($('=Frontend Mentor challenge')).toHaveHref(
      'https://www.frontendmentor.io/challenges/chat-app-css-illustration-O5auMkFqY'
    )
    await expect($('body')).toHaveTextContaining('for Optimum BH Internship')
    await expect($('=Optimum BH')).toHaveHref('https://github.com/optimumBA')
    await expect($('body')).toHaveTextContaining('Source code')
    await expect($('=Source code')).toHaveHrefContaining('https://github.com')
    await expect($('=Source code')).toHaveHrefContaining(
      '/frontend_mentor_challenges/tree/chat_app_css_illustration/challenges/chat_app_css_illustration'
    )

    await expect($('body')).toHaveTextContaining('Simple booking')
    await expect($('body')).toHaveTextContaining(
      'Stay in touch with our dog walkers through the chat interface. This makes it easy to discuss arrangements and make bookings.Once the walk has been completed you can rate your walker and book again all through the chat.'
    )
    await expect($('body')).toHaveTextContaining('Samuel Green')
    await expect($('body')).toHaveTextContaining('30 minute walk')
    await expect($('body')).toHaveTextContaining('$29')
  })
})
