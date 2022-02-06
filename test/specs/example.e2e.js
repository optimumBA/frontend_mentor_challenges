describe('Example', () => {
  it('should open page', async () => {
    await browser.url(`http://localhost:4567`)

    browser.getTitle().then((title) => {
      title.should.equal('Optimum BH Internship Template')
      done()
    })
  })
})
