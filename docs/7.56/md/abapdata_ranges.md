  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Objects](javascript:call_link\('abenobjects_statements.htm'\)) →  [DATA](javascript:call_link\('abapdata.htm'\)) → 

DATA, RANGE OF

[Short Reference](javascript:call_link\('abapdata_shortref.htm'\))

Syntax

DATA range\_tab *{*TYPE RANGE OF type*}**|**{*LIKE RANGE OF dobj*}*
               *\[*INITIAL SIZE n*\]*
               [*\[*VALUE IS INITIAL*\]*](javascript:call_link\('abapdata_options.htm'\))
               [*\[*READ-ONLY*\]*](javascript:call_link\('abapdata_options.htm'\)).

Effect

This statement defines a [ranges table](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry") range\_tab with the table type described in the section [TYPES - RANGE OF](javascript:call_link\('abaptypes_ranges.htm'\)). The table type defined here, however, is not a standalone type, but exists as a property of the data object range\_tab.

The addition [VALUE IS INITIAL](javascript:call_link\('abapdata_options.htm'\)) can be used to specify an initial [start value](javascript:call_link\('abenstart_value_glosry.htm'\) "Glossary Entry").

Hints

-   Outside of classes, the addition [WITH HEADER LINE](javascript:call_link\('abapdata_header_line.htm'\)) can also be used to declare an obsolete [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry").
-   The declaration of a ranges table using the statement [RANGES](javascript:call_link\('abapranges.htm'\)) is obsolete.

Example

In this example, a ranges table is declared, filled, and evaluated in the [WHERE](javascript:call_link\('abapwhere.htm'\)) condition of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement.

DATA carrid\_range TYPE RANGE OF spfli-carrid.
carrid\_range = VALUE #(
  ( sign = 'I' option = 'BT' low = 'AA' high = 'LH') ).
SELECT \*
       FROM spfli
       WHERE carrid IN @carrid\_range
       INTO TABLE @DATA(spfli\_tab).