# ABAP Keyword Documentation / ABAP − Reference / Obsolete Language Elements / Obsolete Declarations / Internal Tables

Included pages: 9


### abenitab_declare_obsolete.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) → 

Internal Tables

-   [TYPES - OCCURS](javascript:call_link\('abaptypes_occurs.htm'\))

-   [DATA - OCCURS](javascript:call_link\('abapdata_occurs.htm'\))

-   [TABLE LINE](javascript:call_link\('abaptable_line.htm'\))

-   [Internal Tables with Header Line](javascript:call_link\('abenitab_header_line.htm'\))

Continue
[TYPES - OCCURS](javascript:call_link\('abaptypes_occurs.htm'\))
[DATA - OCCURS](javascript:call_link\('abapdata_occurs.htm'\))
[TYPES, DATA ... - TABLE LINE](javascript:call_link\('abaptable_line.htm'\))
[Internal Tables with Header Line](javascript:call_link\('abenitab_header_line.htm'\))


### abaptypes_occurs.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab_declare_obsolete.htm'\)) → 

TYPES - OCCURS

[Quick Reference](javascript:call_link\('abaptypes_occurs_shortref.htm'\))

Obsolete Syntax

TYPES dtype *{* *{*TYPE *\[*REF TO*\]* type*}*
            *|* *{*LIKE *\[*REF TO*\]* dobj*}* *}* OCCURS n.

Effect

This statement is forbidden in classes. The statement has the same function as the following [TYPES](javascript:call_link\('abaptypes_itab.htm'\)) statement for defining [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") types, and is replaced by the following:

TYPES dtype *{* *{*TYPE STANDARD TABLE OF *\[*REF TO*\]* type*}*
            *|* *{*LIKE STANDARD TABLE OF *\[*REF TO*\]* dobj*}* *}*
            WITH NON-UNIQUE DEFAULT KEY
            INITIAL SIZE n.


### abapdata_occurs.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab_declare_obsolete.htm'\)) → 

DATA - OCCURS

[Quick Reference](javascript:call_link\('abapdata_occurs_shortref.htm'\))

Obsolete Syntax

DATA itab *{* *{*TYPE *\[*REF TO*\]* type*}*
          *|* *{*LIKE *\[*REF TO*\]* dobj*}* *}* OCCURS n
          [*\[*WITH HEADER LINE*\]*](javascript:call_link\('abapdata_header_line.htm'\)).

Effect

This statement is forbidden in classes. It has exactly the same function as the following [DATA](javascript:call_link\('abapdata_itab.htm'\)) statement for the declaration of a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") and is replaced by this:

DATA itab *{* *{*TYPE STANDARD TABLE OF *\[*REF TO*\]* type*}*
          *|* *{*LIKE STANDARD TABLE OF *\[*REF TO*\]* dobj*}* *}*
          WITH NON-UNIQUE DEFAULT KEY
          INITIAL SIZE n
          *\[*WITH HEADER LINE*\]*.

The use of the addition [WITH HEADER LINE](javascript:call_link\('abapdata_header_line.htm'\)) is obsolete


### abaptable_line.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab_declare_obsolete.htm'\)) → 

TYPES, DATA ... - TABLE LINE

Obsolete Syntax

[TYPES](javascript:call_link\('abaptypes_itab.htm'\)) ... [WITH](javascript:call_link\('abaptypes_keydef.htm'\)) ... [KEY](javascript:call_link\('abaptypes_primary_key.htm'\)) TABLE LINE.
[DATA](javascript:call_link\('abapdata_itab.htm'\))  ... [WITH](javascript:call_link\('abapdata_keydef.htm'\)) ... [KEY](javascript:call_link\('abapdata_primary_key.htm'\)) TABLE LINE.
...

Effect

The addition TABLE LINE can also be specified outside of classes in the declaration statements TYPES, DATA, and so on, instead of the pseudo component table\_line in the definition of the primary table key.

Note

ABAP Compiler should consider this addition as an error, retained only for reasons of downward compatibility. Always specify the pseudo component table\_line instead of TABLE LINE.

Bad Example

TYPES itab TYPE SORTED TABLE OF i WITH UNIQUE KEY TABLE LINE.

Good Example

TYPES itab TYPE SORTED TABLE OF i WITH UNIQUE KEY table\_line.


### abenitab_header_line.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab_declare_obsolete.htm'\)) → 

Internal Tables with Header Line

Outside classes, and if it is not a component of a structure or row in another internal table, it is still possible to create an internal table with a header line.

-   [Declaration of Header Lines](#@@ITOC@@ABENITAB_HEADER_LINE_1)

-   [Properties of Header Lines](#@@ITOC@@ABENITAB_HEADER_LINE_2)

-   [Use](#@@ITOC@@ABENITAB_HEADER_LINE_3)

Declaration of Header Lines

Header lines of internal tables are created

-   by using the addition [WITH HEADER LINE](javascript:call_link\('abapdata_header_line.htm'\)) of the statement DATA to declare internal tables,

-   when using the obsolete statement string [DATA - BEGIN OF OCCURS](javascript:call_link\('abapdata_begin_of_occurs.htm'\)) to declare structured standard tables,

-   when using the obsolete statement [RANGES](javascript:call_link\('abapranges.htm'\)) to declare [ranges tables](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry"),

-   when declaring [selection tables](javascript:call_link\('abenselection_table_glosry.htm'\) "Glossary Entry") with the statement [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\)),

-   when using [table parameters](javascript:call_link\('abentable_parameter_glosry.htm'\) "Glossary Entry") for [function modules](javascript:call_link\('abaptables_parameters_obsolete.htm'\)) and [subroutines](javascript:call_link\('abapform_tables.htm'\)).

Note

The statement [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)) cannot be used to create internal tables with header lines.

Properties of Header Lines

A header line is a work area whose

-   data type is the same as the row type of the internal table

-   whose name is the same as the name of the internal table.

If a header line exists, therefore, an ABAP program includes two data objects with the same name (the actual internal table and the header line). The internal table and header line are accessed as follows:

-   Many processing statements for internal tables have [obsolete](javascript:call_link\('abenitab_short_forms.htm'\)) short forms in which the header lines is used as an implicit work area if no explicit work area is specified.

-   In all other cases, the statement and [operand position](javascript:call_link\('abenoperands_data_objects.htm'\)) decide whether the [table body](javascript:call_link\('abentable_body_glosry.htm'\) "Glossary Entry") or the header line is used when the table name is specified. The header line is the usual choice. The name (and just the name) of an internal table with header line is interpreted as the table body only in the following cases:

-   Operand positions in the [processing statements for internal tables](javascript:call_link\('abentable_processing_statements.htm'\)) in which the internal table to be processed is specified.

-   Operand positions in expressions in which an internal table is expected, as after [FOR ... IN](javascript:call_link\('abenfor_itab.htm'\)) in a [table iteration](javascript:call_link\('abentable_iteration_glosry.htm'\) "Glossary Entry").

-   Operand positions in other statements whose operand type is an internal table, such as after [SPLIT ... INTO TABLE](javascript:call_link\('abapsplit.htm'\)), [CONCATENATE LINES OF](javascript:call_link\('abapconcatenate.htm'\)), [SELECT ... INTO TABLE](javascript:call_link\('abapinto_clause.htm'\)), and [READ REPORT ... INTO](javascript:call_link\('abapread_report.htm'\)).

-   Internal table specified in a [table expression](javascript:call_link\('abentable_expressions.htm'\))

-   When saving and reading [data clusters](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") using [EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\)) and [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)).

-   In the statement [FREE](javascript:call_link\('abapfree_dataobject.htm'\)).

-   In the obsolete statement [SEARCH](javascript:call_link\('abapsearch_itab.htm'\)).

-   When a token is specified dynamically in [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") (except when database tables are specified).

To force access to the table body in any operand position when a header line exists, square brackets can be specified directly after the name of an internal table in all operand positions (for example, itab\[\]). This does not apply, however, when specifying the internal table in a [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry").

Notes

-   When a LIKE reference is made to an internal table with header line, either the header line itself can be referenced or \[\] can be specified to reference the table body. It is not possible, however, to reference the internal table including the header line.

-   A field symbol, a formal parameter (with the exception of [table parameters](javascript:call_link\('abentable_parameter_glosry.htm'\) "Glossary Entry")), or a data reference can only address either the table body or the header line. This means that a field symbol, a formal parameter (with the exception of [table parameters](javascript:call_link\('abentable_parameter_glosry.htm'\) "Glossary Entry")), or a data reference can never be ambiguous.

-   Both the table body and the header line are passed when a table with header line is passed to [table parameters](javascript:call_link\('abentable_parameter_glosry.htm'\) "Glossary Entry").

-   \[\] can be specified for internal tables without header line, but does not need to be. This is because the name (without \[\]) of an internal table without header line is interpreted as the table body in all operand positions regardless.

-   In many operand positions that expect internal tables, the syntax check forces \[\] to be specified after the name of an internal table with header line.

-   [RTTS](javascript:call_link\('abenrun_time_type_services_glosry.htm'\) "Glossary Entry") does not support internal tables with header lines. A type description object can describe either only the header line or the table body.

-   In very old programs, it may be the case that the obsolete pseudo component [\*sys\*](javascript:call_link\('abensys_table_body.htm'\)) is used to address the header line (instead of \[\]).

Use

The use of header lines is highly error-prone, due to the repeated use of one name for two data objects. If at all possible, avoid creating and using header lines (even outside of classes).

-   The addition [WITH HEADER LINE](javascript:call_link\('abapdata_header_line.htm'\)) and the statement string [DATA - BEGIN OF OCCURS](javascript:call_link\('abapdata_begin_of_occurs.htm'\)) should no longer be used and ranges tables should no longer be declared using [RANGES](javascript:call_link\('abapranges.htm'\)).

-   Avoid using table parameters if at all possible.

-   In cases where a header line absolutely has to be created (such as in selection tables or in procedures that still require table parameters (generally only [remote-enabled function modules](javascript:call_link\('abenremote_enabled_fm_glosry.htm'\) "Glossary Entry"))), never work with the header line and use the additional explicitly work areas declared explicitly instead.

Notes

-   A work area for replacing a header line can be declared very simply by using the addition LINE OF of the statements TYPES, DATA, and so on.

-   The use of an additional work area should not be confused with the explicit completion of the implicit [short forms](javascript:call_link\('abenitab_short_forms.htm'\)), such as LOOP AT itab INTO itab. The latter case is one of the undesired ways to use a header line.

-   Tables with header lines do not offer any performance advantages.

Example

The following example shows a typical instance of handling internal tables with header lines: An internal table with header line (here the table parameter of a function module) is initialized using [CLEAR](javascript:call_link\('abapclear.htm'\)), but the \[\] is not appended to the name. In this case, only the header line is deleted, which is not usually noticed until runtime.

FUNCTION work\_with\_tables.
\*"---------------------------------
\*"\*"Local Interface
\*"  TABLES
\*"      table STRUCTURE  structure
\*"----------------------------------
  CLEAR table.
  ...
ENDFUNCTION.

Continue
[DATA - HEADER LINE](javascript:call_link\('abapdata_header_line.htm'\))
[DATA - BEGIN OF OCCURS](javascript:call_link\('abapdata_begin_of_occurs.htm'\))
[RANGES](javascript:call_link\('abapranges.htm'\))


### abapdata_header_line.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab_declare_obsolete.htm'\)) →  [Internal Tables with Header Line](javascript:call_link\('abenitab_header_line.htm'\)) → 

DATA - HEADER LINE

[Quick Reference](javascript:call_link\('abapdata.htm'\))

Obsolete Syntax

... WITH HEADER LINE ...

Effect

This addition of the statements [DATA TABLE OF](javascript:call_link\('abapdata_itab.htm'\)), [DATA RANGE OF](javascript:call_link\('abapdata_ranges.htm'\)), and the obsolete statement [DATA OCCURS](javascript:call_link\('abapdata_occurs.htm'\)) (which is not allowed in classes) declares a further data object alongside the internal table, known as the [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"). This object has exactly the same name as the internal table and has the row type of the internal table as its data type. A header line cannot be declared for internal tables with a table-like row type. This is possible for structured row types with table-like components, however.

If the name of an internal table itab is specified in an operand position of an ABAP statement, the statement determines whether the [table body](javascript:call_link\('abentable_body_glosry.htm'\) "Glossary Entry") or header line is used. As a rule, all table-specific statements such as [SORT](javascript:call_link\('abapsort_itab.htm'\)) or [LOOP](javascript:call_link\('abaploop_at_itab.htm'\)) use the internal table, whereas all other statements use the header line. Exceptions to this rule are listed under [Internal Tables with Header Line](javascript:call_link\('abenitab_header_line.htm'\)).

To address the table body instead of the header line in statements, \[\] can be appended to the table name:

... itab\[\] ...

For internal tables without a header line, the table body is always used. An internal table with a header line cannot be a component of a structure or a row of another internal table.

Notes

-   These statements for processing individual table rows have [obsolete short forms](javascript:call_link\('abenitab_short_forms.htm'\)) that use the header line as a work area implicitly. These short forms are allowed only outside of ABAP Objects.
    
-   If the name primary\_key is explicitly specified or a [secondary key](javascript:call_link\('abapdata_secondary_key.htm'\)) is defined when the [primary key](javascript:call_link\('abapdata_primary_key.htm'\)) is being defined, the addition WITH HEADER LINE can no longer be specified, either inside or outside of classes.


### abapdata_begin_of_occurs.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab_declare_obsolete.htm'\)) →  [Internal Tables with Header Line](javascript:call_link\('abenitab_header_line.htm'\)) → 

DATA - BEGIN OF OCCURS

[Quick Reference](javascript:call_link\('abapdata_begin_of_shortref.htm'\))

Obsolete Syntax

DATA BEGIN OF itab OCCURS n.
  ...
DATA END OF itab *\[*VALID BETWEEN intlim1 AND intlim2*\]*.

Addition:

[... VALID BETWEEN intlim1 AND intlim2](#!ABAP_ONE_ADD@1@)

Effect

This variant of the statement list introduced using [DATA BEGIN OF](javascript:call_link\('abapdata_struc.htm'\)) (which is forbidden in classes) declares an internal table itab as a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") with a structured row type and a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"). The declarations between the statements DATA BEGIN OF and DATA END OF define the components of the [row type](javascript:call_link\('abenrow_type_glosry.htm'\) "Glossary Entry") of itab, just as in the regular variant of [DATA BEGIN OF](javascript:call_link\('abapdata_struc.htm'\)). The data object n, which has to be specified either directly as a numeric literal or as a numeric constant, determines the initial memory requirement.

Notes

-   The statement list above is the original form of the declarations of internal tables. Internal tables declared in this way have always been tables in the real sense, meaning that the rows are mainly constructed from individual columns.
    
-   The following statement list replaces the above statements (with the exception of the addition VALID BETWEEN); here the role of the header line is taken by the work area wa:
    

DATA BEGIN OF wa.
       ...
DATA END OF wa.
DATA itab LIKE TABLE OF wa.

The last statement is an abbreviated form of the complete [declaration](javascript:call_link\('abapdata_itab.htm'\)) of itab, where the table type and key are supplemented with standard values.

-   The creation of the [header line](javascript:call_link\('abenitab_header_line.htm'\)) cannot be disabled in this variant. Since header lines in internal tables should never be used, however, this way of declaring internal tables should never be encountered again.
    

Addition

... VALID BETWEEN intlim1 AND intlim2

Effect

The VALID BETWEEN addition of the DATA END OF statement is only important if the internal table is to be processed using the obsolete form of the statement [PROVIDE](javascript:call_link\('abapprovide_obsolete.htm'\)). intlim1 and intlim2 expect columns from the internal table of the data type d, i, n, or t. These columns are used implicitly as interval limits in their obsolete form of the statement PROVIDE.


### abapranges.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab_declare_obsolete.htm'\)) →  [Internal Tables with Header Line](javascript:call_link\('abenitab_header_line.htm'\)) → 

RANGES

[Quick Reference](javascript:call_link\('abapranges_shortref.htm'\))

Obsolete Syntax

RANGES rtab FOR dobj *\[*OCCURS n*\]*.

Effect

Obsolete declaration of a [ranges table](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry"). This statement (not allowed in classes) is a short form of the following statement sequence which is also not allowed in classes:

[DATA: BEGIN OF rtab OCCURS](javascript:call_link\('abapdata_begin_of_occurs.htm'\)) *{*10*|*n*}*,
        sign   TYPE c LENGTH 1,
        option TYPE c LENGTH 2,
        low    LIKE dobj,
        high   LIKE dobj,
      END OF rtab.

Declares an internal table rtab with the structure of a [ranges table](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry") and a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"). Without the addition [OCCURS](javascript:call_link\('abapdata_occurs.htm'\)), the initial memory requirement of the ranges table is set to ten rows. The addition OCCURS can be used to specify a numeric literal or a numeric constant n to determine a different initial memory requirement.

Notes

-   The statement RANGES is replaced by the addition TYPE*|*LIKE RANGE OF of the statements [TYPES](javascript:call_link\('abaptypes_ranges.htm'\)) and [DATA](javascript:call_link\('abapdata_ranges.htm'\)). If used, these declare ranges tables without header lines.
    
-   The sign and option columns of a ranges table declared using RANGES are not related to data types in ABAP Dictionary. For a ranges table defined in ABAP Dictionary, these columns are based on the data elements DDSIGN and DDOPTION.


### abenitab_header_line.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab_declare_obsolete.htm'\)) → 

Internal Tables with Header Line

Outside classes, and if it is not a component of a structure or row in another internal table, it is still possible to create an internal table with a header line.

-   [Declaration of Header Lines](#@@ITOC@@ABENITAB_HEADER_LINE_1)

-   [Properties of Header Lines](#@@ITOC@@ABENITAB_HEADER_LINE_2)

-   [Use](#@@ITOC@@ABENITAB_HEADER_LINE_3)

Declaration of Header Lines

Header lines of internal tables are created

-   by using the addition [WITH HEADER LINE](javascript:call_link\('abapdata_header_line.htm'\)) of the statement DATA to declare internal tables,

-   when using the obsolete statement string [DATA - BEGIN OF OCCURS](javascript:call_link\('abapdata_begin_of_occurs.htm'\)) to declare structured standard tables,

-   when using the obsolete statement [RANGES](javascript:call_link\('abapranges.htm'\)) to declare [ranges tables](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry"),

-   when declaring [selection tables](javascript:call_link\('abenselection_table_glosry.htm'\) "Glossary Entry") with the statement [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\)),

-   when using [table parameters](javascript:call_link\('abentable_parameter_glosry.htm'\) "Glossary Entry") for [function modules](javascript:call_link\('abaptables_parameters_obsolete.htm'\)) and [subroutines](javascript:call_link\('abapform_tables.htm'\)).

Note

The statement [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)) cannot be used to create internal tables with header lines.

Properties of Header Lines

A header line is a work area whose

-   data type is the same as the row type of the internal table

-   whose name is the same as the name of the internal table.

If a header line exists, therefore, an ABAP program includes two data objects with the same name (the actual internal table and the header line). The internal table and header line are accessed as follows:

-   Many processing statements for internal tables have [obsolete](javascript:call_link\('abenitab_short_forms.htm'\)) short forms in which the header lines is used as an implicit work area if no explicit work area is specified.

-   In all other cases, the statement and [operand position](javascript:call_link\('abenoperands_data_objects.htm'\)) decide whether the [table body](javascript:call_link\('abentable_body_glosry.htm'\) "Glossary Entry") or the header line is used when the table name is specified. The header line is the usual choice. The name (and just the name) of an internal table with header line is interpreted as the table body only in the following cases:

-   Operand positions in the [processing statements for internal tables](javascript:call_link\('abentable_processing_statements.htm'\)) in which the internal table to be processed is specified.

-   Operand positions in expressions in which an internal table is expected, as after [FOR ... IN](javascript:call_link\('abenfor_itab.htm'\)) in a [table iteration](javascript:call_link\('abentable_iteration_glosry.htm'\) "Glossary Entry").

-   Operand positions in other statements whose operand type is an internal table, such as after [SPLIT ... INTO TABLE](javascript:call_link\('abapsplit.htm'\)), [CONCATENATE LINES OF](javascript:call_link\('abapconcatenate.htm'\)), [SELECT ... INTO TABLE](javascript:call_link\('abapinto_clause.htm'\)), and [READ REPORT ... INTO](javascript:call_link\('abapread_report.htm'\)).

-   Internal table specified in a [table expression](javascript:call_link\('abentable_expressions.htm'\))

-   When saving and reading [data clusters](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") using [EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\)) and [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)).

-   In the statement [FREE](javascript:call_link\('abapfree_dataobject.htm'\)).

-   In the obsolete statement [SEARCH](javascript:call_link\('abapsearch_itab.htm'\)).

-   When a token is specified dynamically in [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") (except when database tables are specified).

To force access to the table body in any operand position when a header line exists, square brackets can be specified directly after the name of an internal table in all operand positions (for example, itab\[\]). This does not apply, however, when specifying the internal table in a [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry").

Notes

-   When a LIKE reference is made to an internal table with header line, either the header line itself can be referenced or \[\] can be specified to reference the table body. It is not possible, however, to reference the internal table including the header line.

-   A field symbol, a formal parameter (with the exception of [table parameters](javascript:call_link\('abentable_parameter_glosry.htm'\) "Glossary Entry")), or a data reference can only address either the table body or the header line. This means that a field symbol, a formal parameter (with the exception of [table parameters](javascript:call_link\('abentable_parameter_glosry.htm'\) "Glossary Entry")), or a data reference can never be ambiguous.

-   Both the table body and the header line are passed when a table with header line is passed to [table parameters](javascript:call_link\('abentable_parameter_glosry.htm'\) "Glossary Entry").

-   \[\] can be specified for internal tables without header line, but does not need to be. This is because the name (without \[\]) of an internal table without header line is interpreted as the table body in all operand positions regardless.

-   In many operand positions that expect internal tables, the syntax check forces \[\] to be specified after the name of an internal table with header line.

-   [RTTS](javascript:call_link\('abenrun_time_type_services_glosry.htm'\) "Glossary Entry") does not support internal tables with header lines. A type description object can describe either only the header line or the table body.

-   In very old programs, it may be the case that the obsolete pseudo component [\*sys\*](javascript:call_link\('abensys_table_body.htm'\)) is used to address the header line (instead of \[\]).

Use

The use of header lines is highly error-prone, due to the repeated use of one name for two data objects. If at all possible, avoid creating and using header lines (even outside of classes).

-   The addition [WITH HEADER LINE](javascript:call_link\('abapdata_header_line.htm'\)) and the statement string [DATA - BEGIN OF OCCURS](javascript:call_link\('abapdata_begin_of_occurs.htm'\)) should no longer be used and ranges tables should no longer be declared using [RANGES](javascript:call_link\('abapranges.htm'\)).

-   Avoid using table parameters if at all possible.

-   In cases where a header line absolutely has to be created (such as in selection tables or in procedures that still require table parameters (generally only [remote-enabled function modules](javascript:call_link\('abenremote_enabled_fm_glosry.htm'\) "Glossary Entry"))), never work with the header line and use the additional explicitly work areas declared explicitly instead.

Notes

-   A work area for replacing a header line can be declared very simply by using the addition LINE OF of the statements TYPES, DATA, and so on.

-   The use of an additional work area should not be confused with the explicit completion of the implicit [short forms](javascript:call_link\('abenitab_short_forms.htm'\)), such as LOOP AT itab INTO itab. The latter case is one of the undesired ways to use a header line.

-   Tables with header lines do not offer any performance advantages.

Example

The following example shows a typical instance of handling internal tables with header lines: An internal table with header line (here the table parameter of a function module) is initialized using [CLEAR](javascript:call_link\('abapclear.htm'\)), but the \[\] is not appended to the name. In this case, only the header line is deleted, which is not usually noticed until runtime.

FUNCTION work\_with\_tables.
\*"---------------------------------
\*"\*"Local Interface
\*"  TABLES
\*"      table STRUCTURE  structure
\*"----------------------------------
  CLEAR table.
  ...
ENDFUNCTION.

Continue
[DATA - HEADER LINE](javascript:call_link\('abapdata_header_line.htm'\))
[DATA - BEGIN OF OCCURS](javascript:call_link\('abapdata_begin_of_occurs.htm'\))
[RANGES](javascript:call_link\('abapranges.htm'\))
