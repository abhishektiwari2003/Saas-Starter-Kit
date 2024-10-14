"use client";

import { useState, useRef } from "react";
import {
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight,
  GripVertical,
  Users,
  Calendar,
  Clock,
} from "lucide-react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";

export default function CreateCampaignPage() {
  const [campaignName, setCampaignName] = useState("");
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scheduleDate, setScheduleDate] = useState<Date | undefined>(undefined);
  const [scheduleTime, setScheduleTime] = useState<string | undefined>(
    undefined
  );

  // Sample workflow data
  const [workflowItems, setWorkflowItems] = useState([
    {
      id: "1",
      image: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
      description: "Sleek modern lamp with adjustable arm",
    },
    {
      id: "2",
      image: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
      description: "Ergonomic office chair with lumbar support",
    },
    {
      id: "3",
      image: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
      description: "Minimalist wall clock with silent mechanism",
    },
    {
      id: "4",
      image: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
      description: "Compact air purifier with HEPA filter",
    },
    {
      id: "5",
      image: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
      description: "Wireless charging pad with fast-charge capability",
    },
  ]);

  // Customer groups
  const [customerGroups, setCustomerGroups] = useState([
    { id: "1", name: "Young Professionals", selected: false },
    { id: "2", name: "Home Office Workers", selected: false },
    { id: "3", name: "Tech Enthusiasts", selected: false },
    { id: "4", name: "Eco-Conscious Consumers", selected: false },
    { id: "5", name: "Interior Design Enthusiasts", selected: false },
  ]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const validFiles = files.filter((file) => file.size <= 10 * 1024 * 1024); // Check file size (<= 10MB)
    if (validFiles.length < files.length) {
      alert("Some files exceed 10MB and were not uploaded.");
    }
    setUploadedImages(validFiles);
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(workflowItems);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setWorkflowItems(items);
  };

  const toggleCustomerGroup = (id: string) => {
    setCustomerGroups(
      customerGroups.map((group) =>
        group.id === id ? { ...group, selected: !group.selected } : group
      )
    );
  };

  const generateTimeOptions = () => {
    const options = [];
    for (let i = 0; i < 24; i++) {
      for (let j = 0; j < 60; j += 30) {
        const hour = i.toString().padStart(2, "0");
        const minute = j.toString().padStart(2, "0");
        options.push(`${hour}:${minute}`);
      }
    }
    return options;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Create AI-Driven Product Campaign
      </h1>

      <div className="space-y-8">
        {/* Campaign Name Input */}
        <div>
          <Label htmlFor="campaign-name">Campaign Name</Label>
          <Input
            id="campaign-name"
            placeholder="Enter campaign name"
            value={campaignName}
            onChange={(e) => setCampaignName(e.target.value)}
          />
        </div>

        {/* Image Upload Section */}
        <div>
          <Label htmlFor="image-upload">Upload Product Images</Label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              <ImageIcon
                className="mx-auto h-12 w-12 text-gray-300"
                aria-hidden="true"
              />
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="image-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-primary hover:text-primary/90"
                >
                  <span>Upload images</span>
                  <Input
                    id="image-upload"
                    name="image-upload"
                    type="file"
                    multiple
                    className="sr-only"
                    onChange={handleImageUpload}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">
                PNG, JPG, GIF up to 10MB each
              </p>
            </div>
          </div>
          {uploadedImages.length > 0 && (
            <p className="mt-2 text-sm text-gray-600">
              {uploadedImages.length} images uploaded
            </p>
          )}
        </div>

        {/* Workflow Screen */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">
              Product Showcase Workflow
            </h2>
            <div className="relative">
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="workflow" direction="horizontal">
                  {(provided) => (
                    <div
                      ref={(el) => {
                        scrollContainerRef.current = el;
                        provided.innerRef(el);
                      }}
                      className="flex space-x-4 overflow-x-auto scrollbar-hide"
                      style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                      }}
                      {...provided.droppableProps}
                    >
                      {workflowItems.map((item, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              className="flex-shrink-0"
                            >
                              {/* Card content */}
                              <Card className="w-[240px] h-[420px] flex flex-col">
                                <CardContent className="p-4 flex-grow flex flex-col">
                                  <div
                                    {...provided.dragHandleProps}
                                    className="cursor-move flex justify-end mb-2"
                                  >
                                    <GripVertical className="text-gray-400" />
                                  </div>
                                  <div className="bg-gray-100 rounded-t-lg flex-grow flex items-center justify-center mb-4">
                                    <img
                                      src={item.image}
                                      alt={`Product ${index + 1}`}
                                      className="w-full h-48 object-cover"
                                    />
                                  </div>
                                  <div className="bg-white rounded-b-lg p-4">
                                    <h3 className="font-semibold mb-2">
                                      Product {index + 1}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                      {item.description}
                                    </p>
                                  </div>
                                </CardContent>
                              </Card>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 bg-white"
                onClick={() => scroll("left")}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 bg-white"
                onClick={() => scroll("right")}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Customer Grouping Selection */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Users className="mr-2" />
              Target Customer Groups
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Select the customer groups you want to target with this campaign:
            </p>
            <div className="space-y-4">
              {customerGroups.map((group) => (
                <div key={group.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`group-${group.id}`}
                    checked={group.selected}
                    onCheckedChange={() => toggleCustomerGroup(group.id)}
                  />
                  <label
                    htmlFor={`group-${group.id}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {group.name}
                  </label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Schedule Date and Time */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Calendar className="mr-2" />
              Schedule Campaign
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Choose when you want your campaign to be sent:
            </p>
            <div className="flex space-x-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={`w-[240px] justify-start text-left font-normal ${
                      !scheduleDate && "text-muted-foreground"
                    }`}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {scheduleDate ? format(scheduleDate, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <CalendarComponent
                    mode="single"
                    selected={scheduleDate}
                    onSelect={setScheduleDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <Select onValueChange={setScheduleTime} value={scheduleTime}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select time">
                    {scheduleTime ? (
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4" />
                        {scheduleTime}
                      </div>
                    ) : (
                      "Select time"
                    )}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {generateTimeOptions().map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <Button className="w-full">Create Campaign</Button>
      </div>
    </div>
  );
}
