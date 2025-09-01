  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrobust_abap_guidl.htm) →  [Internationalization](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternationalization_guidl.htm) → 

Splitting Texts

Background

Usually the characters in a character string are displayed in a code page using a fixed number of bytes. This means that it is always known in the memory where a character begins and ends. However, in some code pages, a character can be formed from a combination of multiple separately saved characters. This applies in particular to the characters of the surrogate area of the Unicode character set, that are collectively represented in the Unicode character display [UTF-16](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenutf16_glosry.htm "Glossary Entry") by two consecutive 16-bit replacement codes ([surrogate](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensurrogates_glosry.htm "Glossary Entry")). The surrogate area, for example, includes several Chinese characters that are predominantly used in Hong Kong. The ABAP programming area does not support this area. ABAP supports the subset of UTF-16 covered by [UCS-2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenucs2_glosry.htm "Glossary Entry"), in which each character occupies two bytes. One character in the surrogate area occupies four bytes and is handled as two characters by ABAP.

Rule

Only split texts between characters

Make sure that statements do not split character strings in any places with composite characters or surrogates.

Details

Operations that split character strings include:

-   Substring accesses with offsets/lengths or substring functions

-   The SPLIT statement

-   Every assignment to a character-like field that is too short, where one side of the original value is cut off

If texts containing combined characters or surrogates are split, this can produce undefined characters that cannot be displayed. If there is a risk of this occurring, you can define a suitable separation position by using the method SPLIT\_STRING\_AT\_POSITION of classCL\_SCP\_LINEBREAK\_UTIL.