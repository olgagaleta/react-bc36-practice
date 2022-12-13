import { Paper } from 'components';
import { ColumnItem, Container } from './TutorsItem.styled';
import PhoneImg from '../../assets/images/phone.svg';
import MailImg from '../../assets/images/mail.svg';
import LocationImg from '../../assets/images/pin.svg';

const TutorsItem = ({
  firstName,
  lastName,
  patronymic,
  phone,
  email,
  city,
  options,
}) => {
  return (
    <Paper>
      <Container>
        <ColumnItem>
          <span>{firstName}</span>
          <span>{lastName}</span>
          <span>{patronymic}</span>
        </ColumnItem>
        <ColumnItem>
          <span>
            <img src={PhoneImg} alt="img" />
            {phone}
          </span>
          <span>
            <img src={MailImg} alt="img" />
            {email}
          </span>
          <span>
            <img src={LocationImg} alt="img" />
            {city}
          </span>
        </ColumnItem>
        <ColumnItem>
          <p>{options}</p>
        </ColumnItem>
      </Container>
    </Paper>
  );
};

export default TutorsItem;
