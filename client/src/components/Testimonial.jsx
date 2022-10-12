import "./Testimonial.css";

const Testimonial = () => {
  return (
    <>
      
      <div className="container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0KuKmTTi8sMS7tZhtTGj5caGV2qnme6_hHg&usqp=CAU"
          alt="Avatar"
          style={{ width: 90 }}
        />
        <p>
          <span>Ram</span> <br /> 
          <p> Authentic Buyer</p>
        </p>
        <p><i>Loved the material and the over all quality of the product.
          The art shows the culture of our priviliged nation. One of the best and well manufactured things encountered so far.</i>
        </p>
      </div>
      <div className="container">
        <img
          src="https://images.squarespace-cdn.com/content/v1/589fdb35e3df28dd5f16ee99/1572396263343-N6TUSGSWE3LAUGP2U6MB/Cindy%2BFANTACI%2Bcopywriting%2Btestimonial"
          alt="Avatar"
          style={{ width: 90 }}
        />
        <p>
          <span>Rebecca Flex.</span>
          <br /> CEO at Company.
        </p>
        <p><i>Best quality ever it just make me feel like i'm in my childhood</i></p>
      </div>
    </>
  );
};
export default Testimonial;
