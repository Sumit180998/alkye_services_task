import React from 'react';
import './Card.css'

const Card = ({ article }) => {
  const { title, created_at, prompt, short_description, content, image_url } = article
  // {
  //     "id": 1,
  //     "title": "First Article 1",
  //     "created_at": "2024-04-17T02:53:28.717709Z",
  //     "prompt": "Photography",
  //     "short_description": "In a post-apocalyptic world, a lone survivor battles both mutants and human predators. Amidst the ruins, they find hope and redemption in unexpected companionship.",
  //     "content": "In a post-apocalyptic wasteland, a solitary survivor navigates desolation haunted by mutants and ruthless human scavengers. Amidst the ruins, they encounter a mysterious wanderer, forging an unlikely alliance. Together, they embark on a perilous journey, facing harrowing obstacles and betrayals. As they struggle to survive, bonds form, revealing shared scars of a shattered world. Amidst chaos and despair, glimmers of hope emerge, fueled by resilience and the unyielding human spirit. Through sacrifice and perseverance, they confront their demons, discovering that true salvation lies not in solitude, but in the bonds of companionship forged amidst the ashes of civilization.",
  //     "image_url": "http://untitled-twkmuar27a-uc.a.run.app/media/images/2024-03-29_16-24-56_7707_3xp83nR.webp"
  //   } ;
    console.log(title)
  return (
    <div className="card">
      <img src={image_url} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-date">{new Date(created_at).toLocaleDateString()}</p>
        {/* <p className="card-prompt">{prompt}</p> */}
        <p className="card-description">
           {/* <span>short_description</span> <br/> */}
           {short_description}</p>
        <p className="card-contents">
          {/* <span>content</span> <br/> */}
          {content}</p>
      </div>
    </div>
  );
};

export default Card;
