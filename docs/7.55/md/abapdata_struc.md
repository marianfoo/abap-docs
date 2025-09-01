  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Objects](javascript:call_link\('abenobjects_statements.htm'\)) →  [DATA](javascript:call_link\('abapdata.htm'\)) → 

DATA, BEGIN OF struc

[Short Reference](javascript:call_link\('abapdata_begin_of_shortref.htm'\))

Syntax

DATA BEGIN OF struc [*\[*READ-ONLY*\]*](javascript:call_link\('abapdata_options.htm'\)).
  ...
   [INCLUDE TYPE*|*STRUCTURE ...](javascript:call_link\('abapinclude_type.htm'\))
  ...
DATA END OF struc.

Effect

Declaration of a new [structure](javascript:call_link\('abendata_objects_structure.htm'\)) struc. This is introduced using a DATA statement with the addition BEGIN OF and must end with a DATA statement with the addition END OF.

The following can be included between these DATA statements:

-   Any DATA statements, particularly further closed structures.
    

-   The statements [INCLUDE TYPE](javascript:call_link\('abapinclude_type.htm'\)) and [INCLUDE STRUCTURE](javascript:call_link\('abapinclude_type.htm'\))

The meaning of these statements is the same as in the definition of structured data types in the section [TYPES - BEGIN OF](javascript:call_link\('abaptypes_struc.htm'\)). However, here it is used to create a bound structured data type. No structure can be created without at least one component.

A component of struc cannot be declared by referencing struc itself. If the name struc is specified after LIKE in the declaration of a component, a search is performed for the next object with this name in a higher [visibility section](javascript:call_link\('abenlifetime_and_visibility.htm'\)) and used if found. If there is no more global object with this name, a syntax error occurs.

Hints

-   The addition [READ-ONLY](javascript:call_link\('abapdata_options.htm'\)) is only possible for the entire structure, not for individual structure components comp.
    

-   A structure called text cannot have any components with three-character names, since these are reserved for addressing [text symbols](javascript:call_link\('abentext_symbols.htm'\)). It is best to never call a structure text to avoid any conflicts with text symbols.
    

-   The addition [BOXED](javascript:call_link\('abapdata_boxed.htm'\)) cannot be specified between DATA BEGIN OF and DATA END OF when declaring components. Static boxes in structures can only be defined with [TYPES](javascript:call_link\('abaptypes_boxed.htm'\)).
    

-   The [value operator](javascript:call_link\('abenvalue_operator_glosry.htm'\) "Glossary Entry") [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)) can be used to [construct](javascript:call_link\('abenvalue_constructor_params_struc.htm'\)) the content of structures.
    

-   In an [obsolete variant](javascript:call_link\('abenanonymous_components.htm'\)), text field literals or the constant space can be specified as anonymous components between BEGIN OF and END OF.
    

-   The use of the addition [OCCURS](javascript:call_link\('abapdata_begin_of_occurs.htm'\)) for defining standard tables with structured line types is obsolete.
    

-   The statements for declaring a structure are usually summarized in a [chained statement](javascript:call_link\('abenchained_statement_glosry.htm'\) "Glossary Entry") if possible.
    

Example

In this example, a structure spfli\_struc is declared with an elementary component index and a substructure spfli\_wa. The [SELECT](javascript:call_link\('abapselect.htm'\)) loop shows a possible use of the nested structure.

DATA: BEGIN OF spfli\_struc,
         index    TYPE i,
         spfli\_wa TYPE spfli,
      END OF spfli\_struc.
SELECT \*
       FROM spfli
       INTO @spfli\_struc-spfli\_wa.
  spfli\_struc-index += 1.
  cl\_demo\_output=>next\_section( |{ spfli\_struc-index }| ).
  cl\_demo\_output=>write\_data( spfli\_struc-spfli\_wa ).
ENDSELECT.
cl\_demo\_output=>display( ).

Executable Examples

-   [Declaration of a Simple Structure](javascript:call_link\('abensimple_structure_abexa.htm'\))

-   [Declaration of a Nested Structure](javascript:call_link\('abennested_structure_abexa.htm'\))
    

Continue
![Example](exa.gif "Example") [Declaration of a Simple Structure](javascript:call_link\('abensimple_structure_abexa.htm'\))
![Example](exa.gif "Example") [Declaration of a Nested Structure](javascript:call_link\('abennested_structure_abexa.htm'\))