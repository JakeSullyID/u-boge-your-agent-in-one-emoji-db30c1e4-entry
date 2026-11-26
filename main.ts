import * as fs from 'fs';
import * as path from 'path';

// The genie captures an agent that exists solely to fulfil requests and grant outcomes like magic.
// It diligently does its operator's bidding while the operator sleeps, delivering results effortlessly.

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), '🧞', 'utf8');
