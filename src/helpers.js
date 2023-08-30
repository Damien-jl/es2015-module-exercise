import React from 'react';

function choice (items) {
    let item = Math.floor(Math.random() * items.length);
    return items[item];
}

function remove (item, items) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
            return [...items.slice(0,i), ...items.slice(i + 1)]
        }
     //   return undefined;
    }
}

export {choice, remove}