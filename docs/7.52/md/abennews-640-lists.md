  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [Changes in Release 6.40](javascript:call_link\('abennews-640.htm'\)) → 

Lists in Release 6.40

[1\. Lists and Unicode](#!ABAP_MODIFICATION_1@1@)

Modification 1

Lists and Unicode

In Unicode systems, each character in the list buffer has a position but can occupy more than one column in the list, which is of particular relevance for east-asian characters. However, since the list only contains the same number of columns as there are positions in the list buffer, this means the list can only display fewer characters than are stored in the list buffer. The list output is therefore shortened accordingly and the page conforms to the [alignment](javascript:call_link\('abenalignment_gap_glosry.htm'\) "Glossary Entry"). The horizontal position of the [list cursor](javascript:call_link\('abenlist_cursor_glosry.htm'\) "Glossary Entry") is only the same in the non-Unicode systems as the output column of displayed or printed lists. In Unicode systems, this is only guaranteed for the top and bottom output limits.

The following changes were made in ABAP to comply with the behavior of lists in Unicode systems:

-   If list output in a Unicode system is reduced, this is indicated by an indicator ">" or "<". The complete contents can then be displayed by choosing System → List → Unicode Display.
    
-   So that unnecessary reductions are not made in the Unicode systems, the new specifications \* and \*\* were introduced for the [output length](javascript:call_link\('abenwrite_output_length.htm'\)) in the [WRITE](javascript:call_link\('abapwrite-.htm'\)) statement.
    
-   In Unicode systems, [predefined output formats](javascript:call_link\('abenwrite_formats.htm'\)) or [predefined output lengths](javascript:call_link\('abenwrite_output_length.htm'\)) that are different to non-Unicode systems are valid.
    

Note

These changes were also downported to Release 6.20.