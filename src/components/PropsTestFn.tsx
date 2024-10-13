const PropsTestFn: React.FC<{ fn: () => void }> = (props) => {
  console.log(props)
  return (
    <>
      <button onClick={props.fn}>test </button>
    </>
  )
}

export default PropsTestFn




// 함수에서 () =>void  타입함수는 바로 호출이 됬는데
// (value: number) =>void 타입함수는 화살표함수로 호출해야 함수가 작동하네.. ? 
// 시간 있을떄 왜그런지 한번보자

// const PropsTestFn: React.FC<{ fn: (v: string) => void }> = ({ fn }) => {

//   return (
//     <>
//       <button onClick={() => fn('string valuse')}>test </button>
//     </>
//   )
// }

// export default PropsTestFn