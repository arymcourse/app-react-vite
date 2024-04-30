import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { Context } from "../context/AppContext";
import Logo from "./Logo";
import NavList from "./NavList";

const NavDialog = () => {
    const { mobileMenuOpen, setMobileMenuOpen } = useContext(Context);

    return (
        <Dialog 
            as="div"
            className="lg:hidden" 
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
        >
            <Dialog.Panel className={"fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm bg-white p-6 overflow-auto"}>
                <div className="flex items-center justify-between">
                    <Logo />
                    <button type="button" onClick={() => setMobileMenuOpen(false)}>
                        <XMarkIcon className="h-6 w-6" />
                    </button>
                </div>

                <div className="mt-6 flow">
                    <div className="space-y-2 py-6 flex flex-col">
                        <NavList />
                    </div>
                </div> 
            </Dialog.Panel>
        </Dialog>
    )
}

export default NavDialog;