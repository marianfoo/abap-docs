  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobsolete_declarations.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_declare_obsolete.htm) →  [Internal Tables with Header Line](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_header_line.htm) → 

DATA - HEADER LINE

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata.htm)

Obsolete Syntax

... WITH HEADER LINE ...

Effect

This addition of the statements [DATA TABLE OF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata_itab.htm), [DATA RANGE OF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata_ranges.htm), and the obsolete statement [DATA OCCURS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata_occurs.htm) (which is not allowed in classes) declares a further data object alongside the internal table, known as the [header line](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenheader_line_glosry.htm "Glossary Entry"). This object has exactly the same name as the internal table and has the row type of the internal table as its data type. A header line cannot be declared for internal tables with a table-like row type. This is possible for structured row types with table-like components, however.

If the name of an internal table itab is specified in an operand position of an ABAP statement, the statement determines whether the [table body](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_body_glosry.htm "Glossary Entry") or header line is used. As a rule, all table-specific statements such as [SORT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsort_itab.htm) or [LOOP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab.htm) use the internal table, whereas all other statements use the header line. Exceptions to this rule are listed under [Internal Tables with Header Line](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_header_line.htm).

To address the table body instead of the header line in statements, \[\] can be appended to the table name:

... itab\[\] ...

For internal tables without a header line, the table body is always used. An internal table with a header line cannot be a component of a structure or a row of another internal table.

Notes

-   These statements for processing individual table rows have [obsolete short forms](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_short_forms.htm) that use the header line as a work area implicitly. These short forms are allowed only outside of ABAP Objects.
    
-   If the name primary\_key is explicitly specified or a [secondary key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata_secondary_key.htm) is defined when the [primary key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata_primary_key.htm) is being defined, the addition WITH HEADER LINE can no longer be specified, either inside or outside of classes.