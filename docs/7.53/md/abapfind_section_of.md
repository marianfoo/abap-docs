---
title: "Syntax"
description: |
  ... SECTION OFFSET off LENGTH len OF ... Effect This addition restricts the search of the statements FIND(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind.htm) and REPLACE(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_in_pattern.htm) in
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind_section_of.htm"
abapFile: "abapfind_section_of.htm"
keywords: ["do", "if", "try", "data", "abapfind", "section"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_string.htm) →  [Statements for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_processing_statements.htm) →  [FIND](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind.htm) → 

FIND - section\_of

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind_shortref.htm)

Syntax

... SECTION *\[*OFFSET off*\]* *\[*LENGTH len*\]* OF ...

Effect

This addition restricts the search of the statements [FIND](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind.htm) and [REPLACE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_in_pattern.htm) in dobj to the section from the [offset](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoffset_glosry.htm "Glossary Entry") specified in off with the length specified in len. Without the addition, the whole data object is searched. off and len are [numeric expression positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") of operand type i. At least one of the additions OFFSET or LENGTH must be specified.

If an offset is specified without specifying the length, the data object dobj is scanned from the offset off to its end. If a length is specified but no offset, the offset 0 is used implicitly. The values of off and len must be greater than or equal to 0 and the section specified by off and len must be located within the length of dobj.

Example

The FIND statement searches from offset 12 and finds the "html" substring at offset 20.

FIND 'html' IN SECTION OFFSET 12
            OF \`<html><body>This is html</body></html>\`
            MATCH OFFSET DATA(moff).
cl\_demo\_output=>display( moff ).