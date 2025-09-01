---
title: "FIND - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind.htm) Syntax FIND FIRST OCCURRENCEALL OCCURRENCES OF SUBSTRING substring  PCREREGEX regex IN  SECTION OFFSET off LENGTH len OF dobj
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_shortref.htm"
abapFile: "abapfind_shortref.htm"
keywords: ["do", "if", "case", "try", "data", "internal-table", "abapfind", "shortref"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  F

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: FIND, ABAPFIND_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for
improvement:)

FIND - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind.htm)

Syntax

FIND *\[**{*FIRST OCCURRENCE*}**|**{*ALL OCCURRENCES*}* OF*\]*
     *{**\[*SUBSTRING*\]* substring*}* *|* *{*PCRE*|*REGEX regex*}* IN
     *{* *{**\[*SECTION *\[*OFFSET off*\]* *\[*LENGTH len*\]* OF*\]* dobj*}*
     *|* *{*TABLE itab *\[*FROM lin1 *\[*OFFSET off1*\]**\]*
                   *\[*TO   lin2 *\[*OFFSET off2*\]**\]**}* *}*
     *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*
     *\[**{*RESPECTING*|*IGNORING*}* CASE*\]*
     *\[*MATCH COUNT  mcnt*\]*
     *{* *{**\[*MATCH LINE   mlin*\]*
        *\[*MATCH OFFSET moff*\]*
        *\[*MATCH LENGTH mlen*\]**}*
     *|* *\[*RESULTS result\_tab*|*result\_wa*\]* *}*
     *\[*SUBMATCHES s1 s2 ...*\]*.

Effect

Searches for character strings or byte strings or for [regular expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregular_expression_glosry.htm "Glossary Entry") in a character-like or byte-like data object (dobj) or in an internal table (itab).

Additions   

-   [*{*FIRST OCCURRENCE*}**|**{*ALL OCCURRENCES OF*}*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind.htm)
    Defines whether the system searches for the first occurrence only or for all occurrences.
-   [*{**\[*SUBSTRING*\]* substring*}* *|* *{*PCRE*|*REGEX regex*}*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_pattern.htm)
    Defines whether the system searches for a substring or a [regular expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregular_expression_glosry.htm "Glossary Entry") (regex).
-   [SECTION *\[*OFFSET off*\]* *\[*LENGTH len*\]* OF dobj](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_section_of.htm)
    Searches in a character string or byte string (dobj) with restriction of the search range to the section starting from the offset specified in off with the length specified in len.
-   [TABLE itab *\[*FROM lin1 *\[*OFFSET off1*\]**\]* *\[*TO lin2 *\[*OFFSET off2*\]**\]*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_itab.htm)
    Searches in an itab with restriction of the search range to the section from the line specified in lin1 with the offset specified in off1 up to the line specified in lin2 with the offset specified in off2.
-   [IN *{*CHARACTER*|*BYTE*}* MODE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind.htm)
    Specifies character string or byte string processing.
-   [*{*RESPECTING*|*IGNORING*}* CASE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_options.htm)
    Defines whether case is respected in substring, regex, and dobj.
-   [MATCH COUNT mcnt](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_options.htm)
    Gets the number of occurrences in mcnt.
-   [MATCH LINE mlin](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_itab_options.htm)
    When searching in internal tables, gets the line number of the last occurrence in mlin.
-   [MATCH OFFSET moff](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_options.htm)
    Gets the offset of the last occurrence in moff.
-   [MATCH LENGTH mlen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_options.htm)
    Gets the length of the last found substring in mlen.
-   [RESULTS result\_tab*|*result\_wa](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_options.htm)
    Gets the properties of all occurrences or the last occurrence in an internal table (result\_tab) or a structure (result\_wa).
-   [SUBMATCHES s1 s2 ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_options.htm)
    When searching for regular expressions, gets the content of the subgroup tabs of the last occurrence in s1, s2, and so on.