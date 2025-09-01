  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  F

FIND - Quick reference

[Reference](javascript:call_link\('abapfind.htm'\))

Syntax

FIND *\[**{*FIRST OCCURRENCE*}**|**{*ALL OCCURRENCES*}* OF*\]*
     *{**\[*SUBSTRING*\]* substring*}* *|* *{*REGEX regex*}* IN
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

Searches for character strings or byte strings or for [regular expressions](javascript:call_link\('abenregular_expression_glosry.htm'\) "Glossary Entry") in a character-like or byte-like data object (dobj) or in an internal table (itab).

Additions

-   [*{*FIRST OCCURRENCE*}**|**{*ALL OCCURRENCES OF*}*](javascript:call_link\('abapfind.htm'\))
    Defines whether the system searches for the first occurrence only or for all occurrences.
    
-   [*{**\[*SUBSTRING*\]* substring*}* *|* *{*REGEX regex*}*](javascript:call_link\('abapfind_pattern.htm'\))
    Defines whether the system searches for a substring or a [regular expression](javascript:call_link\('abenregular_expression_glosry.htm'\) "Glossary Entry") (regex).
    
-   [SECTION *\[*OFFSET off*\]* *\[*LENGTH len*\]* OF dobj](javascript:call_link\('abapfind_section_of.htm'\))
    Searches in a character string or byte string (dobj) with restriction of the search area to the section starting from the offset specified in off with the length specified in len.
    
-   [TABLE itab *\[*FROM lin1 *\[*OFFSET off1*\]**\]* *\[*TO lin2 *\[*OFFSET off2*\]**\]*](javascript:call_link\('abapfind_itab.htm'\))
    Searches in an itab with restriction of the search area to the section from the row specified in lin1 with the offset specified in off1 up to the row specified in lin2 with the offset specified in off2.
    
-   [IN *{*CHARACTER*|*BYTE*}* MODE](javascript:call_link\('abapfind.htm'\))
    Specifies character string or byte string processing.
    
-   [*{*RESPECTING*|*IGNORING*}* CASE](javascript:call_link\('abapfind_options.htm'\))
    Defines whether case is respected in substring, regex, and dobj.
    
-   [MATCH COUNT mcnt](javascript:call_link\('abapfind_options.htm'\))
    Gets the number of occurrences in mcnt.
    
-   [MATCH LINE mlin](javascript:call_link\('abapfind_itab_options.htm'\))
    When searching in internal tables, gets the row number of the last occurrence in mlin.
    
-   [MATCH OFFSET moff](javascript:call_link\('abapfind_options.htm'\))
    Gets the offset of the last occurrence in moff.
    
-   [MATCH LENGTH mlen](javascript:call_link\('abapfind_options.htm'\))
    Gets the length of the last found substring in mlen.
    
-   [RESULTS result\_tab*|*result\_wa](javascript:call_link\('abapfind_options.htm'\))
    Gets the properties of all occurrences or the last occurrence in an internal table (result\_tab) or a structure (result\_wa).
    
-   [SUBMATCHES s1 s2 ...](javascript:call_link\('abapfind_options.htm'\))
    When searching for regular expressions, gets the contents of the subgroup tabs of the last occurrence in s1, s2, and so on.