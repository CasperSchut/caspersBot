function codeBlock(language, code) {
	return `\`\`\`${language}\n${code}\`\`\``;
}

module.exports = { codeBlock };