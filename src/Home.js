export default function Home(){
    return (
        <div style={{ 
            backgroundImage: "url('/background.webp')",
            height: '100vh', // This will make sure that the div takes the full viewport height
            backgroundPosition: 'center', // Centers the background image
            backgroundRepeat: 'no-repeat', // Prevents repeating the image
            backgroundSize: 'cover', // Ensures that the background covers the entire div
          }}>
          {/* Content goes here */}
        </div>
    )
}
