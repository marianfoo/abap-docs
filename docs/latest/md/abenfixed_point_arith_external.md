  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and Exiting Program Units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Processing Blocks](javascript:call_link\('abencall_processing_blocks.htm'\)) →  [Calling Procedures](javascript:call_link\('abencall_procedures.htm'\)) →  [External Procedure Call](javascript:call_link\('abencall_procedures_extern.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Fixed%20Point%20Arithmetic%20in%20External%20Procedure%20Calls%2C%20ABENFIXED_POINT_ARITH_EXTERNAL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on%20for%20improvement:)

Fixed Point Arithmetic in External Procedure Calls

A procedure called externally is executed in accordance with the property [Fixed Point Arithmetic](javascript:call_link\('abenfixed_point_arithmetic_glosry.htm'\) "Glossary Entry") of its compilation unit. Here, each [actual parameter](javascript:call_link\('abenformal_parameter_glosry.htm'\) "Glossary Entry") bound to a [formal parameter](javascript:call_link\('abenactual_parameter_glosry.htm'\) "Glossary Entry") of the procedure is also handled in accordance with the property of the called program, irrespective of the corresponding property of the calling program, the parameter type and pass by type.

Hint

The justification for the behavior described here is that parameter passing should be independent of pass by reference and pass by value. To avoid the corresponding problems, it is strongly recommended that fixed point arithmetic is not switched off in any program. In this context, this applies particularly to class pools and function pools.

Example

The following example is a global class:

CLASS cl\_test DEFINITION PUBLIC.
  PUBLIC SECTION.
    CLASS-METHODS meth RETURNING value(p) TYPE string.
ENDCLASS.
CLASS cl\_test IMPLEMENTATION.
  METHOD meth.
    p = '1000'.
  ENDMETHOD.
ENDCLASS.

A calling program section could be as follows:

DATA pack TYPE p DECIMALS 2.
pack = cl\_test=>meth( ).

Depending on the properties, the result is as follows, where the properties of the calling program are in the top line and the properties of the called program are in the left column:

Fixed Point Arithmetic

on

off

on

1000.00

1000.00

off

10.00

10.00

The formal parameter is assigned to the bound actual parameter, including the associated conversion while respecting the decimal separators, only if fixed point arithmetic is switched on in the called procedure. If fixed point arithmetic is switched off in the called procedure, the decimal separator of the actual parameter is ignored.

The call could also, however, appear as follows:

DATA pack TYPE p DECIMALS 2.
pack = + cl\_test=>meth( ).

In this case, the result looks like this:

Fixed Point Arithmetic

on

off

on

1000.00

10.00

off

1000.00

10.00

In this case, the call takes place in an [arithmetic expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry"). The return value of the call is first assigned to an interim result of the type of the formal parameter and this is then converted into the calculation type of the arithmetic expression in the calling program. In this case, therefore, the property of the calling program determines whether or not the decimal separator is respected.

The behavior in the second case usually corresponds to the expectations of a caller. This can, of course, also be achieved by introducing a helper variable of the type of the formal parameter that is first used as an actual parameter in the calling program and then assigned to the target field.