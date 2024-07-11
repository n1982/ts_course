/* 
Дана функция head, которая возвращает либо первый символ переданной строки, либо первый элемент переданного массива.

Приведенные типы функции заведомо избыточны. Необходимо переписать их, используя подход перегрузки. */

function head(value: string): string
function head(value: number[]): number

function head(value: string | number[]): string | number {
    return value[0]
}
