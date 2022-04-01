const setSliderValue = (value) => {
  const priceSlider = document.getElementById('price-slider')
  priceSlider.value = value
  priceSlider.dispatchEvent(new Event('input'))
}

describe('Interactive pricing component', () => {
  it('should open page in desktop viewport size and expand menu items', async () => {
    await browser.url(`http://localhost:4567/interactive_pricing_component`)
    await browser.pause(100)
    await browser.takeFullPageScreenshot(
      'interactive_pricing_component-desktop'
    )

    await expect(browser).toHaveTitle(
      'Interactive pricing component • Frontend Mentor Challenges • Optimum BH Internship'
    )
    await expect($('body')).toHaveTextContaining('Frontend Mentor challenge')
    await expect($('=Frontend Mentor challenge')).toHaveHref(
      'https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8'
    )
    await expect($('body')).toHaveTextContaining('for Optimum BH Internship')
    await expect($('=Optimum BH')).toHaveHref('https://github.com/optimumBA')
    await expect($('body')).toHaveTextContaining('Source code')
    await expect($('=Source code')).toHaveHrefContaining('https://github.com')
    await expect($('=Source code')).toHaveHrefContaining(
      '/frontend_mentor_challenges/tree/interactive_pricing_component/challenges/interactive_pricing_component'
    )

    await expect($('body')).toHaveTextContaining(
      'Simple, traffic-based pricing'
    )
    await expect($('body')).toHaveTextContaining(
      'Sign-up for our 30-day trial. No credit card required.'
    )

    await expect($('body')).toHaveTextContaining('100K PAGEVIEWS')
    await expect($('body')).toHaveTextContaining('$16.00')

    await browser.execute(setSliderValue, 1)
    await expect($('body')).toHaveTextContaining('10K PAGEVIEWS')
    await expect($('body')).toHaveTextContaining('$8.00')

    await browser.execute(setSliderValue, 2)
    await expect($('body')).toHaveTextContaining('50K PAGEVIEWS')
    await expect($('body')).toHaveTextContaining('$12.00')

    await browser.execute(setSliderValue, 3)
    await expect($('body')).toHaveTextContaining('100K PAGEVIEWS')
    await expect($('body')).toHaveTextContaining('$16.00')

    await browser.execute(setSliderValue, 4)
    await expect($('body')).toHaveTextContaining('500K PAGEVIEWS')
    await expect($('body')).toHaveTextContaining('$24.00')

    await browser.execute(setSliderValue, 5)
    await expect($('body')).toHaveTextContaining('1M PAGEVIEWS')
    await expect($('body')).toHaveTextContaining('$36.00')

    await $('#yearly-billing-toggle').click()
    await expect($('body')).toHaveTextContaining('1M PAGEVIEWS')
    await expect($('body')).toHaveTextContaining('$27.00')

    await browser.execute(setSliderValue, 4)
    await expect($('body')).toHaveTextContaining('500K PAGEVIEWS')
    await expect($('body')).toHaveTextContaining('$18.00')

    await browser.execute(setSliderValue, 3)
    await expect($('body')).toHaveTextContaining('100K PAGEVIEWS')
    await expect($('body')).toHaveTextContaining('$12.00')

    await browser.execute(setSliderValue, 2)
    await expect($('body')).toHaveTextContaining('50K PAGEVIEWS')
    await expect($('body')).toHaveTextContaining('$9.00')

    await browser.execute(setSliderValue, 1)
    await expect($('body')).toHaveTextContaining('10K PAGEVIEWS')
    await expect($('body')).toHaveTextContaining('$6.00')
  })

  it('should open page in mobile viewport size and toggle mobile menu', async () => {
    await browser.url(`http://localhost:4567/interactive_pricing_component`)
    await browser.setWindowSize(375, 667) // iPhone 8
    await browser.pause(100)
    await browser.takeFullPageScreenshot('interactive_pricing_component-mobile')

    await expect(browser).toHaveTitle(
      'Interactive pricing component • Frontend Mentor Challenges • Optimum BH Internship'
    )
    await expect($('body')).toHaveTextContaining('Frontend Mentor challenge')
    await expect($('=Frontend Mentor challenge')).toHaveHref(
      'https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8'
    )
    await expect($('body')).toHaveTextContaining('for Optimum BH Internship')
    await expect($('=Optimum BH')).toHaveHref('https://github.com/optimumBA')
    await expect($('body')).toHaveTextContaining('Source code')
    await expect($('=Source code')).toHaveHrefContaining('https://github.com')
    await expect($('=Source code')).toHaveHrefContaining(
      '/frontend_mentor_challenges/tree/interactive_pricing_component/challenges/interactive_pricing_component'
    )

    await expect($('body')).toHaveTextContaining(
      'Simple, traffic-based pricing'
    )
    await expect($('body')).toHaveTextContaining(
      'Sign-up for our 30-day trial. No credit card required.'
    )

    await expect($('body')).toHaveTextContaining('100K PAGEVIEWS')
    await expect($('body')).toHaveTextContaining('$16.00')

    await browser.execute(setSliderValue, 1)
    await expect($('body')).toHaveTextContaining('10K PAGEVIEWS')
    await expect($('body')).toHaveTextContaining('$8.00')

    await browser.execute(setSliderValue, 2)
    await expect($('body')).toHaveTextContaining('50K PAGEVIEWS')
    await expect($('body')).toHaveTextContaining('$12.00')

    await browser.execute(setSliderValue, 3)
    await expect($('body')).toHaveTextContaining('100K PAGEVIEWS')
    await expect($('body')).toHaveTextContaining('$16.00')

    await browser.execute(setSliderValue, 4)
    await expect($('body')).toHaveTextContaining('500K PAGEVIEWS')
    await expect($('body')).toHaveTextContaining('$24.00')

    await browser.execute(setSliderValue, 5)
    await expect($('body')).toHaveTextContaining('1M PAGEVIEWS')
    await expect($('body')).toHaveTextContaining('$36.00')

    await $('#yearly-billing-toggle').click()
    await expect($('body')).toHaveTextContaining('1M PAGEVIEWS')
    await expect($('body')).toHaveTextContaining('$27.00')

    await browser.execute(setSliderValue, 4)
    await expect($('body')).toHaveTextContaining('500K PAGEVIEWS')
    await expect($('body')).toHaveTextContaining('$18.00')

    await browser.execute(setSliderValue, 3)
    await expect($('body')).toHaveTextContaining('100K PAGEVIEWS')
    await expect($('body')).toHaveTextContaining('$12.00')

    await browser.execute(setSliderValue, 2)
    await expect($('body')).toHaveTextContaining('50K PAGEVIEWS')
    await expect($('body')).toHaveTextContaining('$9.00')

    await browser.execute(setSliderValue, 1)
    await expect($('body')).toHaveTextContaining('10K PAGEVIEWS')
    await expect($('body')).toHaveTextContaining('$6.00')
  })
})
