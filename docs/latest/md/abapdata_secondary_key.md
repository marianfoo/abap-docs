---
title: "Syntax"
description: |
  ... UNIQUE HASHEDUNIQUE SORTEDNON-UNIQUE SORTED KEY key_name ALIAS alias_name COMPONENTS comp1 comp2 ... Effect Definition of a secondary table key(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_table_key_glosry.htm 'Glossary Entry')
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata_secondary_key.htm"
abapFile: "abapdata_secondary_key.htm"
keywords: ["insert", "delete", "loop", "do", "if", "case", "try", "class", "data", "types", "internal-table", "abapdata", "secondary", "key"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_declarations.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobjects_statements.htm) →  [DATA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata.htm) →  [DATA, TABLE OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata_itab.htm) →  [DATA, tabkeys](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata_keydef.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DATA%2C%20secondary_key%2C%20ABAPDATA_SECONDARY_KEY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DATA, secondary\_key

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata_shortref.htm)

Syntax

... *{*UNIQUE HASHED*}**|**{*UNIQUE SORTED*}**|**{*NON-UNIQUE SORTED*}*
    KEY key\_name *\[*ALIAS alias\_name*\]* COMPONENTS comp1 comp2 ...

Effect

Definition of a [secondary table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") of an internal table. The syntax and semantics of the additions are the same as those for the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_secondary_key.htm) for standalone table types.

Programming Guideline

[Use secondary keys in a way that benefits the table.](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_key_guidl.htm "Guideline")

Hints

-   When internal tables are accessed using the statements [READ TABLE itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table.htm), [LOOP AT itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab.htm), [MODIFY itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_itab.htm), and [DELETE itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_itab.htm) or using [table expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_expressions.htm) and in [mesh types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_mesh.htm) and [mesh paths](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_pathes.htm), a secondary key can be used to specify the lines to be processed or the processing order. To do this, the additions WITH *\[*TABLE*\]* KEY ... COMPONENTS or USING KEY must be specified in the statements and the addition [KEY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_itab_line.htm) must be used in table expressions. A secondary key is never used implicitly.
-   The statement [INSERT itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinsert_itab.htm) determines the insert position using the primary key and primary index only. A secondary key can be specified only for the source table from which multiple lines are inherited. The latter also applies to the statement [APPEND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapappend.htm).
-   If different table keys of an internal table contain the same components, a syntax check warning occurs, which can be hidden using a pragma. In the case of a reference to a non-generic table type defined using [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_secondary_key.htm), any pragma specified there is also applied to the DATA statement. In the case of a reference to a generic table type for which no primary table key is defined, the specified pragma is not applied to the DATA statement, since this statement uses a completed table type implicitly and the pragma must also be specified for DATA.
-   For more information, see [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_secondary_key.htm).
-   If a secondary key is defined, the obsolete addition [WITH HEADER LINE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata_header_line.htm) can no longer be specified, even outside classes.

Example

Declaration of an internal table with one primary key and two secondary keys.

DATA sbook\_tab
     TYPE STANDARD TABLE
     OF sbook
     WITH NON-UNIQUE KEY carrid connid fldate bookid
     WITH UNIQUE HASHED KEY hash\_key
          COMPONENTS carrid connid fldate bookid
     WITH NON-UNIQUE SORTED KEY sort\_key
          COMPONENTS customid.

Example

As in the previous example but with explicit naming of the primary key.

DATA sbook\_tab
     TYPE STANDARD TABLE
     OF sbook
     WITH NON-UNIQUE KEY primary\_key
          COMPONENTS carrid connid fldate bookid
     WITH UNIQUE HASHED KEY hash\_key
          COMPONENTS carrid connid fldate bookid
     WITH NON-UNIQUE SORTED KEY sort\_key
          COMPONENTS customid.

Example

The program DEMO\_SECONDARY\_KEYS demonstrates the declaration and use of a secondary table key and the resulting performance gains.