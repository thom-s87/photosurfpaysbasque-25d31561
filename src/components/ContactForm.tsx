import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const spots = [
  { name: "Bidart", description: "Plage familiale avec de belles vagues accessibles" },
  { name: "Guéthary", description: "Spot authentique au charme basque typique" },
  { name: "Lafitenia", description: "Vagues puissantes et paysages époustouflants" },
  { name: "Parlementia", description: "Big waves et conditions exceptionnelles" },
  { name: "Hendaye", description: "Longue plage avec diverses conditions de surf" },
  { name: "Biarritz", description: "Spots iconiques de la côte basque" }
];

export const ContactForm = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    spot: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, date: selectedDate });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
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
  );
};
