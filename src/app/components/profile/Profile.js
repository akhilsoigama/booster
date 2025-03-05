'use client';
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { logout } from "../logo/logout";
import { LogoutModal } from "./LogoutModel";

export function DropdownMenuDemo() {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false); 
    const baseUrl = process.env.NEXT_PUBLIC_HOST;

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const response = await axios.get(`${baseUrl}/api/check-auth`, {
                    withCredentials: true,
                });
                const data = response.data;
                if (data.isLoggedIn) {
                    setIsLoggedIn(true);
                    fetchUserData();
                } else {
                    setIsLoggedIn(false);
                    router.push('/Auth/signup');
                }
            } catch (error) {
                console.error('Error checking login status:', error);
                setIsLoggedIn(false);
                router.push('/Auth/signup');
            }
        };

        const fetchUserData = async () => {
            try {
                const response = await axios.get(`${baseUrl}/api/user`, {
                    withCredentials: true,
                });
                setUser(response.data.user);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        checkLoginStatus();
    }, [router, baseUrl]);

    const handleLogout = async () => {
        await logout();
        toast.success('Logged out successfully');
        setIsLoggedIn(false);
        setUser(null);
        router.push('/Auth/signup');
    };

    const firstLetter = user ? user.fullName.charAt(0).toUpperCase() : '';

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    {isLoggedIn &&
                    <Button variant="outline">
                        {firstLetter || "User"} 
                    </Button>
                    }
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            Profile
                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </DropdownMenuItem>
                       
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                                <DropdownMenuSubContent>
                                    <DropdownMenuItem>Email</DropdownMenuItem>
                                    <DropdownMenuItem>Message</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>More...</DropdownMenuItem>
                                </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                        </DropdownMenuSub>
                        <DropdownMenuItem>
                            New Team
                            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setIsLogoutModalOpen(true)}>
                        Log out
                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <LogoutModal
                isOpen={isLogoutModalOpen}
                onClose={() => setIsLogoutModalOpen(false)}
                onConfirm={handleLogout}
            />
        </>
    );
}