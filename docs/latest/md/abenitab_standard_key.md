---
title: "Key Fields of the Standard Key"
description: |
  The key fields of the standard key are defined as follows: -   In tables with a structured line type, the standard key is formed from all components with character-like(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharlike_data_type_glosry.htm 'Glossary Entry') and byte-lik
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_standard_key.htm"
abapFile: "abenitab_standard_key.htm"
keywords: ["do", "while", "if", "try", "data", "types", "internal-table", "abenitab", "standard", "key"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_and_objects.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_objects.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendobj_itab.htm) →  [itab - Table Key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_key.htm) →  [itab - Primary Table Key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_key_primary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Standard%20Key%2C%20ABENITAB_STANDARD_KEY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

itab - Standard Key

The standard key is a special [primary table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") of an internal table.

-   [Key Fields of the Standard Key](#abenitab-standard-key-1-------declaration-of-the-standard-key---@ITOC@@ABENITAB_STANDARD_KEY_2)
-   [Notes on Use](#@@ITOC@@ABENITAB_STANDARD_KEY_3)

Key Fields of the Standard Key   

The key fields of the standard key are defined as follows:

-   In tables with a structured line type, the standard key is formed from all components with [character-like](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharlike_data_type_glosry.htm "Glossary Entry") and [byte-like data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbyte_like_data_typ_glosry.htm "Glossary Entry"), while resolving any substructures into elementary components. If the line type does not contain any components like these, the standard key is [empty](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_empty_key.htm) for standard tables, meaning it does not contain any key fields.
-   The standard key for tables with non-structured line types is the entire table line, if the line type itself is not table-like. If the line type is table-like, the standard key is [empty](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_empty_key.htm) for standard tables.

Empty standard keys are not possible for sorted tables and hashed tables, and an error occurs if an attempt is made to create a key like this.

Hints

-   In tables with non-structured line types, the standard key can also have a numeric type or reference type. This does not apply to the key fields if the line types are structured.
-   The [static boxes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstatic_box_glosry.htm "Glossary Entry") of a structured line type are handled like regular components with respect to the standard key.

Declaration of the Standard Key   

The standard key can be declared as follows:

-   Explicitly, using the additions [UNIQUE*|*NON-UNIQUE KEY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_primary_key.htm) of the statements [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_primary_key.htm), [DATA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata_primary_key.htm) and so on, where the addition DEFAULT KEY is specified instead of the list of components.
-   Implicitly, if no explicit primary key specification is made in the declaration of a standard table with the statement [DATA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata_primary_key.htm).
-   Implicitly, if a standard table type with a [generic primary table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_keydef.htm) is specified behind TYPE in the statement [DATA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata_referring.htm).

Notes on Use   

Using standard keys is critical for the following reasons:

-   It is not usually enough to identify the key fields using their data type and not their semantic properties. This often leads to unexpected behavior in sorts and other accesses.
-   The fact that standard keys in standard tables can be [empty](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_empty_key.htm) often causes unexpected behavior as well. For example, using keys like this for [sorting](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsort_itab.htm) has no effect, whereas a corresponding [read](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table.htm) finds the first line.
-   The standard key often contains too many key fields, which can produce performance problems in key accesses.
-   If using the standard key and a structured line type, all character-like and byte-like fields of sorted tables and hashed tables are read-only, which can cause unexpected runtime errors.

For this reason, the primary key should be declared by listing the components explicitly, if possible. In particular, the primary key must not be set as the standard key by mistake, the key must not be forgotten in declarations of standard tables using DATA, and the generic table type must not be used unknowingly.

Example

Internal table with standard key. In the structure SCARR, all five components meet the requirements for the standard key and are used as key fields. In a key access using a [table expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_expression_glosry.htm "Glossary Entry"), the syntax check requires that each key field of the primary table key is specified.

DATA scarr\_tab
  TYPE HASHED TABLE OF scarr
       WITH UNIQUE DEFAULT KEY.
...
FINAL(scarr\_line) =
  VALUE #( scarr\_tab\[ KEY primary\_key
                      mandt    = sy-mandt
                      carrid   = '...'
                      carrname = '...'
                      currcode = '...'
                      url      = '...' \] OPTIONAL ).