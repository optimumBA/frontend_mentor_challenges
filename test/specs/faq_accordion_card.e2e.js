describe('FAQ accordion card', () => {
  it('should open page in desktop viewport size', async () => {
    await browser.url(`http://localhost:4567/faq_accordion_card`)
    await browser.pause(100)
    await browser.takeFullPageScreenshot('faq_accordion_card-desktop')

    await expect(browser).toHaveTitle(
      'FAQ accordion card • Frontend Mentor Challenges • Optimum BH Internship'
    )
    await expect($('body')).toHaveTextContaining('Frontend Mentor challenge')
    await expect($('=Frontend Mentor challenge')).toHaveHref(
      'https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam'
    )
    await expect($('body')).toHaveTextContaining('for Optimum BH Internship')
    await expect($('=Optimum BH')).toHaveHref('https://github.com/optimumBA')
    await expect($('body')).toHaveTextContaining('Source code')
    await expect($('=Source code')).toHaveHrefContaining('https://github.com')
    await expect($('=Source code')).toHaveHrefContaining(
      '/frontend_mentor_challenges/tree/faq_accordion_card/challenges/faq_accordion_card'
    )

    await expect($('body')).toHaveTextContaining(
      'How many team members can I invite?'
    )
    await expect($('body')).toHaveTextContaining(
      'What is the maximum file upload size?'
    )
    await expect($('body')).toHaveTextContaining('How do I reset my password?')
    await expect($('body')).toHaveTextContaining(
      'Can I cancel my subscription?'
    )
    await expect($('body')).toHaveTextContaining(
      'Do you provide additional support?'
    )

    await expect($('body')).toHaveTextContaining(
      'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
    )
    await expect($('body')).not.toHaveTextContaining(
      'No more than 2GB. All files in your account must fit your allotted storage space.'
    )
    await expect($('body')).not.toHaveTextContaining(
      'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
    )

    await $('=What is the maximum file upload size?').click()
    await expect($('body')).not.toHaveTextContaining(
      'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
    )
    await expect($('body')).toHaveTextContaining(
      'No more than 2GB. All files in your account must fit your allotted storage space.'
    )
    await expect($('body')).not.toHaveTextContaining(
      'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
    )

    await $('=How do I reset my password?').click()
    await expect($('body')).not.toHaveTextContaining(
      'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
    )
    await expect($('body')).not.toHaveTextContaining(
      'No more than 2GB. All files in your account must fit your allotted storage space.'
    )
    await expect($('body')).toHaveTextContaining(
      'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
    )
  })

  it('should open page in mobile viewport size', async () => {
    await browser.url(`http://localhost:4567/faq_accordion_card`)
    await browser.setWindowSize(375, 667) // iPhone 8
    await browser.pause(100)
    await browser.takeFullPageScreenshot('faq_accordion_card-mobile')

    await expect(browser).toHaveTitle(
      'FAQ accordion card • Frontend Mentor Challenges • Optimum BH Internship'
    )
    await expect($('body')).toHaveTextContaining('Frontend Mentor challenge')
    await expect($('=Frontend Mentor challenge')).toHaveHref(
      'https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam'
    )
    await expect($('body')).toHaveTextContaining('for Optimum BH Internship')
    await expect($('=Optimum BH')).toHaveHref('https://github.com/optimumBA')
    await expect($('body')).toHaveTextContaining('Source code')
    await expect($('=Source code')).toHaveHrefContaining('https://github.com')
    await expect($('=Source code')).toHaveHrefContaining(
      '/frontend_mentor_challenges/tree/faq_accordion_card/challenges/faq_accordion_card'
    )

    await expect($('body')).toHaveTextContaining(
      'How many team members can I invite?'
    )
    await expect($('body')).toHaveTextContaining(
      'What is the maximum file upload size?'
    )
    await expect($('body')).toHaveTextContaining('How do I reset my password?')
    await expect($('body')).toHaveTextContaining(
      'Can I cancel my subscription?'
    )
    await expect($('body')).toHaveTextContaining(
      'Do you provide additional support?'
    )

    await expect($('body')).toHaveTextContaining(
      'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
    )
    await expect($('body')).not.toHaveTextContaining(
      'No more than 2GB. All files in your account must fit your allotted storage space.'
    )
    await expect($('body')).not.toHaveTextContaining(
      'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
    )

    await $('=What is the maximum file upload size?').click()
    await expect($('body')).not.toHaveTextContaining(
      'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
    )
    await expect($('body')).toHaveTextContaining(
      'No more than 2GB. All files in your account must fit your allotted storage space.'
    )
    await expect($('body')).not.toHaveTextContaining(
      'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
    )

    await $('=How do I reset my password?').click()
    await expect($('body')).not.toHaveTextContaining(
      'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
    )
    await expect($('body')).not.toHaveTextContaining(
      'No more than 2GB. All files in your account must fit your allotted storage space.'
    )
    await expect($('body')).toHaveTextContaining(
      'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
    )
  })
})
