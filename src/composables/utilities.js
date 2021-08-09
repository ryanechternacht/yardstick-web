function capitalize (s) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function capitalizeEveryWord (str) {
  return str.split(/\s+/)
    .map(capitalize)
    .join(' ')
}

// Maps true/false into 'Yes'/'No'
// Only works for actual true/false (not truthy/falsy)
function boolToYesNo (bool) {
  if (bool === true) {
    return 'Yes'
  } else if (bool === false) {
    return 'No'
  } else {
    return null
  }
}

export function useUtilities () {
  return {
    capitalize,
    capitalizeEveryWord,
    boolToYesNo
  }
}
