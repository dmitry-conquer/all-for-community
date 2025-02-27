export class Header {
  private readonly selectors: Record<string, string> = {
    root: "[data-js-header]",
    overlay: "[data-js-header-overlay]",
    buttonOpen: "[data-js-header-button-open]",
    buttonClose: "[data-js-header-button-close]",
    menuItem: ".menu-item-has-children > a",
  };

  private readonly stateClasses: Record<string, string> = {
    isActive: "is-active",
    isLock: "is-lock",
  };

  private readonly attributes: Record<string, string> = {
    ariaExpanded: "aria-expanded",
  };

  private rootElement: HTMLElement | null;
  private overlayElement: HTMLElement | null;
  private buttonOpenElement: HTMLElement | null;
  private buttonCloseElement: HTMLElement | null;
  private menuItems: Element[];

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.overlayElement = this.rootElement?.querySelector(this.selectors.overlay) || null;
    this.buttonOpenElement = this.rootElement?.querySelector(this.selectors.buttonOpen) || null;
    this.buttonCloseElement = this.rootElement?.querySelector(this.selectors.buttonClose) || null;
    this.menuItems = [...(this.rootElement?.querySelectorAll(this.selectors.menuItem) || [])];
    this.bindEvents();
  }

  toggleMenu(state: boolean): void {
    this.buttonOpenElement?.classList.toggle(this.stateClasses.isActive, state);
    this.buttonCloseElement?.classList.toggle(this.stateClasses.isActive, state);
    this.overlayElement?.classList.toggle(this.stateClasses.isActive, state);
    document.documentElement.classList.toggle(this.stateClasses.isLock, state);

    this.buttonOpenElement?.setAttribute(this.attributes.ariaExpanded, state.toString());
    this.buttonCloseElement?.setAttribute(this.attributes.ariaExpanded, state.toString());
  }

  isNotOverlayRelated(event: MouseEvent) {
    return (
      !this.overlayElement?.contains(event.target as Node) && !this.buttonOpenElement?.contains(event.target as Node)
    );
  }

  onClickOutside = (event: MouseEvent): void => {
    if (this.isNotOverlayRelated(event)) {
      this.toggleMenu(false);
    }
  };

  onMenuItemClick(currentIndex: number) {
    this.menuItems.forEach((menuItem, index) => {
      const subMenu = menuItem.nextElementSibling as HTMLElement;
      const isActive = menuItem.classList.contains(this.stateClasses.isActive);

      if (currentIndex === index) {
        menuItem.classList.toggle(this.stateClasses.isActive);
        subMenu.style.maxHeight = isActive ? "" : `${subMenu.scrollHeight}px`;
      } else {
        menuItem.classList.remove(this.stateClasses.isActive);
        subMenu.style.maxHeight = "";
      }
    });
  }

  bindEvents(): void {
    this.buttonOpenElement?.addEventListener("click", () => this.toggleMenu(true));
    this.buttonCloseElement?.addEventListener("click", () => this.toggleMenu(false));
    document.documentElement.addEventListener("click", this.onClickOutside);
    this.menuItems.forEach((item, index) => {
      item.addEventListener("click", e => {
        e.preventDefault();
        this.onMenuItemClick(index);
      });
    });
  }
}

export default Header;
