---
title: "Internal Tables with a Header Line"
description: |
  Outside classes, and if it is not a component of a structure or line of another internal table, it is still possible to create an internal table with a header line. -   Declaration of Header Lines(#abenitab-header-line-1-------properties-of-header-lines---@ITOC@@ABENITAB_HEADER_LINE_2) -   Use(#
version: "7.57"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_header_line.htm"
abapFile: "abenitab_header_line.htm"
keywords: ["select", "loop", "do", "if", "case", "try", "class", "data", "types", "internal-table", "field-symbol", "abenitab", "header", "line"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobsolete_declarations.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_declare_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Internal Tables with a Header Line, ABENITAB_HEADER_LINE, 757%0D%0A%0D%0AError:%0D%0A
%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Internal Tables with a Header Line

Outside classes, and if it is not a component of a structure or line of another internal table, it is still possible to create an internal table with a header line.

-   [Declaration of Header Lines](#abenitab-header-line-1-------properties-of-header-lines---@ITOC@@ABENITAB_HEADER_LINE_2)
-   [Use](#@@ITOC@@ABENITAB_HEADER_LINE_3)

Declaration of Header Lines   

Header lines of internal tables are created

-   by using the addition [WITH HEADER LINE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_header_line.htm) of the statement DATA when declaring internal tables,
-   when using the obsolete statement string [DATA - BEGIN OF OCCURS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_begin_of_occurs.htm) to declare structured standard tables,
-   when using the obsolete statement [RANGES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapranges.htm) to declare [ranges tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenranges_table_glosry.htm "Glossary Entry"),
-   when declaring [selection tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_table_glosry.htm "Glossary Entry") with the statement [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect-options.htm),
-   when using [table parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_parameter_glosry.htm "Glossary Entry") for [function modules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptables_parameters_obsolete.htm) and [subroutines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapform_tables.htm).

Hint

The statement [CREATE DATA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcreate_data.htm) cannot be used to create internal tables with a header line.

Properties of Header Lines   

A header line is a work area whose

-   data type is the same as the line type of the internal table
-   name is the same as the name of the internal table.

If a header line exists, therefore, an ABAP program has two identically named data objects, namely the actual internal table and the header line. The internal table and header line are accessed as follows:

-   Many processing statements for internal tables have [obsolete](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_short_forms.htm) short forms in which the header lines is used as an implicit work area if no explicit work area is specified.
-   In all other cases, the statement and [operand position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperands_data_objects.htm) decide whether the [table body](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_body_glosry.htm "Glossary Entry") or the header line is used when the table name is specified. The header line is the usual choice. The simple name of an internal table with header line is interpreted as the table body only in the following cases:
    -   Operand positions in the [processing statements for internal tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_processing_statements.htm) in which the internal table to be processed is specified.
    -   Operand positions in expressions in which an internal table is expected, such as after [FOR ... IN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfor_itab.htm) in a [table iteration](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_iteration_glosry.htm "Glossary Entry").
    -   Operand positions in other statements whose operand type is an internal table, such as after [SPLIT ... INTO TABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsplit.htm), [CONCATENATE LINES OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconcatenate.htm), [SELECT ... INTO TABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinto_clause.htm), and [READ REPORT ... INTO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_report.htm).
    -   Internal table specified in a [table expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_expressions.htm)
    -   When saving and reading [data clusters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_cluster_glosry.htm "Glossary Entry") using [EXPORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_data_cluster.htm) and [IMPORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapimport_data_cluster.htm).
    -   In the statement [FREE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfree_dataobject.htm).
    -   In the obsolete statement [SEARCH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsearch_itab.htm).
    -   When a token is specified dynamically in [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm "Glossary Entry") (except when database tables are specified).

To force access to the table body in any operand position when a header line exists, square brackets can be specified directly after the name of an internal table in all operand positions (for example, itab\[\]). This does not apply, however, when specifying the internal table in a [table expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_expression_glosry.htm "Glossary Entry").

Hints

-   When a LIKE reference is made to an internal table with header line, either the header line itself can be referenced or \[\] can be specified to reference the table body. It is not possible, however, to reference the internal table including the header line.
-   A field symbol, a formal parameter (except [table parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_parameter_glosry.htm "Glossary Entry")), or a data reference can only address either the table body or the header line. This means that a field symbol, a formal parameter (except [table parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_parameter_glosry.htm "Glossary Entry")), or a data reference is therefore never ambiguous.
-   Both the table body and the header line are passed when a table with header line is passed to [table parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_parameter_glosry.htm "Glossary Entry").
-   \[\] can be specified for internal tables without a header line, but this is not necessary, since the simple name (without \[\]) of an internal table without a header line is interpreted as the table body in all operand positions regardless.
-   In many operand positions that expect internal tables, the syntax check forces \[\] to be specified after the name of an internal table with a header line.
-   [RTTS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrun_time_type_services_glosry.htm "Glossary Entry") does not support internal tables with header lines. A type description object can describe either only the header line or the table body.
-   In very old programs, the use of the obsolete pseudo component [\*sys\*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensys_table_body.htm) is used to address the header line can also be found instead of \[\].

Use   

The use of header lines is highly error-prone, due to the repeated use of a single name for two data objects. The creation and use of header lines must be avoided as much as possible, even outside of classes.

-   The addition [WITH HEADER LINE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_header_line.htm) and the statement string [DATA - BEGIN OF OCCURS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_begin_of_occurs.htm) should no longer be used and ranges tables should no longer be declared using [RANGES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapranges.htm).
-   The use of table parameters should be avoided as much as possible.
-   In cases where the creation of a header line is unavoidable, such as in selection tables or in procedures that still require table parameters (generally only [remote-enabled function modules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenremote_enabled_fm_glosry.htm "Glossary Entry")), the header line should never be used, and always the additional explicitly work areas declared explicitly instead.

Hints

-   A work area for replacing a header line can be declared very easily by using the addition LINE OF of the statements TYPES, DATA, and so on.
-   The use of an additional work area should not be confused with the explicit completion of the implicit [short forms](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_short_forms.htm), such as LOOP AT itab INTO itab. The latter case is also one of the undesired uses of a header line.
-   Tables with header lines do not offer any performance advantages.

Example

The following example shows a typical pitfall when handling internal tables with header lines: An internal table with a header line, in this case, the table parameter of a function module, is initialized using [CLEAR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclear.htm), but the \[\] is not appended to the name. In this case, only the header line is cleared, which is usually noticed only at runtime.

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
[DATA, HEADER LINE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_header_line.htm)
[DATA, BEGIN OF OCCURS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_begin_of_occurs.htm)
[RANGES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapranges.htm)