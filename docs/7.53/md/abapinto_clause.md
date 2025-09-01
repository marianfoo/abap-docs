  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Reads](javascript:call_link\('abenopen_sql_reading.htm'\)) →  [SELECT clauses](javascript:call_link\('abenselect_clauses.htm'\)) → 

SELECT - INTO, APPENDING

[Quick Reference](javascript:call_link\('abapselect_shortref.htm'\))

Syntax

... *{* INTO
      *{* *{**\[*CORRESPONDING FIELDS OF*\]* @wa*}**|*(@dobj1, @dobj2, ...)*}* *}*
  *|* *{* INTO*|*APPENDING
         *\[*CORRESPONDING FIELDS OF*\]* TABLE @itab *\[*PACKAGE SIZE n*\]**}*
  *|* *{* INTO @DATA(wa) *}*
  *|* *{* INTO TABLE @DATA(itab) *\[*PACKAGE SIZE n*\]* *}*
    *\[* [EXTENDED RESULT](javascript:call_link\('abapselect_extended_result.htm'\)) @oref *\]*
    *\[* [creating](javascript:call_link\('abapselect_creating.htm'\)) *\]* ...  .

Alternatives:

[1\. ... INTO *\[*CORRESPONDING FIELDS OF*\]* @wa](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... INTO (@dobj1, @dobj2, ... )](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... INTO*|*APPENDING *\[*CORRESPONDING FIELDS OF*\]* TABLE @itab *\[*PACKAGE SIZE n*\]*](#!ABAP_ALTERNATIVE_3@3@)
[4\. ... INTO @DATA(wa)](#!ABAP_ALTERNATIVE_4@4@)
[5\. ... INTO TABLE @DATA(itab) *\[*PACKAGE SIZE n*\]*](#!ABAP_ALTERNATIVE_5@5@)

Effect

The information after INTO or APPENDING specifies to which data objects the results set of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement, [WITH](javascript:call_link\('abapwith.htm'\)) statement or a [FETCH](javascript:call_link\('abapfetch.htm'\)) statement is assigned. It is possible to specify

-   a single work area wa after INTO,
    
-   a list (in parentheses) of data objects dobj1, dobj2 ... after INTO,
    
-   an internal table itab after INTO or APPENDING
    

as a [host variable](javascript:call_link\('abenopen_sql_host_variables.htm'\)) prefixed with the escape character @. The [declaration operator](javascript:call_link\('abendeclaration_operator_glosry.htm'\) "Glossary Entry") [DATA](javascript:call_link\('abendata_inline.htm'\)) can be used to perform appropriate [inline declarations](javascript:call_link\('abeninline_declaration_glosry.htm'\) "Glossary Entry").

When field symbols or dereferenced reference variables are specified for the work area, individual data objects, or internal tables in a SELECT loop closed using [ENDSELECT](javascript:call_link\('abapendselect.htm'\)), the data object that is the target of a field symbol or reference variable is identified precisely once, when the loop is entered. This data object is used as a target area in each loop pass. Any modifications to the assignment of a field symbol or reference variable within the loop are ignored.

The [EXTENDED RESULT](javascript:call_link\('abapselect_extended_result.htm'\)) addition can be used to provide an extended result in a result object.

If a [LOB](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry") of the results set is associated with a [LOB handle](javascript:call_link\('abenlob_handle_glosry.htm'\) "Glossary Entry"), it may be necessary to use [creating](javascript:call_link\('abapselect_creating.htm'\)) to specify whether a [data stream](javascript:call_link\('abendata_stream_glosry.htm'\) "Glossary Entry") or a [locator](javascript:call_link\('abenlocator_glosry.htm'\) "Glossary Entry") is being used.

The INTO clause must be the final clause of a [main query](javascript:call_link\('abenmainquery_glosry.htm'\) "Glossary Entry") and the additions [UP TO, OFFSET](javascript:call_link\('abapselect_up_to_offset.htm'\)), a [abap\_options](javascript:call_link\('abapselect_additions.htm'\)) must be placed after the INTO clause.

Notes

-   When specifying the data objects, there are no dynamic variants that correspond to the other additions. Instead, dynamically created data objects can be used (see the example for [CREATE DATA](javascript:call_link\('abapcreate_data_existing.htm'\))).
    
-   Whether data should better be read into an internal table or a work area depends on the type of further processing: If data is required only once in a program, it should be imported into a work area, row by row, by a SELECT. Reading data into an internal table requires more memory space (without compensating this disadvantage with a considerably higher reading speed). If, on the other hand, data is required many times in a program, it should be read into an internal table. The disadvantage of the increased memory requirement is more than compensated for here by the advantage of a once-only selection.
    
-   If data is to be imported into an internal table, it is better to import it once into an internal table than to read it, row by row, into a work area and insert its content in the internal table.
    
-   If individual columns are being read and the structure of the results set is known statically, it is recommended that a list of data objects or inline declarations are used instead of using the addition CORRESPONDING FIELDS.
    
-   If the addition INTO CORRESPONDING is used and all the required information exists statically, the fields are assigned when the program is generated. Otherwise the fields are assigned once when the SELECT statement is executed, which causes a slight increase in the required runtime.
    
-   The addition INTO CORRESPONDING modifies the actual [SELECT list](javascript:call_link\('abapselect_list.htm'\)) that is passed to the database and hence also the SELECT statement. If one or more names match, all the columns for which there are no name matches are removed from the SELECT list implicitly. If there are no name matches, none of the columns are removed. If \* is specified for the [SELECT list](javascript:call_link\('abapselect_list.htm'\)), it may be updated to a list of columns implicitly.
    
-   The variants with the addition INTO CORRESPONDING FIELDS run the risk of having target areas with more components than are actually filled. This should only be the case if the components that are not filled are then filled in the program. Otherwise appropriately sized work areas should be used to avoid a large amount of memory being filled by initial values (especially in internal tables).
    
-   The statement SELECT also has an obsolete [short form](javascript:call_link\('abapselect_obsolete.htm'\)), in which INTO or APPENDING can be omitted.
    
-   Reference variables for LOB handles or LOB handle structures cannot currently be specified after the statement FETCH.
    
-   Host variables without the escape character @ are [obsolete](javascript:call_link\('abenopen_sql_hostvar_obsolete.htm'\)). The escape character @ must be specified in the [strict modes](javascript:call_link\('abenopensql_strict_modes.htm'\)) of the syntax check from Release 7.40, SP05.
    
-   Outside the [strict mode](javascript:call_link\('abenopensql_strict_mode_750.htm'\)) of the syntax check from 7.50Release 7.50, the INTO clause does not have to be the last clause of a [main query](javascript:call_link\('abenmainquery_glosry.htm'\) "Glossary Entry").
    

Alternative 1

... INTO *\[*CORRESPONDING FIELDS OF*\]* @wa

Effect

For wa, a data object can be specified as a host variable using the escape character @. This must meet certain [prerequisites](javascript:call_link\('abenopen_sql_wa.htm'\)) without specifying CORRESPONDING FIELDS OF. If the results set consists of a single row, this row is assigned to wa. If the results set has multiple rows, SELECT must be followed by an ENDSELECT statement; the results set is assigned to the work area wa row-by-row and can be evaluated in the loop. After ENDSELECT, the work area wa contains the row that was assigned last. If used in the [FETCH](javascript:call_link\('abapfetch.htm'\)) statement, a row is extracted at the current cursor position. If the result is empty, the work area remains unchanged. If a handleable exception is raised when the work area is filled, its content is undefined when the exception is handled.

The rows of the results set are assigned as follows, based on the [SELECT list](javascript:call_link\('abapselect_list.htm'\)):

-   Specifying \* Without Addition CORRESPONDING FIELDS
    

If all columns are read with \*, CORRESPONDING FIELDS is not specified and the SELECT statement is not the main query of a [WITH](javascript:call_link\('abapwith.htm'\)) statement, then SELECT behaves as follows:

-   When a regular work area is specified, the row of the results set is assigned left-aligned and unconverted, in accordance with the structure of the results set. Unaffected parts of wa retain their previous content. To be able to access the components of the results set according to type, the work area wa must be structured like the results set.

-   When a [LOB handle structure](javascript:call_link\('abenlob_handle_structure_glosry.htm'\) "Glossary Entry") is specified, it must be constructed (in accordance with the [prerequisites](javascript:call_link\('abenopen_sql_wa.htm'\))) exactly like the structure of the [data source](javascript:call_link\('abapselect_data_source.htm'\)). The content of the columns of the results set that are not assigned to any [LOB handle components](javascript:call_link\('abenlob_handle_component_glosry.htm'\) "Glossary Entry") are directly assigned to the corresponding components of the work area. One [LOB handle](javascript:call_link\('abenselect_into_lob_handles.htm'\)) is created for each LOB handle component.

-   All other combinations
    

If the results set consists of a single column specified explicitly after SELECT or a single [SQL expression](javascript:call_link\('abensql_expression_glosry.htm'\) "Glossary Entry") or a single [aggregate expression](javascript:call_link\('abenaggregate_expression_glosry.htm'\) "Glossary Entry"), wa can be an elementary data object or a structure. If the results set consists of multiple columns, it must be a structure and the following rules apply:

-   If the addition CORRESPONDING FIELDS is not specified, wa must contain enough components and the content of the columns are assigned to the components of wa from left to right in the order specified after SELECT.

-   If the addition CORRESPONDING FIELDS is specified, only those content of columns for which there are identically named components in wa are assigned to them. This respects the alternative column names. Columns and aggregate expressions that appear multiple times can only be assigned using alternative column names, if CORRESPONDING FIELDS is specified. If a column name appears multiple times and no alternative column name was granted, the last column listed is assigned. If one or more names match, all the columns for which there are no name matches are removed from the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) implicitly and therefore from the results set too. If there are no name matches, none of the columns are removed from the results set. If \* is specified for the [SELECT list](javascript:call_link\('abapselect_list.htm'\)), it may be updated to a list of columns implicitly.

[Assignment rules](javascript:call_link\('abenselect_into_conversion.htm'\)) apply to the individual assignments. If a [LOB](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry") of a reference variable for [LOB handles](javascript:call_link\('abenlob_handle_glosry.htm'\) "Glossary Entry") is assigned, a [LOB handle is created](javascript:call_link\('abenselect_into_lob_handles.htm'\)). If an [offset/length is specified](javascript:call_link\('abenoffset_length.htm'\)) to access a substring of wa, +off must not be omitted.

If CORRESPONDING FIELDS is used, the columns of the results set defined in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) correspond to the components of the target area. Among other things, there must be at least one match or there must be an identically named component in the target area for each explicitly specified column.

Notes

-   The second point above, "All Other Combinations" also includes [data\_source~\*](javascript:call_link\('abapselect_list.htm'\)) when specified in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)). In this case, wa must be a structure. This is particularly valid when only one data source [data\_source~\*](javascript:call_link\('abapselect_data_source.htm'\)) is specified. If a single data\_source~\* is specified, therefore, other rules apply than in the case where \* is specified, even if the same results sets are defined both times.
    
-   The addition CORRESPONDING FIELDS ignores names which were only defined using the addition AS name of the statement [INCLUDE](javascript:call_link\('abapinclude_type.htm'\)) or when integrating the structures in ABAP Dictionary. Any components renamed using the addition RENAMING WITH SUFFIX of the statement INCLUDE (or renamed similarly in ABAP Dictionary) are, however, not ignored.
    
-   If the addition CORRESPONDING FIELDS is used, fields with matching names (if known statically) are assigned when the program is generated or are otherwise assigned once when the SELECT statement is executed.
    

Example

In this example, the four columns of a results set are read into four respective components of the same name in a work area, where they are in a different order.

DATA:
  BEGIN OF wa,
    cityfrom TYPE spfli-cityfrom,
    cityto   TYPE spfli-cityto,
    carrid TYPE spfli-carrid,
    connid   TYPE spfli-connid,
  END OF wa.
SELECT SINGLE
       FROM spfli
       FIELDS carrid, connid, cityfrom, cityto
       WHERE carrid = 'LH' AND connid = '400'
       INTO CORRESPONDING FIELDS OF @wa.
cl\_demo\_output=>display( wa ).

Alternative 2

... INTO (@dobj1, @dobj2, ... )

Effect

If the results set consists of multiple columns [col\_spec](javascript:call_link\('abapselect_clause_col_spec.htm'\)) specified explicitly in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)), a list of data objects dobj1, dobj2, ... (in parentheses and separated by commas) can be specified after INTO. The following can be specified as a single data object:

-   An elementary host variable prefixed by an escape character @.
    
-   An inline declaration, [@DATA(dobj)](javascript:call_link\('abendata_inline.htm'\)), where an elementary variable with the type of the assigned column of the results set is declared. The [declaration operator](javascript:call_link\('abendeclaration_operator_glosry.htm'\) "Glossary Entry") [DATA](javascript:call_link\('abendata_inline.htm'\)) must be prefixed with the escape character @.
    

The same number of elementary data objects dobj must be specified as there are columns in the results set. The content of the columns in the results set is assigned to the data objects from left to right, according to the order specified after SELECT. [Assignment rules](javascript:call_link\('abenselect_into_conversion.htm'\)) apply to the individual assignments. If a [LOB](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry") of a reference variable for [LOB handles](javascript:call_link\('abenlob_handle_glosry.htm'\) "Glossary Entry") is assigned, a [LOB handle is created](javascript:call_link\('abenselect_into_lob_handles.htm'\)). If an [offset/length is specified](javascript:call_link\('abenoffset_length.htm'\)) to access a data object, +off must not be omitted. If the results set is empty, the data objects remain unchanged. If a handleable exception is raised when the data objects are filled, their content is undefined when the exception is handled.

If the results set consists of one row, the columns are assigned from that row. If the results set contains multiple rows, SELECT must be followed by an ENDSELECT statement; the columns of the results set are assigned to the data objects row-by-row and they can be evaluated in a loop. If used in the statement [FETCH](javascript:call_link\('abapfetch.htm'\)), the columns of the row are extracted at the current cursor position.

Note

No list can be specified after INTO if the results set is defined by specifying \* or dbtab1~\*, dbtab2~\*, ... in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)).

Example

In this example, the four columns of a results set are read into four individually specified components of a structure. Unlike in the previous example, the runtime environment does not compare names here.

DATA:
  BEGIN OF wa,
    cityfrom TYPE spfli-cityfrom,
    cityto   TYPE spfli-cityto,
    carrid TYPE spfli-carrid,
    connid   TYPE spfli-connid,
  END OF wa.
SELECT SINGLE
       FROM spfli
       FIELDS carrid, connid, cityfrom, cityto
       WHERE carrid = 'LH' AND connid = '400'
       INTO (@wa-carrid,
             @wa-connid,
             @wa-cityfrom,
             @wa-cityto).
cl\_demo\_output=>display( wa ).

Example

In this example, the four columns of a results set are read with inline declarations for the individual target objects.

SELECT SINGLE
       FROM spfli
       FIELDS carrid, connid, cityfrom, cityto
       WHERE carrid = 'LH' AND connid = '400'
       INTO (@DATA(carrid),
             @DATA(connid),
             @DATA(cityfrom),
             @DATA(cityto)).
cl\_demo\_output=>display(
  |{ carrid } { connid } { cityfrom } { cityto }| ).

Alternative 3

... INTO*|*APPENDING *\[*CORRESPONDING FIELDS OF*\]* TABLE @itab *\[*PACKAGE SIZE n*\]*

Addition:

[... PACKAGE SIZE n](#!ABAP_ONE_ADD@1@)

Effect

If the results set consists of multiple rows, an internal table itab of any table type can be specified as a host variable using the escape character @ after INTO TABLE or APPENDING TABLE. The row type of the internal table must meet the [prerequisites](javascript:call_link\('abenopen_sql_wa.htm'\)).

The results set is inserted into the internal table itab row-by-row in accordance with the rules of [INSERT](javascript:call_link\('abapinsert_itab.htm'\)); a sorting process is executed in the case of a [sorted table](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry").

-   If INTO is used, the internal table is initialized.
    
-   Previous rows remain intact if APPENDING is used.
    

If there is a conflict with an existing unique table key, a non-handleable exception is raised like in the case of [INSERT LINES OF](javascript:call_link\('abapinsert_itab_linespec.htm'\)).

Before any assignment of a row of the results set, an initial row of the internal table itab is created and the row of the results set is assigned to this row. When assigning a row of the results set to a row of the internal table with or without CORRESPONDING FIELDS, the same rules apply as when assigning to an individual work area wa (see above) with the exception that when inserting into internal tables, [LOB handles](javascript:call_link\('abenlob_handle_glosry.htm'\) "Glossary Entry") can be [created](javascript:call_link\('abenselect_into_lob_handles.htm'\)) as [locators](javascript:call_link\('abenlocator_glosry.htm'\) "Glossary Entry") but not as [reader streams](javascript:call_link\('abenreader_stream_glosry.htm'\) "Glossary Entry").

If the addition PACKAGE SIZE is not used, all rows of the results set are inserted in the internal table itab and the ENDSELECT statement must not be specified after SELECT.

If the results set is empty, the internal table is initialized when INTO is used, and remains unchanged when APPENDING is used. If a handleable exception is raised when the internal table is filled, its content is undefined when the exception is handled.

Notes

-   When specifying an internal table with a unique [primary](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") or [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry"), an exception is raised that cannot be handled if an attempt is made to create a duplicate entry.
    
-   If the internal table contains more columns than required when using the addition CORRESPONDING FIELDS, generally too much memory is being used by initial fields and a warning is displayed by the syntax check. In cases where the columns are needed, for example when they are filled with derived values by the program, a [pragma](javascript:call_link\('abenpragma.htm'\)) can be used to suppress the warning.
    
-   The maximum number of [data streams](javascript:call_link\('abendata_stream_glosry.htm'\) "Glossary Entry") that can be assigned to an ABAP SQL statement is limited to 16, which means it does not make any sense to create reader streams when importing internal tables.
    
-   Instead of using APPENDING TABLE to form union sets on the AS ABAP, this can now be done directly in the database using [UNION](javascript:call_link\('abapunion.htm'\)), and [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) can be used to calculate column values.
    

Example

In this example, the four columns of a results set are read into four respective components of the same name in an internal table, where they are in a different order.

TYPES:
  BEGIN OF wa,
    cityfrom TYPE spfli-cityfrom,
    cityto   TYPE spfli-cityto,
    carrid TYPE spfli-carrid,
    connid   TYPE spfli-connid,
  END OF wa.
DATA itab TYPE SORTED TABLE OF wa WITH UNIQUE KEY table\_line.
SELECT FROM spfli
       FIELDS carrid, connid, cityfrom, cityto
       INTO CORRESPONDING FIELDS OF TABLE @itab.
cl\_demo\_output=>display( itab ).

Example

The following example for APPENDING TABLE creates the same internal table as the example for [UNION](javascript:call_link\('abapunion.htm'\)).

SELECT FROM scarr
       FIELDS carrname,
              CAST( '-' AS CHAR( 4  ) ) AS connid,
              CAST( '-' AS CHAR( 20 ) ) AS cityfrom,
              CAST( '-' AS CHAR( 20 ) ) AS cityto
       WHERE  carrid = 'LH'
       INTO TABLE @DATA(result).
SELECT FROM spfli
       FIELDS '-' AS carrname,
             connid,
             cityfrom,
             cityto
          WHERE  carrid = 'LH'
          APPENDING TABLE @result.
SORT result BY carrname DESCENDING connid cityfrom cityto.
cl\_demo\_output=>display( result ).

Addition

... PACKAGE SIZE n

Effect

If the addition PACKAGE SIZE is specified, all rows of the results set for SELECT are processed in a loop, which must be closed with ENDSELECT. They are inserted in packages of n rows in the internal table itab. n expects a [host variable](javascript:call_link\('abenopen_sql_host_variables.htm'\)) with a prefixed escape character @, a [host expression](javascript:call_link\('abenopen_sql_host_expressions.htm'\)), or a literal of type i (that contains the number of rows). When n is specified as a data object, it should be prefixed by the escape character @. The content of n must match the data type i in accordance with the rules for a [lossless assignment](javascript:call_link\('abenlossless_assignment_glosry.htm'\) "Glossary Entry"). n must have the type b, s, i, or int8. This is checked in [strict mode](javascript:call_link\('abenopensql_strict_mode_751.htm'\)) of the syntax check from Release 7.51. If the value of n is less than 0, an exception is raised that cannot be handled. If n is equal to 0, all rows of the results set are inserted in the internal table itab. If used in the statement [FETCH](javascript:call_link\('abapfetch.htm'\)), n rows are extracted from the current cursor position.

If INTO is used, the internal table is initialized before each insertion and, in the SELECT loop, it only contains the rows of the current package. If APPENDING is used, a further package is added to the existing rows of the internal table for each SELECT loop or for each extraction using FETCH.

After ENDSELECT, the content of itab is not defined if INTO is used. That is, the table can either contain the rows of the last package or it can be initial. If APPENDING is used, the content of itab retains the state of the last loop pass.

Notes

-   The addition PACKAGE SIZE can be used after INTO to limit the amount of data read in one go. Otherwise a runtime error can occur when reading a data set that is too large into an internal table so that its [maximum size](javascript:call_link\('abenmemory_consumption_2.htm'\)) is exceeded. PACKAGE SIZE cannot prevent this runtime error after APPENDING.
    
-   If the addition PACKAGE SIZE is specified with the addition [FOR ALL ENTRIES](javascript:call_link\('abenwhere_logexp_itab.htm'\)), all selected rows are read initially into an internal system table and the packages are only created when they are passed from the system table to the actual target table. The addition FOR ALL ENTRIES thereby negates the effect of PACKAGE SIZE in preventing memory overflow.
    
-   The addition PACKAGE SIZE does not influence the size of the [packages](javascript:call_link\('abenopen_sql_oview.htm'\)) (configured in the profile parameters) used to transport data between the database server and AS ABAP.
    

Example

In this example, columns of the database table SPFLI are read and output in packages of 10 rows.

DATA(out) = cl\_demo\_output=>new( ).
SELECT carrid, connid, cityfrom, cityto
       FROM spfli
       ORDER BY carrid, connid, cityfrom, cityto
       INTO  TABLE @DATA(result) PACKAGE SIZE 10.
  out->next\_section( |Package { sy-dbcnt / 10 }|
    )->write( result ).
ENDSELECT.
out->display( ).

Alternative 4

... INTO @DATA(wa)

Alternative 5

... INTO TABLE @DATA(itab) *\[*PACKAGE SIZE n*\]*

Effect

[Inline declaration](javascript:call_link\('abeninline_declaration_glosry.htm'\) "Glossary Entry") of the full target area. The [declaration operator](javascript:call_link\('abendeclaration_operator_glosry.htm'\) "Glossary Entry") [DATA](javascript:call_link\('abendata_inline.htm'\)) must be prefixed with the escape character @. The data type of the new data object is constructed in accordance with the structure of the results set defined after SELECT and the number of [data sources](javascript:call_link\('abapselect_data_source.htm'\)) specified after [FROM](javascript:call_link\('abapfrom_clause.htm'\)). INTO @DATA(wa) declares a flat data object wa of this type; INTO TABLE @DATA(itab) declares a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") itab of this row type with an [empty table key](javascript:call_link\('abenitab_empty_key.htm'\)). The same applies to PACKAGE SIZE as when specifying an existing internal table.

The prerequisites for an online declaration are as follows:

-   The structure of the results set must be statically identifiable. The [SELECT list](javascript:call_link\('abapselect_list.htm'\)) and the [FROM clause](javascript:call_link\('abapfrom_clause.htm'\)) must be specified statically and [host variables](javascript:call_link\('abenopen_sql_host_variables.htm'\)) in the SELECT list must not be generic.
    
-   The results set defined in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) cannot have multiple columns with the same name. This can be bypassed using alias names.
    
-   In a multi-column [results set](javascript:call_link\('abapselect_list.htm'\)), each [SQL expression](javascript:call_link\('abapsql_expr.htm'\)) and each [aggregate expression](javascript:call_link\('abapselect_aggregate.htm'\)) must have an alias name.
    
-   If the addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)) is used to access a cross-client [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"), a name must be specified for the client column at the same time.
    

The data type of the declared data object wa or itab is determined as follows:

-   If the results set in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) is defined using a single specified column [col\_spec](javascript:call_link\('abapselect_clause_col_spec.htm'\)) for which no name can be identified, the data type of wa or the row type of itab is its elementary type.
    
-   If the results set in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) is defined using a single specified column [col\_spec](javascript:call_link\('abapselect_clause_col_spec.htm'\)) for which no name can be identified, the data type of wa or the row type of itab is a structure with a component, with its elementary type.
    
-   If the results set in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) is defined using a single data\_source~\* or a list of multiple specified columns [col\_spec](javascript:call_link\('abapselect_clause_col_spec.htm'\)), the data type of wa or the row type of itab is a structure with elementary components. The data types of the components are the elementary types of the columns in the results set in the order defined there.
    
-   If the results set in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) is defined using data\_source~\*, the data type of wa or the row type of itab is a nested structure. There is a substructure with the name or alias name of the table or view for every individual data source [data\_source](javascript:call_link\('abapselect_data_source.htm'\)) ... specified. The data types of the components of the substructures are the elementary types of the data source in the order defined there. If the data source is a [common table expression](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry") declared using [WITH](javascript:call_link\('abapwith.htm'\)), the first character + of its name is ignored for the name of the substructure.
    
-   If the results set in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) is defined using \*, the data type depends on the number of [data sources](javascript:call_link\('abapselect_data_source.htm'\)) specified after [FROM](javascript:call_link\('abapfrom_clause.htm'\)):
    

-   In reads from a single [data source](javascript:call_link\('abapselect_data_source.htm'\)) dbtab, the data type of wa or the row type of itab is the same as in a definition of the results set using data\_source~\* (see above).

-   In reads from multiple [data sources](javascript:call_link\('abapselect_data_source.htm'\)) data\_source1, data\_source2, ... using a [join](javascript:call_link\('abapselect_join.htm'\)), the data type of wa or the row type of itab is the same as in a definition of the results set using data\_source1~\*, data\_source2~\*, .... (see above).

The elementary data type of an elementary data object or an elementary component of a structure is constructed as follows:

-   For columns of data sources, the data type is taken from ABAP Dictionary.
    
-   For [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) and [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)), the data type is their result type.
    
-   For a single host variable as an SQL expression, the data type is its ABAP type.
    

The names of the elementary components of a structure match the names of the associated columns from the [results set](javascript:call_link\('abapselect_list.htm'\)). Any alias names defined there are respected.

Notes

-   Specified columns for which no name can be identified are SQL expressions and aggregate expressions without alias name.
    
-   When an inline declaration @DATA(itab) is specified after APPENDING TABLE, this addition usually works like INTO TABLE and is therefore pointless in this combination.
    
-   No inline declarations can be made after [FETCH](javascript:call_link\('abapfetch.htm'\)).
    
-   When inline declarations are used, the syntax check is performed in a [strict mode](javascript:call_link\('abenopensql_strict_mode_740_sp08.htm'\)), which handles the statement more strictly than the regular syntax check.
    

Example

This example reads columns of a single row in an work area declared inline.

SELECT SINGLE
       FROM scarr
       FIELDS carrname,
              carrid,
              url
       WHERE  carrid = 'LH'
       INTO @DATA(result).
cl\_demo\_output=>display( result ).

Example

In this example, all columns of a results set are read into an inner join in an internal table, the row type of which is declared as a nested structure with the same structure as the results set. The first component of the nested structure is called SCARR and includes all columns of this database table. The second component of the nested structure is called SPFLI and includes all columns of this database table. The content of the columns MANDT and CARRID in both tables is redundant. For the output, the internal table with a nested row type is converted to an output table without substructures.

TYPES BEGIN OF output\_wa.
INCLUDE TYPE scarr AS scarr RENAMING WITH SUFFIX \_scarr.
INCLUDE TYPE spfli AS spfli RENAMING WITH SUFFIX \_spfli.
TYPES END OF output\_wa.
TYPES output TYPE SORTED TABLE OF output\_wa
             WITH NON-UNIQUE KEY carrid\_scarr connid\_spfli.
SELECT \*
       FROM scarr
         INNER JOIN spfli ON scarr~carrid = spfli~carrid
       INTO TABLE @DATA(itab).
cl\_demo\_output=>display( CONV output( itab ) ).

Executable Example

[Inline Declarations](javascript:call_link\('abenselect_inline_decl_abexa.htm'\))

Continue
[SELECT - EXTENDED RESULT](javascript:call_link\('abapselect_extended_result.htm'\))
[SELECT - Assignment Rules](javascript:call_link\('abenselect_into_conversion.htm'\))
[SELECT - LOB Handles](javascript:call_link\('abenselect_into_lob_handles.htm'\))
![Example](exa.gif "Example") [SELECT, Inline Declarations](javascript:call_link\('abenselect_inline_decl_abexa.htm'\))