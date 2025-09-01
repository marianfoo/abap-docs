---
title: "REPLACE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_shortref.htm) Syntax Forms Pattern-Based Replacement(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_in_pattern.htm) 1. REPLACE FIRST OCCURRENCEALL OCCURRENCES OF
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace.htm"
abapFile: "abapreplace.htm"
keywords: ["do", "if", "try", "data", "internal-table", "abapreplace"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_string.htm) →  [Statements for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_processing_statements.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: REPLACE, ABAPREPLACE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for imp
rovement:)

REPLACE

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_shortref.htm)

Syntax Forms

[Pattern-Based Replacement](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_in_pattern.htm)
1\. REPLACE *\[**{*FIRST OCCURRENCE*}**|**{*ALL OCCURRENCES*}* OF*\]* [pattern](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_pattern.htm)
          IN *\[*[section\_of](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_section_of.htm)*\]* dobj WITH new
          *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*
          *\[*[replace\_options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_options.htm)*\]*.
[Position-Based Replacement](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_in_position.htm)
2\. REPLACE SECTION *\[*OFFSET off*\]* *\[*LENGTH len*\]* OF dobj WITH new
                  *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*.

Effect

This statement replaces characters or bytes of the variable dobj with characters or bytes of the operand new, which is a [character-like expression position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry"). Here, a distinction is made between pattern-based and position-based replacements.

When the replacement is performed, an interim result without a length limit is created implicitly and passed to the data object dobj. If the length of the interim result is longer than the length of dobj, data objects of fixed length are truncated on the right. If the length of the interim result is shorter than the length of dobj, data objects of fixed length are padded on the right with blanks or hexadecimal zeros. Data objects of variable length are adjusted accordingly. If the interim result is truncated during the assignment, sy-subrc is set to 2.

In character string processing, the trailing blanks are respected for data objects dobj of fixed length. For new the closing blanks are ignored.

Example

The simplest form of the statement REPLACE.

DATA(str) = \`Hallo\`.
REPLACE \`a\` IN str WITH \`e\`.
cl\_demo\_output=>display( str ).

System Fields

sy-subrc

Meaning

0

The search pattern or specified section was replaced by the content of new and the result is available in full in dobj.

2

The search pattern or specified section was replaced by the content of new in dobj and the result of the replacement was truncated on the right.

4

The search pattern in pattern was not found in dobj in the pattern-based search.

Hints

-   The statement [REPLACE IN TABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_itab.htm) can be used to make replacements in internal tables.
-   These forms of the statement REPLACE replace the following obsolete form:
    
    [REPLACE substring WITH new INTO dobj ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_obsolete.htm)
    
-   To replace parts of a character string in an operand position, a [replace function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreplace_functions.htm) can be used that includes some of the functions of the statement REPLACE.

Continue
[REPLACE pattern IN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_in_pattern.htm)
[REPLACE SECTION OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_in_position.htm)