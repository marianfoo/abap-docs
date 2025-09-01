  

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