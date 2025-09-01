---
title: "SELECT, INTO target"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_shortref.htm) Syntax ...      @dobj              @DATA(dobj)    NEW @dref          NEW @DATA(dref)  ... Alternatives: 1. ... @dobj(#!ABAP_ALTERNATIVE_1@1@) 2. ... @DATA(dobj)
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_into_target.htm"
abapFile: "abapselect_into_target.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "abapselect", "into", "target"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_clauses.htm) →  [SELECT, INTO, APPENDING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm) → 

SELECT, INTO target

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_shortref.htm)

Syntax

... *{*     @dobj       *}*
  *|* *{*     @DATA(dobj) *}*
  *|* *{* NEW @dref       *}*
  *|* *{* NEW @DATA(dref) *}* ...

Alternatives:

[1\. ... @dobj](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... @DATA(dobj)](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... NEW @dref](#!ABAP_ALTERNATIVE_3@3@)
[4\. ... NEW @DATA(dref)](#!ABAP_ALTERNATIVE_4@4@)

Effect

Specifies a target area of the [INTO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm) clause of an ABAP SQL query. The possible target areas of the [INTO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm) clause are as follows:

-   Elementary data objects elem1, elem2, ... in a comma-separated list.

-   Individual work areas, wa.

-   Internal tables itab after TABLE.

Each target area can be specified as follows:

-   If the addition NEW is not used, dobj specifies the data object directly to which the data from the result set is written. The target area is one of the following:

-   A previously declared [host variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhost_variable_glosry.htm "Glossary Entry") @dobj

-   A [host variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhost_variable_glosry.htm "Glossary Entry") dobj declared [inline](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninline_declaration_glosry.htm "Glossary Entry") using @DATA

The addition NEW is used to create an [anonymous data object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenanonymous_data_object_glosry.htm "Glossary Entry") to which data from the result set is written and to which a [data reference variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_reference_variable_glosry.htm "Glossary Entry") dref points. The data reference variable is one of the following:

-   A previously declared [host variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhost_variable_glosry.htm "Glossary Entry") @dref

-   A [host variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhost_variable_glosry.htm "Glossary Entry") dref declared [inline](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninline_declaration_glosry.htm "Glossary Entry") using @DATA

All alternatives can be combined in a comma-separated list for elementary data objects as target areas. One of these alternatives must be selected when a single work area or an internal table is specified.

Hint

In the case of the variant NEW @DATA(dref), the [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm), the [FROM clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm), and any [indicators](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_indicators.htm) can be specified dynamically. This is the only way of combining a dynamically defined result set with inline declarations. The same applies to inline declarations after [FETCH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfetch.htm).

Alternative 1

... @dobj

Effect

Specifies a previously declared [host variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_host_variables.htm) @dobj as a target area of the [INTO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm) clause. The data in the result set is written directly to the host variable dobj. Depending on the operand position, the host variable can be one of the following:

-   In the comma-separated list elem1, elem2, ..., an [elementary data object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenelementary_data_object_glosry.htm "Glossary Entry") that matches the type of the associated column of the result set or whose data type can be converted to from the type of the associated column of the result set.

-   As a single work area wa, a data object that meets the [prerequisites](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_wa.htm).

-   As an internal table, any table category whose row structure meets the [prerequisites](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_wa.htm).

Writes to the host variable are made as described in the [INTO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm) clause.

Example

Uses different existing host variables as target areas of SELECT statements.

DATA:
  carrid   TYPE scarr-carrid,
  carrname TYPE scarr-carrname,
  url      TYPE scarr-url,
  carrier  TYPE scarr,
  carriers TYPE SORTED TABLE OF scarr WITH UNIQUE KEY carrid.
SELECT SINGLE carrid, carrname, url
       FROM scarr
       WHERE carrid ='UA'
       INTO (@carrid, @carrname, @url).
SELECT SINGLE \*
       FROM scarr
       WHERE carrid ='LH'
       INTO @carrier.
SELECT \*
       FROM scarr
       INTO TABLE @carriers.

Alternative 2

... @DATA(dobj)

Effect

Specifies a [host variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_host_variables.htm) @dobj declared inline as a target area of the [INTO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm) clause. The data in the result set is written directly to the host variable dobj. The inline declaration is made using the [declaration operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclaration_operator_glosry.htm "Glossary Entry") [DATA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_inline.htm), which must be prefixed with the escape character @ here. Depending on the operand position, the host variable is declared as follows:

-   An elementary variable is declared in the comma-separated list elem1, elem2, ... The data type of the variables is constructed as follows from the associated column of the result set:

-   The ABAP type [assigned](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) the dictionary type of a [column](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_columns.htm) of a data source is used for this column.

-   The ABAP type [assigned](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) the result type of an [SQL expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsql_expr.htm) is used for this expression.

-   The ABAP type of a [host variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_host_variables.htm) is used directly for this variable specified as a single SQL expression.

-   A flat data object wa is declared as a single work area in INTO @DATA(wa). A [standard table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_table_glosry.htm "Glossary Entry") itab with an [empty table key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_empty_key.htm) is declared as an internal table in INTO TABLE @DATA(itab). The data type of wa or the line type of the internal table are constructed as follows in accordance with the structure of the result set defined after SELECT and the number of data sources specified after [FROM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm):

-   If the result set in the [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm) is defined using a single specified column [col\_spec](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_clause_col_spec.htm) for which no name can be identified, the data type of wa or the line type of itab is its elementary type.

-   If the result set in the [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm) is defined using a single specified column [col\_spec](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_clause_col_spec.htm) for which no name can be identified, the data type of wa or the line type of itab is a structure with a component, with its elementary type.

-   If the result set in the [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm) is defined using a single data\_source~\* or a list of multiple specified columns [col\_spec](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_clause_col_spec.htm), the data type of wa or the line type of itab is a structure with elementary components. The data types of the components are the elementary types of the columns in the result set in the order defined there.

-   If data\_source~\* is specified in the [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm) together with other elements, the data type of wa or the line type of itab is a nested structure. For each data source [data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm) specified in this way, a substructure is generated with the name or alias name of the table or view. The data types of the components of the substructures are the elementary types of the data source in the order defined there. If the data source is a [common table expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") declared using [WITH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwith.htm), the first character + of its name is ignored for the name of the substructure.

-   If the result set in the [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm) is defined using \*, the data type depends on the number of [data sources](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm) specified after [FROM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm):
    In reads from a single [data source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm) data\_source, the data type of wa or the line type of itab is the same as in a definition of the result set using a single data\_source~\* (see above), that is, a structure with elementary components.
    In reads from multiple [data sources](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm) data\_source1, data\_source2, ... using a [join](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_join.htm), the data type of wa or the row type of itab is the same as in a definition of the result set using data\_source1~\*, data\_source2~\*, .... (see above), that is, a structure with a substructure for each data source.

-   The names of the elementary components of a structure match the names of the associated columns from the [result set](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm). Any alias names defined there are respected.

-   The elementary data type of an elementary data object or of an elementary component of a structure is constructed (like an elementary data object in a comma-separated list) from the type of the associated column of the result set (see above)

-   If the addition [INDICATORS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_indicators.htm) is used, a substructure called null\_ind is added at the end of the structure or row structure declared inline. For each column in the result set, this substructure contains a component of type x and length 1 with the same name as the column and in the same sequence. If preceding components of the structure declared inline are substructures, the substructure null\_ind is also structured accordingly.

The prerequisites for an inline declaration are as follows:

-   The result set can be specified dynamically only when combined with the addition NEW. If the addition NEW is not specified, the structure of the result set must be known statically. The [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm) and any [indicators](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_indicators.htm) must be specified statically.

-   After [FETCH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfetch.htm), an inline declaration can only be made together with the addition NEW.

-   The result set defined in the [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm) cannot have multiple columns with the same name. This can be bypassed using alias names.

-   In a [result set](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm) with multiple rows or if the addition [INDICATORS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_indicators.htm) is specified, every [SQL expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsql_expr.htm) and every [aggregate expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_aggregate.htm) must have an alias name.

-   Alias names of the [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm) must meet the [naming conventions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennaming_conventions.htm) for internal program names. More specifically, they cannot contain any minus signs, \-.

-   If the obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_client_obsolete.htm) is used to access a client-dependent [CDS entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry"), a name must be specified for the client column at the same time.

-   The addition [CORRESPONDING FIELDS OF](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm) cannot be used.

Hints

-   Specified columns for which no name can be identified are SQL expressions and aggregate expressions without alias name.

-   When an inline declaration @DATA(itab) is specified after APPENDING TABLE, this addition usually works like INTO TABLE and is therefore pointless in this combination.

-   When inline declarations are used, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_740_sp08.htm), which handles the statement more strictly than the regular syntax check.

Example

Reads individual columns of a result set into various target areas declared inline. carrname, carrid, and url are elementary data objects. wa is a structure with elementary components. itab is a standard table with an appropriate row type.

SELECT SINGLE
       FROM scarr
       FIELDS carrname,
              carrid,
              url
       WHERE carrid = 'LH'
       INTO (@DATA(carrname),@DATA(carrid),@DATA(url)).
SELECT SINGLE
       FROM scarr
       FIELDS carrname,
              carrid,
              url
       WHERE carrid = 'LH'
       INTO @DATA(wa).
SELECT FROM scarr
       FIELDS carrname,
              carrid,
              url
       INTO TABLE @DATA(itab).
ASSERT wa-carrname = carrname.
ASSERT wa-carrid   = carrid.
ASSERT wa-url      = url.
cl\_demo\_output=>new(
  )->write( wa
  )->write( itab )->display( ).

Example

In this example, all columns of a result set are read into an inner join in an internal table, the line type of which is declared as a nested structure with the same structure as the result set. The first component of the nested structure is called SCARR and includes all columns of this DDIC database table. The second component of the nested structure is called SPFLI and includes all columns of this DDIC database table. The content of the columns MANDT and CARRID in both tables is redundant. For the output, the internal table with a nested line type is converted to an output table without substructures.

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

[Inline Declarations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_inline_decl_abexa.htm)

Alternative 3

... NEW @dref

Effect

The addition NEW creates an [anonymous data object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenanonymous_data_object_glosry.htm "Glossary Entry") as the target area of the [INTO clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm). dref expects a previously declared [data reference variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_reference_variable_glosry.htm "Glossary Entry") that points to the data object after the object is created. The data of the result set is written to the new anonymous data object. The data reference variable dref can be typed in full or generically.

-   If the data reference variable dref is typed in full, its [static type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstatic_type_glosry.htm "Glossary Entry") must meet the same rules as apply to a directly specified data object @dobj:

-   In a comma-separated list (..., dref, ...), it must be an elementary data type to which the type of the associated column of the result set can be converted.

-   If a single work area wa, the type must meet the [prerequisites](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_wa.htm) for work areas.

-   If an internal table, it must be a table type with any table category whose row structure meets the [prerequisites](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_wa.htm).

The anonymous data object is created with the type of the data reference variable. The [static type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstatic_type_glosry.htm "Glossary Entry") of the data reference variable matches the [dynamic type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynamic_type_glosry.htm "Glossary Entry"). Writes to the anonymous data object are made as described in the [INTO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm) clause.

-   If the data reference variable dref is typed generically with [data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuilt_in_types_generic.htm), the data type of the anonymous data object or the [dynamic type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynamic_type_glosry.htm "Glossary Entry") of dref is constructed (as specified by the operand position) in exactly the same way as the data type of dobj in the inline declaration @DATA(dobj) described above. This means the following:

-   In a comma-separated list (..., dref, ...), an elementary data object is created whose type is determined by the type of the associated column of the result set.

-   If a single work area in INTO NEW @dref, a flat data object is created. A [standard table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_table_glosry.htm "Glossary Entry") with an [empty table key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_empty_key.htm) is declared as an internal table in INTO TABLE NEW @dref. The type of the new data object or the line type of the internal table is constructed using @DATA(dobj), as in an inline declaration.

The anonymous data object is created with this type. The [static type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstatic_type_glosry.htm "Glossary Entry") of the data reference variable is more general than the [dynamic type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynamic_type_glosry.htm "Glossary Entry"). Writes to the anonymous data object are made as described in the [INTO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm) clause. The columns of the result set defined in the SELECT list must have unique names.

Unlike in inline declarations with @DATA(dobj), the type of the anonymous data object can also be created at runtime. This means that the addition NEW can also be specified in the following cases:

-   If the structure of the result set cannot be know statically due to the use of dynamic tokens.

-   After [FETCH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfetch.htm).

If possible, the type check is made as part of the syntax check. If not, it is made at runtime. If an error is not detected until runtime, an exception of the class CX\_SY\_DYNAMIC\_OSQL\_SEMANTICS is raised.

The following restrictions apply:

-   The addition NEW can only be specified after [INTO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm) and cannot be specified after [APPENDING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm).

-   If multiple [FETCH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfetch.htm) statements access a database cursor opened using [OPEN CURSOR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapopen_cursor.htm), a data reference variable used after NEW can be typed generically only if the first of these FETCH statements has the addition NEW with a generically typed data reference variable in the appropriate operand position.

Hints

-   The addition NEW works in a similar way to creating an anonymous data object with the [instance operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninstance_operator_glosry.htm "Glossary Entry") [NEW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_new.htm) directly in front of the ABAP SQL statement and using the dereferenced reference variable as a target area. The addition NEW has the advantage that the data type of the anonymous data object is constructed in a suitable way and, more specifically, this construction works for dynamic tokens too.

-   If the addition NEW is used, the syntax check is made in [strict mode from Release 7.54](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_754.htm).

Example

Uses a generically typed and a completely typed data reference variable after NEW. The anonymous data objects created here both have the same type and the same content. The third SELECT statement writes to an anonymous data object created previously using the instance operator NEW and hence demonstrates approximately how the NEW addition works.

TYPES scarr\_tab TYPE STANDARD TABLE OF scarr WITH EMPTY KEY.
DATA dref\_data TYPE REF TO data.
SELECT FROM scarr
       FIELDS \*
       INTO TABLE NEW @dref\_data.
ASSIGN dref\_data->\* TO FIELD-SYMBOL(<fs>).
DATA dref\_scarr\_tab TYPE REF TO scarr\_tab.
SELECT FROM scarr
       FIELDS \*
       INTO TABLE NEW @dref\_scarr\_tab.
ASSERT <fs> = dref\_scarr\_tab->\*.
cl\_demo\_output=>display( <fs> ).
dref\_scarr\_tab = NEW #( ).
SELECT FROM scarr
       FIELDS \*
       INTO TABLE @dref\_scarr\_tab->\*.
ASSERT <fs> = dref\_scarr\_tab->\*.

Example

In this example, three anonymous data object of the type string are created. The columns of the result set are converted to string.

DATA:
  dref1 TYPE REF TO string,
  dref2 TYPE REF TO string,
  dref3 TYPE REF TO string.
SELECT SINGLE carrid, carrname, url
       FROM scarr
       WHERE carrid = 'UA'
       INTO (NEW @dref1, NEW @dref2, NEW @dref3).
cl\_demo\_output=>display( |{ dref1->\* }, { dref2->\* }, { dref3->\* }| ).

Example

This example compares an INTO with an inline declaration of the target area (see above) with an INTO clause with the addition NEW. In both cases, the same data type is constructed, namely an internal table with a nested row structure. If individual components are not accessed, the exact data type does not need to be known in the program.

SELECT \*
       FROM scarr
         INNER JOIN spfli ON scarr~carrid = spfli~carrid
       INTO TABLE @DATA(itab).
DATA dref TYPE REF TO data.
SELECT \*
     FROM scarr
       INNER JOIN spfli ON scarr~carrid = spfli~carrid
     INTO TABLE NEW @dref.
ASSIGN dref->\* TO FIELD-SYMBOL(<fs>).
ASSERT <fs> =  itab.

Example

As in the previous example, but after [FETCH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfetch.htm) and with a dynamically specified SELECT list and the FROM clause after [OPEN CURSOR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapopen_cursor.htm). In this case, it is not possible to make a direct inline declaration of the target area in the INTO clause. It is, however, possible to use the addition NEW.

DATA(cols) = \`\*\`.
DATA(from) = \`scarr INNER JOIN spfli ON scarr~carrid = spfli~carrid\`.
OPEN CURSOR @DATA(dbcur) FOR
SELECT (cols)
     FROM (from).
DATA dref TYPE REF TO data.
FETCH NEXT CURSOR @dbcur
      INTO NEW @dref.
CLOSE CURSOR @dbcur.
ASSIGN dref->\* TO FIELD-SYMBOL(<fs>).

Example

The program DEMO\_SELECT\_INTO\_NEW\_VARIANTS demonstrates how the NEW addition is used in different variants of the INTO clause.

Alternative 4

... NEW @DATA(dref)

Effect

The addition NEW in front of an inline declaration with the [declaration operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclaration_operator_glosry.htm "Glossary Entry") [@DATA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_inline.htm) works like the previous variant, however the data reference variable dref that points to the new anonymous data object is declared inline. The [static type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstatic_type_glosry.htm "Glossary Entry") of the data reference variable dref is defined as follows:

-   If the data type of the new anonymous data object is known statically, dref is also typed with this type.

-   If the data type of the new anonymous data object cannot be known until runtime, dref is typed with the generic type [data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuilt_in_types_generic.htm). This is the case when the structure of the result set is not known statically due to the use of dynamic tokens and in inline declarations after [FETCH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfetch.htm).

The columns of the result set defined in the SELECT list must have unique names. If multiple [FETCH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfetch.htm) statements access a database cursor opened using[OPEN CURSOR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapopen_cursor.htm), NEW and an inline declaration can be used only if this is also the case in the first of these FETCH statements in the appropriate operand position.

Hint

The addition NEW can also be used to make an inline declaration together with dynamic tokens and after [FETCH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfetch.htm). The data reference variable that points to the target area created as an anonymous data object is declared, however, and not the direct target area.

Example

Creates anonymous data objects as target areas together with inline declarations of the data reference variables. After SELECT with static tokens, the data reference variable dref\_scarr has the static type of an internal table with the line type SCARR from ABAP Dictionary. dref\_data, on the other hand is typed generically with data after FETCH. This demonstrated by using RTTI methods.

SELECT \*
       FROM scarr
       INTO TABLE NEW @DATA(dref\_scarr).
OPEN CURSOR @DATA(dbcur) FOR
  SELECT \*
         FROM scarr.
FETCH NEXT CURSOR @dbcur
     INTO TABLE NEW @DATA(dref\_data).
CLOSE CURSOR @dbcur.
ASSIGN dref\_data->\* TO FIELD-SYMBOL(<fs>).
ASSERT dref\_scarr->\* = <fs>.
cl\_demo\_output=>new(
  )->write( |dref\_scarr: {
            CAST cl\_abap\_tabledescr(
            CAST cl\_abap\_refdescr(
               cl\_abap\_typedescr=>describe\_by\_data( dref\_scarr )
               )->get\_referenced\_type(
               ) )->get\_table\_line\_type(
               )->absolute\_name } |
  )->write( |dref\_data:  {
            CAST cl\_abap\_refdescr(
              cl\_abap\_typedescr=>describe\_by\_data( dref\_data )
              )->get\_referenced\_type(
              )->absolute\_name }|
  )->display( dref\_scarr->\* ).

Executable Examples

-   [Create Structure as Target Area](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_into_new_wa_abexa.htm)

-   [Create Internal Table as Target Area](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_into_new_table_abexa.htm)
    

Continue
![Example](exa.gif "Example") [SELECT, Inline Declarations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_inline_decl_abexa.htm)
![Example](exa.gif "Example") [SELECT, Create Structure as Target Area](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_into_new_wa_abexa.htm)
![Example](exa.gif "Example") [SELECT, Create Internal Table as Target Area](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_into_new_table_abexa.htm)