import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className = '',
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = `${s.button} ${disabled ? s.disabled : ''} 
      ${xType === 'default' ? s.default : ''} 
     ${xType === 'secondary' ? s.secondary : ''}
    ${xType === 'red' ? s.red : ''}
    ${className || ''}`;

    // Проверяем, что className не является undefined и содержит все необходимые классы
    const hasRequiredClasses = className && className.includes('button')
        && className.includes('disable') && (className.includes('default') || className.includes('secondary'));

    return (
        <button
            disabled={disabled}
            className={hasRequiredClasses ? finalClassName : finalClassName + ' default'}
            // Если не хватает какого-либо из классов, добавляем класс "default"
            {...restProps}
        />
    )
}

export default SuperButton
