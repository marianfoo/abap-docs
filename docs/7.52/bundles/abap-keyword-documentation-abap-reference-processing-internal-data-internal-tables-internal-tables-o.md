# ABAP - Keyword Documentation / ABAP - Reference / Processing Internal Data / Internal Tables / Internal Tables - Overview / Table Keys

Included pages: 12


### abenitab_key.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [Internal Tables - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_oview.htm) → 

Table Keys

Internal tables always have a primary key and can have up to 15 optional secondary table keys. Standard tables are automatically assigned a standard key if an explicit primary key is not defined.

-   [primary table keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_primary.htm)

-   [secondary table keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_secondary.htm)

-   [duplicates for unique keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_duplicates.htm)

-   [duplicates for non-unique keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_secondary_duplicates.htm)

Continue
[Primary Table Key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_primary.htm)
[Secondary Table Key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_secondary.htm)
[Duplicate Unique Keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_duplicates.htm)
[Duplicate Non-Unique Keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_secondary_duplicates.htm)


### abenitab_key_primary.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [Internal Tables - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_oview.htm) →  [Table Keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key.htm) → 

Primary Table Key

Each internal table has a primary table key that enables access to individual rows in the table by means of a key specification.

-   The components of the primary table key are declared using the [UNIQUE*|*NON-UNIQUE KEY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_primary_key.htm) additions of the statements [TYPES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_primary_key.htm), [DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_primary_key.htm), and so on.

-   The [standard key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_standard_key.htm), which can be declared both explicitly and implicitly, has a special part to play here.

-   The primary table key of a [standard table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_table_glosry.htm "Glossary Entry") can also be [empty](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_empty_key.htm), meaning that it does not contain any key fields.

-   In the case of key accesses for internal tables, the primary key is always used implicitly [processing statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_processing_statements.htm) as long as no secondary key is specified. In [table expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expressions.htm), the primary key must also always be specified explicitly.

-   The primary key has the predefined name primary\_key, with which it can also be addressed explicitly in processing statements. In table expressions, primary\_key or an alias name must be specified, if the primary key is to be used explicitly.

-   Access to an internal table using the primary table key is determined by the [table category](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_category_glosry.htm "Glossary Entry") and not the table key. For sorted tables and hashed tables, key access is always optimized using the primary table key. Primary key access to standard tables, however, uses a linear search.

-   The key fields of the primary table key of sorted tables and hashed tables are always read-only.

-   In the case of sorted tables and hashed tables, separate key administration exists for the primary table key, which enables optimized access but also affects the [memory requirement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_memory.htm) of the internal table. There is no separate key administration for the primary table key of standard tables.

Notes

-   Since sorted tables and hashed tables have real key administration for the primary key, unlike standard tables, these tables are also grouped under the term [key tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenkey_table_glosry.htm "Glossary Entry").

-   To achieve optimized key access to standard tables, [secondary keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") can be used.

Example

Declaration of a hash table with a unique primary key. The table is filled with data from a database table, read using a [table expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expression_glosry.htm "Glossary Entry") with values specified for the primary key.

DATA carrid TYPE spfli-carrid VALUE 'LH'.
cl\_demo\_input=>add\_field( CHANGING field = carrid ).
DATA connid TYPE spfli-connid VALUE '0400'.
cl\_demo\_input=>request( CHANGING field = connid ).
DATA spfli\_tab
  TYPE HASHED TABLE OF spfli
       WITH UNIQUE KEY primary\_key COMPONENTS carrid connid.
SELECT \*
       FROM spfli
       INTO TABLE @spfli\_tab.
cl\_demo\_output=>display(
  VALUE #( spfli\_tab\[ KEY primary\_key
                      carrid = carrid
                      connid = connid \] OPTIONAL ) ).

Continue
[Standard Key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_standard_key.htm)
[Empty Table Key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_empty_key.htm)


### abenitab_standard_key.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [Internal Tables - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_oview.htm) →  [Table Keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key.htm) →  [Primary Table Key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_primary.htm) → 

Standard Key

The standard key is a special [primary table key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") in an internal table.

-   [Key Fields of the Standard Key](#@@ITOC@@ABENITAB_STANDARD_KEY_1)

-   [Declaration of the Standard Key](#@@ITOC@@ABENITAB_STANDARD_KEY_2)

-   [Notes on Use](#@@ITOC@@ABENITAB_STANDARD_KEY_3)

-   [Example](#@@ITOC@@ABENITAB_STANDARD_KEY_4)

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


### abenitab_empty_key.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [Internal Tables - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_oview.htm) →  [Table Keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key.htm) →  [Primary Table Key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_primary.htm) → 

Empty Table Key

The [primary table key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") of a [standard table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_table_glosry.htm "Glossary Entry") can be empty. An empty table key does not contain any key fields.

-   [Declaration](#@@ITOC@@ABENITAB_EMPTY_KEY_1)

-   [Notes on Use](#@@ITOC@@ABENITAB_EMPTY_KEY_2)

-   [Uncritical use](#@@ITOC@@ABENITAB_EMPTY_KEY_3)

-   [Critical use](#@@ITOC@@ABENITAB_EMPTY_KEY_4)

-   [Example](#@@ITOC@@ABENITAB_EMPTY_KEY_5)

Note

[Sorted keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensorted_key_glosry.htm "Glossary Entry") and [hash keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhash_key_glosry.htm "Glossary Entry") are never empty, regardless of whether they are primary or [secondary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_key_glosry.htm "Glossary Entry").

Declaration

An empty primary table key can be created as follows:

-   Explicitly with the addition [EMPTY KEY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_primary_key.htm) of the statements [TYPES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_primary_key.htm), [DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_primary_key.htm), and so on.

-   Explicitly using an inline declaration [INTO TABLE @DATA(itab)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm) in the statement SELECT

-   Implicitly when using the [standard key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_standard_key.htm) if a structured row type does not contain any non-numeric elementary components or if an unstructured row type is table-like.

Notes on Use

Uncritical use

An empty primary table key can be used to handle a table like an array. This means that filling the table and other access do not rely on an order determined by key values. In this case, an empty internal table key can be used in all statements that determine (implicitly or explicitly) the order in which the internal table is accessed.

Notes

-   Developers should always be aware of the fact that they are handling an empty primary table key. This is really achieved only when the empty key is declared explicitly. This implicit declaration using the [standard key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_standard_key.htm) (in which the row type determines whether the primary table key is empty or not) is not usually suitable.

-   Even an empty primary key in a standard table has the order specified by the [primary index](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprimary_table_index_glosry.htm "Glossary Entry"), which can be exploited in related index accesses or loops.

Example

A particularly prominent example is the statement [LOOP AT itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab.htm), which when used implicitly or explicitly (using [USING primary\_key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_cond.htm)) defines the processing order with respect to the [primary table index](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprimary_table_index_glosry.htm "Glossary Entry"), but is otherwise ignored.

Critical use

In the following statements, which work with the primary table key without specifying the key fields explicitly, specifying an empty primary table key is critical and generally produces unexpected behavior. An empty table key that is known statically produces a syntax check warning.

-   Primary table key specified by a work area:

-   If [FROM wa](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table_key.htm) is used to specify an empty table key for the statement [READ TABLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table.htm), the first row of the internal table is read.

-   If [FROM wa](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab_single.htm) is used to specify an empty table key for the statement [MODIFY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab.htm), the first row of the internal table is modified.

-   If [FROM wa](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_itab_key.htm) is used to specify an empty table key for the statement [DELETE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_itab.htm), the first row of the internal table is deleted.

-   If the statement [SORT itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsort_itab.htm) is executed without the addition BY and the primary table key is empty, the statement is ignored and the table is not sorted.

-   If the statement [DELETE ADJACENT DUPLICATES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_duplicates.htm) is executed and the primary table key is empty, no rows are deleted.

-   If the primary table key is empty and the statement [COLLECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcollect.htm) is executed, the first row of the internal table is compressed. In this case, all components of the row type must be numeric.

Note

The statements described above can be particularly unpredictable when using the [standard key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_standard_key.htm) (which itself can be declared implicitly) to declare an empty internal table key.

Example

Example

Typical use of a table with an empty table key, in which the order of the rows should not be changed by sorting. A SORT source statement would have no effect.

DATA source
  TYPE STANDARD TABLE OF string
       WITH EMPTY KEY.
READ REPORT 'DEMO\_TAB\_EXP\_LINE' INTO source.
cl\_demo\_output=>display( source ).


### abenitab_key_primary.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [Internal Tables - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_oview.htm) →  [Table Keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key.htm) → 

Primary Table Key

Each internal table has a primary table key that enables access to individual rows in the table by means of a key specification.

-   The components of the primary table key are declared using the [UNIQUE*|*NON-UNIQUE KEY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_primary_key.htm) additions of the statements [TYPES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_primary_key.htm), [DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_primary_key.htm), and so on.

-   The [standard key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_standard_key.htm), which can be declared both explicitly and implicitly, has a special part to play here.

-   The primary table key of a [standard table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_table_glosry.htm "Glossary Entry") can also be [empty](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_empty_key.htm), meaning that it does not contain any key fields.

-   In the case of key accesses for internal tables, the primary key is always used implicitly [processing statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_processing_statements.htm) as long as no secondary key is specified. In [table expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expressions.htm), the primary key must also always be specified explicitly.

-   The primary key has the predefined name primary\_key, with which it can also be addressed explicitly in processing statements. In table expressions, primary\_key or an alias name must be specified, if the primary key is to be used explicitly.

-   Access to an internal table using the primary table key is determined by the [table category](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_category_glosry.htm "Glossary Entry") and not the table key. For sorted tables and hashed tables, key access is always optimized using the primary table key. Primary key access to standard tables, however, uses a linear search.

-   The key fields of the primary table key of sorted tables and hashed tables are always read-only.

-   In the case of sorted tables and hashed tables, separate key administration exists for the primary table key, which enables optimized access but also affects the [memory requirement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_memory.htm) of the internal table. There is no separate key administration for the primary table key of standard tables.

Notes

-   Since sorted tables and hashed tables have real key administration for the primary key, unlike standard tables, these tables are also grouped under the term [key tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenkey_table_glosry.htm "Glossary Entry").

-   To achieve optimized key access to standard tables, [secondary keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") can be used.

Example

Declaration of a hash table with a unique primary key. The table is filled with data from a database table, read using a [table expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expression_glosry.htm "Glossary Entry") with values specified for the primary key.

DATA carrid TYPE spfli-carrid VALUE 'LH'.
cl\_demo\_input=>add\_field( CHANGING field = carrid ).
DATA connid TYPE spfli-connid VALUE '0400'.
cl\_demo\_input=>request( CHANGING field = connid ).
DATA spfli\_tab
  TYPE HASHED TABLE OF spfli
       WITH UNIQUE KEY primary\_key COMPONENTS carrid connid.
SELECT \*
       FROM spfli
       INTO TABLE @spfli\_tab.
cl\_demo\_output=>display(
  VALUE #( spfli\_tab\[ KEY primary\_key
                      carrid = carrid
                      connid = connid \] OPTIONAL ) ).

Continue
[Standard Key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_standard_key.htm)
[Empty Table Key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_empty_key.htm)


### abenitab_key_secondary.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [Internal Tables - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_oview.htm) →  [Table Keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key.htm) → 

Secondary Table Key

[Hash keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhash_key_glosry.htm "Glossary Entry") and [sorted keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensorted_key_glosry.htm "Glossary Entry") can be declared as [secondary table keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") for each internal table. For each sorted key, an additional [secondary table index](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_index_glosry.htm "Glossary Entry") is created.

Access to an internal table using a secondary key is always optimized. This allows additional optimized keys to be introduced for sorted and hashed tables as well as optimized key accesses for standard tables.

-   Declaration of secondary table keys

For data types declared in ABAP programs, a secondary table key is declared using additions [UNIQUE*|*NON-UNIQUE KEY key\_name COMPONENTS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_secondary_key.htm) of statements [TYPES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_secondary_key.htm), [DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_secondary_key.htm) and so on. For table types created in ABAP Dictionary, the tool provides the corresponding functions.

-   Access using secondary keys

In key accesses to internal tables, the addition WITH *\[*TABLE*\]* KEY key\_name can be used in [processing statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_processing_statements.htm) to specify which secondary table key to use. In index accesses, USING KEY keyname can be used to specify the [table index](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_index_glosry.htm "Glossary Entry") of which secondary key to use. In [table expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expressions.htm), this is specified using the addition [KEY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_exp_itab_line.htm). Secondary keys are not selected automatically. If no secondary key is specified in a processing statement, the primary key or primary table index is always used. If no explicit key is specified for a table expression, a [free search key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table_free.htm) is used to perform reads.

Statements where secondary keys can be specified are:

-   [READ TABLE itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table.htm)
    The rows to be read can be specified using a secondary key.

-   [LOOP AT itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab.htm)
    The processing order and conditions can be controlled using a secondary table key.

-   [INSERT itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_itab.htm)
    Only a secondary key for the source table can be specified here, from which multiple rows are copied. The position they are inserted at is determined solely using the primary key and the primary index.

-   [APPEND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapappend.htm)
    Only a secondary key for the source table can be specified here, onto which multiple rows are appended.

-   [MODIFY itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab.htm)
    The rows to be modified can be specified using a secondary key.

-   [DELETE itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_itab.htm)
    The rows to be deleted can be specified using a secondary key.

-   [TYPES ... ASSOCIATION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_mesh_association.htm), [\\\_assoc\[ ... \]](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_assoc_cond.htm)
    The secondary key used in the evaluation of a [mesh path](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_glosry.htm "Glossary Entry") can be specified using USING KEY.

If the system field sy-tabix is set by this type of access, and a sorted secondary key is used, the row number refers to the associated [secondary table index](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_index_glosry.htm "Glossary Entry"). In statements that these additions has not been introduced for, like [SORT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsort_itab.htm), [COLLECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcollect.htm), or [PROVIDE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapprovide.htm), secondary keys are not explicitly supported.

The key fields of a secondary table key are only write-protected if the secondary table key is in use in a LOOP loop or in a MODIFY statement. Otherwise, the secondary key fields are not write-protected.

Programming Guideline

[Secondary Keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_key_guidl.htm "Guideline")

Notes

-   Optimized access times for the individual rows using secondary keys are [bought](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_memory.htm) in exchange for the fact that the ABAP runtime environment then needs to administer the additional keys. For hash keys, this means additional hash administration. For each sorted key, it means an additional [secondary table index](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_index_glosry.htm "Glossary Entry").

-   When working with internal tables for which a secondary key is declared, it must be ensured that the required key or table index is used in the processing statements.

Example

Declaration of a hash table with a unique primary key and a non-unique sorted secondary key cities. The table is filled with data from a database table, read using a [table expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expression_glosry.htm "Glossary Entry") with values specified for the secondary key. The first row found is read.

DATA cityfrom TYPE spfli-cityfrom VALUE 'FRANKFURT'.
cl\_demo\_input=>add\_field( CHANGING field = cityfrom ).
DATA cityto TYPE spfli-cityto VALUE 'NEW YORK'.
cl\_demo\_input=>request( CHANGING field = cityto ).
DATA spfli\_tab
  TYPE HASHED TABLE OF spfli
       WITH UNIQUE KEY primary\_key        COMPONENTS carrid connid
       WITH NON-UNIQUE SORTED KEY cities  COMPONENTS cityfrom cityto.
SELECT \*
       FROM spfli
       INTO TABLE @spfli\_tab.
cl\_demo\_output=>display(
  VALUE #( spfli\_tab\[ KEY cities
                      cityfrom = cityfrom
                      cityto   = cityto \] OPTIONAL ) ).

Continue
[Updating Secondary Keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_secondary_update.htm)
[Using Secondary Keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_secondary_usage.htm)
[Restrictions for Secondary Keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_secondary_restrict.htm)


### abenitab_key_secondary_update.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [Internal Tables - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_oview.htm) →  [Table Keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key.htm) →  [Secondary Table Key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_secondary.htm) → 

Updating Secondary Keys

For all statements that change the content and structure of an internal table, the internal administration of the secondary keys is updated automatically as follows:

-   For all operations that insert rows into tables or delete rows from tables, the secondary key administration for unique keys is updated immediately. This means that a unique secondary key is up-to-date immediately after the operation ([direct update](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendirect_update_glosry.htm "Glossary Entry")). Non-unique secondary table keys are not updated immediately. Instead, they are updated when the secondary key is next used explicitly using USING KEY or WITH KEY ... COMPONENTS ([lazy update](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlazy_update_glosry.htm "Glossary Entry")). If updating the administration causes a secondary key uniqueness violation, a [handled exception or runtime error occurs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_duplicates.htm).

Inserting operations include table statements such as [INSERT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_itab.htm) and [APPEND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapappend.htm) and block operations for which the entire body of the table is filled at once, like for statements between internal tables, passing parameters to procedures, filling internal tables with SELECT, importing with [IMPORT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapimport_data_cluster.htm), and so on. The operation for deleting table rows is the [DELETE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_itab.htm) table statement.

-   For operations that change the components of secondary table keys in existing rows, the secondary key administration is either updated directly or when a specified synchronization point is reached.

-   If [MODIFY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab.htm) is used to modify individual rows, any unique secondary keys are updated directly ([direct update](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendirect_update_glosry.htm "Glossary Entry")). If the modification produces duplicate entries, a non-handleable exception is raised.

-   If field symbols or data references are used to modify individual rows, and these symbols or references point to table rows, any unique secondary keys are updated the next time the internal table is accessed ([delayed update](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendelayed_update_glosry.htm "Glossary Entry")). The uniqueness check also waits until the synchronization point is reached. An internal table can therefore be in an inconsistent state with respect to the secondary key following a modification to existing rows using field symbols or data references. The corresponding [exception](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_duplicates.htm) is only raised when the table is next used.

In both cases, a non-unique key not updated until the secondary table key is next used explicitly ([lazy update](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlazy_update_glosry.htm "Glossary Entry")).

The methods FLUSH\_ITAB\_KEY and FLUSH\_ITAB\_KEYS of the class CL\_ABAP\_ITAB\_UTILITIES can be used to update individual secondary keys or all secondary keys of an internal table explicitly in exceptional circumstances. These methods can be used for analysis and test purposes. It might also make sense to use them after making changes if the next access does not take place immediately afterwards to handle possible exceptions there and then.

Executable Example

The example of [Deletion Using Table Keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendelete_itab_using_key_abexa.htm) demonstrates the runtimes that are required to create the secondary key and when they occur.


### abenitab_key_secondary_usage.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [Internal Tables - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_oview.htm) →  [Table Keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key.htm) →  [Secondary Table Key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_secondary.htm) → 

Using Secondary Keys

Notes on Using Secondary Table Keys

-   The standard scenario for sensibly using secondary table keys relates to a very large internal table that is created in the memory and whose content is changed very infrequently. [Costs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_memory.htm) for administrating the secondary keys are then only incurred when setting up the internal table.

-   As a matter of principle, secondary hash keys should not have too many components, since otherwise the system has to deal with a high system load for the additional hash management. Sorted keys are preferable for secondary keys with a large number of components.

-   For an index table with secondary keys, the primary index of the table is updated immediately when rows are inserted or deleted using a secondary key. Note deleting a row from a standard table using a secondary key cannot be optimized because the index entry to be deleted must be searched linearly.

-   Secondary keys might be useful for small internal tables in some circumstances because they ensure unique table entries in relation to particular components. Primary keys do not allow this, especially in the case of standard tables.

-   In the case of read-only reads (where ensuring unique table entries is not relevant), non-unique secondary keys are usually sufficient. Performing reads here is almost as quick as for unique keys, while the update following a table modification is quicker and is performed using a lazy update.

-   Secondary table keys should not be used in the following situations:

-   For small internal tables (less than 50 rows), the performance benefits in the case of reads are far outweighed by the increased memory and administration costs.

-   In tables where a large number of changes are made, the load incurred by updating the secondary keys outweighs the performance benefits in the case of reads. In delayed updates and lazy updates in particular, the update load can actually be incurred by the read for which the optimization was actually required.

-   Unless the uniqueness of table entries is of absolute importance, it is better to avoid using secondary hash keys.

Example

The program DEMO\_SECONDARY\_KEYS demonstrates how a secondary table key is specified and the resulting performance gain.


### abenitab_key_secondary_restrict.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [Internal Tables - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_oview.htm) →  [Table Keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key.htm) →  [Secondary Table Key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_secondary.htm) → 

Restrictions for Secondary Keys

Internal tables with secondary keys can be used in all [processing statements for internal tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_processing_statements.htm) and other statements that work with internal tables. However, there are also operand positions for internal tables for which it does not make sense to use secondary keys. Secondary keys are therefore not supported for those operand positions.

The use of tables with secondary keys causes syntax or runtime errors for the following operand positions:

-   An internal table as an actual parameter for a [TABLES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_function_destination_para.htm) parameter for RFC can have any table type but no secondary key.

-   Only standard tables without secondary keys are possible for the following:

-   rspar in [SUBMIT WITH rspar](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit_selscreen_parameters.htm) and rtab in [SUBMIT WITH sel IN rtab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit_selscreen_parameters.htm)

-   itab in [FIND IN TABLE itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfind_itab.htm) and [REPLACE IN TABLE itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreplace_itab.htm)

-   result\_tab in [SPLIT INTO TABLE result\_tab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsplit.htm)

-   column\_syntax in the [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_list.htm), in [GROUP BY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapgroupby_clause.htm), and in [ORDER BY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaporderby_clause.htm)

-   cond\_syntax in [WHERE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_dynamic.htm)

-   source\_syntax in [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfrom_clause.htm)

-   target\_syntax in [INSERT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_target.htm), [UPDATE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapupdate_target.htm), [MODIFY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_target.htm), and [DELETE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_target.htm)

-   expr\_syntax in [UPDATE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapupdate_set_expression.htm)

-   IN, OUT, INOUT parameters in [EXEC SQL - EXECUTE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexec_procedure.htm)

-   itab in [EXPORT TO INTERNAL TABLE itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexport_data_cluster_medium.htm) and [IMPORT FROM INTERNAL TABLE itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapimport_medium.htm)

-   itab in [GENERATE SUBROUTINE POOL itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapgenerate_subroutine_pool.htm), [READ REPORT INTO itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_report.htm), [INSERT REPORT FROM itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_report.htm), and [SYNTAX-CHECK FOR itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsyntax-check_for_itab.htm).

-   itab in [EDITOR-CALL FOR itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapeditor-call_for_itab.htm)

-   itab in [WRITE TO itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_to_itab.htm)


### abenitab_key_secondary.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [Internal Tables - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_oview.htm) →  [Table Keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key.htm) → 

Secondary Table Key

[Hash keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhash_key_glosry.htm "Glossary Entry") and [sorted keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensorted_key_glosry.htm "Glossary Entry") can be declared as [secondary table keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") for each internal table. For each sorted key, an additional [secondary table index](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_index_glosry.htm "Glossary Entry") is created.

Access to an internal table using a secondary key is always optimized. This allows additional optimized keys to be introduced for sorted and hashed tables as well as optimized key accesses for standard tables.

-   Declaration of secondary table keys

For data types declared in ABAP programs, a secondary table key is declared using additions [UNIQUE*|*NON-UNIQUE KEY key\_name COMPONENTS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_secondary_key.htm) of statements [TYPES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_secondary_key.htm), [DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_secondary_key.htm) and so on. For table types created in ABAP Dictionary, the tool provides the corresponding functions.

-   Access using secondary keys

In key accesses to internal tables, the addition WITH *\[*TABLE*\]* KEY key\_name can be used in [processing statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_processing_statements.htm) to specify which secondary table key to use. In index accesses, USING KEY keyname can be used to specify the [table index](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_index_glosry.htm "Glossary Entry") of which secondary key to use. In [table expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expressions.htm), this is specified using the addition [KEY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_exp_itab_line.htm). Secondary keys are not selected automatically. If no secondary key is specified in a processing statement, the primary key or primary table index is always used. If no explicit key is specified for a table expression, a [free search key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table_free.htm) is used to perform reads.

Statements where secondary keys can be specified are:

-   [READ TABLE itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table.htm)
    The rows to be read can be specified using a secondary key.

-   [LOOP AT itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab.htm)
    The processing order and conditions can be controlled using a secondary table key.

-   [INSERT itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_itab.htm)
    Only a secondary key for the source table can be specified here, from which multiple rows are copied. The position they are inserted at is determined solely using the primary key and the primary index.

-   [APPEND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapappend.htm)
    Only a secondary key for the source table can be specified here, onto which multiple rows are appended.

-   [MODIFY itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab.htm)
    The rows to be modified can be specified using a secondary key.

-   [DELETE itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_itab.htm)
    The rows to be deleted can be specified using a secondary key.

-   [TYPES ... ASSOCIATION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_mesh_association.htm), [\\\_assoc\[ ... \]](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_assoc_cond.htm)
    The secondary key used in the evaluation of a [mesh path](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_glosry.htm "Glossary Entry") can be specified using USING KEY.

If the system field sy-tabix is set by this type of access, and a sorted secondary key is used, the row number refers to the associated [secondary table index](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_index_glosry.htm "Glossary Entry"). In statements that these additions has not been introduced for, like [SORT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsort_itab.htm), [COLLECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcollect.htm), or [PROVIDE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapprovide.htm), secondary keys are not explicitly supported.

The key fields of a secondary table key are only write-protected if the secondary table key is in use in a LOOP loop or in a MODIFY statement. Otherwise, the secondary key fields are not write-protected.

Programming Guideline

[Secondary Keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_key_guidl.htm "Guideline")

Notes

-   Optimized access times for the individual rows using secondary keys are [bought](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_memory.htm) in exchange for the fact that the ABAP runtime environment then needs to administer the additional keys. For hash keys, this means additional hash administration. For each sorted key, it means an additional [secondary table index](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_index_glosry.htm "Glossary Entry").

-   When working with internal tables for which a secondary key is declared, it must be ensured that the required key or table index is used in the processing statements.

Example

Declaration of a hash table with a unique primary key and a non-unique sorted secondary key cities. The table is filled with data from a database table, read using a [table expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expression_glosry.htm "Glossary Entry") with values specified for the secondary key. The first row found is read.

DATA cityfrom TYPE spfli-cityfrom VALUE 'FRANKFURT'.
cl\_demo\_input=>add\_field( CHANGING field = cityfrom ).
DATA cityto TYPE spfli-cityto VALUE 'NEW YORK'.
cl\_demo\_input=>request( CHANGING field = cityto ).
DATA spfli\_tab
  TYPE HASHED TABLE OF spfli
       WITH UNIQUE KEY primary\_key        COMPONENTS carrid connid
       WITH NON-UNIQUE SORTED KEY cities  COMPONENTS cityfrom cityto.
SELECT \*
       FROM spfli
       INTO TABLE @spfli\_tab.
cl\_demo\_output=>display(
  VALUE #( spfli\_tab\[ KEY cities
                      cityfrom = cityfrom
                      cityto   = cityto \] OPTIONAL ) ).

Continue
[Updating Secondary Keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_secondary_update.htm)
[Using Secondary Keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_secondary_usage.htm)
[Restrictions for Secondary Keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_secondary_restrict.htm)


### abenitab_key_duplicates.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [Internal Tables - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_oview.htm) →  [Table Keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key.htm) → 

Duplicate Unique Keys

When rows are inserted into internal tables with a unique primary key or unique secondary key, duplicates can occur with respect to one or more of these keys. Depending on whether the insert takes place as a single record operation or a mass operation, the ABAP runtime environment responds as follows to an attempt to insert an entry with duplicate key values:

-   First, it checks whether duplicate key values would occur with respect to the primary key. The system behavior is as follows depending on the operation:

-   When single rows are inserted using the variant
    [INSERT wa INTO TABLE itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_itab_position.htm)
    duplicate with respect to the primary key are ignored and sy-subrc is set to 4. This is often used to filter out duplicates when the table is constructed.

-   In all other cases, such as
    [INSERT ... INTO itab INDEX idx](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_itab_position.htm)
    [INSERT LINES OF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_itab_linespec.htm) (mass operation)
    [APPEND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapappend.htm)
    [COLLECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcollect.htm)
    [\=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove.htm), [IMPORT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapimport_data_cluster.htm) (mass operations)
    the runtime error ITAB\_DUPLICATE\_KEY occurs.

-   A check is then made to see whether duplicate key values would occur with respect to any existing unique secondary keys. If this is the case,

-   an exception of the class CX\_SY\_ITAB\_DUPLICATE\_KEY is raised for the statements [INSERT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_itab.htm) and [APPEND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapappend.htm), if the operation is a single record operation.

-   For all other insert and assignment operations, particularly for all mass operations, the runtime error ITAB\_DUPLICATE\_KEY occurs.

Example

The first INSERT statement does not insert a line and sets sy-subrc to the value 4. The second INSERT statement produces a runtime error.

DATA itab TYPE SORTED TABLE OF i WITH UNIQUE KEY table\_line.
itab = VALUE #( ( 1 ) ( 2 ) ( 3 ) ).
INSERT 2 INTO TABLE itab.
INSERT 2 INTO itab INDEX 2.


### abenitab_key_secondary_duplicates.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [Internal Tables - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_oview.htm) →  [Table Keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key.htm) → 

Duplicate Non-Unique Keys

Non-unique table keys can produce duplicate rows with respect to these keys. This section describes the order of these duplicates when data is inserted into table with non-unique sorted table keys. This order is ignored with respect to non-unique primary keys in standard tables.

-   [Single Record Operations](#@@ITOC@@ABENITAB_KEY_SECONDARY_DUPLICATES_1)

-   [Block Operations](#@@ITOC@@ABENITAB_KEY_SECONDARY_DUPLICATES_2)

-   [Special Features](#@@ITOC@@ABENITAB_KEY_SECONDARY_DUPLICATES_3)

-   [Example](#@@ITOC@@ABENITAB_KEY_SECONDARY_DUPLICATES_4)

Single Record Operations

When individual rows are inserted where the insert position is determined using a table key, that is, in the case of

-   the operations [INSERT ... INTO TABLE ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_itab_position.htm)

-   [lazy update](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlazy_update_glosry.htm "Glossary Entry")s of sorted secondary keys

the order of the duplicates with respect to the table key of the target table is determined in accordance with the insert order of the individual rows. The duplicate row last inserted into the table is sorted before all other duplicates.

Block Operations

For block operations such as an [assignment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove.htm) of an internal table to another table or when inserting multiple rows using [INSERT LINES OF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_itab_linespec.htm), the order of duplicates with respect to a sorted key of the target table in the block is taken from the source table. If there are already one or more duplicates in the target table, the source block duplicates are inserted in their original order in front of the first duplicate in the target table.

Special Features

Some operations have the characteristics of block operations but are executed internally as sequences of single record operations. In this case, the original order of duplicates with respect to a sorted key in the target table is not retained. This is the case for the following operations:

-   Filling an internal table using [IMPORT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapimport_data_cluster.htm) from a table previously created with [EXPORT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexport_data_cluster.htm) and all operations that are based internally on such an import, such as [posting](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_function_update.htm) operations.

-   Passing and applying internal tables for [Remote Function Calls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_function_destination_para.htm).

-   The deserialization of an internal table from a table previously serialized to XML using [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transformation.htm).

Example

Example

The result of the following insertion is

a a
b z
b y
b x
b b

TYPES:
  BEGIN OF line,
    col1 TYPE string,
    col2 TYPE string,
  END OF line,
  itab TYPE SORTED TABLE OF line
            WITH NON-UNIQUE KEY col1.
DATA(itab) = VALUE itab(
( col1 = 'b' col2 = 'b' )
( col1 = 'a' col2 = 'a' ) ).
DATA(jtab) = VALUE itab(
( col1 = 'b' col2 = 'x' )
( col1 = 'b' col2 = 'y' )
( col1 = 'b' col2 = 'z' ) ).
INSERT LINES OF jtab INTO TABLE itab.
cl\_demo\_output=>display( itab ).
