  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-70_ehps.htm) →  [News for ABAP Release 7.0](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-70.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Character%20String%20Processing%20in%20ABAP%20Release%207.0%2C%20ABENNEWS-70-REGEX%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

Character String Processing in ABAP Release 7.0

[1\. Search for Regular Expressions in Character Strings](#!ABAP_MODIFICATION_1@1@)
[2\. Search for Multiple Occurrences Using FIND](#!ABAP_MODIFICATION_2@2@)
[3\. Number of Occurrences in Unsuccessful Searches](#!ABAP_MODIFICATION_3@3@)
[4\. Find and Replace in Internal Tables](#!ABAP_MODIFICATION_4@4@)
[5\. New Additions in CONCATENATE](#!ABAP_MODIFICATION_5@5@)

Modification 1   

Search for Regular Expressions in Character Strings

From ABAP release 7.0, it is possible to search for [regular expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenregular_expression_glosry.htm "Glossary Entry") in the statements [FIND](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfind.htm) and [REPLACE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreplace_in_pattern.htm). This replaces the search for patterns using the statement [SEARCH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsearch-.htm).

Modification 2   

Search for Multiple Occurrences Using FIND

From ABAP release 7.0, the addition ALL OCCURRENCES can be used in the statement [FIND](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfind.htm). The previous behavior is expressed using the addition FIRST OCCURRENCE. In addition, the statements FIND and [REPLACE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreplace_in_pattern.htm) for pattern-based searches have been mostly standardized.

Modification 3   

Number of Occurrences in Unsuccessful Searches

From ABAP release 7.0, the addition REPLACEMENT COUNT of the statement [REPLACE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreplace_in_pattern.htm) sets the operand rcnt to 0 if no replacement has been made. This is the same as the statement [FIND](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfind.htm), in which mcnt is also set to 0 by the addition MATCH COUNT for unsuccessful searches. Before ABAP release 7.0, rcnt retained its own previous value if no replacement was made.

Modification 4   

Find and Replace in Internal Tables

From ABAP release 7.0, internal tables can be searched using the statement [FIND IN TABLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfind_itab.htm) and modified using [REPLACE IN TABLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreplace_itab.htm). This replaces the search in internal tables using the statement [SEARCH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsearch_itab.htm).

Modification 5   

New Additions in CONCATENATE

From ABAP release 7.0, the addition LINES OF in the statement [CONCATENATE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapconcatenate.htm) can be used to concatenate lines of an internal table.

The new addition RESPECTING BLANKS enables trailing blanks to be respected data objects of fixed length. This can also be used to assign text fields to strings when respecting the trailing blanks.