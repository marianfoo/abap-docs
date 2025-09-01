  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [Components in Classes and Interfaces](javascript:call_link\('abenclass_ifac_components.htm'\)) →  [Methods](javascript:call_link\('abenmethods.htm'\)) →  [METHODS](javascript:call_link\('abapmethods.htm'\)) → 

METHODS - parameters

[Quick Reference](javascript:call_link\('abapmethods_shortref.htm'\))

Syntax

... *{* VALUE(p1) *|* REFERENCE(p1) *|* p1 *}*
        [typing](javascript:call_link\('abentyping_syntax.htm'\)) *\[*OPTIONAL*|**{*DEFAULT def1*}**\]*
    *{* VALUE(p2) *|* REFERENCE(p2) *|* p2 *}*
        [typing](javascript:call_link\('abentyping_syntax.htm'\)) *\[*OPTIONAL*|**{*DEFAULT def2*}**\]*
    ...

Addition:

[... OPTIONAL*|**{*DEFAULT def*}*](#!ABAP_ONE_ADD@1@)

Effect

Defines formal parameters p1 p2 ... for methods.

VALUE or REFERENCE are used to define whether a parameter p1 p2 ... is passed by [value](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry") or by [reference](javascript:call_link\('abenpass_by_reference_glosry.htm'\) "Glossary Entry"). If only one name p1 p2 ... is specified, the parameter is passed by reference by default. An input parameter passed by reference cannot be changed in the method.

If the addition typing is used, every formal parameter must be typed. The syntax of typing is described in [Typing Syntax](javascript:call_link\('abentyping_syntax.htm'\)). The typing of a formal parameter causes the data type to be [checked](javascript:call_link\('abentyping_check.htm'\)) against the typing when an actual parameter is passed. The typing also defines in which operand positions the formal parameter can be used in the method.

Note

If a formal parameter is typed as a reference variable and cannot be changed in the [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry"), the type check is performed in the same way as for an [up cast](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry"). If it can be changed in the procedure, the actual parameter must be compatible with the formal parameter.

Addition

... OPTIONAL*|**{*DEFAULT def*}*

Effect

OPTIONAL or DEFAULT can be used to define input parameters and input/output parameters as optional parameters, where DEFAULT can be used to specify a replacement parameter def1, def2, ... No actual parameter needs to be specified for an optional parameter when the method is called.

The addition OPTIONAL is used to initialize a formal parameter in a type-friendly way, but the addition DEFAULT passes the value and type of the replacement parameter def1 def2 ... to the formal parameter. The replacement parameters def1 def2 ... can be any data object visible here that complies with the rules for [checking typing](javascript:call_link\('abentyping_check.htm'\)), with the exception of the components of [boxed components](javascript:call_link\('abenboxed_component_glosry.htm'\) "Glossary Entry").

If no actual parameter is specified for a generically typed formal parameter using the addition OPTIONAL when it is called, the type of the formal parameter is completed in accordance with the [rules for generic types](javascript:call_link\('abentyping_generic.htm'\)).

Note

If a literal is specified after DEFAULT, the same special rules apply as to [literals as actual parameters](javascript:call_link\('abentyping_literals.htm'\)). Hence, compatibility may not then be checked in full in all cases. Instead, in method calls where no actual parameter is specified for the formal parameter, a literal is converted to the data type of the formal parameter and an exception can be raised if the value of the literal does not fit in the value range of this data type.

Example

Declaration of a method with two different specifications of input parameters. If specified, REFERENCE(p2) has the same meaning as p2.

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