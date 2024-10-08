/**
 * Custom daisyUI Footer for the QRCode generator.
 *
 * https://daisyui.com/components/footer/
 *
 * @returns {React.JSX.Element} The rendered component.
 */
export default function Footer() {
  return (
    <footer className="footer footer-center bg-base-200 p-4 text-base-content">
      <aside>
        <p>
          Hosted on{" "}
          <a
            className="link-hover link link-primary"
            href="https://github.com/vanfossen/simple-qrcode-generator"
            target="_blank"
          >
            GitHub
          </a>{" "}
          with a{" "}
          <a
            className="link-hover link link-primary"
            href="https://github.com/vanfossen/simple-qrcode-generator/blob/main/LICENSE"
            target="_blank"
          >
            MIT license
          </a>
          .
        </p>
      </aside>
    </footer>
  );
}
