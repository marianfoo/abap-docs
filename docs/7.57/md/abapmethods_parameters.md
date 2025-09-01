  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces (ABAP Objects)](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Components in Classes and Interfaces](javascript:call_link\('abenclass_ifac_components.htm'\)) →  [ABAP Objects - Methods](javascript:call_link\('abenmethods.htm'\)) →  [METHODS](javascript:call_link\('abapmethods.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: METHODS, parameters, ABAPMETHODS_PARAMETERS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%
0D%0ASuggestion for improvement:)

METHODS, parameters

[Short Reference](javascript:call_link\('abapmethods_shortref.htm'\))

Syntax

... *{* VALUE(p1) *|* REFERENCE(p1) *|* p1 *}*
        [typing](javascript:call_link\('abentyping_syntax.htm'\)) *\[*OPTIONAL*|**{*DEFAULT def1*}**\]*
    *{* VALUE(p2) *|* REFERENCE(p2) *|* p2 *}*
        [typing](javascript:call_link\('abentyping_syntax.htm'\)) *\[*OPTIONAL*|**{*DEFAULT def2*}**\]*
    ...

Addition:

[... OPTIONAL*|**{*DEFAULT def*}*](#!ABAP_ONE_ADD@1@)

Effect

Definition of formal parameters p1 p2 ... for methods.

VALUE or REFERENCE determine whether a parameter p1 p2 ... is passed by [value](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry") or by [reference](javascript:call_link\('abenpass_by_reference_glosry.htm'\) "Glossary Entry"). If only one name p1 p2 ... is specified, the parameter is passed by reference by default. An input parameter passed by reference cannot be changed in the method.

The addition typing must be used to type every formal parameter. The syntax of typing is described in [Typing Syntax](javascript:call_link\('abentyping_syntax.htm'\)). The typing of a formal parameter causes the data type to be [checked](javascript:call_link\('abentyping_check.htm'\)) against the typing when an actual parameter is passed. The typing also defines in which operand positions the formal parameter can be used in the method.

Hint

If a formal parameter is typed as a reference variable and cannot be changed in the [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry"), the type check is performed as for an [upcast](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry"). If it can be changed in the procedure, the actual parameter must be compatible with the formal parameter.

Addition   

... OPTIONAL*|**{*DEFAULT def*}*

Effect

OPTIONAL or DEFAULT can be used to define input parameters and input/output parameters as optional parameters, where DEFAULT can be used to specify a replacement parameter def1, def2, ... No actual parameter needs to be specified for an optional parameter when the method is called.

The addition OPTIONAL is used to initialize a formal parameter in a type-compliant way, but the addition DEFAULT passes the value and type of the replacement parameter def1 def2 ... to the formal parameter. Any data object that is visible here that complies with the rules for [checking typing](javascript:call_link\('abentyping_check.htm'\)) can be specified as replacement parameters def1 def2 ..., with the exception of the components of [boxed components](javascript:call_link\('abenboxed_component_glosry.htm'\) "Glossary Entry").

If no actual parameter is specified for a generically typed formal parameter using the addition OPTIONAL when it is called, the type of the formal parameter is completed according to the [rules for generic types](javascript:call_link\('abentyping_generic.htm'\)).

Hint

If a literal is specified after DEFAULT, the same special rules apply as to [literals as actual parameters](javascript:call_link\('abentyping_literals.htm'\)). Afterwards, the compatibility may not then be checked completely. Instead, in method calls where no actual parameter is specified for the formal parameter, a literal is converted to the data type of the formal parameter and an exception can be raised if the value of the literal does not fit in the value range of this data type.

Example

Declaration of a method with two different specifications of input parameters. The specification of REFERENCE(p2) has the same meaning as p2.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    METHODS
      meth
        IMPORTING
          p1            TYPE i
          REFERENCE(p2) TYPE i DEFAULT 111
          VALUE(p3)     TYPE i OPTIONAL.
    ...
ENDCLASS.