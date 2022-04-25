const Form = ({handleSubmit,text,handleInput}) => { 
  return (
    <form  className='form' >
      <input type="text" value={text} onChange={(e) => handleInput(e.target.value)} />
      <button  onClick={handleSubmit}>Add</button>
    </form>
  );
}

export default Form;