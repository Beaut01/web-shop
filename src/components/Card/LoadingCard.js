import React from "react"
import ContentLoader from "react-content-loader"

const LoadingCard = (props) => (
  <ContentLoader 
    speed={2}
    width={350}
    height={580}
    viewBox="0 0 350 580"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="7" rx="0" ry="0" width="350" height="350" /> 
    <rect x="0" y="376" rx="0" ry="0" width="350" height="28" /> 
    <rect x="0" y="415" rx="0" ry="0" width="344" height="108" /> 
    <rect x="2" y="531" rx="0" ry="0" width="340" height="53" />
  </ContentLoader>
)

export default LoadingCard