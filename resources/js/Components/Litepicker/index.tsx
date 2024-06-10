import { createRef, useEffect, useRef } from "react";
import { setValue, init, reInit } from "src/Components/Litepicker/litepicker";
import LitepickerJs from "litepicker";
import { FormInput } from "src/Components/Form";
import { ILPConfiguration } from "litepicker/dist/types/interfaces";

export interface LitepickerElement extends HTMLInputElement {
    litePickerInstance: LitepickerJs;
}

type LitepickerConfig = Partial<ILPConfiguration>;

interface MainProps {
    options: {
        format?: string | undefined;
    } & LitepickerConfig;
    value: string;
    onChange: (date: string) => void;
    getRef: (el: LitepickerElement) => void;
}

export type LitepickerProps = MainProps &
    Omit<React.ComponentPropsWithoutRef<"input">, keyof MainProps>;

function Litepicker({
    options = {},
    value = "",
    onChange = () => {},
    getRef = () => {},
    ...computedProps
}: LitepickerProps) {
    const initialRender = useRef(true);
    const litepickerRef = createRef<LitepickerElement>();
    const tempValue = useRef(value);

    useEffect(() => {
        if (litepickerRef.current) {
            getRef(litepickerRef.current);
        }

        if (initialRender.current) {
            setValue({ options, value, onChange, getRef });
            if (litepickerRef.current !== null) {
                init(litepickerRef.current, {
                    options,
                    value,
                    onChange,
                    getRef,
                });
            }
            initialRender.current = false;
        } else {
            if (tempValue.current !== value && litepickerRef.current !== null) {
                reInit(litepickerRef.current, {
                    options,
                    value,
                    onChange,
                    getRef,
                });
            }
        }

        tempValue.current = value;
    }, [value, options, onChange, getRef]);

    return (
        <FormInput
            ref={litepickerRef}
            type="text"
            value={value}
            onChange={(e) => {
                onChange(e.target.value);
            }}
            {...computedProps}
        />
    );
}

export default Litepicker;
