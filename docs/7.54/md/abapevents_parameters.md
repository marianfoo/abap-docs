  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [Components in Classes and Interfaces](javascript:call_link\('abenclass_ifac_components.htm'\)) →  [Events](javascript:call_link\('abenevents.htm'\)) → 

EVENTS - parameters

[Quick Reference](javascript:call_link\('abapevents_shortref.htm'\))

Syntax

... VALUE(p1) [typing](javascript:call_link\('abentyping_syntax.htm'\)) *\[*OPTIONAL*|**{*DEFAULT def1*}**\]*
    VALUE(p2) [typing](javascript:call_link\('abentyping_syntax.htm'\)) *\[*OPTIONAL*|**{*DEFAULT def2*}**\]*
    ...

Effect

The syntax of the additions VALUE, OPTIONAL, and DEFAULT and the typing using [typing](javascript:call_link\('abentyping_syntax.htm'\)) corresponds to the [definition of formal parameters](javascript:call_link\('abapmethods_parameters.htm'\)) in the interface of methods.

When an event is raised using RAISE EVENT, suitable actual parameters must be specified for all non-optional output parameters; these actual parameters are optional for all optional output parameters. Optional parameters for which no actual parameter has been specified are set to their type-dependent [initial value](javascript:call_link\('abeninitial_value_glosry.htm'\) "Glossary Entry") or to the replacement parameter def1 def2 ...

Example

Declaration of an instant event with an output parameter in class CL\_DEMO\_OUTPUT\_STREAM.

CLASS cl\_demo\_output\_stream
  ...
  PUBLIC SECTION.
    ...
    EVENTS completed
      EXPORTING
        VALUE(ev\_output) TYPE xstring .
    ...
ENDCLASS.