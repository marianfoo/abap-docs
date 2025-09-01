  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Internal Tables - Overview](javascript:call_link\('abenitab_oview.htm'\)) → 

Access to Internal Tables

When internal tables are read, either the entire table or [table body](javascript:call_link\('abentable_body_glosry.htm'\) "Glossary Entry") can be accessed, or individual rows.

-   The table body is read using special statements such as [SORT](javascript:call_link\('abapsort_itab.htm'\)), but can also be accessed using general statements where internal tables can be specified at operand positions. Examples are [assignments](javascript:call_link\('abapmove.htm'\)), parameter passing, target or source areas in [Open SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") and many other statements that return or expect tabular data.

-   Individual rows are accessed using

-   [special statements](javascript:call_link\('abenitab.htm'\)) such as [READ TABLE](javascript:call_link\('abapread_table.htm'\)), [LOOP AT](javascript:call_link\('abaploop_at_itab.htm'\)), [MODIFY](javascript:call_link\('abapmodify_itab.htm'\)).

-   table expressions [itab\[ ... \]](javascript:call_link\('abentable_expressions.htm'\)).

-   Mesh path expressions [mesh\_path](javascript:call_link\('abenmesh_path_expression.htm'\))

When individual rows are read, either a [work area](javascript:call_link\('abenwork_area_glosry.htm'\) "Glossary Entry") is used into which the row content is read or from which it is modified, or a row is associated with a [field symbol](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry") or a [data reference variable](javascript:call_link\('abendata_reference_variable_glosry.htm'\) "Glossary Entry") and these are used to access the row directly.

The table category and the table keys are significant when internal tables are edited:

-   The [primary table index](javascript:call_link\('abenprimary_table_index_glosry.htm'\) "Glossary Entry") (which always exists) can be used to access [index tables](javascript:call_link\('abenindex_table_glosry.htm'\) "Glossary Entry") ([standard tables](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") and [sorted tables](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry")).

-   [Primary table keys](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") can be used for optimized access to [sorted tables](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry") and [hashed tables](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry").

-   A [secondary table index](javascript:call_link\('abensecondary_table_index_glosry.htm'\) "Glossary Entry") can be used to access any tables with a [sorted](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry") [secondary table index](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry").

-   The [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") can be used for optimized access to any tables with a secondary [sorted key](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry") or [hash key](javascript:call_link\('abenhash_key_glosry.htm'\) "Glossary Entry"). Notes

Notes

-   Internal tables must be specified at operand positions for internal tables, both when the statement is executed and if known statically. Generic formal parameters and field symbols can only be specified if they are typed with at least the generic type [any table](javascript:call_link\('abenbuilt_in_types_generic.htm'\)). Only index tables can be specified at operand positions that include index access, and generic formal parameters and field symbols must be typed with at least the generic type [index table](javascript:call_link\('abenbuilt_in_types_generic.htm'\)).

-   If the row type of internal tables contains [object reference variables](javascript:call_link\('abenobject_refer_variable_glosry.htm'\) "Glossary Entry") as the components comp, the attributes attr of the object to which the reference points can be used as key values for reading, sorting, and modifying table rows. This is always possible for statements that address individual [components](javascript:call_link\('abenitab_components.htm'\)) of the table.

-   The content of the primary table key cannot be changed for any writes to individual rows of [sorted tables](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry") and [hashed tables](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry"). If writes are performed in writing positions across the entire table row in these tables (for example, as a target field of assignments or as actual parameters for output parameters), an exception is always raised. It is not possible to access entire table rows using field symbols, data references or table expressions.

Example

In the following example, data is written to an internal table with Open SQL, sorting takes place, and reads are demonstrated with the statement [READ TABLE](javascript:call_link\('abapread_table_itab_shortref.htm'\)) and a [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry").

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