---
title: "DATA, HEADER LINE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata.htm) Obsolete Syntax ... WITH HEADER LINE ... Effect This addition of the statements DATA TABLE OF(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata_itab.htm), DATA RANGE OF(https://
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata_header_line.htm"
abapFile: "abapdata_header_line.htm"
keywords: ["loop", "do", "if", "try", "class", "data", "types", "internal-table", "abapdata", "header", "line"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobsolete_declarations.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_declare_obsolete.htm) →  [Internal Tables with a Header Line](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_header_line.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DATA%2C%20HEADER%20LINE%2C%20ABAPDATA_HEADER_LINE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DATA, HEADER LINE

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata.htm)

Obsolete Syntax

... WITH HEADER LINE ...

Effect

This addition of the statements [DATA TABLE OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata_itab.htm), [DATA RANGE OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata_ranges.htm), and the obsolete statement [DATA OCCURS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata_occurs.htm), which is forbidden in classes, declares a further data object alongside the internal table, known as the [header line](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenheader_line_glosry.htm "Glossary Entry"). This object has exactly the same name as the internal table and has the line type of the internal table as its data type. A header line cannot be declared for internal tables with a table-like line type. This is possible for structured line types with table-like components, however.

If the name of an internal table itab is specified in an operand position of an ABAP statement, the statement determines whether the [table body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_body_glosry.htm "Glossary Entry") or header line is used. As a rule, all table-specific statements such as [SORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsort_itab.htm) or [LOOP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab.htm) use the internal table, whereas all other statements use the header line. Exceptions to this rule are listed under [Internal Tables with Header Line](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_header_line.htm).

To address the table body instead of the header line in statements, \[\] can be appended to the table name:

... itab\[\] ...

For internal tables without a header line, the table body is always used. An internal table with a header line cannot be a component of a structure or a line of another internal table.

Hints

-   These statements for processing individual table lines have [obsolete short forms](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_short_forms.htm) that use the header line as a work area implicitly. These short forms are allowed only outside of ABAP Objects.
-   If the name primary\_key is explicitly specified or a [secondary key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata_secondary_key.htm) is defined when the [primary key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata_primary_key.htm) is being defined, the addition WITH HEADER LINE can no longer be specified, even outside of classes.