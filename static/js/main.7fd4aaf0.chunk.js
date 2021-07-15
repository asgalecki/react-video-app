(this["webpackJsonpreact-video-app"] =
	this["webpackJsonpreact-video-app"] || []).push([
	[0],
	{
		100: function (e, t, n) {
			"use strict";
			n.r(t);
			n(57), n(58);
			var a = n(2),
				c = n.n(a),
				i = n(18),
				r = n.n(i),
				s = (n(64), n(11)),
				o = n(12),
				u = n(30),
				d = {
					ADD_VIDEO: function (e, t) {
						return [t.video].concat(Object(u.a)(e));
					},
					REMOVE_VIDEO: function (e, t) {
						return e.filter(function (e) {
							return e.id !== t.video.id;
						});
					},
					REMOVE_ALL_VIDEOS: function () {
						return [];
					},
					SORT_VIDEOS: function (e, t) {
						if ("latest" === t.sortFilter)
							return Object(u.a)(e).sort(function (e, t) {
								return t.added - e.added;
							});
						if ("oldest" === t.sortFilter)
							return Object(u.a)(e).sort(function (e, t) {
								return e.added - t.added;
							});
					},
					FAVOURITE_VIDEO: function (e, t) {
						var n = e.findIndex(function (e) {
								return e.id === t.video.id;
							}),
							a = Object(u.a)(e);
						return (
							(a[n] = Object(o.a)(
								Object(o.a)({}, a[n]),
								{},
								{ isFavourite: !a[n].isFavourite }
							)),
							a
						);
					},
					__default__: function (e) {
						return e;
					},
				},
				l = function (e, t) {
					var n;
					return (null !== (n = d[t.type]) && void 0 !== n ? n : d.__default__)(
						e,
						t
					);
				};
			var j = n(3),
				b = Object(a.createContext)({}),
				m = function (e) {
					var t = Object(a.useReducer)(l, [], function () {
							var e = localStorage.getItem("videos");
							return e ? JSON.parse(e) : [];
						}),
						n = Object(s.a)(t, 2),
						c = n[0],
						i = n[1];
					return (
						Object(a.useEffect)(
							function () {
								localStorage.setItem("videos", JSON.stringify(c));
							},
							[c]
						),
						Object(j.jsx)(b.Provider, {
							value: { videos: c, dispatchVideo: i },
							children: e.children,
						})
					);
				},
				O = function (e) {
					for (
						var t = {
								youtube:
									/(((https?:\/\/)?(www\.|m\.|youtu\.)?(youtube(-nocookie)?|be)\.?(com)?\/.*)|(^(watch\?)?(v=)?[\w\-]{11}))/,
								vimeo: /(((https?:\/\/)?vimeo\.com\/\d{9}$)|(^\d{9}$))/,
							},
							n = ["youtube", "vimeo"],
							a = 0;
						a < n.length;
						a++
					) {
						if (t[n[a]].test(e)) return n[a];
					}
					return "unknown";
				},
				v = function (e, t) {
					return (
						t.match({ youtube: /[\w\d\-]{11}/, vimeo: /[\d]{9}/ }[e])[0] ||
						"error"
					);
				},
				p = function (e, t) {
					return e.some(function (e) {
						return e.id === t;
					});
				},
				f = function (e, t) {
					var n = O(t),
						a = v(n, t);
					return { type: n, videoId: a, isRepeated: p(e, a) };
				},
				h = n(13),
				x = n.n(h),
				_ = n(22),
				g = String("AIzaSyDW9LsQYKuJf8Sk1iP0NiRmlx6mserBHtU"),
				y = (function () {
					var e = Object(_.a)(
						x.a.mark(function e(t) {
							var n, a, c, i;
							return x.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return (
												"https://www.googleapis.com/youtube/v3/videos",
												(n = "?id="
													.concat(t, "&key=")
													.concat(
														g,
														"&part=snippet,statistics&fields=items(id,snippet,statistics)"
													)),
												(e.next = 4),
												fetch(
													"https://www.googleapis.com/youtube/v3/videos" + n
												)
											);
										case 4:
											return (a = e.sent), (e.next = 7), a.json();
										case 7:
											return (
												(c = e.sent),
												(i = {
													id: c.items[0].id,
													type: "youtube",
													title: c.items[0].snippet.title,
													likes: c.items[0].statistics.likeCount,
													views: c.items[0].statistics.viewCount,
													thumbnail: c.items[0].snippet.thumbnails.medium.url,
													embed: "https://www.youtube.com/embed/".concat(t),
													added: Date.now(),
													isFavourite: !1,
												}),
												e.abrupt("return", i)
											);
										case 10:
										case "end":
											return e.stop();
									}
							}, e);
						})
					);
					return function (t) {
						return e.apply(this, arguments);
					};
				})(),
				N = String("0831678609518d2255c9e239b32c697b"),
				w = (function () {
					var e = Object(_.a)(
						x.a.mark(function e(t) {
							var n, a, c, i;
							return x.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return (
												"https://api.vimeo.com/videos/",
												(n = "".concat(t)),
												(e.next = 4),
												fetch("https://api.vimeo.com/videos/" + n, {
													method: "GET",
													headers: { Authorization: "bearer ".concat(N) },
												})
											);
										case 4:
											return (a = e.sent), (e.next = 7), a.json();
										case 7:
											return (
												(c = e.sent),
												(i = {
													id: t,
													type: "vimeo",
													title: c.name,
													likes: c.metadata.connections.likes.total,
													views: 0,
													thumbnail: c.pictures.sizes[2].link,
													embed: "https://player.vimeo.com/video/".concat(t),
													added: Date.now(),
													isFavourite: !1,
												}),
												e.abrupt("return", i)
											);
										case 10:
										case "end":
											return e.stop();
									}
							}, e);
						})
					);
					return function (t) {
						return e.apply(this, arguments);
					};
				})(),
				E = (function () {
					var e = Object(_.a)(
						x.a.mark(function e(t, n) {
							var a;
							return x.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return (
												(e.next = 2),
												k(t, n)
													.then(function (e) {
														return e;
													})
													.catch(function (e) {
														return console.log(e);
													})
											);
										case 2:
											return (a = e.sent), e.abrupt("return", a);
										case 4:
										case "end":
											return e.stop();
									}
							}, e);
						})
					);
					return function (t, n) {
						return e.apply(this, arguments);
					};
				})(),
				k = (function () {
					var e = Object(_.a)(
						x.a.mark(function e(t, n) {
							var a;
							return x.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											(e.t0 = t),
												(e.next =
													"youtube" === e.t0 ? 3 : "vimeo" === e.t0 ? 7 : 11);
											break;
										case 3:
											return (e.next = 5), y(n);
										case 5:
											return (a = e.sent), e.abrupt("break", 12);
										case 7:
											return (e.next = 9), w(n);
										case 9:
											return (a = e.sent), e.abrupt("break", 12);
										case 11:
											return e.abrupt("break", 12);
										case 12:
											return e.abrupt("return", a);
										case 13:
										case "end":
											return e.stop();
									}
							}, e);
						})
					);
					return function (t, n) {
						return e.apply(this, arguments);
					};
				})(),
				C = n(101),
				I = n(102),
				S = n(103),
				V = n(104),
				F = n(105),
				D = n(125),
				T = n(54),
				L = n(26),
				A =
					(n(67),
					function () {
						var e = Object(a.useContext)(b),
							t = e.videos,
							n = e.dispatchVideo,
							c = Object(a.useState)(""),
							i = Object(s.a)(c, 2),
							r = i[0],
							o = i[1],
							u = Object(a.useState)(""),
							d = Object(s.a)(u, 2),
							l = d[0],
							m = d[1];
						return Object(j.jsxs)(C.a, {
							onSubmit: function (e) {
								e.preventDefault();
								var a = f(t, r),
									c = a.type,
									i = a.videoId,
									s = a.isRepeated;
								if ((o(""), !s && "unknown" !== c && "error" !== i))
									return (
										E(c, i)
											.then(function (e) {
												n({ type: "ADD_VIDEO", video: e });
											})
											.catch(function (e) {
												return m(e);
											}),
										void m("")
									);
								m(
									s
										? "You already have this video added."
										: "It seems that something went wrong. Pleasy try again."
								);
							},
							className: "my-4 mx-auto text-center add-video__form",
							children: [
								Object(j.jsxs)(I.a, {
									children: [
										Object(j.jsx)(S.a, {
											htmlFor: "addVideo",
											className: "add-video__label",
											children: "Add Video",
										}),
										Object(j.jsxs)(V.a, {
											children: [
												Object(j.jsx)(F.a, {
													type: "text",
													name: "addVideo",
													id: "addVideo",
													className: "m-auto form-control add-video__input",
													value: r,
													onChange: function (e) {
														return o(e.target.value);
													},
													autoComplete: "off",
													required: !0,
												}),
												Object(j.jsx)(D.a, {
													addonType: "append",
													children: Object(j.jsx)(T.a, {
														type: "submit",
														children: "+",
													}),
												}),
											],
										}),
									],
								}),
								Object(j.jsx)(L.a, {
									in: !!l,
									children: Object(j.jsx)("p", {
										className: "my-2 text-center add-video__message",
										children: l,
									}),
								}),
							],
						});
					}),
				R = n(106),
				G =
					(n(77),
					function () {
						return Object(j.jsx)(R.a, {
							className: "mb-0 header",
							children: Object(j.jsx)("header", {
								className: "text-center",
								children: Object(j.jsx)("h1", {
									className: "my-4 text-center",
									children: Object(j.jsx)("a", {
										href: "./index.html",
										className: "header__link",
										children: "Video App",
									}),
								}),
							}),
						});
					}),
				U = {
					SELECT: function (e, t) {
						return Object(o.a)(Object(o.a)({}, e), {}, { selected: t.select });
					},
					UPDATE_PAGES: function (e, t) {
						return Object(o.a)(Object(o.a)({}, e), {}, { pages: t.pages });
					},
					TOGGLE_FAVOURITE: function (e, t) {
						return Object(o.a)(
							Object(o.a)({}, e),
							{},
							{ isFavourite: t.isFavourite }
						);
					},
					TOGGLE_DISPLAY: function (e, t) {
						var n = e.selected;
						!1 === t.display && (n = 1);
						return Object(o.a)(
							Object(o.a)({}, e),
							{},
							{ selected: n, display: t.display }
						);
					},
					__default__: function (e) {
						return e;
					},
				},
				P = function (e, t) {
					var n;
					return (null !== (n = U[t.type]) && void 0 !== n ? n : U.__default__)(
						e,
						t
					);
				};
			var M = Object(a.createContext)({}),
				Y = function (e) {
					var t = Object(a.useReducer)(P, {
							selected: 1,
							pages: [],
							isFavourite: !1,
							display: !0,
						}),
						n = Object(s.a)(t, 2),
						c = n[0],
						i = n[1];
					return Object(j.jsx)(M.Provider, {
						value: { user: c, dispatchUser: i },
						children: e.children,
					});
				},
				J = n(14),
				z = n(16),
				B = n(107),
				H = n(108),
				$ = n(109),
				q = n(110),
				K = n(111),
				Q = n(112),
				W = n(126),
				X = n(127),
				Z = n(128),
				ee = n(113),
				te =
					(n(81),
					function () {
						var e = Object(a.useContext)(b).dispatchVideo,
							t = Object(a.useContext)(M).dispatchUser,
							n = Object(a.useState)(!1),
							c = Object(s.a)(n, 2),
							i = c[0],
							r = c[1],
							o = Object(a.useState)(!1),
							u = Object(s.a)(o, 2),
							d = u[0],
							l = u[1],
							m = Object(a.useState)(!0),
							O = Object(s.a)(m, 2),
							v = O[0],
							p = O[1],
							f = function (t) {
								var n = t.target.innerHTML.toLowerCase();
								e({ type: "SORT_VIDEOS", sortFilter: n });
							};
						return Object(j.jsxs)(B.a, {
							expand: "md",
							className: "navbar navbar-dark navigation",
							children: [
								Object(j.jsx)(H.a, {
									onClick: function () {
										r(!i);
									},
								}),
								Object(j.jsx)($.a, {
									isOpen: i,
									navbar: !0,
									children: Object(j.jsxs)(q.a, {
										className: "ml-auto",
										navbar: !0,
										children: [
											Object(j.jsx)(K.a, {
												onClick: function () {
													e({ type: "REMOVE_ALL_VIDEOS" }),
														t({ type: "TOGGLE_FAVOURITE", isFavourite: !1 }),
														l(!1);
												},
												children: Object(j.jsxs)(Q.a, {
													href: "#",
													children: [
														Object(j.jsx)(z.a, { icon: J.d }),
														" Remove All",
													],
												}),
											}),
											Object(j.jsxs)(W.a, {
												nav: !0,
												inNavbar: !0,
												children: [
													Object(j.jsx)(X.a, {
														nav: !0,
														caret: !0,
														children: "Filter by:",
													}),
													Object(j.jsxs)(Z.a, {
														right: !0,
														className: "navigation__dropdown",
														children: [
															Object(j.jsx)(ee.a, {
																className: "navigation__dropdown",
																onClick: function (e) {
																	return f(e);
																},
																children: "Latest",
															}),
															Object(j.jsx)(ee.a, {
																className: "navigation__dropdown",
																onClick: function (e) {
																	return f(e);
																},
																children: "Oldest",
															}),
														],
													}),
												],
											}),
											Object(j.jsx)(K.a, {
												children: Object(j.jsx)(Q.a, {
													children: Object(j.jsx)(z.a, {
														icon: J.b,
														onClick: function () {
															t({ type: "TOGGLE_FAVOURITE", isFavourite: !d }),
																t({ type: "SELECT", select: 1 }),
																l(!d);
														},
														className: "navigation__icon ".concat(
															d ? "navigation__icon--active" : ""
														),
														"data-testid": "filter-favourite",
													}),
												}),
											}),
											Object(j.jsx)(K.a, {
												children: Object(j.jsx)(Q.a, {
													href: "#",
													children: Object(j.jsx)(z.a, {
														icon: v ? J.c : J.a,
														onClick: function () {
															t({ type: "TOGGLE_DISPLAY", display: !v }), p(!v);
														},
														className: "navigation__icon",
													}),
												}),
											}),
										],
									}),
								}),
							],
						});
					}),
				ne = n(121),
				ae = n(116),
				ce = n(115),
				ie = n(117),
				re = n(118),
				se = n(119),
				oe = n(120),
				ue = n(33),
				de = n(129),
				le = n(114),
				je =
					(n(96),
					function (e) {
						var t = e.isOpen,
							n = e.toggle,
							a = e.video;
						return Object(j.jsx)(de.a, {
							isOpen: t,
							toggle: n,
							style: { marginTop: "".concat(window.scrollY + 60, "px") },
							className:
								"modal__container modal__container--color modal__container--border",
							contentClassName: "modal__container--border",
							backdropClassName: "modal__container--size",
							children: Object(j.jsxs)(le.a, {
								className: "p-0 modal__body modal__body--border",
								children: [
									Object(j.jsx)("button", {
										className: "modal__body modal__close-btn",
										onClick: n,
										children: "\xd7",
									}),
									Object(j.jsx)("div", {
										className: "embed-responsive embed-responsive-16by9",
										children: Object(j.jsx)("iframe", {
											src: a.embed,
											title: a.title,
											frameBorder: "0",
											className: "embed-responsive-item",
											allow:
												"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen",
											allowFullScreen: !0,
											sandbox: "allow-scripts allow-same-origin",
										}),
									}),
								],
							}),
						});
					}),
				be =
					(n(97),
					function (e) {
						var t = e.video,
							n = Object(a.useContext)(b).dispatchVideo,
							c = Object(a.useState)(t.isFavourite),
							i = Object(s.a)(c, 2),
							r = i[0],
							o = i[1],
							u = Object(a.useState)(!1),
							d = Object(s.a)(u, 2),
							l = d[0],
							m = d[1],
							O = function () {
								m(!l);
							};
						return Object(j.jsxs)(ce.a, {
							className: "my-2 video__card",
							children: [
								Object(j.jsx)(je, { isOpen: l, toggle: O, video: t }),
								Object(j.jsxs)(ae.a, {
									className: "no-gutters",
									children: [
										Object(j.jsx)(ie.a, {
											width: "100%",
											className: "col-sm-5 p-2 video__card--cursor",
											src: t.thumbnail,
											onClick: O,
											alt: "",
										}),
										Object(j.jsxs)(re.a, {
											className:
												"ml-3 my-2 p-0 col-sm-6 d-flex flex-column justify-content-between",
											children: [
												Object(j.jsxs)("div", {
													children: [
														Object(j.jsx)(se.a, {
															onClick: O,
															className: "video__card--cursor",
															children: t.title,
														}),
														Object(j.jsxs)(oe.a, {
															children: [
																0 !== Number(t.views)
																	? "".concat(
																			Number(t.views).toLocaleString(),
																			" views / "
																	  )
																	: "",
																Number(t.likes).toLocaleString(),
																" likes",
															],
														}),
														Object(j.jsx)(oe.a, {
															className: "text-muted",
															children: "".concat(
																Object(ue.a)(t.added),
																" ago"
															),
														}),
													],
												}),
												Object(j.jsxs)("div", {
													className: "mt-2 mr-2 d-flex justify-content-between",
													children: [
														Object(j.jsx)(z.a, {
															icon: J.b,
															"data-testid": "video-favourite",
															className: "video__icon ".concat(
																r ? "video__icon--active" : ""
															),
															onClick: function () {
																o(!r), n({ type: "FAVOURITE_VIDEO", video: t });
															},
														}),
														Object(j.jsx)(z.a, {
															icon: J.d,
															className: "video__icon",
															onClick: function () {
																n({ type: "REMOVE_VIDEO", video: t });
															},
														}),
													],
												}),
											],
										}),
									],
								}),
							],
						});
					}),
				me =
					(n(98),
					function (e) {
						var t = e.video,
							n = Object(a.useContext)(b).dispatchVideo,
							c = Object(a.useState)(t.isFavourite),
							i = Object(s.a)(c, 2),
							r = i[0],
							o = i[1],
							u = Object(a.useState)(!1),
							d = Object(s.a)(u, 2),
							l = d[0],
							m = d[1],
							O = function () {
								m(!l);
							};
						return Object(j.jsxs)(ce.a, {
							className: "m-1 p-0 col-sm-3 video__card",
							children: [
								Object(j.jsx)(je, { isOpen: l, toggle: O, video: t }),
								Object(j.jsxs)("div", {
									className: "m-2 d-flex justify-content-between",
									children: [
										Object(j.jsx)(z.a, {
											icon: J.b,
											"data-testid": "video-favourite",
											onClick: function () {
												o(!r), n({ type: "FAVOURITE_VIDEO", video: t });
											},
											className: "video__icon ".concat(
												r ? "video__icon--active" : ""
											),
										}),
										Object(j.jsx)(z.a, {
											icon: J.d,
											className: "video__icon",
											onClick: function () {
												return n({ type: "REMOVE_VIDEO", video: t });
											},
										}),
									],
								}),
								Object(j.jsx)(ie.a, {
									top: !0,
									className: "video__card--cursor",
									src: t.thumbnail,
									onClick: O,
									alt: "",
								}),
								Object(j.jsxs)(re.a, {
									className: "p-2",
									children: [
										Object(j.jsx)(se.a, {
											onClick: O,
											className: "my-0 video__card--cursor video__title",
											children: t.title,
										}),
										Object(j.jsxs)(oe.a, {
											className: "my-0",
											children: [
												0 !== Number(t.views)
													? "".concat(
															Number(t.views).toLocaleString(),
															" views / "
													  )
													: "",
												Object(j.jsxs)("span", {
													className: "video__likes",
													children: [
														Number(t.likes).toLocaleString(),
														" likes",
													],
												}),
											],
										}),
										Object(j.jsx)(oe.a, {
											className: " my-0 text-muted",
											children: "".concat(Object(ue.a)(t.added), " ago"),
										}),
									],
								}),
							],
						});
					}),
				Oe = function (e, t, n) {
					return e
						.filter(function (e) {
							return n ? e.isFavourite === n : e;
						})
						.map(function (e) {
							return t(e);
						});
				},
				ve = function (e) {
					var t = e.currentItems,
						n = Object(a.useContext)(M).user,
						c = n.isFavourite,
						i = n.display,
						r = Oe(
							t,
							function (e) {
								return i
									? Object(j.jsx)(be, { video: e }, e.id)
									: Object(j.jsx)(me, { video: e }, e.id);
							},
							c
						);
					return i
						? Object(j.jsx)(ne.a, {
								className: "mx-auto text-light",
								children: r,
						  })
						: Object(j.jsx)("div", {
								className: "mx-auto text-light",
								"data-testid": "grid-display",
								children: Object(j.jsx)(ae.a, {
									className: "row-cols-3 justify-content-center",
									children: r,
								}),
						  });
				},
				pe = function (e) {
					return e ? 3 : 9;
				},
				fe = function (e, t, n, a) {
					for (
						var c = t * a, i = c - a, r = 1;
						r <= Math.ceil(e.length / a);
						r++
					)
						n.push(r);
					return { currentItems: e.slice(i, c), pages: n };
				},
				he = function (e) {
					return e.some(function (e) {
						return true === e.isFavourite;
					})
						? e.slice().filter(function (e) {
								return true === e.isFavourite;
						  })
						: [];
				},
				xe = function (e, t, n, a) {
					var c = [],
						i = he(e);
					if (
						(i || (c = e), i && i.length <= a && (c = i), i && i.length > a)
					) {
						var r = fe(i, t, n, a);
						(c = r.currentItems), (n = r.pages);
					}
					return { currentItems: c, pages: n };
				},
				_e = function (e, t, n, a) {
					var c = 0,
						i = [],
						r = [],
						s = pe(n);
					if (
						(e.length || c++,
						!a && e.length <= s && 0 === c && ((r = e), c++),
						a && e.length && 0 === c)
					) {
						var o = xe(e, t, i, s);
						(r = o.currentItems), (i = o.pages), c++;
					}
					if ((!a && e.length <= s && 0 === c && ((r = e), c++), 0 === c)) {
						var u = fe(e, t, i, s);
						(r = u.currentItems), (i = u.pages);
					}
					return { currentItems: r, pages: i };
				},
				ge = function () {
					var e = Object(a.useContext)(b).videos,
						t = Object(a.useContext)(M),
						n = t.user,
						c = t.dispatchUser,
						i = n.selected,
						r = n.isFavourite,
						s = n.display,
						o = _e(e, i, s, r),
						u = o.currentItems,
						d = o.pages;
					return (
						Object(a.useEffect)(
							function () {
								c({ type: "UPDATE_PAGES", pages: d });
							},
							[e, s, r]
						),
						!u.length && r
							? Object(j.jsx)("p", {
									className: "text-center",
									children: "You have no favourite videos.",
							  })
							: u.length
							? Object(j.jsx)(ve, { currentItems: u })
							: Object(j.jsx)("p", {
									className: "text-center",
									children: "No videos added yet.",
							  })
					);
				},
				ye = n(122),
				Ne = n(123),
				we = n(124),
				Ee = function (e, t, n) {
					var a = t - 1,
						c = t + 1,
						i = n.length;
					switch (e) {
						case "\xab":
							return 1;
						case "\u2039":
							return 0 === a ? 1 : a;
						case "\u203a":
							return c > n.length ? n.length : c;
						case "\xbb":
							return i;
						default:
							return Number(e);
					}
				},
				ke =
					(n(99),
					function () {
						var e = Object(a.useContext)(M),
							t = e.user,
							n = e.dispatchUser,
							c = t.pages,
							i = t.selected,
							r = c.map(function (e) {
								return Object(j.jsx)(
									ye.a,
									{
										className: e === i ? "pagination__selected" : "",
										children: Object(j.jsx)(
											Ne.a,
											{
												className: "pagination__item",
												id: e,
												href: "#",
												children: e,
											},
											"pagination-".concat(e)
										),
									},
									"pagination-item-".concat(e)
								);
							});
						return r.length
							? Object(j.jsx)("section", {
									className: "my-2 d-flex justify-content-center",
									children: Object(j.jsxs)(we.a, {
										"aria-label": "Page navigation",
										onClick: function (e) {
											var t = e.target.lastChild.data || e.target.innerText[0],
												a = Ee(t, i, c);
											n({ type: "SELECT", select: a });
										},
										children: [
											Object(j.jsx)(ye.a, {
												children: Object(j.jsx)(Ne.a, {
													className: "pagination__item",
													first: !0,
													href: "#",
												}),
											}),
											Object(j.jsx)(ye.a, {
												children: Object(j.jsx)(Ne.a, {
													className: "pagination__item",
													previous: !0,
													href: "#",
												}),
											}),
											r,
											Object(j.jsx)(ye.a, {
												children: Object(j.jsx)(Ne.a, {
													className: "pagination__item",
													next: !0,
													href: "#",
												}),
											}),
											Object(j.jsx)(ye.a, {
												children: Object(j.jsx)(Ne.a, {
													className: "pagination__item",
													last: !0,
													href: "#",
												}),
											}),
										],
									}),
							  })
							: Object(j.jsx)("div", {
									className: "p-5",
									"data-testid": "no-pagination",
							  });
					});
			var Ce = function () {
				return Object(j.jsx)(m, {
					children: Object(j.jsx)(Y, {
						children: Object(j.jsxs)("div", {
							className: "container",
							children: [
								Object(j.jsx)(G, {}),
								Object(j.jsx)(te, {}),
								Object(j.jsx)(A, {}),
								Object(j.jsx)(ge, {}),
								Object(j.jsx)(ke, {}),
							],
						}),
					}),
				});
			};
			r.a.render(
				Object(j.jsx)(c.a.StrictMode, { children: Object(j.jsx)(Ce, {}) }),
				document.getElementById("root")
			);
		},
		64: function (e, t, n) {},
		67: function (e, t, n) {},
		77: function (e, t, n) {},
		81: function (e, t, n) {},
		96: function (e, t, n) {},
		97: function (e, t, n) {},
		98: function (e, t, n) {},
		99: function (e, t, n) {},
	},
	[[100, 1, 2]],
]);
//# sourceMappingURL=main.7fd4aaf0.chunk.js.map
