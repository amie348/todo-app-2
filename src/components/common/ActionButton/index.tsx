import SvgIcon from '@components/common/SvgIcon';
import { Button, SxProps, Theme } from '@mui/material';

interface ActionButtonProps {
  Icon: string;
  onClick: () => void;
  styles: SxProps<Theme>;
  type?: 'submit';
}

export default function ActionButton({ Icon, onClick, styles, type }: ActionButtonProps) {
  return (
    <Button type={type} onClick={onClick} sx={styles}>
      <SvgIcon name={Icon} />
    </Button>
  );
}
