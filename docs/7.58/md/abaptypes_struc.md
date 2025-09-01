  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types](javascript:call_link\('abentypes_statements.htm'\)) →  [TYPES](javascript:call_link\('abaptypes.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TYPES%2C%20BEGIN%20OF%20struct_type%2C%20ABAPTYPES_STRUC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TYPES, BEGIN OF struct\_type

[Short Reference](javascript:call_link\('abaptypes_begin_of_shortref.htm'\))

Syntax

TYPES BEGIN OF struc\_type.
  ...
  TYPES comp ...
  TYPES comp TYPE struc\_type [BOXED](javascript:call_link\('abaptypes_boxed.htm'\)).
  [INCLUDE TYPE*|*STRUCTURE ...](javascript:call_link\('abapinclude_type.htm'\))
  ...
TYPES END OF struc\_type.

Effect

Definition of a structured type struc\_type. This is introduced using a TYPES statement with the addition BEGIN OF and must end with a TYPES statement with the addition END OF.

The following can be included between these TYPES statements:

-   Any TYPES statements, particularly other completed structure definitions.
-   The definition of [static boxes](javascript:call_link\('abenstatic_box_glosry.htm'\) "Glossary Entry") using [BOXED](javascript:call_link\('abaptypes_boxed.htm'\)).
-   The statements [INCLUDE TYPE](javascript:call_link\('abapinclude_type.htm'\)) and [INCLUDE STRUCTURE](javascript:call_link\('abapinclude_type.htm'\)) for including components from other structures.

Structured types must not be created without at least one component.

The TYPES statements within the statements BEGIN OF and END OF define the components of the structured type struc\_type. If a component is a structured type or if a new structured type is defined within a structure using BEGIN OF and END OF, substructures are created. A structure with substructures is a nested structure.

A component of struc\_type cannot be declared with reference to struc\_type itself. If the name struc\_type is specified after TYPE in the declaration of a component, a search is performed for the next type with this name in a higher [visibility section](javascript:call_link\('abenlifetime_and_visibility.htm'\)), and used if found. If there is no other global type of this name, a syntax error occurs.

If a component is created as a [table type](javascript:call_link\('abaptypes_itab.htm'\)), it must not be generic. The name of a component cannot be the reserved name of the [pseudo component](javascript:call_link\('abenpseudo_component_glosry.htm'\) "Glossary Entry") table\_line.

The statement [INCLUDE](javascript:call_link\('abapinclude_prog.htm'\)) defines components of the structured type struc\_type by copying the components of a differently structured type or an existing structure at the same level.

The components of a structured type are addressed using the name struc\_type and the name of the component, separated by the structure component selector (\-).

Hints

-   The [value operator](javascript:call_link\('abenvalue_operator_glosry.htm'\) "Glossary Entry") [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)) can be used to [construct](javascript:call_link\('abenvalue_constructor_params_struc.htm'\)) the content of structures.
-   A structure type is always fully specified. There is no generic structure type.
-   The statements for defining a structure type are usually summarized in a [chained statement](javascript:call_link\('abenchained_statement_glosry.htm'\) "Glossary Entry") if possible.

Example

This example defines two structured types, street\_type and address\_type. address\_type contains structured types as components. The definition of zipcode\_type shows the access to substructures.

TYPES: BEGIN OF street\_type,
         name TYPE c LENGTH 40,
         no   TYPE c LENGTH 4,
       END OF street\_type.
TYPES: BEGIN OF address\_type,
         name   TYPE c LENGTH 30,
         street TYPE street\_type,
         BEGIN OF city,
           zipcode TYPE n LENGTH 5,
           name TYPE c LENGTH 40,
         END OF city,
       END OF address\_type.
TYPES zipcode\_type TYPE address\_type-city-zipcode.

Continue
[TYPES, BOXED](javascript:call_link\('abaptypes_boxed.htm'\))
[INCLUDE, TYPE, STRUCTURE](javascript:call_link\('abapinclude_type.htm'\))