//Задача № 1
function cachingDecoratorNew(func) {
    let cache_list = [];

    return (...args) => {
        const hash = md5([...args])
        if (cache_list.find(cache => cache.hasOwnProperty(hash))) {
            return "Из кеша: " + cache_list.find(cache => cache.hasOwnProperty(hash))[hash]
        }

        if (cache_list.length === 5) {
            cache_list.shift();
        }

        const result = func(...args);
        cache_list.push({[hash]: result});
        console.log(cache_list);
        return "Вычисляем: " + result;
    }
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    timeoutIdle.count = 0;
    timeoutIdle.allCount = 0;

    function timeoutIdle(...args) {
        timeoutIdle.allCount++;
        if (timeoutId === null) {
            func(...args);
            timeoutIdle.count++;
        }
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            timeoutIdle.count++;
            func(...args);
        }, delay);
    }

    return timeoutIdle;
}