const fs = require('fs');
const yml = require('js-yaml');

describe("4 - Verifica as configurações da Action de linter", () => {
  const file = yml.safeLoad(fs.readFileSync('./actions/project.yml', 'utf8'));
  it('Será validado que o arquivo "project.yml" existe', () => {   
    const fileExists = fs.existsSync('./actions/project.yml');
    
    expect(fileExists).toBeTruthy();  
  });

  it('Será validado que a Action será executada somente em pull requests', () => {
    expect(file.on[0]).toBe('pull_request');
  });
  
  it('Será validado que o job está correto' , () => {
    expect(file.jobs).toHaveProperty('eslint');
  });

  it('Será validado que o eslint será executado na versão 20.04', () => {
    expect(file.jobs.eslint['runs-on']).toBe('ubuntu-20.04');
  });

  it('Será validado que o node será executado na versão 12', () => {
    expect(file.jobs.eslint.steps[1].with).toHaveProperty('node-version', 12);
  });
});