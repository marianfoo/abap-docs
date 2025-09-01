  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Objects](javascript:call_link\('abenobjects_statements.htm'\)) →  [DATA](javascript:call_link\('abapdata.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DATA, TYPE abap_type, ABAPDATA_SIMPLE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0AS
uggestion for improvement:)

DATA, TYPE abap\_type

[Short Reference](javascript:call_link\('abapdata_shortref.htm'\))

Syntax

DATA *{* *{*var*\[*(len)*\]* TYPE abap\_type *\[*DECIMALS dec*\]**}*
     *|* *{*var *\[*TYPE abap\_type *\[*LENGTH len*\]* *\[*DECIMALS dec*\]**\]**}* *}*
     [*\[*VALUE val*|**{*IS INITIAL*}**\]*](javascript:call_link\('abapdata_options.htm'\))
     [*\[*READ-ONLY*\]*](javascript:call_link\('abapdata_options.htm'\)).

Effect

By specifying a [built-in data type](javascript:call_link\('abenbuiltin_data_type_glosry.htm'\) "Glossary Entry") abap\_type, an elementary variable var is defined. For abap\_type, all [built-in data types](javascript:call_link\('abenbuiltin_abap_type_glosry.htm'\) "Glossary Entry") can be used, except for the internal types b and s.

The syntax and meaning of LENGTH, len, DECIMALS, and dec are identical to the definition of elementary data types using [TYPES](javascript:call_link\('abaptypes_simple.htm'\)) and must be specified within the specified [areas](javascript:call_link\('abenbuilt_in_types_complete.htm'\)). Here, however, they are used to create a bound data type. If len or dec are not specified for the ABAP types c, n, p, and x, the bound type is created using the [type-specific standard length](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) and, for p, without decimal places.

Hints

-   For reasons of legibility, it is best to include all information and always use the addition LENGTH instead of parentheses to specify the length len.
-   The non-specifiable internal types b and s can be applied by referencing the built-in data types [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)) and [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)) from the ABAP Dictionary.

Example

These statements declare three variables and set their start values.

DATA: text  TYPE string VALUE \`Text\`,
      count TYPE i VALUE 1,
      price TYPE p LENGTH 8 DECIMALS 2 VALUE '1.99'.