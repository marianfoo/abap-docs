  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrobust_abap_gdl.htm) →  [Internationalization](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternationalization_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Splitting%20Texts%2C%20ABENSPLIT_TEXT_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Splitting Texts

Background   

Usually the characters in a character string are encoded based on a code page using a fixed number of bytes. This means that it is always known in the memory where a character begins and ends. However, in some code pages, a character can be formed from a combination of multiple separately saved characters. This applies in particular to the characters of the surrogate area of the Unicode character set, that are collectively represented in the Unicode character representation [UTF-16](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenutf16_glosry.htm "Glossary Entry") by two consecutive 16-bit replacement codes ([surrogate](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensurrogates_glosry.htm "Glossary Entry")). The surrogate area, for example, includes several Chinese characters that are predominantly used in Hong Kong. The ABAP programming area does not support this area. ABAP supports the subset of UTF-16 covered by [UCS-2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenucs2_glosry.htm "Glossary Entry"), in which each character occupies two bytes. One character in the surrogate area occupies four bytes and is handled as two characters by ABAP.

Rule   

Only split texts between characters

Make sure that statements do not split character strings in any places with composite characters or surrogates.

Details   

Operations that split character strings include:

-   Substring accesses with offsets/lengths or substring functions
-   The SPLIT statement
-   Every assignment to a character-like field that is too short, where one side of the original value is cut off

If texts containing combined characters or surrogates are split, this can produce undefined characters that cannot be displayed. If there is a risk of this occurring, you can define a suitable separation position by using the method STRING\_SPLIT\_AT\_POSITION of classCL\_SCP\_LINEBREAK\_UTIL.