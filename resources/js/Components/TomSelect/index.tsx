import { createRef, useEffect, useMemo, useRef } from "react";
import { setValue, init, updateValue } from "./tom-select";
import { TomSettings, RecursivePartial } from "tom-select/src/types/index";
import TomSelectPlugin from "tom-select";
import clsx from "clsx";

export interface TomSelectElement extends HTMLSelectElement {
    TomSelect: TomSelectPlugin;
}

export interface TomSelectProps
    extends Omit<
        React.PropsWithChildren & React.ComponentPropsWithoutRef<"select">,
        "onChange"
    > {
    value: string | string[];
    onOptionAdd?: (value: string) => void;
    onChange(
        value: React.SetStateAction<string> | React.SetStateAction<string[]>
    ): void;
    options?: RecursivePartial<TomSettings>;
    getRef?: (el: TomSelectElement) => void;
}

function TomSelect({
    className = "",
    options = {},
    value = "",
    onOptionAdd = () => {},
    onChange = () => {},
    getRef = () => {},
    ...computedProps
}: TomSelectProps) {
    const initialRender = useRef(true);
    const tomSelectRef = createRef<TomSelectElement>();

    // Compute all default options
    const computedOptions = useMemo(() => {
        let finalOptions: TomSelectProps["options"] = {
            ...options,
            plugins: {
                dropdown_input: {},
                ...options.plugins,
            },
        };

        if (Array.isArray(value)) {
            finalOptions = {
                persist: false,
                create: true,
                onDelete: function (values: string[]) {
                    return confirm(
                        values.length > 1
                            ? "Are you sure you want to remove these " +
                                  values.length +
                                  " items?"
                            : 'Are you sure you want to remove "' +
                                  values[0] +
                                  '"?'
                    );
                },
                ...finalOptions,
                plugins: {
                    remove_button: {
                        title: "Remove this item",
                    },
                    ...finalOptions.plugins,
                },
            };
        }

        return finalOptions;
    }, [options, value]);

    useEffect(() => {
        if (tomSelectRef.current) {
            getRef(tomSelectRef.current);

            if (initialRender.current) {
                // Unique attribute
                tomSelectRef.current.setAttribute(
                    "data-id",
                    "_" + Math.random().toString(36).slice(2, 9)
                );

                // Clone the select element to prevent tom select remove the original element
                const clonedEl = tomSelectRef.current.cloneNode(
                    true
                ) as TomSelectElement;

                // Save initial classnames
                const classNames = tomSelectRef.current?.getAttribute("class");
                classNames &&
                    clonedEl.setAttribute("data-initial-class", classNames);

                // Hide original element
                tomSelectRef.current?.parentNode &&
                    tomSelectRef.current?.parentNode.appendChild(clonedEl);
                tomSelectRef.current.setAttribute("hidden", "true");

                // Initialize tom select
                setValue(clonedEl, {
                    className,
                    options,
                    value,
                    onOptionAdd,
                    onChange,
                    getRef,
                    ...computedProps,
                });
                init(
                    tomSelectRef.current,
                    clonedEl,
                    {
                        className,
                        options,
                        value,
                        onOptionAdd,
                        onChange,
                        getRef,
                        ...computedProps,
                    },
                    computedOptions
                );

                initialRender.current = false;
            } else {
                const clonedEl = document.querySelectorAll(
                    `[data-id='${tomSelectRef.current.getAttribute(
                        "data-id"
                    )}'][data-initial-class]`
                )[0] as TomSelectElement;
                updateValue(
                    tomSelectRef.current,
                    clonedEl,
                    value,
                    {
                        className,
                        options,
                        value,
                        onOptionAdd,
                        onChange,
                        getRef,
                        ...computedProps,
                    },
                    computedOptions
                );
            }
        }
    }, [tomSelectRef, value, className]);

    return (
        <select
            {...computedProps}
            ref={tomSelectRef}
            value={value}
            onChange={(event) => {
                onChange(event.target.value);
            }}
            className={clsx(["tom-select", className])}
        >
            {computedProps.children}
        </select>
    );
}

export default TomSelect;
