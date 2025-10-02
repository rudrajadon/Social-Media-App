"use client";

import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";
import TextareaAutosize from "react-textarea-autosize";
import { ImageIcon, Loader2Icon, SendIcon, XIcon } from "lucide-react";
import { Button } from "./ui/button";
import { createPost } from "@/actions/post.action";
import { toast } from "react-hot-toast";
import { UploadButton } from "@/lib/uploadthing";

function CreatePost() {
  const { user } = useUser();
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  const handleSubmit = async () => {
    if (!content.trim() && !imageUrl) return;

    setIsPosting(true);
    try {
      const result = await createPost(content, imageUrl);
      if (result?.success) {
        setContent("");
        setImageUrl("");
        toast.success("Post created successfully");
      }
    } catch (error) {
      console.error("Failed to create post:", error);
      toast.error("Failed to create post");
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <Card className="mb-6 shadow-sm border rounded-xl">
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <Avatar className="w-10 h-10 flex-shrink-0 mt-1">
            <AvatarImage src={user?.imageUrl || "/avatar.png"} />
          </Avatar>

          <div className="flex-1 space-y-3">
            <TextareaAutosize
              placeholder="What's on your mind?"
              className="w-full resize-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 text-lg bg-transparent outline-none"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              disabled={isPosting}
              minRows={3} // <-- Increased the default size
            />

            {imageUrl && (
              <div className="relative mt-2">
                <img
                  src={imageUrl}
                  alt="Uploaded preview"
                  className="rounded-xl w-full h-auto object-cover max-h-[25rem]"
                />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 size-7 rounded-full bg-black/50 hover:bg-black/75 border-0"
                  onClick={() => setImageUrl("")}
                  disabled={isPosting}
                >
                  <XIcon className="size-4" />
                </Button>
              </div>
            )}

            <div className="flex items-center justify-between pt-3 border-t">
              <div className="flex items-center gap-1">
                <UploadButton
                  endpoint="postImage"
                  onClientUploadComplete={(res) => {
                    if (res?.[0]?.url) {
                      setImageUrl(res[0].url);
                    }
                  }}
                  onUploadError={(error: Error) => {
                    toast.error(`Upload failed: ${error.message}`);
                  }}
                  appearance={{
                    button: "ut-hidden",
                    container: "p-0 m-0",
                    allowedContent: "ut-hidden",
                  }}
                  content={{
                    button({ ready, isUploading }) {
                      return (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-primary hover:text-primary size-9"
                          disabled={ready || isUploading || isPosting}
                        >
                          {isUploading ? (
                            <Loader2Icon className="animate-spin" />
                          ) : (
                            <ImageIcon />
                          )}
                        </Button>
                      );
                    },
                  }}
                />
              </div>
              <Button
                onClick={handleSubmit}
                disabled={(!content.trim() && !imageUrl) || isPosting}
                size="sm"
                className="rounded-full font-semibold px-5"
              >
                {isPosting ? (
                  <>
                    <Loader2Icon className="size-4 mr-2 animate-spin" />
                    Posting...
                  </>
                ) : (
                  "Post"
                )}
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
export default CreatePost;