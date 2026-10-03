import Link from "next/link";
import Container from "@/components/common/container";
import H2 from "@/components/common/heading-two";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen pt-20">
      <section className="pt-20 pb-32">
        <Container size="lg">
          <div className="text-center">
            <H2 className="mb-4">Project Not Found</H2>
            <p className="text-ink/80 text-lg mb-8">
              The project you're looking for doesn't exist or may have been
              moved.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/all-projects">
                <Button variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to All Projects
                </Button>
              </Link>
              <Link href="/">
                <Button>
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
