describe('Chat app CSS illustration', () => {
  it('should open page', async () => {
    await browser.url(`http://localhost:4567/chat_app_css_illustration`)

    await expect(browser).toHaveTitle(
      'Chat app CSS illustration • Frontend Mentor Challenges • Optimum BH Internship'
    )
    await expect($('body')).toHaveTextContaining('Frontend Mentor challenge')
    await expect($('a')).toHaveHref(
      'https://www.frontendmentor.io/challenges/chat-app-css-illustration-O5auMkFqY'
    )
    await expect($('body')).toHaveTextContaining('for Optimum BH Internship')
    await expect($('body')).toHaveTextContaining('Source code')
  })
})
