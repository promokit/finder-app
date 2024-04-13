import { LegacyRef, forwardRef, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { contentViewSignal } from '~/signals';
import { ButtonRegular } from '../..';

import 'react-datepicker/dist/react-datepicker.css';

type RefProps = {
    onClick: () => void;
};

export const ButtonCalendar = () => {
    const [startDate, setStartDate] = useState(new Date());

    const handleChange = (date: Date | null) => {
        if (date) {
            setStartDate(date);
            contentViewSignal.value = {
                ...contentViewSignal.value,
                filter: {
                    ...contentViewSignal.value.filter,
                    fromDate: date.getTime(),
                },
            };
        }
    };

    const CustomInput = forwardRef(({ onClick }: RefProps, ref: LegacyRef<HTMLButtonElement>) => (
        <ButtonRegular
            title="Date Filter"
            icon="calendar"
            extraClass={contentViewSignal.value.filter.fromDate ? 'active' : ''}
            action={onClick}
        />
    ));

    return (
        <ReactDatePicker
            startDate={startDate}
            onChange={(date) => handleChange(date)}
            customInput={<CustomInput onClick={() => {}} />}
            showTimeSelect
            timeIntervals={5}
            withPortal
        />
    );
};
