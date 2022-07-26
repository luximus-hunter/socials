const execa = require('execa');
const fs = require('fs');

(async () => {
    try {
        // checkout
        await execa('git', ['checkout', '--orphan', 'live']);

        // build
        console.log('🚧 Building');
        await execa('npm', ['run', 'build']);

        // add CNAME
        await fs.writeFile(`./dist/CNAME`, 'socials.lxms.nl', () => {});

        // add and commit
        await execa('git', ['--work-tree', 'dist', 'add', '--all']);
        await execa('git', ['--work-tree', 'dist', 'commit', '-m', '🌍 Live build ' + new Date().getDay() + '-' + new Date().getMonth() + '-' + new Date().getFullYear()]);

        // push to server
        console.log('🌍 Pushing');
        await execa('git', ['push', 'origin', 'HEAD:live', '--force']);
        await execa('git', ['checkout', '-f', 'master']);
        await execa('git', ['branch', '-D', 'live']);
        console.log('🚀 Deployed');
    } catch (e) {
        console.log(e.message);
        process.exit(1);
    }
})();
