import React from "react";

// Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvira } from "@fortawesome/free-brands-svg-icons";

// Footer component
export const Footer = () => {
  return (
    <footer className="self-end bg-offblack flex flex-col items-center gap-4 py-4 lg:h-12 lg:px-9 lg:grid lg:grid-cols-3 lg:items-center text-offwhite-footer font-family-arial text-sm">
      <ul className="flex gap-7">
        <li>
          <a
            className="hover:underline"
            href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=webhp&cd=&cad=rja&uact=8&ved=0ahUKEwj14L3fvbT2AhUakIkEHV8nDj8QkdQCCBA&url=https%3A%2F%2Fwww.google.com%2Fintl%2Fen_us%2Fads%2F%3Fsubid%3Dww-ww-et-g-awa-a-g_hpafoot1_1!o2%26utm_source%3Dgoogle.com%26utm_medium%3Dreferral%26utm_campaign%3Dgoogle_hpafooter%26fg%3D1&usg=AOvVaw3XLzhicA5ZZW0afDbW0l2T"
          >
            Advertising
          </a>
        </li>
        <li>
          <a
            className="hover:underline"
            href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=webhp&cd=&cad=rja&uact=8&ved=0ahUKEwj14L3fvbT2AhUakIkEHV8nDj8QktQCCBE&url=https%3A%2F%2Fwww.google.com%2Fservices%2F%3Fsubid%3Dww-ww-et-g-awa-a-g_hpbfoot1_1!o2%26utm_source%3Dgoogle.com%26utm_medium%3Dreferral%26utm_campaign%3Dgoogle_hpbfooter%26fg%3D1&usg=AOvVaw2SJ4zwRVXKyZr53qG9dm4K"
          >
            Business
          </a>
        </li>
        <li>
          <a
            className="hover:underline"
            href="https://google.com/search/howsearchworks/?fg=1"
          >
            How Search works
          </a>
        </li>
      </ul>
      <div className="justify-self-center flex items-center gap-1">
        <FontAwesomeIcon className="text-xl text-lime-600" icon={faEnvira} />
        <a
          className="hover:underline"
          href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=webhp&cd=&cad=rja&uact=8&ved=0ahUKEwj14L3fvbT2AhUakIkEHV8nDj8QiM8HCBI&url=https%3A%2F%2Fsustainability.google%2Fcarbon-free%2F%3Futm_source%3Dgooglehpfooter%26utm_medium%3Dhousepromos%26utm_campaign%3Dbottom-footer%26utm_content%3D&usg=AOvVaw1rcVBpKP-6V0ZIWi18SzDE"
        >
          Carbon neutral since 2007
        </a>
      </div>
      <ul className="justify-self-end flex gap-7">
        <li>
          <a
            className="hover:underline"
            href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=webhp&cd=&cad=rja&uact=8&ved=0ahUKEwj14L3fvbT2AhUakIkEHV8nDj8Q8awCCBM&url=https%3A%2F%2Fpolicies.google.com%2Fprivacy%3Fhl%3Den%26fg%3D1&usg=AOvVaw25lN6TjyY2uszSImdhMejE"
          >
            Privacy
          </a>
        </li>
        <li>
          <a
            className="hover:underline"
            href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=webhp&cd=&cad=rja&uact=8&ved=0ahUKEwj14L3fvbT2AhUakIkEHV8nDj8Q8qwCCBQ&url=https%3A%2F%2Fpolicies.google.com%2Fterms%3Fhl%3Den%26fg%3D1&usg=AOvVaw2d8Ahs2oc0jxVOgPfpr4Fe"
          >
            Terms
          </a>
        </li>
        <li>
          <button>Settings</button>
        </li>
      </ul>
    </footer>
  );
};
