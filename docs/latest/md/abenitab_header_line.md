  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab_declare_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Internal%20Tables%20with%20a%20Header%20Line%2C%20ABENITAB_HEADER_LINE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Internal Tables with a Header Line

Outside classes, and if it is not a component of a structure or line of another internal table, it is still possible to create an internal table with a header line.

-   [Declaration of Header Lines](#@@ITOC@@ABENITAB_HEADER_LINE_1)
-   [Properties of Header Lines](#@@ITOC@@ABENITAB_HEADER_LINE_2)
-   [Use](#@@ITOC@@ABENITAB_HEADER_LINE_3)

Declaration of Header Lines   

Header lines of internal tables are created

-   by using the addition [WITH HEADER LINE](javascript:call_link\('abapdata_header_line.htm'\)) of the statement DATA when declaring internal tables,
-   when using the obsolete statement string [DATA - BEGIN OF OCCURS](javascript:call_link\('abapdata_begin_of_occurs.htm'\)) to declare structured standard tables,
-   when using the obsolete statement [RANGES](javascript:call_link\('abapranges.htm'\)) to declare [ranges tables](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry"),
-   when declaring [selection tables](javascript:call_link\('abenselection_table_glosry.htm'\) "Glossary Entry") with the statement [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\)),
-   when using [table parameters](javascript:call_link\('abentable_parameter_glosry.htm'\) "Glossary Entry") for [function modules](javascript:call_link\('abaptables_parameters_obsolete.htm'\)) and [subroutines](javascript:call_link\('abapform_tables.htm'\)).

Hint

The statement [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)) cannot be used to create internal tables with a header line.

Properties of Header Lines   

A header line is a work area whose

-   data type is the same as the line type of the internal table
-   name is the same as the name of the internal table.

If a header line exists, therefore, an ABAP program has two identically named data objects, namely the actual internal table and the header line. The internal table and header line are accessed as follows:

-   Many processing statements for internal tables have [obsolete](javascript:call_link\('abenitab_short_forms.htm'\)) short forms in which the header lines is used as an implicit work area if no explicit work area is specified.
-   In all other cases, the statement and [operand position](javascript:call_link\('abenoperands_data_objects.htm'\)) decide whether the [table body](javascript:call_link\('abentable_body_glosry.htm'\) "Glossary Entry") or the header line is used when the table name is specified. The header line is the usual choice. The simple name of an internal table with header line is interpreted as the table body only in the following cases:
    -   Operand positions in the [processing statements for internal tables](javascript:call_link\('abentable_processing_statements.htm'\)) in which the internal table to be processed is specified.
    -   Operand positions in expressions in which an internal table is expected, such as after [FOR ... IN](javascript:call_link\('abenfor_itab.htm'\)) in a [table iteration](javascript:call_link\('abentable_iteration_glosry.htm'\) "Glossary Entry").
    -   Operand positions in other statements whose operand type is an internal table, such as after [SPLIT ... INTO TABLE](javascript:call_link\('abapsplit.htm'\)), [CONCATENATE LINES OF](javascript:call_link\('abapconcatenate.htm'\)), [SELECT ... INTO TABLE](javascript:call_link\('abapinto_clause.htm'\)), and [READ REPORT ... INTO](javascript:call_link\('abapread_report.htm'\)).
    -   Internal table specified in a [table expression](javascript:call_link\('abentable_expressions.htm'\))
    -   When saving and reading [data clusters](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") using [EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\)) and [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)).
    -   In the statement [FREE](javascript:call_link\('abapfree_dataobject.htm'\)).
    -   In the obsolete statement [SEARCH](javascript:call_link\('abapsearch_itab.htm'\)).
    -   When a token is specified dynamically in [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") (except when database tables are specified).

To force access to the table body in any operand position when a header line exists, square brackets can be specified directly after the name of an internal table in all operand positions (for example, itab\[\]). This does not apply, however, when specifying the internal table in a [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry").

Hints

-   When a LIKE reference is made to an internal table with header line, either the header line itself can be referenced or \[\] can be specified to reference the table body. It is not possible, however, to reference the internal table including the header line.
-   A field symbol, a formal parameter (except [table parameters](javascript:call_link\('abentable_parameter_glosry.htm'\) "Glossary Entry")), or a data reference can only address either the table body or the header line. This means that a field symbol, a formal parameter (except [table parameters](javascript:call_link\('abentable_parameter_glosry.htm'\) "Glossary Entry")), or a data reference is therefore never ambiguous.
-   Both the table body and the header line are passed when a table with header line is passed to [table parameters](javascript:call_link\('abentable_parameter_glosry.htm'\) "Glossary Entry").
-   \[\] can be specified for internal tables without a header line, but this is not necessary, since the simple name (without \[\]) of an internal table without a header line is interpreted as the table body in all operand positions regardless.
-   In many operand positions that expect internal tables, the syntax check forces \[\] to be specified after the name of an internal table with a header line.
-   [RTTS](javascript:call_link\('abenrun_time_type_services_glosry.htm'\) "Glossary Entry") does not support internal tables with header lines. A type description object can describe either only the header line or the table body.
-   In very old programs, the use of the obsolete pseudo component [\*sys\*](javascript:call_link\('abensys_table_body.htm'\)) is used to address the header line can also be found instead of \[\].

Use   

The use of header lines is highly error-prone, due to the repeated use of a single name for two data objects. The creation and use of header lines must be avoided as much as possible, even outside of classes.

-   The addition [WITH HEADER LINE](javascript:call_link\('abapdata_header_line.htm'\)) and the statement string [DATA - BEGIN OF OCCURS](javascript:call_link\('abapdata_begin_of_occurs.htm'\)) should no longer be used and ranges tables should no longer be declared using [RANGES](javascript:call_link\('abapranges.htm'\)).
-   The use of table parameters should be avoided as much as possible.
-   In cases where the creation of a header line is unavoidable, such as in selection tables or in procedures that still require table parameters (generally only [remote-enabled function modules](javascript:call_link\('abenremote_enabled_fm_glosry.htm'\) "Glossary Entry")), the header line should never be used, and always the additional explicitly work areas declared explicitly instead.

Hints

-   A work area for replacing a header line can be declared very easily by using the addition LINE OF of the statements TYPES, DATA, and so on.
-   The use of an additional work area should not be confused with the explicit completion of the implicit [short forms](javascript:call_link\('abenitab_short_forms.htm'\)), such as LOOP AT itab INTO itab. The latter case is also one of the undesired uses of a header line.
-   Tables with header lines do not offer any performance advantages.

Example

The following example shows a typical pitfall when handling internal tables with header lines: An internal table with a header line, in this case, the table parameter of a function module, is initialized using [CLEAR](javascript:call_link\('abapclear.htm'\)), but the \[\] is not appended to the name. In this case, only the header line is cleared, which is usually noticed only at runtime.

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
[DATA, HEADER LINE](javascript:call_link\('abapdata_header_line.htm'\))
[DATA, BEGIN OF OCCURS](javascript:call_link\('abapdata_begin_of_occurs.htm'\))
[RANGES](javascript:call_link\('abapranges.htm'\))