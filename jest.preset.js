const nxPreset = require('@nx/jest/preset').default;
const workspaceRoot = process.env.NX_WORKSPACE_ROOT;

module.exports = {
  ...nxPreset,
  setupFiles: [`${workspaceRoot}/jest-setup.ts`],
};
