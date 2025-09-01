---
title: "ABAP Character Set"
description: |
  Application Server ABAP supports only Unicode systems in the current release. -   A Unicode system is an AS ABAP(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenas_abap_glosry.htm 'Glossary Entry') that is based on Unicode character representation with a code page(https://help.sap
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencharacter_sets.htm"
abapFile: "abencharacter_sets.htm"
keywords: ["do", "if", "try", "class", "data", "abencharacter", "sets"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Overview](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_oview.htm) → 

ABAP Character Set

Application Server ABAP supports only Unicode systems in the current release.

-   A Unicode system is an AS [ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenas_abap_glosry.htm "Glossary Entry") that is based on Unicode character representation with a [code page](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencodepage_glosry.htm "Glossary Entry") for [Unicode](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenunicode_glosry.htm "Glossary Entry") and also on a corresponding operating system and database.

-   A non-Unicode system is an [AS ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenas_abap_glosry.htm "Glossary Entry") with [code pages](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencodepage_glosry.htm "Glossary Entry") for [single-byte code](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensingle_byte_code_glosry.htm "Glossary Entry") and [double-byte code](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendouble_byte_code_glosry.htm "Glossary Entry"). Non-Unicode systems are no longer supported in the current release.

[Unicode](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenunicode_glosry.htm "Glossary Entry") (ISO/IEC 10646) with the character set [UCS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenucs_glosry.htm "Glossary Entry") covers all existing characters. For the Unicode character set, there are different Unicode character representations, such as [UTF](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenutf_glosry.htm "Glossary Entry"), in which a character can occupy between one and four bytes, or [UCS-2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenucs2_glosry.htm "Glossary Entry"), where one character occupies two bytes.

-   [UTF-16](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenutf16_glosry.htm "Glossary Entry") is the [system code page](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensystem_codepage_glosry.htm "Glossary Entry") of a Unicode system.

-   The ABAP programming language supports the character representation [UCS-2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenucs2_glosry.htm "Glossary Entry"), which fundamentally matches the UTF-16 representation and covers its characters except for the characters of the [surrogate area](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensurrogate_area_glosry.htm "Glossary Entry").

The restriction to UCS-2 in ABAP means that a character is always assumed to have the length of two bytes. This generally only causes problems if character strings are truncated in the middle of a character representation from the UTF-16 surrogate area, or if individual characters of character sets are compared in character string processing.

To be used in a [Unicode system](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenunicode_system_glosry.htm "Glossary Entry"), an ABAP program must have the ABAP language version [Standard ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_abap_glosry.htm "Glossary Entry"). Programs with the obsolete language version [Non-Unicode ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennon_unicode_abap_glosry.htm "Glossary Entry") can no longer be used in a Unicode system.

Hints

-   The attribute CHARSIZE of system class [CL\_ABAP\_CHAR\_UTILITIES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencl_abap_char_utilities.htm) contains the number of bytes occupied by a character in the current system.

-   Before Unicode, SAP used different codes for representing characters in different fonts, such as ASCII, EBCDIC as single-byte [code pages](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencodepage_glosry.htm "Glossary Entry"), or double-byte code pages:

-   ASCII (American Standard Code for Information Interchange) encodes each character with one byte. This means that a maximum of 256 characters can be represented (strictly speaking, standard ASCII only encodes one character using 7 bit and can therefore only represent 128 characters. The extension to 8 bit was introduced in [ISO-8859](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeniso-8859_glosry.htm "Glossary Entry")). Examples of common code pages are ISO-8859-1 for Western European, or ISO-8859-5 for Cyrillic fonts.

-   EBCDIC (Extended Binary Coded Decimal Interchange) also encodes each character using one byte and can therefore also represent 256 characters. For example, EBCDIC 0697/0500 is an IBM format that was used on the AS/400 platform (now known as IBM System i) for Western European fonts.

-   Double-byte code pages require 1 to 2 bytes per character. As a result, 65536 characters can be represented, of which only 10000 to 15000 characters are normally used. For example, the code page SJIS is used for Japanese and BIG5 for traditional Chinese fonts.

Using these character sets, all languages could be covered individually in one [AS ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenas_abap_glosry.htm "Glossary Entry"). Problems generally occurred when texts from different incompatible character sets were mixed in a central system. The exchange of data between systems with incompatible character sets could also lead to problems.

-   In earlier non-Unicode systems, the system code pages were defined in the database table TCPDB. In non-Unicode single code page systems there was only one system code page. In the obsolete [MDMP systems](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmdmp-system_glosry.htm "Glossary Entry"), there were multiple system code pages.

-   Before Unicode support, many ABAP programming techniques expected one character to correspond to one byte. Therefore, before a non-Unicode system is converted to Unicode, ABAP programs must be changed wherever an explicit or implicit assumption is made about the internal length of a character. This mainly affects the following:

-   [Character string processing and byte string processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_string.htm)

-   Access to [structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_objects_structure.htm). The latter is affected because [flat structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenflat_structure_glosry.htm "Glossary Entry") in a program of the obsolete ABAP language version [Non-Unicode ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennon_unicode_abap_glosry.htm "Glossary Entry") have been handled like character-like data objects and some programming techniques have used this as well. The [structural fragment view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenunicode_fragment_view_glosry.htm "Glossary Entry") can be used to handle structures.

Before a program is switched to Unicode, the [ABAP language version](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_versions.htm) [Standard ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_abap_glosry.htm "Glossary Entry") or higher must be configured in the program properties. For these versions, the [Unicode checks](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenunicode_check_glosry.htm "Glossary Entry") are also executed in non-Unicode systems. The transaction UCCHECK supports the activation of these checks for existing programs. The program RSUNISCAN\_FINAL can also be used instead of transaction UCCHECK.