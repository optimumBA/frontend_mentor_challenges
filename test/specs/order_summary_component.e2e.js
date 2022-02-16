describe('Order summary component', () => {
  it('should open page in desktop viewport size', async () => {
    await browser.url(`http://localhost:4567/order_summary_component`)
    await browser.pause(100)
    await browser.takeFullPageScreenshot('order_summary_component-desktop')

    await expect(browser).toHaveTitle(
      'Order summary component • Frontend Mentor Challenges • Optimum BH Internship'
    )
    await expect($('body')).toHaveTextContaining('Frontend Mentor challenge')
    await expect($('=Frontend Mentor challenge')).toHaveHref(
      'https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj'
    )
    await expect($('body')).toHaveTextContaining('for Optimum BH Internship')
    await expect($('=Optimum BH')).toHaveHref('https://github.com/optimumBA')
    await expect($('body')).toHaveTextContaining('Source code')
    await expect($('=Source code')).toHaveHrefContaining('https://github.com')
    await expect($('=Source code')).toHaveHrefContaining(
      '/frontend_mentor_challenges/tree/order_summary_component/challenges/order_summary_component'
    )

    await expect($('body')).toHaveTextContaining('Order Summary')
    await expect($('body')).toHaveTextContaining(
      'You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!'
    )
    await expect($('body')).toHaveTextContaining('Annual Plan')
    await expect($('body')).toHaveTextContaining('$59.99/year')
    await expect($('body')).toHaveTextContaining('Change')
    await expect($('body')).toHaveTextContaining('Proceed to Payment')
    await expect($('body')).toHaveTextContaining('Cancel Order')
  })

  it('should open page in mobile viewport size', async () => {
    await browser.url(`http://localhost:4567/order_summary_component`)
    await browser.setWindowSize(375, 667) // iPhone 8
    await browser.pause(100)
    await browser.takeFullPageScreenshot('order_summary_component-mobile')

    await expect(browser).toHaveTitle(
      'Order summary component • Frontend Mentor Challenges • Optimum BH Internship'
    )
    await expect($('body')).toHaveTextContaining('Frontend Mentor challenge')
    await expect($('=Frontend Mentor challenge')).toHaveHref(
      'https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj'
    )
    await expect($('body')).toHaveTextContaining('for Optimum BH Internship')
    await expect($('=Optimum BH')).toHaveHref('https://github.com/optimumBA')
    await expect($('body')).toHaveTextContaining('Source code')
    await expect($('=Source code')).toHaveHrefContaining('https://github.com')
    await expect($('=Source code')).toHaveHrefContaining(
      '/frontend_mentor_challenges/tree/order_summary_component/challenges/order_summary_component'
    )

    await expect($('body')).toHaveTextContaining('Order Summary')
    await expect($('body')).toHaveTextContaining(
      'You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!'
    )
    await expect($('body')).toHaveTextContaining('Annual Plan')
    await expect($('body')).toHaveTextContaining('$59.99/year')
    await expect($('body')).toHaveTextContaining('Change')
    await expect($('body')).toHaveTextContaining('Proceed to Payment')
    await expect($('body')).toHaveTextContaining('Cancel Order')
  })
})
