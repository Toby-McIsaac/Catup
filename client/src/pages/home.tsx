

const Home = () => {

  return (
    <>
    <div>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label><br />
        <label>
          Email:
          <input type="text" name="email" />
        </label><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
    </>
  )
}

export default Home;