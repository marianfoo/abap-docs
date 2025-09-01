  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab.htm) →  [itab - Overview](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_oview.htm) →  [itab - Table Key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_key.htm) →  [itab - Primary Table Key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_key_primary.htm) → 

itab - Standard Key

The standard key is a special [primary table key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") of an internal table.

-   [Key Fields of the Standard Key](#@@ITOC@@ABENITAB_STANDARD_KEY_1)

-   [Declaration of the Standard Key](#@@ITOC@@ABENITAB_STANDARD_KEY_2)

-   [Notes on Use](#@@ITOC@@ABENITAB_STANDARD_KEY_3)

Key Fields of the Standard Key

The key fields of the standard key are defined as follows:

-   In tables with a structured line type, the standard key is formed from all components with [character-like](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencharlike_data_type_glosry.htm "Glossary Entry") and [byte-like data types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbyte_like_data_typ_glosry.htm "Glossary Entry"), while resolving any substructures into elementary components. If the line type does not contain any components like these, the standard key is [empty](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_empty_key.htm) for standard tables, meaning it does not contain any key fields.

-   The standard key for tables with non-structured line types is the entire table line, if the line type itself is not table-like. If the line type is table-like, the standard key is [empty](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_empty_key.htm) for standard tables.

Empty standard keys are not possible for sorted tables and hashed tables, and an error occurs if an attempt is made to create a key like this.

Hints

-   In tables with non-structured line types, the standard key can also have a numeric type or reference type. This does not apply to the key fields if the line types are structured.

-   The [static boxes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstatic_box_glosry.htm "Glossary Entry") of a structured line type are handled like regular components with respect to the standard key.

Declaration of the Standard Key

The standard key can be declared as follows:

-   Explicitly, using the additions [UNIQUE*|*NON-UNIQUE KEY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_primary_key.htm) of the statements [TYPES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_primary_key.htm), [DATA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdata_primary_key.htm) and so on, where the addition DEFAULT KEY is specified instead of the list of components.

-   Implicitly, if no explicit primary key specification is made in the declaration of a standard table with the statement [DATA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdata_primary_key.htm).

-   Implicitly, if a standard table type with a [generic primary table key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_keydef.htm) is specified behind TYPE in the statement [DATA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdata_referring.htm).

Notes on Use

Using standard keys is critical for the following reasons:

-   It is not usually enough to identify the key fields using their data type and not their semantic properties. This often leads to unexpected behavior in sorts and other accesses.

-   The fact that standard keys in standard tables can be [empty](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_empty_key.htm) often causes unexpected behavior as well. For example, using keys like this for [sorting](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsort_itab.htm) has no effect, whereas a corresponding [read](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapread_table.htm) finds the first line.

-   The standard key often contains too many key fields, which can produce performance problems in key accesses.

-   If using the standard key and a structured line type, all character-like and byte-like fields of sorted tables and hashed tables are read-only, which can cause unexpected runtime errors.

For this reason, the primary key should be declared by listing the components explicitly, if possible. In particular, the primary key must not be set as the standard key by mistake, the key must not be forgotten in declarations of standard tables using DATA, and the generic table type must not be used unknowingly.

Example

Internal table with standard key. In the structure SCARR, all five components meet the requirements for the standard key and are used as key fields. In a key access using a [table expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_expression_glosry.htm "Glossary Entry"), the syntax check requires that each key field of the primary table key is specified.

DATA scarr\_tab
  TYPE HASHED TABLE OF scarr
       WITH UNIQUE DEFAULT KEY.
...
DATA(scarr\_line) =
  VALUE #( scarr\_tab\[ KEY primary\_key
                      mandt    = sy-mandt
                      carrid   = '...'
                      carrname = '...'
                      currcode = '...'
                      url      = '...' \] OPTIONAL ).