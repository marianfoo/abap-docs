---
title: "Standard Key"
description: |
  The standard key is a special primary table key(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprimary_table_key_glosry.htm 'Glossary Entry') in an internal table. -   Key Fields of the Standard Key(#abenitab-standard-key-1--------declaration-of-the-standard-key---@ITOC@@ABENITAB
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_standard_key.htm"
abapFile: "abenitab_standard_key.htm"
keywords: ["do", "if", "try", "data", "types", "internal-table", "abenitab", "standard", "key"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [Internal Tables - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_oview.htm) →  [Table Keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key.htm) →  [Primary Table Key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_primary.htm) → 

Standard Key

The standard key is a special [primary table key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") in an internal table.

-   [Key Fields of the Standard Key](#abenitab-standard-key-1--------declaration-of-the-standard-key---@ITOC@@ABENITAB_STANDARD_KEY_2)

-   [Notes on Use](#abenitab-standard-key-3--------example---@ITOC@@ABENITAB_STANDARD_KEY_4)

Key Fields of the Standard Key

The key fields of the standard key are defined as follows:

-   In tables with a structured row type, the standard key is formed from all components with [character-like](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencharlike_data_type_glosry.htm "Glossary Entry") and [byte-like data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbyte_like_data_typ_glosry.htm "Glossary Entry"), with any substructures being expanded by elementary components. If the row type does not contain components like these, the standard key is [empty](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_empty_key.htm) for standard tables, meaning it does not contain any key fields.

-   The standard key for tables with non-structured row types is the entire table row, if the row type itself is not table-like. If the row type is table-like, the standard key is [empty](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_empty_key.htm) for standard tables.

Empty standard keys are not possible for sorted tables and hashed tables, and an error occurs if an attempt is made to create a key like this.

Notes

-   In tables with non-structured row types, the standard key can also have a numeric type or reference type; this does not apply to the key fields if the row types are structured.

-   The [static boxes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatic_box_glosry.htm "Glossary Entry") of a structured row type are handled like regular components, with respect to the standard key.

Declaration of the Standard Key

The standard key can be declared as follows:

-   Explicitly using the additions [UNIQUE*|*NON-UNIQUE KEY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_primary_key.htm) of the statements [TYPES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_primary_key.htm), [DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_primary_key.htm) and so on, with the addition DEFAULT KEY being specified rather than a list of components.

-   Implicitly if no explicit primary key specification is made in the declaration of a standard table with the statement [DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_primary_key.htm).

-   Implicitly, if a standard table type with a [generic primary table key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_keydef.htm) is specified behind TYPE in the statement [DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_referring.htm).

Notes on Use

Using standard keys is critical for various reasons:

-   It is not usually enough to identify the key fields just by their data type and not their semantic attributes. This often leads to unexpected behavior in sorts and other access types.

-   The potential for [empty](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_empty_key.htm) standard keys in standard tables often causes unexpected behavior too. For example, using keys like this for [sorting](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsort_itab.htm) is useless, whereas a corresponding [read](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table.htm) finds the first row.

-   The standard key often contains too many key fields, leading to performance problems in key accesses.

-   If using the standard key and a structured row type, all character-like and byte-like fields of sorted tables and hashed tables are read-only, which can cause unexpected runtime errors.

For this reason, declare the primary key by listing the components explicitly, if possible. In particular, the primary key must not be set as the standard key by mistake, the key must not be forgotten in declarations of standard tables using DATA, and that the generic table type must not be used unknowingly.

Example

Example

Internal table with standard key. In the structure SCARR, all five components meet the requirements for the standard key and are used as key fields. In a key access using a [table expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expression_glosry.htm "Glossary Entry"), the syntax check requires that each key field of the primary table key is specified.

DATA scarr\_tab
  TYPE HASHED TABLE OF scarr
       WITH UNIQUE DEFAULT KEY.
...
DATA(scarr\_line) =
  VALUE #( scarr\_tab\[ KEY primary\_key
                      mandt    = sy-mandt
                      carrid = '...'
                      carrname = '...'
                      currcode = '...'
                      url      = '...' \] OPTIONAL ).