  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_ifac_components.htm) →  [ABAP Objects - Methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmethods.htm) →  [METHODS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20METHODS%2C%20parameters%2C%20ABAPMETHODS_PARAMETERS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

METHODS, parameters

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_shortref.htm)

Syntax

... *{* VALUE(p1) *|* REFERENCE(p1) *|* p1 *}*
        [typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_syntax.htm) *\[*OPTIONAL*|**{*DEFAULT def1*}**\]*
    *{* VALUE(p2) *|* REFERENCE(p2) *|* p2 *}*
        [typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_syntax.htm) *\[*OPTIONAL*|**{*DEFAULT def2*}**\]*
    ...

Addition:

[... OPTIONAL*|**{*DEFAULT def*}*](#!ABAP_ONE_ADD@1@)

Effect

Definition of formal parameters p1 p2 ... for methods.

VALUE or REFERENCE determine whether a parameter p1 p2 ... is passed by [value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpass_by_value_glosry.htm "Glossary Entry") or by [reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpass_by_reference_glosry.htm "Glossary Entry"). If only one name p1 p2 ... is specified, the parameter is passed by reference by default. An input parameter passed by reference cannot be changed in the method.

The addition typing must be used to type every formal parameter. The syntax of typing is described in [Typing Syntax](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_syntax.htm). The typing of a formal parameter causes the data type to be [checked](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_check.htm) against the typing when an actual parameter is passed. The typing also defines in which operand positions the formal parameter can be used in the method.

Hint

If a formal parameter is typed as a reference variable and cannot be changed in the [procedure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprocedure_glosry.htm "Glossary Entry"), the type check is performed as for an [upcast](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenup_cast_glosry.htm "Glossary Entry"). If it can be changed in the procedure, the actual parameter must be compatible with the formal parameter.

Addition   

... OPTIONAL*|**{*DEFAULT def*}*

Effect

OPTIONAL or DEFAULT can be used to define input parameters and input/output parameters as optional parameters, where DEFAULT can be used to specify a replacement parameter def1, def2, ... No actual parameter needs to be specified for an optional parameter when the method is called.

The addition OPTIONAL is used to initialize a formal parameter in a type-compliant way, but the addition DEFAULT passes the value and type of the replacement parameter def1 def2 ... to the formal parameter. Any data object that is visible here that complies with the rules for [checking typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_check.htm) can be specified as replacement parameters def1 def2 ..., with the exception of the components of [boxed components](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenboxed_component_glosry.htm "Glossary Entry").

If no actual parameter is specified for a generically typed formal parameter using the addition OPTIONAL when it is called, the type of the formal parameter is completed according to the [rules for generic types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_generic.htm).

Hint

If a literal is specified after DEFAULT, the same special rules apply as to [literals as actual parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_literals.htm). Afterwards, the compatibility may not then be checked completely. Instead, in method calls where no actual parameter is specified for the formal parameter, a literal is converted to the data type of the formal parameter and an exception can be raised if the value of the literal does not fit in the value range of this data type.

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
CLASS cls IMPLEMENTATION.
  METHOD meth.
    ...
  ENDMETHOD.
  ...
ENDCLASS.