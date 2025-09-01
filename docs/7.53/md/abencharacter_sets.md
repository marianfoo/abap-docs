  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Overview](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_oview.htm) → 

ABAP Character Set

Application Server ABAP supports only Unicode systems in the current release.

-   A Unicode system is an [ABAP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_nw_abap_glosry.htm "Glossary Entry") based on Unicode character representation with a [code page](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencodepage_glosry.htm "Glossary Entry") for [Unicode](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunicode_glosry.htm "Glossary Entry") and which runs on a an appropriate operating system.

-   A non-Unicode system is an [AS ABAP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_nw_abap_glosry.htm "Glossary Entry") with [code pages](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencodepage_glosry.htm "Glossary Entry") for [single-byte code](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensingle_byte_code_glosry.htm "Glossary Entry") and [double-byte code](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendouble_byte_code_glosry.htm "Glossary Entry"). Non-Unicode systems are no longer supported in the current release.

[Unicode](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunicode_glosry.htm "Glossary Entry") (ISO/IEC 10646) with the character set [UCS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenucs_glosry.htm "Glossary Entry") covers all existing characters. A variety of Unicode character formats is possible for the Unicode character set, such as [UTF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenutf_glosry.htm "Glossary Entry") (in which a character can occupy between one and four bytes) or [UCS-2](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenucs2_glosry.htm "Glossary Entry") (where a character occupies two bytes).

-   [UTF-16](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenutf16_glosry.htm "Glossary Entry") is the [system code page](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_codepage_glosry.htm "Glossary Entry") of a Unicode system.

-   The ABAP programming language supports the character representation [UCS-2](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenucs2_glosry.htm "Glossary Entry"), which fundamentally matches the UTF-16 representation and covers its characters (except the characters in the [surrogate area](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensurrogate_area_glosry.htm "Glossary Entry")).

A restriction to UCS-2 in ABAP means that a character is always assumed as having a length of two bytes. This generally only produces problems if character strings are truncated in the middle of a character representation from the UTF-16 surrogate area or if individual characters from sets of characters are compared in character string processing.

In a [Unicode system](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunicode_system_glosry.htm "Glossary Entry"), an ABAP program must have the ABAP language version [Standard ABAP (Unicode)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunicode_program_glosry.htm "Glossary Entry"). Programs with the obsolete language version [Non-Unicode ABAP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennon_unicode_program_glosry.htm "Glossary Entry") can no longer be used in a Unicode system.

Notes

-   Before Unicode, SAP used various different codes for representing characters in different fonts, such as ASCII, EBCDIC as single-byte [code pages](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencodepage_glosry.htm "Glossary Entry"), or double-byte code pages:

-   ASCII (American Standard Code for Information Interchange) encodes every character with one byte. This means that a maximum of 256 characters can be displayed (strictly speaking, standard ASCII only encodes one character using 7 bit and can therefore only represent 128 characters. The extension to 8 bit was introduced in [ISO-8859](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeniso-8859_glosry.htm "Glossary Entry")). Examples of common code pages are ISO-8859-1 for Western European, or ISO-8859-5 for Cyrillic fonts.

-   EBCDIC (Extended Binary Coded Decimal Interchange) also encodes each character using one byte, and can therefore also represent 256 characters. For example, EBCDIC 0697/0500 is an IBM format that has been used on the AS/400 platform (now known as IBM System i) for Western European fonts.

-   Double-byte code pages require between 1 and 2 bytes per character. This enables 65536 characters to be represented, of which only 10000 to 15000 characters are normally used. For example, the code page SJIS is used for Japanese and BIG5 for traditional Chinese fonts.

Using these character sets, it was possible to handle all languages individually in one [AS ABAP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_nw_abap_glosry.htm "Glossary Entry"). Problems generally occurred when texts from different incompatible character sets were mixed in a central system. The exchange of data between systems with incompatible character sets was also a potential source of problems.

-   In earlier non-Unicode systems, the system code pages were defined in the database table TCPDB. In non-Unicode single code page systems, there was only one system code page. In the obsolete [MDMP systems](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmdmp-system_glosry.htm "Glossary Entry"), there were multiple system code pages.

-   Before Unicode support was introduced, many ABAP programmers assumed that one character corresponded to one byte. Therefore, before a non-Unicode system is converted to Unicode, ABAP programs must be changed wherever an explicit or implicit assumption is made about the internal length of a character. This mainly affects the following:

-   [Character string processing and byte string processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_string.htm)

-   Access to [structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_objects_structure.htm). The latter is affected because [flat structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenflat_structure_glosry.htm "Glossary Entry") in a program of the obsolete ABAP language version [Non-Unicode ABAP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennon_unicode_program_glosry.htm "Glossary Entry") are handled like character-like data objects and some programming techniques exploit this fact. The [structure fragment view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunicode_fragment_view_glosry.htm "Glossary Entry") can be used to handle structures.

Before a program is switched to Unicode, the [ABAP language version](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_versions.htm) [Standard ABAP (Unicode)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunicode_program_glosry.htm "Glossary Entry") or higher must be configured in the program attributes. For these versions, the [Unicode checks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunicode_check_glosry.htm "Glossary Entry") run in non-Unicode systems too. The transaction UCCHECK supports the activation of these checks for existing programs. The program RSUNISCAN\_FINAL can be used instead of transaction UCCHECK.