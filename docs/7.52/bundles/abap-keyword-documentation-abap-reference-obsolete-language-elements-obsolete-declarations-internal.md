# ABAP - Keyword Documentation / ABAP - Reference / Obsolete Language Elements / Obsolete Declarations / Internal Tables

Included pages: 9


### abenitab_declare_obsolete.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobsolete_declarations.htm) → 

Internal Tables

-   [TYPES - OCCURS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_occurs.htm)

-   [DATA - OCCURS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_occurs.htm)

-   [TABLE LINE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptable_line.htm)

-   [Internal Tables with Header Line](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_header_line.htm)

Continue
[TYPES - OCCURS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_occurs.htm)
[DATA - OCCURS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_occurs.htm)
[TYPES, DATA ... - TABLE LINE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptable_line.htm)
[Internal Tables with Header Line](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_header_line.htm)


### abaptypes_occurs.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobsolete_declarations.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_declare_obsolete.htm) → 

TYPES - OCCURS

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_occurs_shortref.htm)

Obsolete Syntax

TYPES dtype *{* *{*TYPE *\[*REF TO*\]* type*}*
            *|* *{*LIKE *\[*REF TO*\]* dobj*}* *}* OCCURS n.

Effect

This statement is forbidden in classes. The statement has the same function as the following [TYPES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_itab.htm) statement for defining [standard table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_table_glosry.htm "Glossary Entry") types, and is replaced by the following:

TYPES dtype *{* *{*TYPE STANDARD TABLE OF *\[*REF TO*\]* type*}*
            *|* *{*LIKE STANDARD TABLE OF *\[*REF TO*\]* dobj*}* *}*
            WITH NON-UNIQUE DEFAULT KEY
            INITIAL SIZE n.


### abapdata_occurs.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobsolete_declarations.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_declare_obsolete.htm) → 

DATA - OCCURS

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_occurs_shortref.htm)

Obsolete Syntax

DATA itab *{* *{*TYPE *\[*REF TO*\]* type*}*
          *|* *{*LIKE *\[*REF TO*\]* dobj*}* *}* OCCURS n
          [*\[*WITH HEADER LINE*\]*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_header_line.htm).

Effect

This statement is forbidden in classes. It has exactly the same function as the following [DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_itab.htm) statement for the declaration of a [standard table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_table_glosry.htm "Glossary Entry") and is replaced by this:

DATA itab *{* *{*TYPE STANDARD TABLE OF *\[*REF TO*\]* type*}*
          *|* *{*LIKE STANDARD TABLE OF *\[*REF TO*\]* dobj*}* *}*
          WITH NON-UNIQUE DEFAULT KEY
          INITIAL SIZE n
          *\[*WITH HEADER LINE*\]*.

The use of the addition [WITH HEADER LINE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_header_line.htm) is obsolete


### abaptable_line.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobsolete_declarations.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_declare_obsolete.htm) → 

TYPES, DATA ... - TABLE LINE

Obsolete Syntax

[TYPES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_itab.htm) ... [WITH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_keydef.htm) ... [KEY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_primary_key.htm) TABLE LINE.
[DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_itab.htm)  ... [WITH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_keydef.htm) ... [KEY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_primary_key.htm) TABLE LINE.
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

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobsolete_declarations.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_declare_obsolete.htm) → 

Internal Tables with Header Line

Outside classes, and if it is not a component of a structure or row in another internal table, it is still possible to create an internal table with a header line.

-   [Declaration of Header Lines](#@@ITOC@@ABENITAB_HEADER_LINE_1)

-   [Properties of Header Lines](#@@ITOC@@ABENITAB_HEADER_LINE_2)

-   [Use](#@@ITOC@@ABENITAB_HEADER_LINE_3)

Declaration of Header Lines

Header lines of internal tables are created

-   by using the addition [WITH HEADER LINE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_header_line.htm) of the statement DATA to declare internal tables,

-   when using the obsolete statement string [DATA - BEGIN OF OCCURS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_begin_of_occurs.htm) to declare structured standard tables,

-   when using the obsolete statement [RANGES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapranges.htm) to declare [ranges tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenranges_table_glosry.htm "Glossary Entry"),

-   when declaring [selection tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_table_glosry.htm "Glossary Entry") with the statement [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options.htm),

-   when using [table parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_parameter_glosry.htm "Glossary Entry") for [function modules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptables_parameters_obsolete.htm) and [subroutines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapform_tables.htm).

Note

The statement [CREATE DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_data.htm) cannot be used to create internal tables with header lines.

Properties of Header Lines

A header line is a work area whose

-   data type is the same as the row type of the internal table

-   whose name is the same as the name of the internal table.

If a header line exists, therefore, an ABAP program includes two data objects with the same name (the actual internal table and the header line). The internal table and header line are accessed as follows:

-   Many processing statements for internal tables have [obsolete](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_short_forms.htm) short forms in which the header lines is used as an implicit work area if no explicit work area is specified.

-   In all other cases, the statement and [operand position](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperands_data_objects.htm) decide whether the [table body](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_body_glosry.htm "Glossary Entry") or the header line is used when the table name is specified. The header line is the usual choice. The name (and just the name) of an internal table with header line is interpreted as the table body only in the following cases:

-   Operand positions in the [processing statements for internal tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_processing_statements.htm) in which the internal table to be processed is specified.

-   Operand positions in expressions in which an internal table is expected, as after [FOR ... IN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_itab.htm) in a [table iteration](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_iteration_glosry.htm "Glossary Entry").

-   Operand positions in other statements whose operand type is an internal table, such as after [SPLIT ... INTO TABLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsplit.htm), [CONCATENATE LINES OF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapconcatenate.htm), [SELECT ... INTO TABLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm), and [READ REPORT ... INTO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_report.htm).

-   Internal table specified in a [table expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expressions.htm)

-   When saving and reading [data clusters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_cluster_glosry.htm "Glossary Entry") using [EXPORT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexport_data_cluster.htm) and [IMPORT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapimport_data_cluster.htm).

-   In the statement [FREE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfree_dataobject.htm).

-   In the obsolete statement [SEARCH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsearch_itab.htm).

-   When a token is specified dynamically in [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry") (except when database tables are specified).

To force access to the table body in any operand position when a header line exists, square brackets can be specified directly after the name of an internal table in all operand positions (for example, itab\[\]). This does not apply, however, when specifying the internal table in a [table expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expression_glosry.htm "Glossary Entry").

Notes

-   When a LIKE reference is made to an internal table with header line, either the header line itself can be referenced or \[\] can be specified to reference the table body. It is not possible, however, to reference the internal table including the header line.

-   A field symbol, a formal parameter (with the exception of [table parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_parameter_glosry.htm "Glossary Entry")), or a data reference can only address either the table body or the header line. This means that a field symbol, a formal parameter (with the exception of [table parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_parameter_glosry.htm "Glossary Entry")), or a data reference can never be ambiguous.

-   Both the table body and the header line are passed when a table with header line is passed to [table parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_parameter_glosry.htm "Glossary Entry").

-   \[\] can be specified for internal tables without header line, but does not need to be. This is because the name (without \[\]) of an internal table without header line is interpreted as the table body in all operand positions regardless.

-   In many operand positions that expect internal tables, the syntax check forces \[\] to be specified after the name of an internal table with header line.

-   [RTTS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrtts_glosry.htm "Glossary Entry") does not support internal tables with header lines. A type description object can describe either only the header line or the table body.

-   In very old programs, it may be the case that the obsolete pseudo component [\*sys\*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensys_table_body.htm) is used to address the header line (instead of \[\]).

Use

The use of header lines is highly error-prone, due to the repeated use of one name for two data objects. If at all possible, header lines should not be created (even outside of classes).

-   The addition [WITH HEADER LINE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_header_line.htm) and the statement string [DATA - BEGIN OF OCCURS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_begin_of_occurs.htm) should no longer be used and ranges tables should no longer be declared using [RANGES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapranges.htm).

-   Table parameters should not be used if at all possible.

-   In cases where a header line absolutely has to be created (such as in selection tables or in procedures that still require table parameters (generally only [remote-enabled function modules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenremote_enabled_fm_glosry.htm "Glossary Entry"))), never work with the header line and use the additional explicitly work areas declared explicitly instead.

Notes

-   A work area for replacing a header line can be declared very simply by using the addition LINE OF of the statements TYPES, DATA, and so on.

-   The use of an additional work area should not be confused with the explicit completion of the implicit [short forms](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_short_forms.htm), such as LOOP AT itab INTO itab. The latter case is one of the undesired ways to use a header line.

-   Tables with header lines do not offer any performance advantages.

Example

The following example shows a typical instance of handling internal tables with header lines: An internal table with header line (here the table parameter of a function module) is initialized using [CLEAR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclear.htm), but the \[\] is not appended to the name. In this case, only the header line is deleted, which is not usually noticed until runtime.

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
[DATA - HEADER LINE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_header_line.htm)
[DATA - BEGIN OF OCCURS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_begin_of_occurs.htm)
[RANGES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapranges.htm)


### abapdata_header_line.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobsolete_declarations.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_declare_obsolete.htm) →  [Internal Tables with Header Line](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_header_line.htm) → 

DATA - HEADER LINE

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata.htm)

Obsolete Syntax

... WITH HEADER LINE ...

Effect

This addition to the statements [DATA TABLE OF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_itab.htm), [DATA RANGE OF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_ranges.htm), and the obsolete statement [DATA OCCURS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_occurs.htm) (which is not allowed in classes) declares a further data object alongside the internal table, known as the [header line](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenheader_line_glosry.htm "Glossary Entry"). This object has exactly the same name as the internal table and has the row type of the internal table as its data type. A header line cannot be declared for internal tables with a table-like row type. This is possible for structured row types with table-like components, however.

If you specify the name of an internal table itab in an operand position of an ABAP statement, the statement determines whether the [table body](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_body_glosry.htm "Glossary Entry") or header line is used. As a rule, all table-specific statements such as [SORT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsort_itab.htm) or [LOOP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab.htm) use the internal table, whereas all other statements use the header line. Exceptions to this rule are listed under [Internal Tables with Header Line](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_header_line.htm).

To address the table body instead of the header line in statements, you can append \[\] to the table name:

... itab\[\] ...

For internal tables without a header line, the table body is always used. An internal table with a header line cannot be a component of a structure or a row of another internal table.

Notes

-   These statements for processing individual table rows have [obsolete short forms](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_short_forms.htm) that use the header line as a work area implicitly. These short forms are allowed only outside of ABAP Objects.
    
-   If the name primary\_key is explicitly specified or a [secondary key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_secondary_key.htm) is defined when the [primary key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_primary_key.htm) is being defined, the addition WITH HEADER LINE can no longer be specified, either inside or outside of classes.


### abapdata_begin_of_occurs.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobsolete_declarations.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_declare_obsolete.htm) →  [Internal Tables with Header Line](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_header_line.htm) → 

DATA - BEGIN OF OCCURS

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_begin_of_shortref.htm)

Obsolete Syntax

DATA BEGIN OF itab OCCURS n.
  ...
DATA END OF itab *\[*VALID BETWEEN intlim1 AND intlim2*\]*.

Addition:

[... VALID BETWEEN intlim1 AND intlim2](#!ABAP_ONE_ADD@1@)

Effect

This variant of the statement list introduced using [DATA BEGIN OF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_struc.htm) (which is forbidden in classes) declares an internal table itab as a [standard table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_table_glosry.htm "Glossary Entry") with a structured row type and a [header line](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenheader_line_glosry.htm "Glossary Entry"). The declarations between the statements DATA BEGIN OF and DATA END OF define the components of the [row type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrow_type_glosry.htm "Glossary Entry") of itab, just as in the regular variant of [DATA BEGIN OF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_struc.htm). The data object n, which has to be specified either directly as a numeric literal or as a numeric constant, determines the initial memory requirement.

Notes

-   The statement list above is the original form of the declarations of internal tables. Internal tables declared in this way have always been tables in the real sense, meaning that the rows are mainly constructed from individual columns.
    
-   The following statement list replaces the above statements (with the exception of the addition VALID BETWEEN); here the role of the header line is taken by the work area wa:
    

DATA BEGIN OF wa.
       ...
DATA END OF wa.
DATA itab LIKE TABLE OF wa.

The last statement is an abbreviated form of the complete [declaration](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_itab.htm) of itab, where the table type and key are supplemented with standard values.

-   The creation of the [header line](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_header_line.htm) cannot be disabled in this variant. Since header lines in internal tables should never be used, however, this way of declaring internal tables should never be encountered again.
    

Addition

... VALID BETWEEN intlim1 AND intlim2

Effect

The VALID BETWEEN addition of the DATA END OF statement is only important if the internal table is to be processed using the obsolete form of the statement [PROVIDE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapprovide_obsolete.htm). intlim1 and intlim2 expect columns from the internal table of the data type d, i, n, or t. These columns are used implicitly as interval limits in their obsolete form of the statement PROVIDE.


### abapranges.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobsolete_declarations.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_declare_obsolete.htm) →  [Internal Tables with Header Line](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_header_line.htm) → 

RANGES

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapranges_shortref.htm)

Obsolete Syntax

RANGES rtab FOR dobj *\[*OCCURS n*\]*.

Effect

Obsolete declaration of a [ranges table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenranges_table_glosry.htm "Glossary Entry"). This statement (not allowed in classes) is a short form of the following statement sequence which is also not allowed in classes:

[DATA: BEGIN OF rtab OCCURS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_begin_of_occurs.htm) *{*10*|*n*}*,
        sign   TYPE c LENGTH 1,
        option TYPE c LENGTH 2,
        low    LIKE dobj,
        high   LIKE dobj,
      END OF rtab.

Declares an internal table rtab with the structure of a [selection table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_table_glosry.htm "Glossary Entry") and a [header line](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenheader_line_glosry.htm "Glossary Entry"). Without the addition [OCCURS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_occurs.htm), the initial memory requirement of the ranges table is set to ten rows. The addition OCCURS can be used to specify a numeric literal or a numeric constant n to determine a different initial memory requirement.

Notes

-   The statement RANGES is replaced by the addition TYPE*|*LIKE RANGE OF of the statements [TYPES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_ranges.htm) and [DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_ranges.htm). If used, these declare ranges tables without header lines.
    
-   The sign and option columns of a ranges table declared using RANGES are not related to data types in ABAP Dictionary. For a ranges table defined in ABAP Dictionary, these columns are based on the data elements DDSIGN and DDOPTION.


### abenitab_header_line.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobsolete_declarations.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_declare_obsolete.htm) → 

Internal Tables with Header Line

Outside classes, and if it is not a component of a structure or row in another internal table, it is still possible to create an internal table with a header line.

-   [Declaration of Header Lines](#@@ITOC@@ABENITAB_HEADER_LINE_1)

-   [Properties of Header Lines](#@@ITOC@@ABENITAB_HEADER_LINE_2)

-   [Use](#@@ITOC@@ABENITAB_HEADER_LINE_3)

Declaration of Header Lines

Header lines of internal tables are created

-   by using the addition [WITH HEADER LINE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_header_line.htm) of the statement DATA to declare internal tables,

-   when using the obsolete statement string [DATA - BEGIN OF OCCURS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_begin_of_occurs.htm) to declare structured standard tables,

-   when using the obsolete statement [RANGES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapranges.htm) to declare [ranges tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenranges_table_glosry.htm "Glossary Entry"),

-   when declaring [selection tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_table_glosry.htm "Glossary Entry") with the statement [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options.htm),

-   when using [table parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_parameter_glosry.htm "Glossary Entry") for [function modules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptables_parameters_obsolete.htm) and [subroutines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapform_tables.htm).

Note

The statement [CREATE DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_data.htm) cannot be used to create internal tables with header lines.

Properties of Header Lines

A header line is a work area whose

-   data type is the same as the row type of the internal table

-   whose name is the same as the name of the internal table.

If a header line exists, therefore, an ABAP program includes two data objects with the same name (the actual internal table and the header line). The internal table and header line are accessed as follows:

-   Many processing statements for internal tables have [obsolete](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_short_forms.htm) short forms in which the header lines is used as an implicit work area if no explicit work area is specified.

-   In all other cases, the statement and [operand position](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperands_data_objects.htm) decide whether the [table body](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_body_glosry.htm "Glossary Entry") or the header line is used when the table name is specified. The header line is the usual choice. The name (and just the name) of an internal table with header line is interpreted as the table body only in the following cases:

-   Operand positions in the [processing statements for internal tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_processing_statements.htm) in which the internal table to be processed is specified.

-   Operand positions in expressions in which an internal table is expected, as after [FOR ... IN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_itab.htm) in a [table iteration](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_iteration_glosry.htm "Glossary Entry").

-   Operand positions in other statements whose operand type is an internal table, such as after [SPLIT ... INTO TABLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsplit.htm), [CONCATENATE LINES OF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapconcatenate.htm), [SELECT ... INTO TABLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm), and [READ REPORT ... INTO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_report.htm).

-   Internal table specified in a [table expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expressions.htm)

-   When saving and reading [data clusters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_cluster_glosry.htm "Glossary Entry") using [EXPORT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexport_data_cluster.htm) and [IMPORT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapimport_data_cluster.htm).

-   In the statement [FREE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfree_dataobject.htm).

-   In the obsolete statement [SEARCH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsearch_itab.htm).

-   When a token is specified dynamically in [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry") (except when database tables are specified).

To force access to the table body in any operand position when a header line exists, square brackets can be specified directly after the name of an internal table in all operand positions (for example, itab\[\]). This does not apply, however, when specifying the internal table in a [table expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expression_glosry.htm "Glossary Entry").

Notes

-   When a LIKE reference is made to an internal table with header line, either the header line itself can be referenced or \[\] can be specified to reference the table body. It is not possible, however, to reference the internal table including the header line.

-   A field symbol, a formal parameter (with the exception of [table parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_parameter_glosry.htm "Glossary Entry")), or a data reference can only address either the table body or the header line. This means that a field symbol, a formal parameter (with the exception of [table parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_parameter_glosry.htm "Glossary Entry")), or a data reference can never be ambiguous.

-   Both the table body and the header line are passed when a table with header line is passed to [table parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_parameter_glosry.htm "Glossary Entry").

-   \[\] can be specified for internal tables without header line, but does not need to be. This is because the name (without \[\]) of an internal table without header line is interpreted as the table body in all operand positions regardless.

-   In many operand positions that expect internal tables, the syntax check forces \[\] to be specified after the name of an internal table with header line.

-   [RTTS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrtts_glosry.htm "Glossary Entry") does not support internal tables with header lines. A type description object can describe either only the header line or the table body.

-   In very old programs, it may be the case that the obsolete pseudo component [\*sys\*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensys_table_body.htm) is used to address the header line (instead of \[\]).

Use

The use of header lines is highly error-prone, due to the repeated use of one name for two data objects. If at all possible, header lines should not be created (even outside of classes).

-   The addition [WITH HEADER LINE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_header_line.htm) and the statement string [DATA - BEGIN OF OCCURS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_begin_of_occurs.htm) should no longer be used and ranges tables should no longer be declared using [RANGES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapranges.htm).

-   Table parameters should not be used if at all possible.

-   In cases where a header line absolutely has to be created (such as in selection tables or in procedures that still require table parameters (generally only [remote-enabled function modules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenremote_enabled_fm_glosry.htm "Glossary Entry"))), never work with the header line and use the additional explicitly work areas declared explicitly instead.

Notes

-   A work area for replacing a header line can be declared very simply by using the addition LINE OF of the statements TYPES, DATA, and so on.

-   The use of an additional work area should not be confused with the explicit completion of the implicit [short forms](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_short_forms.htm), such as LOOP AT itab INTO itab. The latter case is one of the undesired ways to use a header line.

-   Tables with header lines do not offer any performance advantages.

Example

The following example shows a typical instance of handling internal tables with header lines: An internal table with header line (here the table parameter of a function module) is initialized using [CLEAR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclear.htm), but the \[\] is not appended to the name. In this case, only the header line is deleted, which is not usually noticed until runtime.

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
[DATA - HEADER LINE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_header_line.htm)
[DATA - BEGIN OF OCCURS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_begin_of_occurs.htm)
[RANGES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapranges.htm)
