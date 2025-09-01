  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Overview](javascript:call_link\('abenabap_oview.htm'\)) → 

ABAP Character Set

Application Server ABAP supports only Unicode systems in the current release.

-   Unicode systems are [ABAP systems](javascript:call_link\('abenabap_system_glosry.htm'\) "Glossary Entry") based on Unicode character representation with a [code page](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry") for [Unicode](javascript:call_link\('abenunicode_glosry.htm'\) "Glossary Entry") and which have an appropriate underlying operating system and database.

-   Non-Unicode systems are ABAP systems with [code pages](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry") for [single byte code](javascript:call_link\('abensingle_byte_code_glosry.htm'\) "Glossary Entry") and [double byte code](javascript:call_link\('abendouble_byte_code_glosry.htm'\) "Glossary Entry"). These systems are no longer supported in the current release.

[Unicode](javascript:call_link\('abenunicode_glosry.htm'\) "Glossary Entry") (ISO/IEC 10646) with the character set [UCS](javascript:call_link\('abenucs_glosry.htm'\) "Glossary Entry") covers all existing characters. A variety of Unicode character formats is possible for the Unicode character set, such as [UTF](javascript:call_link\('abenutf_glosry.htm'\) "Glossary Entry") (in which a character can occupy between one and four bytes) or [UCS-2](javascript:call_link\('abenucs2_glosry.htm'\) "Glossary Entry") (where a character occupies two bytes).

-   [UTF-16](javascript:call_link\('abenutf16_glosry.htm'\) "Glossary Entry") is the [system code page](javascript:call_link\('abensystem_codepage_glosry.htm'\) "Glossary Entry") of a Unicode system.

-   The ABAP programming language supports the character representation [UCS-2](javascript:call_link\('abenucs2_glosry.htm'\) "Glossary Entry"), which fundamentally matches the UTF-16 representation and covers its characters (except the characters in the [surrogate area](javascript:call_link\('abensurrogate_area_glosry.htm'\) "Glossary Entry")).

A restriction to UCS-2 in ABAP means that a character is always assumed as having a length of two bytes. This generally only produces problems if character strings are truncated in the middle of a character representation from the UTF-16 surrogate area or if individual characters from sets of characters are compared in character string processing.

In a [Unicode system](javascript:call_link\('abenunicode_system_glosry.htm'\) "Glossary Entry"), an ABAP program must have the ABAP language version [Standard ABAP (Unicode)](javascript:call_link\('abenunicode_program_glosry.htm'\) "Glossary Entry"). Programs with the language version [Obsolete ABAP (Non-Unicode)](javascript:call_link\('abennon_unicode_program_glosry.htm'\) "Glossary Entry") can no longer be used in a Unicode system.

Notes

-   Before Unicode, SAP used various different codes for representing characters in different fonts, such as ASCII, EBCDIC as single-byte [code pages](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry"), or double-byte code pages:

-   ASCII (American Standard Code for Information Interchange) encodes every character with one byte. This means that a maximum of 256 characters can be displayed (strictly speaking, standard ASCII only encodes one character using 7 bit and can therefore only represent 128 characters. The extension to 8 bit was introduced in [ISO-8859](javascript:call_link\('abeniso-8859_glosry.htm'\) "Glossary Entry")). Examples of common code pages are ISO-8859-1 for Western European, or ISO-8859-5 for Cyrillic fonts.

-   EBCDIC (Extended Binary Coded Decimal Interchange) also encodes each character using one byte, and can therefore also represent 256 characters. For example, EBCDIC 0697/0500 is an IBM format that has been used on the AS/400 platform (now known as IBM System i) for Western European fonts.

-   Double-byte code pages require between 1 and 2 bytes per character. This enables 65536 characters to be represented, of which only 10000 to 15000 characters are normally used. For example, the code page SJIS is used for Japanese and BIG5 for traditional Chinese fonts.

Using these character sets, it was possible to handle all languages individually in one [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry"). Problems generally occurred when texts from different incompatible character sets were mixed in a central system. The exchange of data between systems with incompatible character sets was also a potential source of problems.

-   In earlier non-Unicode systems, the system code pages were defined in the database table TCPDB. In non-Unicode single code page systems, there was only one system code page. In the obsolete [MDMP systems](javascript:call_link\('abenmdmp-system_glosry.htm'\) "Glossary Entry"), there were multiple system code pages.

Continue
[Switching to Unicode](javascript:call_link\('abenunicode.htm'\))