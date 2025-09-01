  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [Changes for Release 7.0](javascript:call_link\('abennews-70.htm'\)) → 

Character string processing for release 7.0

[1\. Search for regular expressions in character strings](#!ABAP_MODIFICATION_1@1@)
[
2\. Search for multiple found locations with FIND](#!ABAP_MODIFICATION_2@2@)
[
3\. Number of found locations in unsuccessful searches](#!ABAP_MODIFICATION_3@3@)
[
4\. Find and replace in internal tables](#!ABAP_MODIFICATION_4@4@)
[
5\. New additions for CONCATENATE](#!ABAP_MODIFICATION_5@5@)

Modification 1

Search for regular expressions in character strings

As of release 7.0, it is possible to search for [regular expressions](javascript:call_link\('abenregular_expression_glosry.htm'\) "Glossary Entry") in the statements [FIND](javascript:call_link\('abapfind.htm'\)) and [REPLACE](javascript:call_link\('abapreplace_in_pattern.htm'\)). This replaces the search for patterns with the statement [SEARCH](javascript:call_link\('abapsearch-.htm'\)).

Modification 2

Search for multiple found locations with FIND

As of release 7.0, the addition ALL OCCURRENCES can be used in the statement [FIND](javascript:call_link\('abapfind.htm'\)). The previous behavior is expressed using the addition FIRST OCCURRENCE. In addition, the statements FIND and [REPLACE](javascript:call_link\('abapreplace_in_pattern.htm'\)) for pattern-based searching have been widely standardized.

Modification 3

Number of found locations in unsuccessful searches

As of release 7.0, the addition REPLACEMENT COUNT of the statement [REPLACE](javascript:call_link\('abapreplace_in_pattern.htm'\)) sets the operand rcnt to 0, if no replacement has been made. This is the same as the statement [FIND](javascript:call_link\('abapfind.htm'\)), in which mcnt is also set to 0 by the addition MATCH COUNT for unsuccessful searches. Before release 7.0, rcnt retained its own previous value if no replacement was made.

Modification 4

Find and replace in internal tables

As of release 7.0, internal tables can be searched with the statement [FINDIN TABLE](javascript:call_link\('abapfind_itab.htm'\)) and modified using [REPLACE IN TABLE](javascript:call_link\('abapreplace_itab.htm'\)). This replaces the search in internal tables using the statement [SEARCH](javascript:call_link\('abapsearch_itab.htm'\)).

Modification 5

New additions for CONCATENATE

As of release 7.0, the addition LINES OF in the statement [CONCATENATE](javascript:call_link\('abapconcatenate.htm'\)) can be used to concatenate rows of an internal table.

The new addition RESPECTING BLANKS enables closing blanks to be taken into account in data objects of fixed length. This can also be used to assign text fields to strings when taking into account the closing blanks.