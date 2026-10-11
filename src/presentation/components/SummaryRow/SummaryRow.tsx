import { Label, Row, Value } from './SummaryRow.styles';

interface SummaryRowProps {
    label: string;
    value: string;
    emphasized?: boolean;
}

export function SummaryRow({
    label,
    value,
    emphasized = false,
}: SummaryRowProps) {
  return (
    <Row>
        <Label 
            $emphasized={emphasized} 
            numberOfLines={1}
        >
            {label}
        </Label>
        <Value 
            $emphasized={emphasized}
        >
            {value}
        </Value>
    </Row>
  );
}