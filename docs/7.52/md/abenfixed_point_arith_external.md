  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Calling and leaving program units](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_processing_blocks.htm) →  [Calling Procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_procedures.htm) →  [External Procedure Call](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_procedures_extern.htm) → 

Fixed Point Arithmetic in External Procedure Calls

A procedure that is called externally is executed according to the attribute [Fixed Point Arithmetic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfixed_point_arithmetic_glosry.htm "Glossary Entry") in its master program. Here, each [actual parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenformal_parameter_glosry.htm "Glossary Entry") bound to a [formal parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenactual_parameter_glosry.htm "Glossary Entry") in the procedure is handled independently of the corresponding attribute of the calling program and, independently of the parameter type and pass by type, also according to the attribute of the program called.

Example

Take the following global class:

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

Depending on the attributes, the result is as follows, where the attributes of the calling program are in the top row and the attributes of the called program are in the left column:

Fixed point arithmetic

on

off

on

1000,00

1000,00

off

10,00

10,00

The formal parameter is assigned to the bound actual parameter, including the associated conversion while respecting decimal separators, only if fixed point arithmetic is switched on in the called procedure. If fixed point arithmetic is switched off in the called procedure, the decimal separator of the actual parameter is ignored.

However, if the call is as follows:

DATA pack TYPE p DECIMALS 2.
pack = + cl\_test=>meth( ).

the result looks like this:

Fixed point arithmetic

on

off

on

1000,00

10,00

off

1000,00

10,00

In this case, the call takes place in an [arithmetic expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry"). The return value of the call is assigned to an intermediate result of the same type as the formal parameter and this is then converted to the calculation type of the arithmetic expression in the calling program. In this case, therefore, the attribute of the calling program determines whether the decimal separator is respected.

The behavior in the second case generally meets the expectations of a calling program. Of course, this can also be achieved by introducing an auxiliary variable of the same type as the formal parameter used in the calling program first as an actual parameter and then assign it to the target field.

Note

The justification for the behavior shown here is that the passing of parameters is to be independent of pass by reference and pass by value. To bypass the associated problems, it is strongly recommend that fixed point arithmetic is not switched off in any program. In this context, this applies particularly to class pools and function groups.