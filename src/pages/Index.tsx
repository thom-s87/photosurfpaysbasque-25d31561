import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { CalendarIcon, Camera, MapPin, Clock, Users, Euro, Instagram, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const Index = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    spot: '',
    message: ''
  });

  const spots = [
    { name: "Bidart", description: "Plage familiale avec de belles vagues accessibles" },
    { name: "Guéthary", description: "Spot authentique au charme basque typique" },
    { name: "Lafitenia", description: "Vagues puissantes et paysages époustouflants" },
    { name: "Parlementia", description: "Big waves et conditions exceptionnelles" },
    { name: "Hendaye", description: "Longue plage avec diverses conditions de surf" },
    { name: "Biarritz", description: "Spots iconiques de la côte basque" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, date: selectedDate });
    // Ici vous pouvez ajouter la logique d'envoi
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50 font-poppins">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-yellow-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 via-pink-500 via-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <div className="text-2xl font-bold font-poppins">
                  <span className="bg-gradient-to-r from-yellow-400 via-pink-500 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                    photo
                  </span>
                  <span className="bg-gradient-to-r from-yellow-400 via-pink-500 via-purple-600 to-blue-600 bg-clip-text text-transparent font-black">
                    SURF
                  </span>
                </div>
                <div className="relative">
                  <span className="text-lg text-purple-600 font-script font-medium">
                    pays basque
                  </span>
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-transparent"></div>
                </div>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#accueil" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Accueil</a>
              <a href="#galerie" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Galerie</a>
              <a href="#spots" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Spots</a>
              <a href="#tarifs" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Tarifs</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Réservation</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <div className="text-6xl md:text-8xl font-bold mb-4 font-poppins">
                <span className="bg-gradient-to-r from-yellow-400 via-pink-500 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  photo
                </span>
                <span className="bg-gradient-to-r from-yellow-400 via-pink-500 via-purple-600 to-blue-600 bg-clip-text text-transparent font-black">
                  SURF
                </span>
              </div>
              <div className="relative inline-block">
                <p className="text-3xl md:text-4xl text-purple-600 mb-6 font-script font-medium">
                  pays basque
                </p>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-transparent"></div>
              </div>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-800 mb-6 font-medium">
                Moi c'est <span className="text-purple-600 font-bold">Thom</span>, photographe passionné de surf.
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                Je capture vos sessions depuis la plage, et bientôt directement dans l'eau. 
                Chaque vague raconte une histoire, chaque ride mérite d'être immortalisé.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-yellow-500 via-purple-500 to-blue-500 hover:from-yellow-600 hover:via-purple-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Réserver ma session
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-purple-500 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold"
                  onClick={() => document.getElementById('galerie')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Voir mes photos
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie Section */}
      <section id="galerie" className="py-16 px-4 bg-white/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-yellow-400 via-pink-500 via-purple-600 to-blue-600 bg-clip-text text-transparent font-poppins">
            Galerie
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Quelques moments capturés sur la côte basque</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              'photo-1500375592092-40eb2168fd21',
              'photo-1518877593221-1f28583780b4',
              'photo-1482938289607-e9573fc25ebb',
              'photo-1500375592092-40eb2168fd21',
              'photo-1518877593221-1f28583780b4',
              'photo-1482938289607-e9573fc25ebb'
            ].map((photo, i) => (
              <div key={i} className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <img 
                  src={`https://images.unsplash.com/${photo}?w=400&h=300&fit=crop`}
                  alt={`Session surf ${i + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">Session surf</p>
                  <p className="text-sm">Côte basque</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Card className="max-w-md mx-auto bg-gradient-to-br from-yellow-50 via-purple-50 to-blue-50 border-purple-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-purple-600 flex items-center justify-center gap-2">
                  <Camera className="w-5 h-5" />
                  Récupère tes photos
                </CardTitle>
                <CardDescription className="text-gray-700">
                  Accède directement à tes clichés HD sur notre plateforme
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold"
                  onClick={() => window.open('https://www.app.sportpxl.com/dashboard', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  SportPXL Dashboard
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Spots Section */}
      <section id="spots" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-poppins">
            Mes spots
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Je couvre les plus beaux spots de la côte basque</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {spots.map((spot, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-l-4 border-l-purple-500 hover:scale-105">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-600 text-xl">
                    <MapPin className="w-5 h-5 mr-2" />
                    {spot.name}
                  </CardTitle>
                  <CardDescription className="text-gray-700 text-base">{spot.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center space-x-3 text-blue-600 mb-3">
                  <Clock className="w-6 h-6" />
                  <span className="font-semibold text-lg">Shootings optimisés selon les marées</span>
                </div>
                <p className="text-blue-700">
                  Je te propose toujours les meilleurs créneaux en fonction des conditions de surf et des marées pour capturer tes plus belles vagues.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tarifs Section */}
      <section id="tarifs" className="py-16 px-4 bg-white/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-yellow-400 to-purple-600 bg-clip-text text-transparent font-poppins">
            Tarifs
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Des prix transparents pour des souvenirs inoubliables</p>
          
          <div className="flex justify-center">
            <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 max-w-md w-full bg-gradient-to-br from-white to-yellow-50 border-yellow-200">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-500 via-purple-500 to-blue-500 rounded-bl-full"></div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="flex items-center justify-center text-purple-600 text-2xl mb-2">
                  <Camera className="w-6 h-6 mr-2" />
                  Session Photo
                </CardTitle>
                <CardDescription className="text-gray-700 text-base">Solo ou petit groupe</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-yellow-600 via-purple-600 to-blue-600 bg-clip-text mb-6">
                  80<span className="text-2xl">€</span>
                </div>
                <div className="space-y-3 text-gray-700 mb-6">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-purple-500" />
                    <span>1 heure de shooting</span>
                  </div>
                  <div className="flex items-center">
                    <Camera className="w-4 h-4 mr-2 text-purple-500" />
                    <span>Jusqu'à 10 photos HD</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-purple-500" />
                    <span>Solo ou groupe jusqu'à 3 personnes</span>
                  </div>
                  <div className="flex items-center">
                    <ExternalLink className="w-4 h-4 mr-2 text-purple-500" />
                    <span>Récupération via SportPXL</span>
                  </div>
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-yellow-500 via-purple-500 to-blue-500 hover:from-yellow-600 hover:via-purple-600 hover:to-blue-600 text-white font-semibold py-3"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Réserver maintenant
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact/Réservation Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-yellow-400 bg-clip-text text-transparent font-poppins">
            Réservation
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Réserve ta session et immortalise tes vagues</p>
          
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-purple-200">
              <CardHeader className="text-center">
                <CardTitle className="text-purple-600 text-2xl">Réserve ta session avec Thom</CardTitle>
                <CardDescription className="text-gray-700 text-base">
                  Choisis ta date et ton spot. Je te recontacterai rapidement pour confirmer le créneau selon les conditions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 font-medium">Nom complet</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1 border-purple-200 focus:border-purple-400"
                        placeholder="Ton nom"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1 border-purple-200 focus:border-purple-400"
                        placeholder="ton@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-gray-700 font-medium">Téléphone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1 border-purple-200 focus:border-purple-400"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                    <div>
                      <Label htmlFor="spot" className="text-gray-700 font-medium">Spot préféré</Label>
                      <select
                        id="spot"
                        name="spot"
                        value={formData.spot}
                        onChange={handleInputChange}
                        className="mt-1 w-full px-3 py-2 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent bg-white"
                      >
                        <option value="">Choisir un spot</option>
                        {spots.map((spot) => (
                          <option key={spot.name} value={spot.name}>{spot.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label className="text-gray-700 font-medium">Date souhaitée</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal mt-1 border-purple-200 hover:border-purple-400",
                            !selectedDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate ? format(selectedDate, "PPPP", { locale: fr }) : "Choisir une date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium">Message (optionnel)</Label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="mt-1 w-full px-3 py-2 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                      placeholder="Précise tes préférences, ton niveau, le type de session souhaité..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-yellow-500 via-purple-500 to-blue-500 hover:from-yellow-600 hover:via-purple-600 hover:to-blue-600 text-white py-4 text-lg font-semibold"
                  >
                    Envoyer ma demande
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-yellow-400 via-pink-500 via-purple-600 to-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Camera className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <div className="text-xl font-bold font-poppins">
                  <span>photo</span><span className="font-black">SURF</span>
                </div>
                <div className="relative">
                  <span className="text-sm font-script">pays basque</span>
                  <div className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-white/40"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <a 
                href="https://www.instagram.com/euska_lab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-yellow-300 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>@euska_lab</span>
              </a>
              <a 
                href="https://www.app.sportpxl.com/dashboard" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-yellow-300 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Mes photos</span>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/90">
            <p>&copy; 2024 photoSURF pays basque - Thom, photographe passionné</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
