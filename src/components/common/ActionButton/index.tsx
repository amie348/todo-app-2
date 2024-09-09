import SvgIcon from '@components/common/SvgIcon';
import { Button, SxProps, Theme } from '@mui/material';

interface ActionButtonProps {
  Icon: string;
  onClick: () => void;
  styles: SxProps<Theme>;
}

export default function ActionButton({ Icon, onClick, styles }: ActionButtonProps) {
  return (
    <Button onClick={onClick} sx={styles}>
      <SvgIcon name={Icon} />
    </Button>
  );
}
