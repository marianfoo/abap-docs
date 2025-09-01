  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  R

REPLACE - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace.htm)

Syntax

REPLACE *{* *{* *\[**{*FIRST OCCURRENCE*}**|**{*ALL OCCURRENCES OF*}**\]*
            *{**\[*SUBSTRING*\]* substring*}* *|* *{*REGEX regex*}* IN
            *{* *{**\[*SECTION *\[*OFFSET off*\]* *\[*LENGTH len*\]* OF*\]* dobj*}*
            *|* *{*TABLE itab *\[*FROM lin1 *\[*OFFSET off1*\]**\]*
                          *\[*TO   lin2 *\[*OFFSET off2*\]**\]**}* *}*
            WITH new
            *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*
            *\[**{*RESPECTING*|*IGNORING*}* CASE*\]*
            *\[*REPLACEMENT COUNT  rcnt*\]*
            *{* *{**\[*REPLACEMENT OFFSET roff*\]*
               *\[*REPLACEMENT LENGTH rlen*\]*
               *\[*REPLACEMENT LINE   rlin*\]**}*
            *|* *\[*RESULTS result\_tab*|*result\_wa*\]* *}* *}*
        *|* *{* SECTION *\[*OFFSET off*\]* *\[*LENGTH len*\]* OF dobj
            WITH new
            *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]* *}* *}*.

Effect

Replaces character strings or byte strings in a character-like or byte-like data object dobj or in an internal table itab with the content of new. Determines the characters or bytes to be replaced using a search for substrings or regular expressions or by specifying the offset and length directly.

Additions

-   [*{*FIRST OCCURRENCE*}**|* *{*ALL OCCURRENCES OF*}*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_in_pattern.htm)
    Defines whether the first occurrence found or all occurrences found are replaced with the content of the data object new.
    
-   [*{**\[*SUBSTRING*\]* substring*}* *|* *{*REGEX regex*}*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind_pattern.htm)
    Defines whether a substring or a [regular expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenregular_expression_glosry.htm "Glossary Entry") regex is searched for and replaced.
    
-   [SECTION *\[*OFFSET off*\]* *\[*LENGTH len*\]* OF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace.htm)
    Specifies a section of dobj from the offset specified in off and the length specified in len. Either the section to be searched or the section to be replaced.
    
-   [TABLE itab *\[*FROM lin1 *\[*OFFSET off1*\]**\]* *\[*TO lin2 *\[*OFFSET off2*\]**\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_itab.htm)
    In an internal table itab, performs replacements while restricting the search area to the section from the row specified in lin1 with the offset specified in off1 to the row specified in lin2 with the offset specified in off2.
    
-   [IN *{*BYTE*|*CHARACTER*}* MODE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace.htm)
    Specifies character string or byte string processing.
    
-   [*{*RESPECTING*|*IGNORING*}* CASE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_options.htm)
    Specifies whether the search is case-sensitive.
    
-   [REPLACEMENT COUNT rcnt](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_options.htm)
    Gets the number of replacements in rcnt.
    
-   [REPLACEMENT LINE rlin](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_itab_options.htm)
    Gets the table row of the last replacement in rlin.
    
-   [REPLACEMENT OFFSET roff](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_options.htm)
    Gets the offset of the last replacement in roff.
    
-   [REPLACEMENT LENGTH rlen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_options.htm)
    Gets the length of the last replacement in rlen.
    
-   [RESULTS result\_tab*|*result\_wa](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_options.htm)
    Gets the attributes of all replaced positions or the last replaced position in an internal table result\_tab or a structure result\_wa of type MATCH\_RESULTS.
    

This translation does not reflect the current version of the documentation.