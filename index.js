/*
 * prism-ref-links
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

(function () {
  /**
   * Standard check for prism plugins.
   */
  if ((typeof self !== 'undefined' && !self.Prism) || (typeof global !== 'undefined' && !global.Prism)) {
    return
  }

  const linkMd = /"\[([^\]]+)]\(([^)]+)\)"/
  const refLinkKey = 'code-ref-link'

  function processTokens (key, def, type) {
    if (type !== 'string' || Prism.util.type(def) === 'Array') {
      return
    }

    if (!def.pattern) {
      def = this[key] = { pattern: def }
    }

    def.inside = def.inside || {}
    def.inside[refLinkKey] = linkMd
  }

  Prism.plugins.codeRefs = {
    processGrammar: function (grammar) {
      if (!grammar) {
        return
      }
      Prism.languages.DFS(grammar, processTokens)
    }
  }

  /**
   * Hook into before highlight and parse links
   */
  Prism.hooks.add('before-highlight', function (env) {
    Prism.plugins.codeRefs.processGrammar(env.grammar)
  })

  /**
   * Process the ref link and conver the node to anchor tag
   */
  Prism.hooks.add('wrap', function (env) {
    if (env.type === refLinkKey) {
      const match = env.content.match(linkMd)
      env.tag = 'a'
      env.attributes.href = match[2]
      env.content = match[1]
    }

    try {
      env.content = decodeURIComponent(env.content)
    } catch (e) {}
  })
})()
