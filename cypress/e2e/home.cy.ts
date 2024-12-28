describe('HomePage测试', () => {
  it('判断首页菜单栏是否加载正常', () => {
    // 默认cypress会去获取 load 事件，60000ms -> 默认超时时间
    cy.visit('/')

    cy.contains('学习')

    // css框架中的特殊符号的class名需要加入//进行转义
    cy.get('.max-w-\\[1200px\\] > .flex > .router-link-active').contains('产品')

    cy.get('.swiper-wrapper').first().children().should('have.length', 3)

    // cypress不能测试多个tab标签业
    cy.get(':nth-child(1) > .max-w-\\[1200px\\] > .flex > [href="https://www.imooc.com"]').contains(
      '社区'
    )

    cy.get(':nth-child(1) > .max-w-\\[1200px\\] > .flex > [href="https://www.imooc.com"]').should(
      'have.attr',
      'target',
      '_blank'
    )

    cy.get(':nth-child(1) > .max-w-\\[1200px\\] > .flex > [href="https://www.imooc.com"]').should(
      'have.attr',
      'href',
      'https://www.imooc.com'
    )

    cy.get('.max-w-\\[1200px\\] > .flex > [href="/study"]').click()

    cy.contains('登录')
    cy.contains('注册')
    cy.contains('每日一课')

    cy.get('.tabs > li:nth-child(3)').click({ force: true })
    cy.get('.tabs > li:nth-child(3)').should('have.class', 'active')
  })

  it('购买车icon check', () => {
    cy.visit('/study/cart')

    cy.contains('购物车')

    cy.get('.i-carbon\\:checkbox').click()
    cy.get('.bottom-0 .i-radix-icons\\:checkbox').should('have.length', 1)
  })
})
