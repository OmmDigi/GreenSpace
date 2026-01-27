import {  PROJECTS } from "@/data/projects";
import ImageSlider from "./ImageSlider";
import VideoSlider from "./VideoSlider";
// import VideoSlider from "./VideoSlider";

interface IProps {
  service_id: string;
}

const ServiceGallery = ({ service_id }: IProps) => {
  // Sample data - replace with your actual images

  const finalData = PROJECTS.find(
    (item) => item.service_id === service_id
  )?.projects;

  const serviceImages: {
    id: string;
    src: string;
    alt: string;
    title: string;
  }[] = [];
  const serviceVideos: { id: string; src: string; thumbnail: string }[] = [];
  finalData?.forEach((item) => {
    if (item.type === "image") {
      serviceImages.push({
        id: item.id,
        src: item.image,
        alt: item.title || "",
        title: item.title,
      });
    }
    if (item.type === "video") {
      serviceVideos.push({
        id: item.id,
        src: item.video || "",
        thumbnail: item.image,
      });
    }
  });

  // // Sample data - replace with your actual videos
  // const serviceVideos = [
  //   {
  //     id: "1",
  //     src: "/videos/service-demo-1.mp4",
  //     thumbnail: "/images/video-thumb-1.jpg",
  //     title: "Service Demonstration",
  //     duration: "2:30",
  //   },
  //   {
  //     id: "2",
  //     src: "/videos/service-demo-2.mp4",
  //     thumbnail: "/images/video-thumb-2.jpg",
  //     title: "Installation Process",
  //     duration: "3:15",
  //   },
  //   {
  //     id: "3",
  //     src: "/videos/service-demo-3.mp4",
  //     thumbnail: "/images/video-thumb-3.jpg",
  //     title: "Customer Testimonial",
  //     duration: "1:45",
  //   },
  //   {
  //     id: "4",
  //     src: "/videos/service-demo-4.mp4",
  //     thumbnail: "/images/video-thumb-4.jpg",
  //     title: "Behind the Scenes",
  //     duration: "4:20",
  //   },
  //   {
  //     id: "5",
  //     src: "/videos/service-demo-5.mp4",
  //     thumbnail: "/images/video-thumb-5.jpg",
  //     title: "Quality Check",
  //     duration: "2:10",
  //   },
  // ];

  return (
    <div className="bg-gray-50">
      {/* Your existing service page content */}
      <div className="container mx-auto px-4 py-8">
        {/* Image Slider Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Work Gallery
            </h2>
            <p className="text-lg text-gray-600">
              Take a look at our recent projects and quality workmanship
            </p>
          </div>
          <ImageSlider
            images={serviceImages}
            previews={{
              desktop: 3,
              mobile: 1,
            }}
          />
        </div>

        {/* Video Slider Section */}
        {serviceVideos.length !== 0 ? (
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Video Gallery
              </h2>
              <p className="text-lg text-gray-600">
                Watch our team in action and see the quality of our services
              </p>
            </div>
            <VideoSlider videos={serviceVideos} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ServiceGallery;
