'use strict';
var lionHeart = angular.module("lionHeart", [require('angular-ui-router')])
lionHeart.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.when('/store', '/store/categories/all').when('/cart', '/cart/view').when('/profile', '/profile/dashboard').when('/admin', '/admin/posts').otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/index.html',
      controller: 'indexHomeCtrl'
    })
    .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
    })
    .state('profile', {
    url: '/profile',
    templateUrl: 'templates/profile.html',
    controller: 'profileCtrl'
    })
      .state('profile.orderHistory', {
      url: '/orderHistory',
      templateUrl: 'templates/orderHistory.html',
      controller: 'orderHistoryCtrl'
      })
      .state('profile.dashboard', {
      url: '/dashboard',
      templateUrl: 'templates/profile/dashboard.html',
      controller: 'profile.dashboardCtrl'
      })
      .state('profile.edit', {
      url: '/edit',
      templateUrl: 'templates/profile/edit.html',
      controller: 'profile.dashboard.editCtrl'
      })
    .state('store', {
    url: '/store',
    templateUrl: 'templates/category.html'
    })
      .state('store.search', {
      url: '/search',
      templateUrl: 'templates/products.html',
      controller: 'category.searchCtrl'
      })
      .state('store.product', {
      url: '/products/:urlCode',
      templateUrl: 'templates/singleItem.html',
      controller: 'singleItemCtrl'
      })
      .state('store.categories', {
      url: '/categories',
      templateUrl: 'templates/category/categories.html',
      controller: 'categoryCtrl'
      })
        .state('store.categories.all', {
        url: '/all',
        templateUrl: 'templates/products.html',
        controller: 'productCtrl'
        })
      .state('store.stickers', {
      url: '/stickers',
      templateUrl: 'templates/products.html',
      controller: 'productCtrl'
      })
      .state('store.paintings', {
      url: '/paintings',
      templateUrl: 'templates/products.html',
      controller: 'productCtrl'
      })
      .state('store.prints', {
      url: '/prints',
      templateUrl: 'templates/products.html',
      controller: 'productCtrl'
      })
      .state('store.upcycle', {
      url: '/upcycle',
      templateUrl: 'templates/products.html',
      controller: 'productCtrl'
      })
      .state('store.graphics', {
      url: '/graphics',
      templateUrl: 'templates/products.html',
      controller: 'productCtrl'
      })
      .state('store.skateboards', {
      url: '/skateboards',
      templateUrl: 'templates/products.html',
      controller: 'productCtrl'
      })
    .state('bio', {
    url: '/bio',
    templateUrl: 'templates/bio.html',
    controller: 'bioCtrl'
    })
  .state('portfolio', {
  url: '/portfolio',
  templateUrl: 'templates/portfolio.html',
  controller: 'portfolioCtrl'
  })
    .state('cart', {
    url: '/cart',
    templateUrl: 'templates/cart.html',
    controller: 'cartCtrl'
    })
      .state('cart.review', {
      url: '/review',
      templateUrl: 'templates/checkout/review.html',
      })
      .state('cart.view', {
      url: '/view',
      templateUrl: 'templates/checkout/cart.html'
      })
      .state('cart.checkout', {
      url: '/checkout',
      templateUrl: 'templates/checkout/checkout.html',
      controller: 'cart.checkoutCtrl'
      })
      .state('cart.confirmation', {
      url: '/confirmation',
      templateUrl: 'templates/checkout/confirmation.html',
      controller: 'cart.confirmationCtrl'
      })
    .state('admin', {
    url: '/admin',
    templateUrl: 'templates/admin.html',
    controller: 'adminCtrl'
    })
      .state('admin.posts', {
      url: '/posts',
      templateUrl: 'templates/admin/posts.html',
      controller: 'admin.postsCtrl'
      })
      .state('admin.users', {
      url: '/users',
      templateUrl: 'templates/admin/users.html',
      controller: 'admin.usersCtrl'
      })
      .state('admin.products', {
      url: '/products',
      templateUrl: 'templates/admin/products.html',
      controller: 'admin.productsCtrl'
      })
}])
lionHeart.run(['$state', function($state){}]);
