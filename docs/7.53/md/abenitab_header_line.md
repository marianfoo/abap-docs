---
title: "Internal Tables with Header Line"
description: |
  Outside classes, and if it is not a component of a structure or row in another internal table, it is still possible to create an internal table with a header line. -   Declaration of Header Lines(#abenitab-header-line-1--------properties-of-header-lines---@ITOC@@ABENITAB_HEADER_LINE_2) -   Use(#
version: "7.53"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab_header_line.htm"
abapFile: "abenitab_header_line.htm"
keywords: ["select", "delete", "loop", "do", "if", "case", "try", "class", "data", "types", "internal-table", "field-symbol", "abenitab", "header", "line"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobsolete_declarations.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab_declare_obsolete.htm) → 

Internal Tables with Header Line

Outside classes, and if it is not a component of a structure or row in another internal table, it is still possible to create an internal table with a header line.

-   [Declaration of Header Lines](#abenitab-header-line-1--------properties-of-header-lines---@ITOC@@ABENITAB_HEADER_LINE_2)

-   [Use](#@@ITOC@@ABENITAB_HEADER_LINE_3)

Declaration of Header Lines

Header lines of internal tables are created

-   by using the addition [WITH HEADER LINE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_header_line.htm) of the statement DATA to declare internal tables,

-   when using the obsolete statement string [DATA - BEGIN OF OCCURS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_begin_of_occurs.htm) to declare structured standard tables,

-   when using the obsolete statement [RANGES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapranges.htm) to declare [ranges tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenranges_table_glosry.htm "Glossary Entry"),

-   when declaring [selection tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_table_glosry.htm "Glossary Entry") with the statement [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect-options.htm),

-   when using [table parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_parameter_glosry.htm "Glossary Entry") for [function modules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptables_parameters_obsolete.htm) and [subroutines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_tables.htm).

Note

The statement [CREATE DATA](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_data.htm) cannot be used to create internal tables with header lines.

Properties of Header Lines

A header line is a work area whose

-   data type is the same as the row type of the internal table

-   whose name is the same as the name of the internal table.

If a header line exists, therefore, an ABAP program includes two data objects with the same name (the actual internal table and the header line). The internal table and header line are accessed as follows:

-   Many processing statements for internal tables have [obsolete](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab_short_forms.htm) short forms in which the header lines is used as an implicit work area if no explicit work area is specified.

-   In all other cases, the statement and [operand position](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoperands_data_objects.htm) decide whether the [table body](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_body_glosry.htm "Glossary Entry") or the header line is used when the table name is specified. The header line is the usual choice. The name (and just the name) of an internal table with header line is interpreted as the table body only in the following cases:

-   Operand positions in the [processing statements for internal tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_processing_statements.htm) in which the internal table to be processed is specified.

-   Operand positions in expressions in which an internal table is expected, as after [FOR ... IN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfor_itab.htm) in a [table iteration](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_iteration_glosry.htm "Glossary Entry").

-   Operand positions in other statements whose operand type is an internal table, such as after [SPLIT ... INTO TABLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsplit.htm), [CONCATENATE LINES OF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapconcatenate.htm), [SELECT ... INTO TABLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinto_clause.htm), and [READ REPORT ... INTO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_report.htm).

-   Internal table specified in a [table expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_expressions.htm)

-   When saving and reading [data clusters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_cluster_glosry.htm "Glossary Entry") using [EXPORT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapexport_data_cluster.htm) and [IMPORT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapimport_data_cluster.htm).

-   In the statement [FREE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfree_dataobject.htm).

-   In the obsolete statement [SEARCH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsearch_itab.htm).

-   When a token is specified dynamically in [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_glosry.htm "Glossary Entry") (except when database tables are specified).

To force access to the table body in any operand position when a header line exists, square brackets can be specified directly after the name of an internal table in all operand positions (for example, itab\[\]). This does not apply, however, when specifying the internal table in a [table expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_expression_glosry.htm "Glossary Entry").

Notes

-   When a LIKE reference is made to an internal table with header line, either the header line itself can be referenced or \[\] can be specified to reference the table body. It is not possible, however, to reference the internal table including the header line.

-   A field symbol, a formal parameter (with the exception of [table parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_parameter_glosry.htm "Glossary Entry")), or a data reference can only address either the table body or the header line. This means that a field symbol, a formal parameter (with the exception of [table parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_parameter_glosry.htm "Glossary Entry")), or a data reference can never be ambiguous.

-   Both the table body and the header line are passed when a table with header line is passed to [table parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_parameter_glosry.htm "Glossary Entry").

-   \[\] can be specified for internal tables without header line, but does not need to be. This is because the name (without \[\]) of an internal table without header line is interpreted as the table body in all operand positions regardless.

-   In many operand positions that expect internal tables, the syntax check forces \[\] to be specified after the name of an internal table with header line.

-   [RTTS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrun_time_type_services_glosry.htm "Glossary Entry") does not support internal tables with header lines. A type description object can describe either only the header line or the table body.

-   In very old programs, it may be the case that the obsolete pseudo component [\*sys\*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensys_table_body.htm) is used to address the header line (instead of \[\]).

Use

The use of header lines is highly error-prone, due to the repeated use of one name for two data objects. If at all possible, avoid creating and using header lines (even outside of classes).

-   The addition [WITH HEADER LINE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_header_line.htm) and the statement string [DATA - BEGIN OF OCCURS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_begin_of_occurs.htm) should no longer be used and ranges tables should no longer be declared using [RANGES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapranges.htm).

-   Avoid using table parameters if at all possible.

-   In cases where a header line absolutely has to be created (such as in selection tables or in procedures that still require table parameters (generally only [remote-enabled function modules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenremote_enabled_fm_glosry.htm "Glossary Entry"))), never work with the header line and use the additional explicitly work areas declared explicitly instead.

Notes

-   A work area for replacing a header line can be declared very simply by using the addition LINE OF of the statements TYPES, DATA, and so on.

-   The use of an additional work area should not be confused with the explicit completion of the implicit [short forms](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab_short_forms.htm), such as LOOP AT itab INTO itab. The latter case is one of the undesired ways to use a header line.

-   Tables with header lines do not offer any performance advantages.

Example

The following example shows a typical instance of handling internal tables with header lines: An internal table with header line (here the table parameter of a function module) is initialized using [CLEAR](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclear.htm), but the \[\] is not appended to the name. In this case, only the header line is deleted, which is not usually noticed until runtime.

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
[DATA - HEADER LINE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_header_line.htm)
[DATA - BEGIN OF OCCURS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_begin_of_occurs.htm)
[RANGES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapranges.htm)