import topPlayer from './firstPlayerList';
import lastPlayer from './thirdPlayerList';
import middlePlayer from './secondPlayerList';

const fakeData = [...topPlayer, ...lastPlayer, ...middlePlayer];


const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(fakeData);

export default fakeData;