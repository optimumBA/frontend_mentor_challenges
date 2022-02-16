describe('QR code component', () => {
  it('should open page in desktop viewport size', async () => {
    await browser.url(`http://localhost:4567/qr_code_component`)
    await browser.pause(100)
    await browser.takeFullPageScreenshot('qr_code_component-desktop')

    await expect(browser).toHaveTitle(
      'QR code component • Frontend Mentor Challenges • Optimum BH Internship'
    )
    await expect($('body')).toHaveTextContaining('Frontend Mentor challenge')
    await expect($('=Frontend Mentor challenge')).toHaveHref(
      'https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H'
    )
    await expect($('body')).toHaveTextContaining('for Optimum BH Internship')
    await expect($('=Optimum BH')).toHaveHref('https://github.com/optimumBA')
    await expect($('body')).toHaveTextContaining('Source code')
    await expect($('=Source code')).toHaveHrefContaining('https://github.com')
    await expect($('=Source code')).toHaveHrefContaining(
      '/frontend_mentor_challenges/tree/qr_code_component/challenges/qr_code_component'
    )

    await expect($('body')).toHaveTextContaining(
      'Improve your front-end skills by building projects'
    )
    await expect($('body')).toHaveTextContaining(
      'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level'
    )
  })

  it('should open page in mobile viewport size', async () => {
    await browser.url(`http://localhost:4567/qr_code_component`)
    await browser.setWindowSize(375, 667) // iPhone 8
    await browser.pause(100)
    await browser.takeFullPageScreenshot('qr_code_component-mobile')

    await expect(browser).toHaveTitle(
      'QR code component • Frontend Mentor Challenges • Optimum BH Internship'
    )
    await expect($('body')).toHaveTextContaining('Frontend Mentor challenge')
    await expect($('=Frontend Mentor challenge')).toHaveHref(
      'https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H'
    )
    await expect($('body')).toHaveTextContaining('for Optimum BH Internship')
    await expect($('=Optimum BH')).toHaveHref('https://github.com/optimumBA')
    await expect($('body')).toHaveTextContaining('Source code')
    await expect($('=Source code')).toHaveHrefContaining('https://github.com')
    await expect($('=Source code')).toHaveHrefContaining(
      '/frontend_mentor_challenges/tree/qr_code_component/challenges/qr_code_component'
    )

    await expect($('body')).toHaveTextContaining(
      'Improve your front-end skills by building projects'
    )
    await expect($('body')).toHaveTextContaining(
      'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level'
    )
  })
})
