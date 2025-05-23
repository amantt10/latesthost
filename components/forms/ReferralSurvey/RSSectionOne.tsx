// RSSectionOne.tsx
"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { cn } from "@/lib/utils";

interface Props {
    formData: {
        first_name: string | null;
        last_name: string | null;
        phone_number: string | null;
        email: string | null;
        county: string | null;
        zip: string | null;
    };
    updateFormData: (name: string, value: any) => void;
    step: string;
}

const RSSectionOne = ({ formData, updateFormData, step }: Props) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log(`Input Changed - Name: ${name}, Value: ${value}`);
        console.log(`Calling updateFormData with name: ${name}, value: ${value}`); // ADD THIS LINE
        updateFormData(name, value);
    };

    // ... rest of your RSSectionOne component


    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let input = e.target.value.replace(/\D/g, "");
        if (input.length > 3 && input.length <= 6) {
            input = input.replace(/(\d{3})(\d+)/, "$1-$2");
        } else if (input.length > 6) {
            input = input.replace(/(\d{3})(\d{3})(\d+)/, "$1-$2-$3");
        }
        console.log(`Phone Input Changed - Value: ${input}`); // ADDED
        updateFormData("phone_number", input);
    };

    return (
        <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white">
            <h2 className="font-bold text-2xl text-center text-[#5d1725] dark:text-neutral-200 mb-5">
                Section 1 - Referral Contact Information
            </h2>
            <form className="my-8">
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="first_name">First name</Label>
                        <Input
                            id="first_name"
                            name="first_name"
                            placeholder="First name"
                            type="text"
                            value={formData.first_name || ""}
                            onChange={handleInputChange}
                        />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="last_name">Last name</Label>
                        <Input
                            id="last_name"
                            name="last_name"
                            placeholder="Last name"
                            type="text"
                            value={formData.last_name || ""}
                            onChange={handleInputChange}
                        />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="phone_number">Daytime Phone Number</Label>
                    <Input
                        id="phone_number"
                        name="phone_number"
                        placeholder="XXX-XXX-XXXX"
                        type="text"
                        value={formData.phone_number || ""}
                        onChange={handlePhoneChange}
                        maxLength={12}
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email || ""}
                        onChange={handleInputChange}
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="county">County of Residence in Mississippi</Label>
                    <Input
                        id="county"
                        name="county"
                        type="text"
                        placeholder="Enter your county"
                        value={formData.county || ""}
                        onChange={handleInputChange}
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="zip">Zip Code of Residence in Mississippi</Label>
                    <Input
                        id="zip"
                        name="zip"
                        type="text"
                        placeholder="Enter your zip code"
                        value={formData.zip || ""}
                        onChange={handleInputChange}
                        maxLength={10}
                    />
                </LabelInputContainer>
            </form>
        </div>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};

export default RSSectionOne;