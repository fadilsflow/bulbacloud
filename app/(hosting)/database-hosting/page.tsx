  // app/services/custom-websites/page.tsx

  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

  export default function CustomWebsite() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Detail Custom Websites</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Layanan pembuatan website kustom yang dirancang khusus untuk memenuhi
            kebutuhan bisnis Anda. Kami menawarkan solusi yang fleksibel dan
            scalable.
          </p>
          <div className="mt-4 space-y-4">
            <h3 className="font-medium">Apa yang Kami Tawarkan?</h3>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>Desain UI/UX yang modern dan responsif</li>
              <li>Integrasi dengan sistem pihak ketiga</li>
              <li>Optimasi SEO untuk visibilitas yang lebih baik</li>
              <li>Dukungan teknis 24/7</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    );
  }
