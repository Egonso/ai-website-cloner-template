import { nextInfoabendFull } from "@/lib/paideia-walker-content";
import { htmlResponse } from "@/lib/mirror-utils";

export const runtime = "nodejs";

export async function GET() {
  return htmlResponse(`
    <div class="site-wide-popup">
      <div class="site-opened-popup">
        <div class="site-popup-close"></div>
        <h3>Infoabend</h3>
        <p>Der nächste bekannte Infoabend findet am ${nextInfoabendFull} statt.</p>
        <p><a class="site-button-primary" href="/infoabend">Zum Infoabend</a></p>
      </div>
    </div>
  `);
}
