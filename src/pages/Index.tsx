
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
    groupSize: '',
    message: ''
  });

  const spots = [
    { name: "Bidart", description: "Plage familiale avec de belles vagues" },
    { name: "Guéthary", description: "Spot authentique au charme basque" },
    { name: "Lafitenia", description: "Vagues puissantes et paysages époustouflants" },
    { name: "Parlementia", description: "Big waves et conditions exceptionnelles" },
    { name: "Hendaye", description: "Longue plage avec diverses conditions" },
    { name: "Biarritz", description: "Spots iconiques de la côte basque" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, date: selectedDate });
    // Ici vous pouvez ajouter la logique d'envoi
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-yellow-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-blue-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-500 rounded-full flex items-center justify-center">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-yellow-600 bg-clip-text text-transparent">
                PhotoSurfPaysBasque
              </span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#accueil" className="text-gray-700 hover:text-blue-600 transition-colors">Accueil</a>
              <a href="#galerie" className="text-gray-700 hover:text-blue-600 transition-colors">Galerie</a>
              <a href="#spots" className="text-gray-700 hover:text-blue-600 transition-colors">Spots</a>
              <a href="#tarifs" className="text-gray-700 hover:text-blue-600 transition-colors">Tarifs</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-yellow-600 bg-clip-text text-transparent animate-fade-in">
              Capture l'essence du surf
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in">
              Photographe spécialisé dans le surf au Pays Basque
            </p>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in">
              Immortalise tes sessions de surf sur les plus beaux spots de la côte basque. 
              Des moments uniques capturés avec passion et expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Réserver une session
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-3"
                onClick={() => document.getElementById('galerie')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Voir la galerie
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie Section */}
      <section id="galerie" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Galerie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img 
                  src={`https://images.unsplash.com/photo-${i === 1 ? '1500375592092-40eb2168fd21' : i === 2 ? '1518877593221-1f28583780b4' : '1482938289607-e9573fc25ebb'}?w=400&h=300&fit=crop`}
                  alt={`Surf photo ${i}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Card className="max-w-md mx-auto bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-600">Accès à tes photos</CardTitle>
                <CardDescription>
                  Récupère tes photos directement sur notre plateforme
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                  onClick={() => window.open('https://www.app.sportpxl.com/dashboard', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Accéder à mes photos
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Spots Section */}
      <section id="spots" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-yellow-600 bg-clip-text text-transparent">
            Spots couverts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {spots.map((spot, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    {spot.name}
                  </CardTitle>
                  <CardDescription>{spot.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs Section */}
      <section id="tarifs" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-600 to-blue-600 bg-clip-text text-transparent">
            Tarifs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-bl-full"></div>
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <Users className="w-5 h-5 mr-2" />
                  Session Solo/Petit Groupe
                </CardTitle>
                <CardDescription>Jusqu'à 3 personnes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-600 mb-4">
                  <Euro className="w-6 h-6 inline mr-1" />
                  80€/h
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Shooting personnalisé</li>
                  <li>• Photos haute qualité</li>
                  <li>• Retouche professionnelle</li>
                  <li>• Livraison rapide</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-yellow-500 rounded-bl-full"></div>
              <CardHeader>
                <CardTitle className="flex items-center text-purple-600">
                  <Users className="w-5 h-5 mr-2" />
                  Groupe de 3+
                </CardTitle>
                <CardDescription>3 personnes et plus</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-yellow-600 mb-4">
                  <Euro className="w-6 h-6 inline mr-1" />
                  200€
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• 10 photos minimum par personne</li>
                  <li>• Session group dynamique</li>
                  <li>• Retouche professionnelle</li>
                  <li>• Tarif dégressif</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact/Réservation Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 via-purple-600 to-yellow-600 bg-clip-text text-transparent">
            Réservation
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-center text-blue-600">Réserve ta session</CardTitle>
                <CardDescription className="text-center">
                  Choisis ta date et remplis le formulaire. Je te recontacterai rapidement pour confirmer.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nom complet</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="groupSize">Taille du groupe</Label>
                      <Input
                        id="groupSize"
                        name="groupSize"
                        value={formData.groupSize}
                        onChange={handleInputChange}
                        placeholder="ex: 2 personnes"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label>Date souhaitée</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal mt-1",
                            !selectedDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate ? format(selectedDate, "PPP", { locale: fr }) : "Choisir une date"}
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
                    <Label htmlFor="message">Message (optionnel)</Label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Précise tes préférences, le spot souhaité, etc."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-500 hover:from-blue-600 hover:via-purple-600 hover:to-yellow-600 text-white py-3"
                  >
                    Envoyer la demande
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center space-x-4 text-blue-600">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">Créneaux optimisés selon les marées</span>
                  </div>
                  <p className="text-sm text-blue-700 mt-2">
                    Je te proposerai les meilleurs créneaux en fonction des conditions de surf
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 via-purple-600 to-yellow-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Camera className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">PhotoSurfPaysBasque</span>
            </div>
            <div className="flex items-center space-x-6">
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
                <span>SportPXL</span>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/80">
            <p>&copy; 2024 PhotoSurfPaysBasque. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
