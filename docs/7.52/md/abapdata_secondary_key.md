---
title: "Syntax"
description: |
  ... UNIQUE HASHEDUNIQUE SORTEDNON-UNIQUE SORTED KEY key_name COMPONENTS comp1 comp2 ... Effect Defines a secondary table key(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_key_glosry.htm 'Glossary Entry') of an internal table. The syntax and
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_secondary_key.htm"
abapFile: "abapdata_secondary_key.htm"
keywords: ["insert", "delete", "loop", "do", "if", "case", "try", "class", "data", "types", "internal-table", "abapdata", "secondary", "key"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentypes_and_objects.htm) →  [Declaring Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobjects_statements.htm) →  [DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata.htm) →  [DATA - TABLE OF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_itab.htm) →  [DATA - tabkeys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_keydef.htm) → 

DATA - secondary\_key

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_shortref.htm)

Syntax

... *{*UNIQUE HASHED*}**|**{*UNIQUE SORTED*}**|**{*NON-UNIQUE SORTED*}*
    KEY key\_name COMPONENTS comp1 comp2 ...

Effect

Defines a [secondary table key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") of an internal table. The syntax and semantics of the additions are the same as those for the statement [TYPES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_secondary_key.htm) for standalone table types.

Programming Guideline

[Use secondary keys in a way that benefits the table.](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_key_guidl.htm "Guideline")

Notes

-   When internal tables are accessed using the statements [READ TABLE itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table.htm), [LOOP AT itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab.htm), [MODIFY itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab.htm), and [DELETE itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_itab.htm) or using [table expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expressions.htm) and in [mesh types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_mesh.htm) and [mesh paths](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_pathes.htm), a secondary key can be used to specify the rows to be processed or the processing order. To do this, the additions WITH *\[*TABLE*\]* KEY ... COMPONENTS or USING KEY must be specified in the statements and the addition [KEY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_exp_itab_line.htm) in table expressions. A secondary key is never used implicitly.
    
-   The statement [INSERT itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_itab.htm) determines the insert position using the primary key and primary index only. A secondary key can be specified only for the source table from which multiple rows are copied. The latter also applies to the statement [APPEND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapappend.htm).
    
-   If different table keys for an internal table contain the same components, the syntax check issues a warning (which can be hidden using a pragma). In the case of references to a non-generic table type defined using [TYPES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_secondary_key.htm), any pragma specified here is also applied to the DATA statement. In the case of references to a generic table type for which no primary table key is defined, the pragma (if specified) is not applied to the DATA statement, since this statement uses a completed table type implicitly and the pragma must also be specified in the case of DATA.
    
-   If a secondary key is defined, the addition [WITH HEADER LINE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_header_line.htm) can no longer be specified, even outside classes.
    
-   For more information, see [TYPES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_secondary_key.htm).
    

Example

Declaration of an internal tabel with primary key and two secondary keys.

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

Executable Example

The program DEMO\_SECONDARY\_KEYS demonstrates how a secondary table key is specified and used and the resulting performance gains.