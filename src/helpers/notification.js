import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { showNotification } from '@mantine/notifications';

const notiTypes = {
  SUCCESS: 'Success',
  ERROR: 'Error',
};

export const notification = (type, message) =>
  showNotification({
    title: type,
    message: message,
    icon: <FontAwesomeIcon icon={type === notiTypes.SUCCESS ? faCheck : faX} />,
    color: type === notiTypes.SUCCESS ? 'green' : 'red',
    onClose: () => console.log('unmounted'),
    styles: (theme) => ({
      root: {
        backgroundColor:
          type === notiTypes.SUCCESS
            ? theme.colors.green[8]
            : theme.colors.red[9],
        borderColor:
          type === notiTypes.SUCCESS
            ? theme.colors.green[8]
            : theme.colors.red[9],

        '&::before': { backgroundColor: theme.white },
      },

      title: { color: theme.white },
      description: { color: theme.white },
      closeButton: {
        color: theme.white,
        '&:hover': {
          backgroundColor:
            type === notiTypes.SUCCESS
              ? theme.colors.green[8]
              : theme.colors.red[8],
        },
      },
    }),
  });
