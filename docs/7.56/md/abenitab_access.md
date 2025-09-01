  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab.htm) →  [itab - Overview](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab_oview.htm) → 

itab - Accessing Internal Tables

When internal tables are accessed, either the entire table or [table body](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_body_glosry.htm "Glossary Entry") , or individual lines can be addressed.

-   The entire table is accessed using special statements such as [SORT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsort_itab.htm), but also using general statements where internal tables can be specified at operand positions. Examples are [assignments](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmove.htm), parameter passing, target or source areas in [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_glosry.htm "Glossary Entry") and many other statements that return or expect tabular data.
-   Individual lines are accessed using the following:
    
    -   [Special statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab.htm) such as [READ TABLE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_table.htm), [LOOP AT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab.htm), or [MODIFY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_itab.htm)
    -   Table expressions [itab\[ ... \]](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_expressions.htm).
    -   Mesh path expressions [mesh\_path](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_expression.htm)
    
    When individual lines are accessed, either a [work area](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwork_area_glosry.htm "Glossary Entry") is used into which the line content can be read or from which it can be modified, or a line is linked to a [field symbol](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfield_symbol_glosry.htm "Glossary Entry") or a [data reference variable](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_reference_variable_glosry.htm "Glossary Entry") and these are used to access the line directly.
    

The table category and the table keys are significant when internal tables are processed:

-   The [primary table index](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprimary_table_index_glosry.htm "Glossary Entry") can be used to access [index tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenindex_table_glosry.htm "Glossary Entry"), that is, [standard tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_table_glosry.htm "Glossary Entry") and [sorted tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensorted_table_glosry.htm "Glossary Entry"). These tables always have a primary index.
-   [Primary table keys](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") can be used for optimized access to [sorted tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensorted_table_glosry.htm "Glossary Entry") and [hashed tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhashed_table_glosry.htm "Glossary Entry").
-   A [secondary table index](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensecondary_table_index_glosry.htm "Glossary Entry") can be used to access any tables with a [sorted](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensorted_key_glosry.htm "Glossary Entry") [secondary table index](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensecondary_table_key_glosry.htm "Glossary Entry").
-   The [secondary table key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") can be used for optimized access to any tables with a secondary [sorted key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensorted_key_glosry.htm "Glossary Entry") or [hash key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhash_key_glosry.htm "Glossary Entry").

Hints

-   Internal tables must be specified at operand positions for internal tables when the statement is executed. Only index tables can be specified at operand positions that include index access.
    -   In [processing statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_processing_statements.htm) for internal tables, the operands can be generically typed with TYPE [data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuilt_in_types_generic.htm) or TYPE [any](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuilt_in_types_generic.htm) as long as no table index is accessed. For index accesses, an operand must be typed at least with TYPE [index table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuilt_in_types_generic.htm).
    -   in expressions as [FOR expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfor_itab.htm) or [table expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_expressions.htm), an internal table must be typed at least with TYPE [any table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuilt_in_types_generic.htm).
-   If the line type of internal tables contains [object reference variables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry") as the components comp, the attributes attr of the object to which the reference points can be used as key values for reading, sorting, and modifying table lines. This is always possible for statements that address individual [components](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab_components.htm) of the table.
-   The content of the primary table key cannot be changed for any writes to individual lines of [sorted tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensorted_table_glosry.htm "Glossary Entry") and [hashed tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhashed_table_glosry.htm "Glossary Entry"). If writes are performed in write positions across the entire table line in these tables, for example, as a target field of assignments or as actual parameters for output parameters, an exception is always raised. It is not possible to access entire table lines using field symbols, data references or table expressions.

Example

In the following example, data is written to an internal table with ABAP SQL, sorting takes place, and reads are demonstrated with the statement [READ TABLE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_table_itab_shortref.htm) and a [table expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_expression_glosry.htm "Glossary Entry").

DATA scarr\_tab
  TYPE STANDARD TABLE OF scarr
       WITH NON-UNIQUE KEY carrid.
SELECT \*
       FROM scarr
       INTO TABLE @scarr\_tab.
SORT scarr\_tab BY carrid ASCENDING.
READ TABLE scarr\_tab WITH TABLE KEY carrid = 'LH'
                     TRANSPORTING NO FIELDS.
IF sy-subrc = 0.
  DATA(idx) = sy-tabix.
  TRY.
      cl\_demo\_output=>display( scarr\_tab\[ idx + 1 \]-carrid ).
    CATCH cx\_sy\_itab\_line\_not\_found.
      ...
  ENDTRY.
ENDIF.