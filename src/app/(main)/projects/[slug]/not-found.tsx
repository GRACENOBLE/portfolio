import Link from "next/link";
import Container from "@/components/common/container";
import H2 from "@/components/common/heading-two";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-black min-h-screen pt-20">
      <section className="pt-20 pb-32">
        <Container size="lg">
          <div className="text-center">
            <H2 className="mb-4">Project Not Found</H2>
            <p className="text-white/80 text-lg mb-8">
              The project you're looking for doesn't exist or may have been
              moved.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/all-projects">
                <Button
                  variant="outline"
                  className="text-white border-white/20 hover:bg-white/10"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to All Projects
                </Button>
              </Link>
              <Link href="/">
                <Button className="bg-white text-black hover:bg-white/90">
                  Go Home
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
