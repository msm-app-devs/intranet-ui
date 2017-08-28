'use strict';

define('intranet-app/tests/adapters/employee.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | adapters/employee.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/employee.js should pass jshint.');
  });
});
define('intranet-app/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('intranet-app/tests/application/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | application/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'application/route.js should pass jshint.');
  });
});
define('intranet-app/tests/components/employee-item/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/employee-item/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/employee-item/component.js should pass jshint.');
  });
});
define('intranet-app/tests/components/employee-list/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/employee-list/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/employee-list/component.js should pass jshint.');
  });
});
define('intranet-app/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('intranet-app/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('intranet-app/tests/helpers/ember-basic-dropdown', ['exports', 'ember-native-dom-helpers', 'ember-basic-dropdown/test-support/helpers'], function (exports, _emberNativeDomHelpers, _emberBasicDropdownTestSupportHelpers) {
  exports['default'] = _emberBasicDropdownTestSupportHelpers['default'];
  Object.defineProperty(exports, 'nativeTap', {
    enumerable: true,
    get: function get() {
      return _emberBasicDropdownTestSupportHelpers.nativeTap;
    }
  });
  Object.defineProperty(exports, 'clickTrigger', {
    enumerable: true,
    get: function get() {
      return _emberBasicDropdownTestSupportHelpers.clickTrigger;
    }
  });
  Object.defineProperty(exports, 'tapTrigger', {
    enumerable: true,
    get: function get() {
      return _emberBasicDropdownTestSupportHelpers.tapTrigger;
    }
  });
  Object.defineProperty(exports, 'fireKeydown', {
    enumerable: true,
    get: function get() {
      return _emberBasicDropdownTestSupportHelpers.fireKeydown;
    }
  });
  var nativeClick = _emberNativeDomHelpers.click;
  exports.nativeClick = nativeClick;
});
define('intranet-app/tests/helpers/ember-power-select', ['exports', 'ember-power-select/test-support/helpers'], function (exports, _emberPowerSelectTestSupportHelpers) {
  exports['default'] = _emberPowerSelectTestSupportHelpers['default'];
  Object.defineProperty(exports, 'findContains', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectTestSupportHelpers.findContains;
    }
  });
  Object.defineProperty(exports, 'nativeMouseDown', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectTestSupportHelpers.nativeMouseDown;
    }
  });
  Object.defineProperty(exports, 'nativeMouseUp', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectTestSupportHelpers.nativeMouseUp;
    }
  });
  Object.defineProperty(exports, 'triggerKeydown', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectTestSupportHelpers.triggerKeydown;
    }
  });
  Object.defineProperty(exports, 'typeInSearch', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectTestSupportHelpers.typeInSearch;
    }
  });
  Object.defineProperty(exports, 'clickTrigger', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectTestSupportHelpers.clickTrigger;
    }
  });
  Object.defineProperty(exports, 'nativeTouch', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectTestSupportHelpers.nativeTouch;
    }
  });
  Object.defineProperty(exports, 'touchTrigger', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectTestSupportHelpers.touchTrigger;
    }
  });
  Object.defineProperty(exports, 'selectChoose', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectTestSupportHelpers.selectChoose;
    }
  });
});
define('intranet-app/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'intranet-app/tests/helpers/start-app', 'intranet-app/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _intranetAppTestsHelpersStartApp, _intranetAppTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _intranetAppTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _intranetAppTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('intranet-app/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('intranet-app/tests/helpers/resolver', ['exports', 'intranet-app/resolver', 'intranet-app/config/environment'], function (exports, _intranetAppResolver, _intranetAppConfigEnvironment) {

  var resolver = _intranetAppResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _intranetAppConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _intranetAppConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('intranet-app/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('intranet-app/tests/helpers/start-app', ['exports', 'ember', 'intranet-app/app', 'intranet-app/config/environment'], function (exports, _ember, _intranetAppApp, _intranetAppConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _intranetAppConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _intranetAppApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('intranet-app/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('intranet-app/tests/home/controller.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | home/controller.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'home/controller.js should pass jshint.');
  });
});
define('intranet-app/tests/home/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | home/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'home/route.js should pass jshint.');
  });
});
define('intranet-app/tests/index/controller.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | index/controller.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'index/controller.js should pass jshint.');
  });
});
define('intranet-app/tests/index/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | index/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'index/route.js should pass jshint.');
  });
});
define('intranet-app/tests/models/employee.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/employee.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/employee.js should pass jshint.');
  });
});
define('intranet-app/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('intranet-app/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('intranet-app/tests/test-helper', ['exports', 'intranet-app/tests/helpers/resolver', 'ember-qunit'], function (exports, _intranetAppTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_intranetAppTestsHelpersResolver['default']);
});
define('intranet-app/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('intranet-app/tests/unit/index/controller-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:index', 'Unit | Controller | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('intranet-app/tests/unit/index/controller-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/index/controller-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/index/controller-test.js should pass jshint.');
  });
});
define('intranet-app/tests/unit/index/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('intranet-app/tests/unit/index/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/index/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/index/route-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('intranet-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
