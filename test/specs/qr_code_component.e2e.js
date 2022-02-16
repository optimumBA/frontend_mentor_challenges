describe('QR code component', () => {
  it('should open page', async () => {
    await browser.url(`http://localhost:4567/qr_code_component`)

    await expect(browser).toHaveTitle(
      'QR code component • Frontend Mentor Challenges • Optimum BH Internship'
    )
    await expect($('body')).toHaveTextContaining('Frontend Mentor challenge')
    await expect($('=Frontend Mentor challenge')).toHaveHref(
      'https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H'
    )
    await expect($('body')).toHaveTextContaining('for Optimum BH Internship')
    await expect($('body')).toHaveTextContaining('Source code')
    await expect($('=Source code')).toHaveHrefContaining(
      '/frontend_mentor_challenges/tree/qr_code_component/challenges/qr_code_component'
    )
  })
})
