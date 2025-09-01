---
title: "Fixed Point Arithmetic in External Procedure Calls"
description: |
  A procedure called externally is executed in accordance with the attribute Fixed Point Arithmetic(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfixed_point_arithmetic_glosry.htm 'Glossary Entry') set in its master program. Here, each actual parameter(https://help.sap.com/doc/aba
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfixed_point_arith_external.htm"
abapFile: "abenfixed_point_arith_external.htm"
keywords: ["do", "while", "if", "case", "try", "method", "class", "data", "abenfixed", "point", "arith", "external"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Calling and leaving program units](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencall_processing_blocks.htm) →  [Calling Procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencall_procedures.htm) →  [External Procedure Call](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencall_procedures_extern.htm) → 

Fixed Point Arithmetic in External Procedure Calls

A procedure called externally is executed in accordance with the attribute [Fixed Point Arithmetic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfixed_point_arithmetic_glosry.htm "Glossary Entry") set in its master program. Here, each [actual parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenformal_parameter_glosry.htm "Glossary Entry") bound to a [formal parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenactual_parameter_glosry.htm "Glossary Entry") of the procedure is also handled in accordance with the called program, independently both of the corresponding attribute of the calling program and of the parameter type and pass by type.

Note

The justification for the behavior described here is that parameter passing should be independent of pass by reference and pass by value. To avoid the associated problems, it is strongly recommended that fixed point arithmetic is not switched off in any program. In this context, this applies particularly to class pools and function groups.

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

Depending on the attributes, the result is as follows. Here, the attributes of the calling program are in the top row and the attributes of the called program are in the left column:

Fixed Point Arithmetic

on

off

on

1000.00

1000.00

off

10.00

10.00

The formal parameter is assigned to the bound actual parameter (including the associated conversion while respecting the decimal separators) only if fixed point arithmetic is switched on in the called procedure. If fixed point arithmetic is switched off in the called procedure, the decimal separator of the actual parameter is ignored.

The call could also, however, be made as follows:

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

In this case, the call takes place in an [arithmetic expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry"). The return value of the call is assigned to an intermediate result of the same type as the formal parameter and this is then converted to the calculation type of the arithmetic expression in the calling program. In this case, therefore, the attribute of the calling program determines whether the decimal separator is respected.

The behavior in the second case generally meets the expectations of a calling program. This can, of course, also be done by using a helper variable of the same type as the formal parameter, First it is used as an actual parameter in the calling program and then assigned to the target field.