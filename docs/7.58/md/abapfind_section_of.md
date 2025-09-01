---
title: "Syntax"
description: |
  ... SECTION OFFSET off LENGTH len OF ... Effect This addition restricts the search of the statements FIND(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfind.htm) and REPLACE(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreplace_in_pattern.htm) in
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfind_section_of.htm"
abapFile: "abapfind_section_of.htm"
keywords: ["do", "if", "try", "data", "abapfind", "section"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_string.htm) →  [Statements for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_processing_statements.htm) →  [FIND](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfind.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FIND%2C%20section_of%2C%20ABAPFIND_SECTION_OF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

FIND, section\_of

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfind_shortref.htm)

Syntax

... SECTION *\[*OFFSET off*\]* *\[*LENGTH len*\]* OF ...

Effect

This addition restricts the search of the statements [FIND](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfind.htm) and [REPLACE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreplace_in_pattern.htm) in dobj to the section from the [offset](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoffset_glosry.htm "Glossary Entry") specified in off with the length specified in len. Without the addition SECTION, the entire data object is searched. With SECTION, at least one of the additions OFFSET or LENGTH must be specified. If an offset is specified without specifying the length, the data object dobj is searched from the offset off to its end. If a length is specified but no offset, the offset 0 is used implicitly.

off and len are [numeric expression positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") with the operand type i. Apart from one exception, the values of off and len must be greater than or equal to 0 and the section specified by off and len must be within the length of dobj. As an exception, the value of len can also be \-1 and this value has the same effect as omitting the addition LENGTH.

Hint

The specification \-1 for len works in the same way as not using the addition LENGTH by passing a value to the statement.

Example

The FIND statement searches from offset 12 and finds the html substring at offset 20.

FIND 'html' IN SECTION OFFSET 12
            OF \`<html><body>This is html</body></html>\`
            MATCH OFFSET FINAL(moff).
cl\_demo\_output=>display( moff ).