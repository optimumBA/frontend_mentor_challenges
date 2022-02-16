describe('Order summary component', () => {
  it('should open page', async () => {
    await browser.url(`http://localhost:4567/order_summary_component`)

    await expect(browser).toHaveTitle(
      'Order summary component • Frontend Mentor Challenges • Optimum BH Internship'
    )
    await expect($('body')).toHaveTextContaining('Frontend Mentor challenge')
    await expect($('=Frontend Mentor challenge')).toHaveHref(
      'https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj'
    )
    await expect($('body')).toHaveTextContaining('for Optimum BH Internship')
    await expect($('body')).toHaveTextContaining('Source code')
    await expect($('=Source code')).toHaveHrefContaining(
      '/frontend_mentor_challenges/tree/order_summary_component/challenges/order_summary_component'
    )
  })
})
