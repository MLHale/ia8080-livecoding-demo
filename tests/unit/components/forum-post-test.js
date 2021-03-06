import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('forum-post', 'Unit | Component | forum post', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('upvote works', function(assert){
  assert.expect(1);
  var component = this.subject({
    post: {id: 1, title: 'testtitle', upvotes: 0, author: 'testauthor', content: 'testcontent'}
  });
  this.render();
  this.$().find('button').click();
  assert.equal(post.upvotes, 1);
});
