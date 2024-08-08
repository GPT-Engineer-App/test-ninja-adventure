import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Paw, Heart, Info } from "lucide-react";

const CatBreed = ({ name, description, image }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Card className="mb-4 overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <CardHeader>
        <CardTitle className="flex items-center">
          <Paw className="mr-2 h-5 w-5 text-purple-500" />
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  </motion.div>
);

const Index = () => {
  const [activeTab, setActiveTab] = useState("breeds");
  const [likeCount, setLikeCount] = useState(0);

  const catBreeds = [
    { name: "Siamese", description: "Known for their distinctive color points and blue eyes.", image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg" },
    { name: "Maine Coon", description: "One of the largest domesticated cat breeds with a distinctive physical appearance.", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Maine_Coon_cat_by_Tomitheos.JPG" },
    { name: "Persian", description: "Characterized by their round face and short muzzle.", image: "https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg" },
    { name: "Bengal", description: "Known for their wild appearance and energetic personality.", image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Paintedcats_Red_Star_standing.jpg" },
    { name: "Sphynx", description: "Distinctive for their lack of coat and wrinkled skin.", image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Sphinx2_July_2006.jpg" },
  ];

  const catImages = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/1200px-Kittyply_edit1.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLikeCount((prevCount) => prevCount + Math.floor(Math.random() * 5) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-6xl font-bold mb-2 text-purple-800">Feline Fascination</h1>
          <p className="text-xl text-purple-600">Discover the Wonderful World of Cats</p>
        </motion.div>

        <Carousel className="mb-12">
          <CarouselContent>
            {catImages.map((src, index) => (
              <CarouselItem key={index}>
                <motion.img
                  src={src}
                  alt={`Cat ${index + 1}`}
                  className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="breeds" className="text-lg"><Paw className="mr-2" />Breeds</TabsTrigger>
            <TabsTrigger value="care" className="text-lg"><Heart className="mr-2" />Care Tips</TabsTrigger>
            <TabsTrigger value="facts" className="text-lg"><Info className="mr-2" />Fun Facts</TabsTrigger>
          </TabsList>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="breeds">
                <h2 className="text-3xl font-semibold mb-6 text-purple-700">Popular Cat Breeds</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {catBreeds.map((breed, index) => (
                    <CatBreed key={index} name={breed.name} description={breed.description} image={breed.image} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="care">
                <h2 className="text-3xl font-semibold mb-6 text-purple-700">Cat Care Tips</h2>
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-4">
                      {["Provide a balanced diet", "Ensure fresh water is always available", "Regular grooming", "Schedule vet check-ups", "Mental stimulation with toys"].map((tip, index) => (
                        <motion.li
                          key={index}
                          className="flex items-center text-gray-700"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Heart className="mr-2 text-pink-500" />
                          {tip}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="facts">
                <h2 className="text-3xl font-semibold mb-6 text-purple-700">Fun Cat Facts</h2>
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-4">
                      {[
                        "Cats sleep for about 70% of their lives",
                        "A group of cats is called a 'clowder'",
                        "Cats have over 20 different vocalizations",
                        "A cat's sense of smell is 14 times stronger than a human's",
                        "The first cat in space was a French cat named Felicette in 1963"
                      ].map((fact, index) => (
                        <motion.li
                          key={index}
                          className="flex items-center text-gray-700"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Info className="mr-2 text-blue-500" />
                          {fact}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>

        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-xl text-gray-700 mb-4">
            Cats are fascinating creatures that have been domesticated for thousands of years. They are known for their
            independence, agility, and affectionate nature. Cats come in various breeds, each with its unique
            characteristics and personalities. Explore the tabs above to learn more about these amazing animals!
          </p>
          <Badge variant="outline" className="text-lg px-4 py-2">
            <Heart className="mr-2 text-pink-500" /> {likeCount} cat lovers
          </Badge>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            Adopt a Cat Today!
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
