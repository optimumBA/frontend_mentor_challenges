describe('Order summary component', () => {
  it('should open page', async () => {
    await browser.url(`http://localhost:4567/order_summary_component`)

    await expect(browser).toHaveTitle(
      'Order summary component • Frontend Mentor Challenges • Optimum BH Internship'
    )
    await expect($('body')).toHaveTextContaining('Frontend Mentor challenge')
    await expect($('a')).toHaveHref(
      'https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj'
    )
    await expect($('body')).toHaveTextContaining('for Optimum BH Internship')
    await expect($('body')).toHaveTextContaining('Source code')
  })
})
