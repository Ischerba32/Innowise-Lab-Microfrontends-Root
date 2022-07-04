export function prefix(location, ...prefixes) {
  return prefixes.some(
    (prefix) => location.href.indexOf(`${location.origin}/${prefix}`) !== -1
  );
}

export function home() {
  // The nav is always active
  return prefix(location, "");
}

export function todo(location) {
  return prefix(location, "todo");
}

export function mini_paint(location) {
  return prefix(location, "mini-paint");
}
