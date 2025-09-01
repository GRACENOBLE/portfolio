import Container from "@/components/common/container";

export default function Loading() {
  return (
    <div className="bg-black min-h-screen pt-20">
      <section className="pt-20 pb-32">
        <Container size="lg">
          {/* Back Navigation Skeleton */}
          <div className="mb-8">
            <div className="h-10 w-40 bg-white/10 rounded animate-pulse"></div>
          </div>

          {/* Header Skeleton */}
          <div className="mb-12">
            <div className="h-12 w-3/4 bg-white/10 rounded animate-pulse mb-4"></div>
            <div className="h-6 w-full bg-white/10 rounded animate-pulse mb-2"></div>
            <div className="h-6 w-2/3 bg-white/10 rounded animate-pulse mb-6"></div>

            {/* Buttons Skeleton */}
            <div className="flex gap-4 mb-8">
              <div className="h-10 w-40 bg-white/10 rounded animate-pulse"></div>
              <div className="h-10 w-36 bg-white/10 rounded animate-pulse"></div>
            </div>

            {/* Tags Skeleton */}
            <div className="space-y-4">
              <div>
                <div className="h-4 w-20 bg-white/10 rounded animate-pulse mb-2"></div>
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-6 w-16 bg-white/10 rounded-full animate-pulse"
                    ></div>
                  ))}
                </div>
              </div>

              <div>
                <div className="h-4 w-24 bg-white/10 rounded animate-pulse mb-2"></div>
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-6 w-20 bg-white/10 rounded-full animate-pulse"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Image Skeleton */}
          <div className="mb-12">
            <div className="relative aspect-video rounded-2xl bg-white/10 animate-pulse"></div>
          </div>

          {/* Content Skeleton */}
          <div className="mb-12 space-y-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-4 w-full bg-white/10 rounded animate-pulse"
              ></div>
            ))}
            <div className="h-4 w-3/4 bg-white/10 rounded animate-pulse"></div>
          </div>

          {/* Bottom Button Skeleton */}
          <div className="text-center">
            <div className="h-10 w-36 bg-white/10 rounded animate-pulse mx-auto"></div>
          </div>
        </Container>
      </section>
    </div>
  );
}
