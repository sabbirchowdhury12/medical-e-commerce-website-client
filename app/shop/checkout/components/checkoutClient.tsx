"use client";
import { DropdownInput } from "@/components/form/dropdown";
import FormInput from "@/components/form/formInput";
import Container from "@/components/layout/container";
import FlexBetween from "@/components/layout/flexBetween";
import Button from "@/components/ui/button";
import { useEffect, useState } from "react";

interface Division {
  division: string;
  divisionbn: string;
  coordinates: string;
}

interface District {
  district: string;
  coordinates: string;
  upazilla: string[];
}

const CheckoutClient = () => {
  const [divisions, setDivisions] = useState<Division[]>([]);
  const [districts, setDistricts] = useState<District[]>([]);
  const [upazillas, setUpazillas] = useState<string[]>([]);

  const [selectedDivision, setSelectedDivision] = useState<string>("");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [selectedUpazilla, setSelectedUpazilla] = useState<string>("");

  useEffect(() => {
    // Fetch divisions from the API
    const fetchDivisions = async () => {
      try {
        const response = await fetch("https://bdapis.com/api/v1.2/divisions");
        const data = await response.json();
        setDivisions(data?.data);
      } catch (error) {
        console.error("Error fetching divisions:", error);
      }
    };

    fetchDivisions();
  }, []);

  useEffect(() => {
    if (selectedDivision) {
      // Fetch districts and upazillas for the selected division
      const fetchDistricts = async () => {
        try {
          const response = await fetch(
            `https://bdapis.com/api/v1.2/division/${selectedDivision.toLowerCase()}`
          );
          const data = await response.json();
          setDistricts(data?.data);
          setUpazillas([]); // Reset upazillas when division changes
          setSelectedDistrict(""); // Reset selected district
        } catch (error) {
          console.error("Error fetching districts:", error);
        }
      };

      fetchDistricts();
    }
  }, [selectedDivision]);

  useEffect(() => {
    if (selectedDistrict) {
      // Find the selected district and update upazillas
      const district = districts.find(
        (dist) => dist.district === selectedDistrict
      );
      setUpazillas(district ? district.upazilla : []);
    }
  }, [selectedDistrict, districts]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Selected Division:", selectedDivision);
    console.log("Selected District:", selectedDistrict);
    console.log("Selected Upazilla:", selectedUpazilla);
    // Handle form submission logic here
  };

  return (
    <Container>
      <div className="border border-border_color_7 p-10 h-screen">
        <h2>Billing Address</h2>

        <h2 className="h2-styles">Personal Information</h2>
        <form onSubmit={handleSubmit}>
          <FlexBetween className="gap-4 flex-col md:flex-row">
            <FormInput
              labelValue=""
              type="text"
              placeholder="Enter your name"
              name="name"
            />
            <FormInput
              labelValue=""
              type="tel"
              placeholder="Enter your phone number"
              name="phone"
            />
          </FlexBetween>

          <FlexBetween className="gap-4 flex-col md:flex-row">
            <FormInput
              labelValue=""
              type="email"
              placeholder="Enter your email"
              name="email"
            />
            <FormInput
              labelValue=""
              type="text"
              placeholder="Enter your company name"
              name="companyName"
            />
          </FlexBetween>

          <h2 className="h2-styles">Address</h2>
          <FlexBetween className="gap-4 flex-col md:flex-row">
            <DropdownInput
              label="Division"
              value={selectedDivision}
              items={divisions.map((div) => div.division)}
              onChange={(value) => setSelectedDivision(value)}
            />
            <DropdownInput
              label="District"
              value={selectedDistrict}
              items={districts.map((dist) => dist.district)}
              onChange={(value) => setSelectedDistrict(value)}
              disabled={!selectedDivision}
            />
            <DropdownInput
              label="Upazilla"
              value={selectedUpazilla}
              items={upazillas}
              onChange={(value) => setSelectedUpazilla(value)}
              disabled={!selectedDistrict}
            />
          </FlexBetween>

          <Button type="submit">Place Order</Button>
        </form>
      </div>
    </Container>
  );
};

export default CheckoutClient;
