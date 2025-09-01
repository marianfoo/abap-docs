  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Objects](javascript:call_link\('abenobjects_statements.htm'\)) →  [DATA](javascript:call_link\('abapdata.htm'\)) → 

DATA - RANGE OF

[Quick Reference](javascript:call_link\('abapdata_shortref.htm'\))

Syntax

DATA rtab *{*TYPE RANGE OF type*}**|**{*LIKE RANGE OFdobj*}*
          *\[*INITIAL SIZE n*\]*
          [*\[*VALUE IS INITIAL*\]*](javascript:call_link\('abapdata_options.htm'\))
          [*\[*READ-ONLY*\]*](javascript:call_link\('abapdata_options.htm'\)).

Effect

This statement defines a [ranges table](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry") rtab with the table type described in the section [TYPES - RANGE OF](javascript:call_link\('abaptypes_ranges.htm'\)). The table type defined here, however, is not a standalone type, but exists as a property of the data object rtab.

The addition [VALUE IS INITIAL](javascript:call_link\('abapdata_options.htm'\)) can be used to specify an initial [start value](javascript:call_link\('abenstart_value_glosry.htm'\) "Glossary Entry").

Notes

-   Outside of classes, the addition [WITH HEADER LINE](javascript:call_link\('abapdata_header_line.htm'\)) can also be used to declare an obsolete [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry").
    
-   Declarations of ranges tables using the statement [RANGES](javascript:call_link\('abapranges.htm'\)) are obsolete.
    

Example

In this example, a ranges table is declared, filled, and evaluated in the [WHERE](javascript:call_link\('abapwhere.htm'\)) condition of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement.

DATA carrid\_range TYPE RANGE OF spfli-carrid.
carrid\_range = VALUE #(
  ( sign = 'I' option = 'BT' low = 'AA' high = 'LH') ).
SELECT \*
       FROM spfli
       WHERE carrid IN @carrid\_range
       INTO TABLE @DATA(spfli\_tab).