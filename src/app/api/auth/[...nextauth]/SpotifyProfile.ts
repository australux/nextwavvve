import SpotifyProvider from "next-auth/providers/spotify";
import { Scopes } from "../scopes";
import { JWT } from "next-auth/jwt";

if (!process.env.SPOTIFY_CLIENT_ID) {
    throw new Error("Missing SPOTIFY_CLIENT_ID");
}

if (!process.env.SPOTIFY_CLIENT_SECRET) {
    throw new Error("Missing SPOTIFY_CLIENT_SECRET");
}

const spotifyProfile = SpotifyProvider({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

const authURL = new URL("https://accounts.spotify.com/authorize");

const scopes = Scopes.userDetails;

authURL.searchParams.append("scope", scopes.join(" "));

spotifyProfile.authorization = authURL.toString();

export default spotifyProfile;

export async function refreshToken(token: JWT) {
    try {
        const res = await fetch(authURL, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            method: "POST",
        });

        const refreshedTokens = await res.json();

        if (!res.ok) {
            throw refreshedTokens;
        }

        return {
            ...token,
            access_token: refreshedTokens.access_token,
            token_type: refreshedTokens.token_type,
            expires_at: refreshedTokens.expires_at,
            expires_in: (refreshedTokens.expires_at ?? 0) - Date.now() / 1000,
            refresh_token: refreshedTokens.refresh_token ?? token.refresh_token,
            scope: refreshedTokens.scope,
        };
    } catch (error) {
        console.error(error);
        return {
            ...token,
            error: "RefreshAccessTokenError",
        };
    }
}
