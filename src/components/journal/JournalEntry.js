const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
      <div
        className='journal__entry-picture'
        style={{
          backgroundSize: 'cover',
          backgroundImage: 'url(https://picsum.photos/300/200)',
        }}
      ></div>

      <div className='journal__entry-body'>
        <p className='journal__entry-title'>Un nuevo día</p>
        <p className='journal__entry-content'>
          Reprehenderit id in duis consectetur deserunt veniam fugiat.
        </p>
      </div>

      <div className='journal__entry-date-box'>
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};

export { JournalEntry };
