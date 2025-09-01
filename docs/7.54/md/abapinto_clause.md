  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_reading.htm) →  [SELECT clauses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_clauses.htm) → 

SELECT - INTO, APPENDING

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_shortref.htm)

Syntax

... *{* INTO
        ( [elem1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm), [elem2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm),  ...) *}*
  *|* *{* INTO
        *\[*CORRESPONDING FIELDS OF*\]* [wa](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm) *\[*[indicators](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_indicators.htm)*\]* *}*
  *|* *{* INTO*|*APPENDING
        *\[*CORRESPONDING FIELDS OF*\]* TABLE [itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm) *\[*[indicators](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_indicators.htm)*\]*
                                             *\[*PACKAGE SIZE n*\]* *}*
    *\[* [extended\_result](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_extended_result.htm) *\]*
    *\[* [creating](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_creating.htm) *\]* ...  .

Alternatives:

[1\. ... INTO (elem1, elem2 ...)](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... INTO *\[*CORRESPONDING FIELDS OF*\]* wa ...](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... INTO*|*APPENDING *\[*CORRESPONDING FIELDS OF*\]* TABLE itab ...](#!ABAP_ALTERNATIVE_3@3@)

Effect

The additions INTO or APPENDING construct the INTO clause of a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm), [WITH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith.htm), or [FETCH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfetch.htm) statement. They define which ABAP data objects are assigned the data of the results set of a query and how this assignment is made. The following options are available:

-   An assignment to a parenthesized comma-separated list of individual elementary data objects [elem1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm), [elem2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm), .... specified after INTO.
    
-   An assignment to a single work area [wa](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm) specified after INTO.
    
-   An assignment to an internal table [itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm) specified after INTO or APPENDING.
    

The data objects [elem1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm), [elem2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm), ...., [wa](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm), and [itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm) can be specified as existing [host variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_host_variables.htm) or declared inline using [@DATA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm). An addition [NEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm) makes it possible to create target areas implicitly as [anonymous data objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenanonymous_data_object_glosry.htm "Glossary Entry").

The additions have the following meaning:

-   In writes to work areas wa and internal tables itab, CORRESPONDING FIELDS OF can be used to assign columns of the results set to identically named components of structured target areas.
    
-   In writes to internal tables, PACKAGE SIZE can be used to split rows of the results set into packages.
    
-   [indicators](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_indicators.htm) can be used to specify indicators. Currently, a [null indicator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennull_indicator_glosry.htm "Glossary Entry") can be specified with information about whether a column of the results set contains the null value.
    
-   [extended\_result](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_extended_result.htm) can be used to provide an extended result in a result object.
    
-   It may be necessary to use [creating](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_creating.htm) to define whether a [LOB](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlob_glosry.htm "Glossary Entry") of the results set associated with a [LOB handle](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlob_handle_glosry.htm "Glossary Entry") is a [data stream](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_stream_glosry.htm "Glossary Entry") or a [locator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlocator_glosry.htm "Glossary Entry").
    

These additions can all be used together with the following exceptions:

-   The addition CORRESPONDING FIELDS OF cannot be used together with inline declarations [@DATA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm) for wa or itab.
    
-   The addition APPENDING cannot be specified together with [NEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm).
    

If the target area is specified using field symbols or reference variables, and a SELECT loop is closed using [ENDSELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendselect.htm), the data object referenced by a field symbol or reference variable is identified precisely once, when the loop is entered. This data object is used as a target area in each loop pass. Any modifications to the assignment of a field symbol or reference variable within the loop are ignored.

The INTO clause must be the final clause of a [main query](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmainquery_glosry.htm "Glossary Entry") and the additions [UP TO, OFFSET](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_up_to_offset.htm), a [abap\_options](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_additions.htm) must be placed after the INTO clause.

Notes

-   The addition [NEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm) or other methods for creating [anonymous data objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenanonymous_data_object_glosry.htm "Glossary Entry") can be used to create suitable data objects for dynamically specified [FROM clauses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfrom_clause.htm) or [SELECT lists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm).
    
-   Whether data should better be read into an internal table or a work area depends on the type of further processing: If data is required only once in a program, it should be imported into a work area, row by row, by a SELECT. Reading data into an internal table requires more memory space (without compensating this disadvantage with a considerably higher reading speed). If, on the other hand, data is required many times in a program, it should be read into an internal table. The disadvantage of the increased memory requirement is more than compensated for here by the advantage of a once-only selection.
    
-   If data is to be imported into an internal table, it is better to import it once into an internal table than to read it, row by row, into a work area and insert its content in the internal table.
    
-   The statement SELECT also has an obsolete [short form](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_obsolete.htm), in which INTO or APPENDING can be omitted.
    
-   Reference variables for LOB handles or LOB handle structures cannot currently be specified after the statement FETCH.
    
-   Host variables without the escape character @ are [obsolete](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_hostvar_obsolete.htm). The escape character @ must be specified in the [strict modes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql_strict_modes.htm) of the syntax check from Release 7.40, SP05.
    
-   Outside the [strict mode](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql_strict_mode_750.htm) of the syntax check from 7.50Release 7.50, the INTO clause does not have to be the last clause of a [main query](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmainquery_glosry.htm "Glossary Entry").
    

Alternative 1

... INTO (elem1, elem2, ... )

Effect

Specifies a parenthesized and comma-separated list of elementary data objects [elem1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm), [@elem2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm), ... as target areas of the INTO clause. This can be used only if the columns of the results set are defined using one or more explicitly specified columns [col\_spec](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_clause_col_spec.htm) in the [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm). Each of the data objects [elem1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm), [@elem2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm), ... can be specified as existing [host variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_host_variables.htm) or declared inline using [@DATA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm). An addition [NEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm) makes it possible to create anonymous data objects.

The comma-separated list must have the same number of elements as columns in the results set. The content of the columns in the results set is assigned to the data objects specified in the list from left to right, in accordance with the order specified after SELECT. [Assignment rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_into_conversion.htm) apply to the individual assignments. If a [LOB](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlob_glosry.htm "Glossary Entry") of a reference variable for [LOB handles](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlob_handle_glosry.htm "Glossary Entry") is assigned, a [LOB handle is created](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_into_lob_handles.htm). If an [offset/length is specified](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoffset_length.htm) to access a data object, +off must not be omitted. If the results set is empty, the data objects remain unchanged. If a handleable exception is raised when the data objects are written to, their content is undefined when the exception is handled.

If the results set consists of one row, the columns of this row are assigned to the data objects. If the results set has multiple rows, the statements [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) and [WITH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith.htm) are used to open a SELECT loop that itself must be closed using [ENDSELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendselect.htm) or [ENDWITH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendwith.htm). A SELECT loop assigns the columns of the results set to the data objects row by row and evaluates them. If used in the statement [FETCH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfetch.htm), the columns of the row are extracted at the current cursor position.

Notes

-   If the results set is defined in the [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm) by specifying \* or data\_source~\*, it is not possible to specify a comma-separated list of data objects.
    
-   The comma-separated list can span multiple program lines.
    

Example

Reads the three columns of a results set to three elementary data objects. The first data object, carrid, is a previously declared host variable. The second data object, carrname, is host variable declared inline. The third data object is an anonymous data object created using [NEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm) and which is pointed to by a data reference variable dref declared inline.

DATA carrid TYPE scarr-carrid.
SELECT carrid, carrname, url
       FROM scarr
       ORDER BY carrid
       INTO (@carrid,
             @DATA(carrname),
             NEW @DATA(dref)).
  cl\_demo\_output=>write( |{ carrid
                       }, { carrname
                       }, { dref->\* } | ).
ENDSELECT.
cl\_demo\_output=>display( ).

Example

In this example, the four columns of a results set are read into four individually specified components of a structure. Unlike when writing to a work area using CORRESPONDING FIELDS (see below), the runtime environment does not compare names here.

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

Alternative 2

... INTO *\[*CORRESPONDING FIELDS OF*\]* wa

Effect

Specifies a single work area [wa](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm) as a target area of the INTO clause. This can be specified for all results sets. The data object [wa](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm) can be specified as an existing [host variable](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_host_variables.htm) or declared inline using [@DATA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm). An addition [NEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm) makes it possible to create an anonymous data object.

If the results set consists of a single row, this row is assigned to the work area wa. If the results set has multiple rows, the statements [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) and [WITH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith.htm) are used to open a SELECT loop that itself must be closed using [ENDSELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendselect.htm) or [ENDWITH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendwith.htm). A SELECT loop assigns the results set to the work area wa row by row and evaluates it. After ENDSELECT or ENDWITH, the work area wa contains the row that was assigned last. If used in the [FETCH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfetch.htm) statement, a row is extracted at the current cursor position. If the result is empty, the work area remains unchanged. If a handleable exception is raised when the work area is filled, its content is undefined when the exception is handled.

If the optional addition CORRESPONDING FIELDS OF is specified, wa must be a [structure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstructure_glosry.htm "Glossary Entry"). This addition specifies that only the content of columns that have identically named components in wa is assigned to them. If the addition CORRESPONDING FIELDS OF is not specified, wa must meet the prerequisites described under [Work Areas in Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_wa.htm). The rows of the results set are assigned as follows, based on the definition of the results set in the [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm):

-   Definition of the results set using \* without the addition CORRESPONDING FIELDS OF in the INTO clause:
    

If all columns of the data sources are read using \*, CORRESPONDING FIELDS is not specified and the SELECT statement is not the main query of a [WITH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith.htm) statement, SELECT behaves as follows:

-   A work area without [LOB handle components](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlob_handle_component_glosry.htm "Glossary Entry") is assigned the row of the results set, left-aligned and unconverted and in accordance with the structure of the results set. Unaffected parts of wa retain their previous content. To be able to access the components of the results set according to type, the work area wa must be structured like the results set.

-   When a [LOB handle structure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlob_handle_structure_glosry.htm "Glossary Entry") is specified, it must be constructed (in accordance with the [prerequisites](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_wa.htm)) exactly like the structure of the [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm). The content of the columns of the results set that are not assigned to any [LOB handle components](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlob_handle_component_glosry.htm "Glossary Entry") are directly assigned to the corresponding components of the work area. One [LOB handle](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_into_lob_handles.htm) is created for each LOB handle component.

-   All Other Combinations
    

If the results set consists of a single column specified explicitly after SELECT or a single [SQL expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_expression_glosry.htm "Glossary Entry") or a single [aggregate expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenaggregate_expression_glosry.htm "Glossary Entry"), wa can be an elementary data object or a structure. If the results set consists of multiple columns, it must be a structure and the following rules apply:

-   If the addition CORRESPONDING FIELDS is not specified, wa must contain enough components and the content of the columns are assigned to the components of wa from left to right in the order specified after SELECT. The content of surplus components of wa is not changed.

-   If the addition CORRESPONDING FIELDS is specified, only those content of columns for which there are identically named components in wa are assigned to them. The alias names defined using [AS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm) are taken into account. Columns and aggregate expressions that appear multiple times can only be assigned using alias names, if CORRESPONDING FIELDS is specified. If wa contains substructures, these are resolved by the addition CORRESPONDING FIELDS and the full names associated using the structure component selector are considered. If a column name appears multiple times and no alias name was assigned, the last column listed is assigned. If one or more names match, all the columns for which there are no name matches are removed from the [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm) implicitly and therefore from the results set too. If there are no name matches, none of the columns are removed from the results set. If \* is specified for the [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm), it may be updated to a list of columns implicitly.

[Assignment rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_into_conversion.htm) apply to the individual assignments. If a [LOB](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlob_glosry.htm "Glossary Entry") of a reference variable for [LOB handles](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlob_handle_glosry.htm "Glossary Entry") is assigned, a [LOB handle is created](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_into_lob_handles.htm). If an [offset/length is specified](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoffset_length.htm) to access a substring of wa, +off must not be omitted.

If CORRESPONDING FIELDS is used, the columns of the results set defined in the [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm) correspond to the components of the target area. Among other things, there must be at least one match or there must be an identically named component in the target area for each explicitly specified column.

Notes

-   The second point above, "All Other Combinations" also includes [data\_source~\*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm) when specified in the [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm). In this case, wa must be a structure. This is particularly valid when only one data source [data\_source~\*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) is specified. If a single data\_source~\* is specified, therefore, other rules apply than in the case where \* is specified, even if the same results sets are defined both times.
    
-   The addition CORRESPONDING FIELDS ignores names which were only defined using the addition AS name of the statement [INCLUDE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinclude_type.htm) or when integrating the structures in ABAP Dictionary. Any components renamed using the addition RENAMING WITH SUFFIX of the statement INCLUDE (or renamed similarly in ABAP Dictionary) are, however, not ignored.
    
-   If the addition CORRESPONDING FIELDS is used, fields with matching names (if known statically) are assigned when the program is generated or are otherwise assigned once when the SELECT statement is executed.
    
-   If individual columns are being read and the structure of the results set is known statically, it is recommended that a list of data objects or inline declarations are used instead of using the addition CORRESPONDING FIELDS.
    
-   If the addition INTO CORRESPONDING is used and all the required information exists statically, the fields are assigned when the program is generated. Otherwise the fields are assigned once when the SELECT statement is executed, which causes a slight increase in the required runtime.
    
-   The addition INTO CORRESPONDING modifies the actual [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm) that is passed to the database and hence also the SELECT statement. If one or more names match, all the columns for which there are no name matches are removed from the SELECT list implicitly. If there are no name matches, none of the columns are removed. If \* is specified for the [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm), it may be updated to a list of columns implicitly.
    
-   The variants with the addition INTO CORRESPONDING FIELDS run the risk of having target areas with more components than are actually filled. This should only be the case if the components that are not filled are then filled in the program. Otherwise appropriately sized work areas should be used to avoid a large amount of memory being filled by initial values (especially in internal tables).
    

Example

Reads all columns of a row of a results set into structured work areas. In the first SELECT statement, wa is a previously declared host variable. In the second SELECT statement, wa\_inl is a host variable declined inline. In the third SELECT statement, the work area is created as an anonymous data object using [NEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm). This object is pointed to used a data reference variable dref declared inline.

DATA wa TYPE scarr.
SELECT SINGLE \*
       FROM scarr
       WHERE carrid = 'LH'
       INTO @wa.
SELECT SINGLE \*
       FROM scarr
       WHERE carrid = 'LH'
       INTO @DATA(wa\_inl).
ASSERT wa\_inl = wa.
SELECT SINGLE \*
       FROM scarr
       WHERE carrid = 'LH'
       INTO NEW @DATA(dref).
ASSERT dref->\* = wa.
cl\_demo\_output=>display( dref->\* ).

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

Alternative 3

... INTO*|*APPENDING *\[*CORRESPONDING FIELDS OF*\]* TABLE itab

Addition:

[... PACKAGE SIZE n](#!ABAP_ONE_ADD@1@)

Effect

Specifies an internal table [itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm) as a target area of the INTO clause. This can be specified for all results sets. The data object [itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm) can be specified as an existing [host variable](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_host_variables.htm) or declared inline using [@DATA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm). An addition [NEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm) makes it possible to create an anonymous data object.

An internal table can only be specified after INTO TABLE or after APPENDING TABLE if the results set has multiple rows. The internal table can have any [table category](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_category_glosry.htm "Glossary Entry"). Its row type must meet the same [prerequisites](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_wa.htm) as a work area wa.

The results set with multiple row is inserted into the internal table itab row-by-row in accordance with the rules of [INSERT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab.htm); a sorting process is executed in the case of a [sorted table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensorted_table_glosry.htm "Glossary Entry").

-   If INTO is used, the internal table is initialized before the rows are inserted.
    
-   Previous rows remain intact if APPENDING is used. APPENDING cannot be used together with the addition [NEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm).
    

If there is a conflict with an existing unique table key, a non-handleable exception is raised like in the case of the statement [INSERT LINES OF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab_linespec.htm).

Before any assignment of a row of the results set, an initial row of the internal table itab is created and the row of the results set is assigned to this row. When assigning a row of the results set to a row of the internal table with or without CORRESPONDING FIELDS, the same rules apply as when assigning to an individual work area wa (see above) with the exception that when inserting into internal tables, [LOB handles](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlob_handle_glosry.htm "Glossary Entry") can be [created](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_into_lob_handles.htm) as [locators](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlocator_glosry.htm "Glossary Entry") but not as [reader streams](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreader_stream_glosry.htm "Glossary Entry").

If the addition PACKAGE SIZE is not specified, all rows of the results set are inserted in the internal table itab and the statements ENDSELECT or ENDWITH statement must not be specified after SELECT or WITH.

If the results set is empty, the internal table is initialized when INTO is used, and remains unchanged when APPENDING is used. If a handleable exception is raised when the internal table is filled, its content is undefined when the exception is handled.

Notes

-   When specifying an internal table with a unique [primary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") or [secondary table key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"), an exception is raised that cannot be handled if an attempt is made to create a duplicate entry.
    
-   If the internal table contains more columns than required when using the addition CORRESPONDING FIELDS, generally too much memory is being used by initial fields and a warning is displayed by the syntax check. In cases where the columns are needed, for example when they are filled with derived values by the program, a [pragma](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpragma.htm) can be used to suppress the warning.
    
-   The maximum number of [data streams](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_stream_glosry.htm "Glossary Entry") that can be assigned to an ABAP SQL statement is limited to 16, which means it does not make any sense to create reader streams when importing internal tables.
    
-   Instead of using APPENDING TABLE to form union sets on the AS ABAP, this can now be done directly in the database using [UNION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapunion.htm), and [SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) can be used to calculate column values.
    

Example

Reads all columns of all rows of a results set into structured internal tables. In the first SELECT statement, itab is a previously declared host variable. In the second SELECT statement, itab\_inl is a host variable declined inline. In the third SELECT statement, the internal table is created as an anonymous data object using [NEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm). This object is pointed to used a data reference variable dref declared inline.

DATA itab TYPE STANDARD TABLE OF scarr
          WITH EMPTY KEY.
SELECT \*
       FROM scarr
       ORDER BY carrid
       INTO TABLE @itab.
SELECT \*
       FROM scarr
       ORDER BY carrid
       INTO TABLE @DATA(itab\_inl).
ASSERT itab\_inl = itab.
SELECT \*
       FROM scarr
       ORDER BY carrid
       INTO TABLE NEW @DATA(dref).
ASSERT dref->\* = itab.
cl\_demo\_output=>display( dref->\* ).

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

The following example for APPENDING TABLE creates the same internal table as the example for [UNION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapunion.htm).

SELECT FROM scarr
       FIELDS carrname,
              CAST( '-' AS CHAR( 4  ) ) AS connid,
              CAST( '-' AS CHAR( 20 ) ) AS cityfrom,
              CAST( '-' AS CHAR( 20 ) ) AS cityto
       WHERE carrid = 'LH'
       INTO TABLE @DATA(result).
SELECT FROM spfli
       FIELDS '-' AS carrname,
             connid,
             cityfrom,
             cityto
          WHERE carrid = 'LH'
          APPENDING TABLE @result.
SORT result BY carrname DESCENDING connid cityfrom cityto.
cl\_demo\_output=>display( result ).

Addition

... PACKAGE SIZE n

Effect

If the addition PACKAGE SIZE is specified after INTO*|*APPENDING TABLE, the rows of the results set are inserted into the internal table itab in packages of n rows. In the case of the statements [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) and [WITH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith.htm), a SELECT loop is opened that itself must be closed using [ENDSELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendselect.htm) or [ENDWITH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendwith.htm). n expects a [host variable](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_host_variables.htm), a [host expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_host_expressions.htm), or a [literal](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql_host_literals.htm) of type i (that contains the number of rows). The content of n must match the data type i in accordance with the rules for a [lossless assignment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlossless_assignment_glosry.htm "Glossary Entry"). n must have the type b, s, i, or int8. This is checked in [strict mode](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql_strict_mode_751.htm) of the syntax check from Release 7.51. If the value of n is less than 0, an exception is raised that cannot be handled. If n is equal to 0, all rows of the results set are inserted in the internal table itab. If used in the statement [FETCH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfetch.htm), n rows are extracted from the current cursor position.

If INTO is used, the internal table is initialized before each insertion and, in the SELECT loop, it only contains the rows of the current package. If APPENDING is used, a further package is added to the existing rows of the internal table for each SELECT loop or for each extraction using FETCH.

After ENDSELECT or ENDWITH, the content of itab is not defined if INTO is used. That is, the table can either contain the rows of the last package or it can be initial. If APPENDING is used, the content of itab retains the state of the last loop pass.

Notes

-   The addition PACKAGE SIZE can be used after INTO to limit the amount of data read in one go. Otherwise a runtime error can occur when reading a data set that is too large into an internal table so that its [maximum size](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmemory_consumption_2.htm) is exceeded. PACKAGE SIZE cannot prevent this runtime error after APPENDING.
    
-   If the addition PACKAGE SIZE is specified with the addition [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_itab.htm), all selected rows are read into an internal system table initially and the packages are only created when they are passed from the system table to the actual target table. The addition FOR ALL ENTRIES thereby negates the effect of PACKAGE SIZE in preventing memory overflow.
    
-   The addition PACKAGE SIZE does not influence the size of the [packages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_oview.htm) (configured in the profile parameters) used to transport data between the database server and AS ABAP.
    

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

Continue
[SELECT - INTO target](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_into_target.htm)
[SELECT - indicators](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_indicators.htm)
[SELECT - extended\_result](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_extended_result.htm)
[SELECT - Assignment Rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_into_conversion.htm)
[SELECT - LOB Handles](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_into_lob_handles.htm)