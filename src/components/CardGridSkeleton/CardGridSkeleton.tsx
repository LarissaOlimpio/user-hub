import { Container, Skeleton, Card, CardContent, Box } from "@mui/material";
import Grid from "@mui/material/Grid";

interface CardGridSkeletonProps {
  quantity: number;
  showSearch: boolean;
}

export const CardGridSkeleton = ({
  quantity,
  showSearch,
}: CardGridSkeletonProps) => {
  const skeletonCards = Array.from(new Array(quantity));

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {showSearch && (
        <Box sx={{ mb: 4 }}>
          <Skeleton variant="rounded" height={56} width="100%" />
        </Box>
      )}

      <Grid container spacing={3}>
        {skeletonCards.map((_, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Card sx={{ height: "100%", borderRadius: 2 }}>
              <CardContent className="flex flex-col items-center">
                <Skeleton
                  variant="circular"
                  width={56}
                  height={56}
                  sx={{ mb: 2 }}
                />

                <Skeleton variant="text" width="80%" height={32} />
                <Skeleton
                  variant="text"
                  width="60%"
                  height={20}
                  sx={{ mb: 2 }}
                />

                <Skeleton variant="rounded" width="100%" height={36} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
