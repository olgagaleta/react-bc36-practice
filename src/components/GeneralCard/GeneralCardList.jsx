import GeneralCardItem from './GeneralCardItem';

const GeneralCardList = ({ listData, isOpenMenu }) => {
  return (
    <ul>
      {listData.length > 0 &&
        listData.map(({ text }) => (
          <GeneralCardItem key={text} text={text} isOpenMenu={isOpenMenu} />
        ))}
    </ul>
  );
};

export default GeneralCardList;
