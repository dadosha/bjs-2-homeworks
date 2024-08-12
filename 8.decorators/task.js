//Задача № 1
function cachingDecoratorNew(func) {
    let cache_list = [];

    function wrapper(...args) {
        const hash = md5([...args])
        if (cache_list.find(cache => cache.hasOwnProperty(hash))) {
            return "Из кеша: " + cache_list.find(cache => cache.hasOwnProperty(hash))[hash]
        }

        if (cache_list.length === 5) {
            cache_list.shift();
        }

        const result = func(...args);
        cache_list.push({
            [hash]: result
        });
        console.log(cache_list);
        return "Вычисляем: " + result;
    }

    return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    wrapper.count = 0;
    wrapper.allCount = 0;

    function wrapper(...args) {
        wrapper.allCount++;
        if (timeoutId === null) {
            func(...args);
            wrapper.count++;
        }
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            wrapper.count++;
            func(...args);
        }, delay);
    }

    return wrapper;
}