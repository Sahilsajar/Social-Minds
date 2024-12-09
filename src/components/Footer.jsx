import React, { useContext } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaShareAlt,
} from "react-icons/fa";
import { ThemeContext } from "../themeContext/ThemeContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <footer className="bg-white text-black dark:bg-black dark:text-white py-8 -mt-2">
    <hr className="relative -top-8 left-0 md:w-[98%] w-[90%] mx-auto dark:bg-gray-500 bg-black h-[3px]"/>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Brand Description */}
        <div className="ml-8 relative">
          {/* For Logo */}
          <div className="h-60 w-60 relative">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="1600.000000pt"
              height="1200.000000pt"
              viewBox="0 0 1600.000000 1200.000000"
              preserveAspectRatio="xMidYMid meet"
              className="h-full w-full absolute -top-20 -left-12"
            >
              <g
                transform="translate(0.000000,1200.000000) scale(0.100000,-0.100000)"
                fill={theme === "dark" ? "#ffffff" : "#000000"}
                stroke="none"
              >
                <path d="M3794 6820 c0 -69 1 -97 3 -62 2 34 2 90 0 125 -2 34 -3 6 -3 -63z" />
                <path
                  d="M4176 6700 c-36 -49 -66 -95 -66 -101 0 -6 32 32 71 86 39 53 69 99
66 101 -2 2 -34 -36 -71 -86z"
                />
                <path
                  d="M3340 6777 c0 -12 122 -177 131 -177 6 0 -16 35 -47 78 -61 83 -84
110 -84 99z"
                />
                <path
                  d="M4863 6660 c-109 -23 -164 -85 -166 -189 -2 -104 45 -148 206 -192
120 -34 153 -60 136 -108 -12 -34 -55 -55 -107 -54 -48 1 -78 20 -97 59 -16
33 -17 34 -79 34 -34 0 -65 -2 -68 -5 -10 -11 13 -90 37 -127 80 -121 340
-124 426 -5 54 74 51 173 -7 237 -37 41 -90 66 -205 95 -72 19 -99 38 -99 71
0 30 23 52 65 60 47 9 86 -7 110 -44 19 -30 23 -31 88 -32 73 0 74 0 57 62
-29 104 -162 166 -297 138z"
                />
                <path
                  d="M5622 6659 c-97 -19 -186 -91 -234 -188 -19 -38 -23 -62 -23 -146 0
-86 3 -107 24 -150 73 -147 244 -224 408 -181 75 19 125 49 176 105 61 68 81
121 81 226 1 79 -2 97 -26 145 -76 153 -229 224 -406 189z m200 -158 c19 -13
46 -40 59 -59 21 -31 24 -47 24 -118 0 -77 -2 -85 -31 -120 -55 -69 -77 -79
-163 -79 -68 0 -83 3 -119 28 -123 81 -116 280 13 355 56 32 165 28 217 -7z"
                />
                <path
                  d="M6470 6657 c-94 -27 -173 -96 -216 -191 -39 -85 -39 -196 1 -284 32
-72 102 -142 172 -174 70 -31 200 -31 268 0 65 30 131 94 161 157 38 80 36 85
-45 85 -60 0 -71 -3 -76 -19 -27 -86 -155 -136 -248 -97 -75 31 -124 126 -113
219 7 60 30 101 79 141 35 28 45 31 111 31 64 0 77 -3 109 -28 20 -15 44 -41
52 -58 15 -28 18 -29 85 -29 80 0 81 1 46 76 -63 136 -237 213 -386 171z"
                />
                <path
                  d="M12253 6660 c-105 -22 -162 -86 -165 -185 -2 -63 4 -80 45 -120 34
-34 58 -47 117 -65 41 -12 93 -27 114 -33 22 -7 48 -24 58 -38 16 -21 17 -29
7 -52 -17 -37 -79 -61 -126 -48 -43 12 -83 47 -83 73 0 16 -9 18 -71 18 l-72
0 5 -45 c8 -65 49 -119 117 -152 117 -58 286 -25 347 67 60 90 36 214 -49 265
-23 13 -82 35 -132 50 -106 30 -135 47 -135 79 0 33 32 58 84 63 40 5 48 2 74
-23 16 -16 31 -34 33 -41 5 -13 24 -16 92 -14 40 1 47 4 47 21 0 30 -27 91
-53 118 -50 54 -161 81 -254 62z"
                />
                <path
                  d="M7087 6654 c-4 -4 -7 -153 -7 -331 l0 -323 70 0 70 0 -2 328 -3 327
-60 3 c-34 2 -64 0 -68 -4z"
                />
                <path
                  d="M7662 6652 c-9 -6 -262 -632 -262 -649 0 -2 34 -3 74 -3 l75 0 22 60
22 61 130 -3 131 -3 22 -55 22 -55 76 -3 c42 -2 76 0 76 3 0 12 -253 631 -262
643 -12 13 -105 16 -126 4z m118 -323 c15 -43 26 -80 22 -83 -9 -10 -150 -7
-156 3 -5 7 25 95 70 211 7 17 18 -6 64 -131z"
                />
                <path
                  d="M8237 6654 c-4 -4 -7 -153 -7 -331 l0 -323 200 0 201 0 -3 63 -3 62
-125 5 -125 5 -5 260 -5 260 -60 3 c-34 2 -64 0 -68 -4z"
                />
                <path
                  d="M9197 6653 c-3 -5 -26 -141 -52 -303 -25 -162 -48 -307 -51 -322 l-6
-28 74 0 74 0 29 198 c15 108 31 200 34 205 6 6 94 -173 169 -345 44 -104 54
-91 220 281 18 40 36 71 39 67 5 -5 62 -362 63 -393 0 -9 22 -13 76 -13 67 0
75 2 70 18 -3 9 -17 96 -31 192 -15 96 -35 233 -46 304 -10 70 -22 132 -25
137 -8 14 -132 11 -141 -3 -4 -7 -44 -95 -89 -196 -45 -101 -85 -184 -89 -185
-4 -1 -46 86 -94 193 l-86 195 -67 3 c-36 2 -69 -1 -71 -5z"
                />
                <path
                  d="M10147 6654 c-4 -4 -7 -153 -7 -331 l0 -323 70 0 70 0 0 329 0 328
-63 2 c-35 1 -66 -2 -70 -5z"
                />
                <path
                  d="M10533 6653 c-10 -4 -13 -79 -13 -329 l0 -324 70 0 70 0 0 196 c0
124 4 194 10 192 5 -1 72 -88 148 -193 l138 -190 62 -3 62 -3 -2 328 -3 328
-65 0 -65 0 -5 -195 -5 -195 -41 55 c-22 30 -82 114 -133 185 -52 72 -101 136
-109 143 -15 12 -94 16 -119 5z"
                />
                <path
                  d="M11337 6653 c-4 -3 -7 -152 -7 -330 l0 -323 160 0 c135 0 167 3 213
20 75 28 131 79 166 153 40 80 48 154 27 235 -34 134 -122 215 -261 241 -64
12 -288 15 -298 4z m321 -152 c67 -34 102 -95 102 -178 -1 -125 -78 -193 -220
-193 l-70 0 0 195 0 195 75 0 c55 0 86 -5 113 -19z"
                />
                <path
                  d="M3644 6610 c-193 -62 -324 -245 -324 -456 0 -128 42 -234 135 -333
83 -90 89 -111 93 -320 1 -102 7 -201 12 -221 9 -35 81 -120 101 -120 4 0 15
-13 24 -30 l16 -30 93 0 94 0 12 30 c7 17 16 30 21 30 21 0 79 65 99 112 21
50 22 62 17 199 -8 181 4 238 66 316 138 173 162 236 155 396 -4 81 -10 114
-31 160 -29 64 -75 128 -121 166 -15 14 -34 30 -40 37 -20 20 -98 56 -151 70
-72 20 -198 17 -271 -6z m67 -144 c31 -68 -110 -197 -201 -184 -52 7 -34 84
32 144 73 65 149 84 169 40z m-24 -335 c12 -11 23 -39 27 -66 l7 -46 72 3 72
3 6 42 c6 50 33 83 66 83 59 0 93 -53 73 -114 -13 -40 -35 -56 -75 -56 l-26 0
2 -226 c1 -230 -3 -253 -37 -240 -15 6 -16 26 -13 234 l4 227 -72 3 c-70 3
-73 2 -74 -20 0 -13 -1 -117 -2 -233 -2 -203 -3 -210 -22 -210 -19 0 -20 8
-23 233 l-2 232 -24 0 c-13 0 -35 9 -50 21 -20 16 -26 29 -26 62 0 74 68 113
117 68z"
                />
                <path
                  d="M3622 6098 c-27 -27 -7 -78 30 -78 14 0 18 8 18 39 0 26 -5 41 -16
45 -20 8 -18 8 -32 -6z"
                />
                <path
                  d="M3922 6098 c-6 -6 -12 -27 -12 -45 0 -26 4 -33 19 -33 32 0 50 26 42
57 -8 31 -30 40 -49 21z"
                />
                <path
                  d="M3065 6393 c13 -13 205 -77 211 -70 3 3 -39 20 -93 37 -54 18 -105
35 -113 38 -10 3 -12 2 -5 -5z"
                />
                <path
                  d="M4420 6369 c-115 -39 -114 -39 -108 -44 5 -5 206 60 216 70 12 11
-27 2 -108 -26z"
                />
                <path
                  d="M3165 5959 c-121 -40 -119 -39 -112 -45 6 -6 227 64 227 72 0 8 -27
2 -115 -27z"
                />
                <path
                  d="M4315 5982 c13 -12 207 -73 213 -67 3 2 -1 7 -9 9 -8 3 -45 16 -84
29 -89 31 -133 41 -120 29z"
                />
                <path d="M4890 5780 l0 -40 3786 0 3785 0 -3 38 -3 37 -3782 3 -3783 2 0 -40z" />
                <path
                  d="M4113 5709 c9 -26 129 -190 135 -185 2 3 -24 45 -58 93 -70 98 -86
116 -77 92z"
                />
                <path
                  d="M3413 5643 c-65 -91 -85 -123 -76 -122 10 0 135 180 130 186 -3 2
-27 -27 -54 -64z"
                />
                <path
                  d="M5863 5516 c-54 -25 -71 -87 -32 -122 11 -10 48 -28 82 -39 58 -19
62 -22 62 -50 0 -67 -115 -71 -137 -3 -2 6 -12 9 -21 5 -13 -5 -15 -12 -8 -29
22 -59 122 -83 178 -42 21 16 29 31 31 60 1 21 -2 45 -6 52 -5 7 -42 25 -83
40 -61 23 -75 32 -77 52 -8 51 72 69 112 25 27 -29 46 -32 46 -7 0 49 -89 84
-147 58z"
                />
                <path
                  d="M6424 5519 c-41 -12 -91 -69 -100 -114 -28 -150 139 -252 252 -153
34 30 61 95 45 111 -4 4 -41 7 -82 5 -58 -2 -74 -6 -74 -18 0 -11 14 -16 58
-18 65 -3 71 -15 31 -53 -21 -19 -36 -24 -80 -24 -45 0 -58 4 -80 26 -30 31
-42 98 -25 141 13 34 66 68 106 68 34 0 93 -32 101 -55 7 -16 44 -21 44 -5 0
22 -64 80 -98 90 -43 12 -56 11 -98 -1z"
                />
                <path
                  d="M7181 5508 c-65 -34 -86 -67 -86 -138 0 -63 16 -95 69 -134 38 -29
134 -29 172 0 44 32 66 68 71 116 14 126 -114 214 -226 156z m129 -33 c16 -9
36 -29 45 -45 31 -60 10 -137 -45 -165 -110 -57 -222 55 -165 165 29 55 105
76 165 45z"
                />
                <path
                  d="M8674 5511 c-61 -28 -89 -73 -89 -143 0 -70 22 -103 88 -137 108 -54
227 20 227 142 0 112 -122 187 -226 138z m126 -36 c42 -22 60 -53 60 -105 0
-52 -18 -83 -60 -105 -128 -66 -241 95 -135 193 39 36 86 42 135 17z"
                />
                <path
                  d="M10733 5515 c-86 -37 -64 -131 38 -155 85 -21 112 -72 53 -99 -40
-18 -64 -13 -94 19 -32 34 -50 38 -50 12 0 -52 82 -94 143 -73 49 18 67 40 67
83 0 48 -20 66 -103 93 -68 22 -82 42 -51 76 24 27 70 24 100 -6 14 -14 31
-25 39 -25 27 0 -4 57 -40 74 -40 19 -60 20 -102 1z"
                />
                <path
                  d="M11963 5515 c-86 -37 -64 -131 38 -155 49 -12 89 -39 89 -60 0 -21
-41 -50 -71 -50 -22 0 -40 9 -59 30 -32 34 -50 38 -50 12 0 -31 29 -61 70 -72
94 -25 174 45 135 119 -12 24 -29 34 -87 53 -58 18 -74 27 -76 45 -4 25 31 53
66 53 12 0 34 -11 48 -25 36 -36 56 -34 42 6 -7 21 -22 36 -44 45 -41 17 -60
17 -101 -1z"
                />
                <path
                  d="M12292 5515 c-30 -13 -52 -47 -52 -81 0 -25 45 -62 91 -74 86 -23
108 -51 69 -90 -30 -30 -76 -26 -110 10 -31 33 -50 39 -50 14 0 -50 65 -90
130 -79 68 12 104 67 78 122 -10 22 -27 33 -85 51 -83 27 -102 52 -63 84 31
25 66 23 96 -7 26 -26 54 -33 54 -14 0 24 -24 52 -55 65 -42 17 -61 17 -103
-1z"
                />
                <path
                  d="M12590 5414 c0 -105 2 -115 18 -112 15 3 17 18 20 116 3 107 2 112
-18 112 -19 0 -20 -6 -20 -116z"
                />
                <path
                  d="M4740 5370 l0 -150 85 0 c68 0 85 3 85 15 0 10 -16 15 -62 17 l-63 3
-3 133 c-2 124 -4 132 -22 132 -19 0 -20 -7 -20 -150z"
                />
                <path
                  d="M5032 5373 l3 -148 88 -3 c72 -2 87 0 87 12 0 12 -16 16 -67 18 l-68
3 0 50 0 50 58 5 c31 3 57 10 57 15 0 6 -26 12 -57 15 l-58 5 0 45 0 45 68 3
c51 2 67 6 67 17 0 12 -18 15 -90 15 l-91 0 3 -147z"
                />
                <path
                  d="M5315 5510 c-7 -12 8 -18 55 -22 l35 -3 3 -133 c2 -120 4 -133 20
-130 15 3 17 20 20 136 l3 132 44 0 c33 0 45 4 45 15 0 12 -19 15 -109 15 -63
0 -112 -4 -116 -10z"
                />
                <path
                  d="M5650 5470 c0 -38 4 -50 15 -50 11 0 15 12 15 50 0 38 -4 50 -15 50
-11 0 -15 -12 -15 -50z"
                />
                <path
                  d="M6760 5369 c0 -138 1 -150 18 -147 13 2 18 15 20 61 3 56 4 57 33 57
26 0 35 -8 67 -60 22 -36 44 -60 55 -60 23 0 22 5 -14 63 l-30 50 30 28 c42
38 44 98 5 134 -24 22 -36 25 -105 25 l-79 0 0 -151z m148 105 c26 -18 30 -65
7 -84 -9 -7 -38 -15 -65 -18 l-50 -5 0 62 0 61 43 0 c23 0 53 -7 65 -16z"
                />
                <path
                  d="M7560 5373 c60 -190 70 -194 120 -58 19 53 40 95 45 94 6 0 26 -42
46 -93 54 -134 63 -131 118 41 24 76 46 144 48 151 4 9 -2 13 -17 10 -19 -3
-27 -19 -56 -112 -18 -59 -35 -110 -37 -113 -3 -2 -24 46 -48 108 -24 62 -48
110 -54 109 -5 -2 -25 -42 -43 -89 -58 -153 -50 -152 -91 -21 -30 95 -40 116
-58 118 -20 3 -18 -5 27 -145z"
                />
                <path
                  d="M8246 5473 c15 -27 40 -68 56 -92 22 -36 28 -57 28 -103 0 -51 2 -58
20 -58 18 0 20 7 20 63 0 57 4 69 50 142 27 44 50 83 50 88 0 4 -8 7 -18 7
-11 0 -31 -23 -56 -65 -21 -36 -41 -67 -45 -69 -4 -3 -26 26 -50 65 -30 48
-49 69 -63 69 -19 0 -18 -3 8 -47z"
                />
                <path
                  d="M9032 5399 l3 -121 32 -28 c43 -38 91 -47 137 -25 55 26 66 57 66
185 0 103 -1 110 -20 110 -19 0 -20 -7 -20 -110 0 -104 -1 -112 -25 -135 -15
-16 -36 -25 -55 -25 -19 0 -40 9 -55 25 -24 23 -25 31 -25 135 0 105 -1 110
-21 110 -20 0 -21 -4 -17 -121z"
                />
                <path
                  d="M9420 5370 c0 -142 1 -150 20 -150 16 0 19 8 22 58 3 56 4 57 34 60
28 3 34 -2 66 -55 23 -40 41 -59 57 -61 22 -4 22 -2 -10 56 l-33 59 29 26 c24
20 30 33 30 67 0 34 -6 47 -28 66 -25 21 -38 24 -108 24 l-79 0 0 -150z m145
108 c53 -24 40 -92 -19 -103 -66 -13 -81 -5 -84 44 -2 24 -1 50 2 57 7 17 65
18 101 2z"
                />
                <path
                  d="M9960 5370 l0 -150 80 0 c73 0 83 3 105 25 31 30 34 84 5 110 -17 16
-18 20 -5 38 22 32 19 83 -7 107 -18 17 -35 20 -100 20 l-78 0 0 -150z m142
108 c46 -38 22 -79 -49 -85 -57 -6 -63 0 -55 60 4 36 5 37 46 37 23 0 49 -6
58 -12z m13 -138 c8 -7 15 -23 15 -35 0 -31 -22 -47 -74 -52 -49 -6 -59 3 -59
52 0 49 10 58 59 52 24 -2 51 -10 59 -17z"
                />
                <path
                  d="M10310 5410 c0 -129 12 -164 65 -186 47 -19 74 -18 113 6 48 29 62
72 62 190 0 92 -2 100 -19 100 -18 0 -20 -10 -23 -116 -3 -108 -5 -117 -27
-135 -30 -25 -72 -24 -104 1 -25 20 -26 26 -29 133 -3 97 -5 112 -20 115 -16
3 -18 -7 -18 -108z"
                />
                <path
                  d="M11030 5369 c0 -138 1 -150 18 -147 15 3 17 20 20 151 2 142 2 147
-18 147 -19 0 -20 -6 -20 -151z"
                />
                <path
                  d="M11220 5369 c0 -138 1 -150 18 -147 15 3 18 19 22 113 l5 109 64 -90
c129 -180 131 -180 131 16 0 127 -2 150 -15 150 -18 0 -16 9 -19 -112 -1 -54
-4 -100 -7 -102 -3 -3 -40 44 -84 104 -110 154 -115 152 -115 -41z"
                />
                <path
                  d="M11620 5370 l0 -150 85 0 c69 0 85 3 85 15 0 12 -14 15 -64 15 -53 0
-66 3 -70 18 -4 15 -3 60 2 85 1 4 29 7 62 7 46 0 60 3 60 15 0 10 -16 15 -62
17 l-63 3 0 45 0 45 68 3 c51 2 67 6 67 17 0 12 -17 15 -85 15 l-85 0 0 -150z"
                />
                <path
                  d="M12590 5240 c0 -13 7 -20 20 -20 13 0 20 7 20 20 0 13 -7 20 -20 20
-13 0 -20 -7 -20 -20z"
                />
              </g>
            </svg>
          </div>
          {/* Description */}
          <p className="text-sm absolute top-20 text-gray-600 dark:text-white">
            At Social Minds, we help you create, manage, and optimize ads that
            connect with the right audience. Whether you're a small business or
            a marketer, our platform provides the tools and insights you need to
            elevate your brand and drive results. Join us today and make your
            ads impactful and effective.
          </p>
          <div className="flex gap-4 items-center sm:-mt-6 md:mt-12 lg:mt-0">
            <FaShareAlt />
            <span className="text-xl">Follow</span>
          </div>  
          <div className="flex gap-4 mt-4 ">
            <a
              href="https://www.facebook.com/profile.php?id=61565911590214&mibextid=LQQJ4d&mibextid=LQQJ4d"
              className="hover:opacity-75 text-xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/socialmindsss?igsh=MXRpenduYjUwOXRtaw%3D%3D"
              className="hover:opacity-75 text-xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="md:mx-auto ml-8  grid grid-cols-1 gap-8">
          {/* Our Services */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
            <ul className="space-y-2">
              <li>
                <Link to={'/service'} className="hover:underline">
                  Graphic Designs
                </Link>
              </li>
              <li>
                <Link to={'/service'} className="hover:underline">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link to={'/service'} className="hover:underline">
                  Web Solutions
                </Link>
              </li>
              <li>
                <Link to={'/service'} className="hover:underline">
                  Performance Marketing
                </Link>
              </li>
              <li>
                <Link to={'/service'} className="hover:underline">
                  Content Writing
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          {/* <div className="md:ml-10">
            <h2 className="text-2xl font-semibold mb-4">Useful Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Industries
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Location
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Case Study
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blogs
                </a>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Contact Info */}
        <div className="ml-8">
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <div className="">
            <p className="text-sm">
              33 A P Naskar Lane, Picnic Garden, Kolkata- 700039
            </p>
            <p className="mt-4">
              <span className="block">+91 8240326567</span>
              <span className="block">contact@socialmindss.co</span>
            </p>
          </div>
        </div>
      </div>
      <p className="text-xs text-center mt-4">
        © 2024 <span className="font-semibold"></span>. All rights reserved.
        Powered by{" "}
        <a
          href="https://www.ultimatecoder.in/"
          className="text-blue-400 hover:underline"
        >
          Ultimate Coder
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
