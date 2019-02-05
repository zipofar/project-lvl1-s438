#!/usr/bin/env node

import startGame from '..';
import buildGame from '../games/game-even';

const game = buildGame();
startGame(game);
