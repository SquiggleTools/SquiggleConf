/*! For license information please see global.js.LICENSE.txt */ (() => {
	var N = {
			965: function (i, s, a) {
				var k, y, f, v, g;
				(f = function G(M) {
					var r = this,
						e = {},
						p = G;
					(p.getNumberOfInstance = function () {
						return p._numberOfInstance;
					}),
						(r.enable = function () {
							return (
								e.listenCodeCharSequence(),
								e.listenCodeGestureSequence(),
								e.debug && e.debug("Listener enabled for all."),
								r
							);
						}),
						(r.enableKeyboardKeys = function () {
							return (
								e.listenCodeCharSequence(),
								e.debug && e.debug("Listener enabled for Keyboard Keys."),
								r
							);
						}),
						(r.enableTouchGesture = function () {
							return (
								e.listenCodeGestureSequence(),
								e.debug && e.debug("Listener enabled for Touch Gesture."),
								r
							);
						}),
						(r.disable = function () {
							return (
								e.stopCodeCharSequence(),
								e.stopCodeGestureSequence(),
								e.debug && e.debug("Listener disabled for all."),
								r
							);
						}),
						(r.disableKeyboardKeys = function () {
							return (
								e.stopCodeCharSequence(),
								e.debug && e.debug("Listener disabled for Keyboard Keys."),
								r
							);
						}),
						(r.disableTouchGesture = function () {
							return (
								e.stopCodeGestureSequence(),
								e.debug && e.debug("Listener disabled for Touch Gesture."),
								r
							);
						}),
						(r.setListener = function (n) {
							return (
								e.stopCodeCharSequence(),
								e.stopCodeGestureSequence(),
								(e.listener = n || document),
								e.listenCodeCharSequence(),
								e.listenCodeGestureSequence(),
								e.debug && e.debug("Listener changed.", n),
								r
							);
						}),
						(r.setCallback = function (n) {
							return (
								(e.afterCodeSequenceCallback =
									(typeof n == "function" && n) || e.defaultCallback),
								e.debug && e.debug("Callback changed.", n),
								r
							);
						}),
						(r.setOptions = function (n) {
							return e.initOptions(n), r;
						}),
						(e.keptLastCodeChar = function () {
							e.input.length > e.konamiCodeChar.length &&
								(e.input = e.input.substr(
									e.input.length - e.konamiCodeChar.length,
								));
						}),
						(e.defaultCallback = function () {
							e.debug &&
								e.debug(
									"Konami Code Sequence Entered. There is no action defined.",
								);
						}),
						(e.checkIfCodeCharIsValid = function () {
							e.input === e.konamiCodeChar && e.afterCodeSequenceCallback(r);
						}),
						(e.codeSequenceEventKeyDown = function (n) {
							(e.input += n.keyCode),
								e.keptLastCodeChar(),
								e.checkIfCodeCharIsValid();
						}),
						(e.codeSequenceEventTouchMove = function (n) {
							var d;
							n.touches.length === 1 &&
								e.capture === !0 &&
								((d = n.touches[0]),
								(e.stopX = d.pageX),
								(e.stopY = d.pageY),
								(e.tap = !1),
								(e.capture = !1),
								e.checkIfCodeGestureIsValid());
						}),
						(e.codeSequenceEventTouchEnd = function () {
							e.tap === !0 && e.checkIfCodeGestureIsValid();
						}),
						(e.codeSequenceEventTouchStart = function (n) {
							(e.startX = n.changedTouches[0].pageX),
								(e.startY = n.changedTouches[0].pageY),
								(e.tap = !0),
								(e.capture = !0);
						}),
						(e.stopCodeCharSequence = function () {
							e.listener.removeEventListener(
								"keydown",
								e.codeSequenceEventKeyDown,
							);
						}),
						(e.stopCodeGestureSequence = function () {
							e.listener.removeEventListener(
								"touchstart",
								e.codeSequenceEventTouchStart,
							),
								e.listener.removeEventListener(
									"touchmove",
									e.codeSequenceEventTouchMove,
								),
								e.listener.removeEventListener(
									"touchend",
									e.codeSequenceEventTouchEnd,
								);
						}),
						(e.listenCodeCharSequence = function () {
							e.stopCodeCharSequence(),
								e.listener.addEventListener(
									"keydown",
									e.codeSequenceEventKeyDown,
								);
						}),
						(e.listenCodeGestureSequence = function () {
							(e.originalCodeGesture = e.konamiCodeGesture),
								e.stopCodeGestureSequence(),
								e.listener.addEventListener(
									"touchstart",
									e.codeSequenceEventTouchStart,
								),
								e.listener.addEventListener(
									"touchmove",
									e.codeSequenceEventTouchMove,
								),
								e.listener.addEventListener(
									"touchend",
									e.codeSequenceEventTouchEnd,
									!1,
								);
						}),
						(e.checkIfCodeGestureIsValid = function () {
							var n = Math.abs(e.startX - e.stopX),
								d = Math.abs(e.startY - e.stopY),
								b = e.startX - e.stopX < 0 ? "rt" : "lt",
								L = e.startY - e.stopY < 0 ? "dn" : "up",
								o = n > d ? b : L;
							(o = e.tap === !0 ? "tp" : o) === e.konamiCodeGesture.substr(0, 2)
								? (e.konamiCodeGesture = e.konamiCodeGesture.substr(
										2,
										e.konamiCodeGesture.length - 2,
									))
								: (e.konamiCodeGesture = e.originalCodeGesture),
								e.konamiCodeGesture.length === 0 &&
									((e.konamiCodeGesture = e.originalCodeGesture),
									e.afterCodeSequenceCallback(r));
						}),
						(e.checkDebugMode = function (n) {
							n && n.debug === !0
								? ((e.debug = function (d, b) {
										b !== void 0 ? console.log(d, b) : console.log(d);
									}),
									e.debug && e.debug("Debug Mode On."))
								: (e.debug = !1);
						}),
						(e.initOptions = function (n) {
							e.checkDebugMode(n),
								(e.listener = (n && n.listener) || document),
								(e.afterCodeSequenceCallback =
									(typeof n == "function" && n) ||
									(n && typeof n.callback == "function" && n.callback) ||
									e.defaultCallback);
						}),
						(e.init = function () {
							(e.input = ""),
								(e.konamiCodeChar = "38384040373937396665"),
								(e.konamiCodeGesture = "upupdndnltrtltrttptp"),
								(e.startX = 0),
								(e.startY = 0),
								(e.stopX = 0),
								(e.stopY = 0),
								(e.tap = !1),
								(e.capture = !1),
								(p._numberOfInstance = p._numberOfInstance
									? p._numberOfInstance + 1
									: 1),
								e.initOptions(M),
								e.listenCodeCharSequence(),
								e.listenCodeGestureSequence();
						}),
						e.init();
				}),
					(v = (y = this).KonamiCode),
					((g = y.KonamiCode = f).noConflict = function () {
						return (y.KonamiCode = v), g;
					}),
					(k = function () {
						return f;
					}.call(s, a, s, i)) === void 0 || (i.exports = k),
					i.exports && (i.exports = f);
			},
		},
		O = {};
	function h(i) {
		var s = O[i];
		if (s !== void 0) {
			return s.exports;
		}
		var a = (O[i] = { exports: {} });
		return N[i].call(a.exports, a, a.exports, h), a.exports;
	}
	(h.n = (i) => {
		var s = i && i.__esModule ? () => i.default : () => i;
		return h.d(s, { a: s }), s;
	}),
		(h.d = (i, s) => {
			for (var a in s) {
				h.o(s, a) &&
					!h.o(i, a) &&
					Object.defineProperty(i, a, { enumerable: !0, get: s[a] });
			}
		}),
		(h.o = (i, s) => Object.prototype.hasOwnProperty.call(i, s)),
		(() => {
			const i = (o) =>
					typeof o == "number"
						? o
						: Math.floor(Math.random() * (o.max - o.min + 1)) + o.min,
				s = (o) => (typeof o == "function" ? o() : o),
				a = (o) => {
					const t = o.slice();
					for (let u = t.length - 1; u > 0; u -= 1) {
						const C = Math.floor(Math.random() * (u + 1)),
							w = t[u];
						(t[u] = t[C]), (t[C] = w);
					}
					return t;
				};
			class k {
				#o = 1;
				#n;
				#e;
				#t;
				element;
				constructor(t) {
					var u;
					(this.element = document.createElement("button")),
						(this.element.className = t.className),
						(this.element.textContent = (u = t.emojis)[
							Math.floor(Math.random() * u.length)
						]),
						this.element.setAttribute("role", "img"),
						(this.element.style.fontSize = `${i(t.physics.fontSize)}px`),
						(this.element.style.transition = "16ms opacity, 16ms transform"),
						(this.#n = t.physics),
						(this.#e = {
							rotation: i(t.physics.rotation),
							x: t.position.x,
							y: t.position.y,
						}),
						(this.#t = {
							rotation: i(t.physics.initialVelocities.rotation),
							x: i(t.physics.initialVelocities.x),
							y: i(t.physics.initialVelocities.y),
						}),
						this.updateElement(),
						t.process?.(this.element),
						t.container.appendChild(this.element);
				}
				updateElement() {
					(this.element.style.opacity = `${this.#o}`),
						(this.element.style.transform = `translate(${this.#e.x}px, ${this.#e.y}px) rotate(${Math.round(this.#e.rotation)}deg)`);
				}
				act(t) {
					if (
						this.#n.opacityDecay &&
						((this.#o -= t / (this.#n.opacityDecay * this.#n.framerate)),
						this.#o <= 0)
					) {
						return !0;
					}
					(this.#t.rotation *= this.#n.rotationDeceleration),
						(this.#t.y += this.#n.gravity),
						(this.#e.rotation += this.#t.rotation),
						(this.#e.x += (this.#t.x * t) / this.#n.framerate),
						(this.#e.y += (this.#t.y * t) / this.#n.framerate);
					const u = window.outerHeight || document.documentElement.clientHeight,
						C = window.outerWidth || document.documentElement.clientWidth;
					return !this.#n.preserveOutOfBounds &&
						(this.#e.y - this.element.clientHeight > u + 350 ||
							this.#e.y + this.element.clientHeight < -350 ||
							this.#e.x - this.element.clientWidth > C + 350 ||
							this.#e.x + this.element.clientWidth < -350)
						? !0
						: (this.updateElement(), !1);
				}
				dispose() {
					this.element.parentElement !== null &&
						this.element.parentElement.removeChild(this.element);
				}
				update(t) {
					t.opacity !== void 0 && (this.#o = t.opacity),
						t.velocity !== void 0 &&
							(t.velocity.rotation !== void 0 &&
								(this.#t.rotation = t.velocity.rotation),
							t.velocity.x !== void 0 && (this.#t.x = t.velocity.x),
							t.velocity.y !== void 0 && (this.#t.y = t.velocity.y));
				}
				get opacity() {
					return this.#o;
				}
				get position() {
					return this.#e;
				}
				get velocity() {
					return this.#t;
				}
			}
			const y = [
					"😁",
					"😂",
					"🤣",
					"😃",
					"😆",
					"😍",
					"🤩",
					"😎",
					"🤗",
					"🥳",
					"🤖",
					"😻",
					"😹",
					"🐱",
					"🐶",
					"🙈",
					"🙉",
					"🙊",
					"🏄",
					"💪",
					"👌",
					"👋",
					"🙌",
					"🫶",
					"💝",
					"💖",
					"💗",
					"🧡",
					"💛",
					"💚",
					"💙",
					"💜",
					"❤️‍🔥",
					"🔥",
					"🚀",
					"⛄",
					"🦩",
					"🍍",
					"💐",
					"🦾",
					"✨",
					"🎉",
					"💯",
				],
				f = "data-emoji-blast-events-initialized",
				v = new WeakMap(),
				g = new Set(),
				G = "emoji-styles",
				M = (() => {
					let o;
					return () => (
						o?.parentNode === document.body ||
							((o = document.createElement("div")), document.body.prepend(o)),
						o
					);
				})(),
				r = () => Math.floor(14 * Math.random()) + 14,
				e = {
					onClick({ actor: o }) {
						o.update({ opacity: 1, velocity: { y: o.velocity.y / 2 - 15 } });
					},
				},
				p = {
					fontSize: { max: 28, min: 14 },
					framerate: 60,
					gravity: 0.35,
					initialVelocities: {
						rotation: { max: 7, min: -7 },
						x: { max: 7, min: -7 },
						y: { max: -7, min: -21 },
					},
					preserveOutOfBounds: !1,
					rotation: { max: 45, min: -45 },
					rotationDeceleration: 0.98,
				},
				n = () => ({
					x: Math.random() * innerWidth,
					y: Math.random() * innerHeight,
				}),
				d = () => 700 + Math.floor(1401 * Math.random());
			var b = h(965),
				L = h.n(b);
			window.initializeKonamiEmojiBlast = (o) => {
				let t;
				const u = new (L())(() => {
					t
						? (t.cancel(), (t = void 0))
						: ((t = ((C = {}) => {
								const { interval: w = d, scheduler: K = setTimeout } = C;
								let I = !1;
								const V = () => {
										((q = {}) => {
											const {
													className: X = G,
													container: z = M,
													emojiCount: A = r,
													emojis: W = y,
													events: _ = e,
													position: $ = n,
													process: H,
													uniqueness: B = 1 / 0,
												} = q,
												Y = s(z);
											((c) => {
												if (g.has(c)) {
													return;
												}
												g.add(c);
												const l = document.createElement("style");
												l.setAttribute("type", "text/css"),
													l.appendChild(
														document.createTextNode(`
		.${c} {
			background: none;
			border: none;
			cursor: default;
			height: 2em;
			margin-left: -1em;
			margin-top: -1em;
			position: fixed;
			user-select: none;
			width: 2em;
			z-index: 2147483647;
		}
	`),
													),
													document.head.appendChild(l);
											})(X);
											const F = {
													...p,
													...q.physics,
													initialVelocities: {
														...p.initialVelocities,
														...(q.physics !== void 0
															? q.physics.initialVelocities
															: {}),
													},
												},
												P = {
													className: X,
													container: Y,
													emojis: a(s(W)).slice(0, s(B)),
													physics: F,
													position: s($),
													process: H,
												},
												J = s(A),
												T = [];

											for (let c = 0; c < J; c += 1) {
												T.push(new k(P));
											}
											(function (c) {
												let l = performance.now();
												const x = (m) => {
													const E = m - l;
													for (let S = 0; S < c.length; S += 1) {
														const j = c[S];
														j.act(E) && (j.dispose(), c.splice(S, 1), (S -= 1));
													}
													c.length !== 0 && ((l = m), requestAnimationFrame(x));
												};
												requestAnimationFrame(x);
											})(T),
												(function (c, l, x) {
													for (const m of c) {
														v.set(m.element, m);
													}
													l.hasAttribute(f) ||
														(l.setAttribute(f, "true"),
														l.addEventListener("click", (m) => {
															const E = m.target && v.get(m.target);
															E && x.onClick({ actor: E, event: m });
														}));
												})(T, Y, _);
										})(C);
									},
									D = () => {
										I ||
											(document.visibilityState === "visible" && V(),
											K(D, s(w)));
									};
								return (
									K(D, 0),
									{
										blast: V,
										cancel() {
											I = !0;
										},
									}
								);
							})()),
							o?.());
				});
				return () => {
					t?.cancel(), u.disable();
				};
			};
		})();
})();
