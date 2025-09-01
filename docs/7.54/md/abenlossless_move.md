---
title: "Lossless Assignments"
description: |
  A lossless assignment(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlossless_assignment_glosry.htm 'Glossary Entry') is an assignment between incompatible data types in which the conversion(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_glosry.htm 'Glo
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlossless_move.htm"
abapFile: "abenlossless_move.htm"
keywords: ["do", "if", "case", "try", "method", "data", "types", "abenlossless", "move"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_assignments.htm) → 

Lossless Assignments

A [lossless assignment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlossless_assignment_glosry.htm "Glossary Entry") is an assignment between incompatible data types in which the [conversion](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_glosry.htm "Glossary Entry") is checked to see whether data is lost. Lossless assignments can be performed using the

-   [lossless operator EXACT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_exact.htm), in which the argument is converted to a result of the specified type using the

-   [rules for lossless assignments.](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmove_exact.htm)

This makes it possible to use lossless assignments in all operand positions in which [EXACT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_exact.htm) can be specified.

The real meaning of a lossless assignment is the following method of using a [constructor expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") with [EXACT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_exact.htm) as the right side of an [assignment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenequals_operator.htm):

Syntax

destination = [EXACT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_exact.htm) #( source ).

In this case, source is converted to the data type of destination and checked accordingly.

Notes

-   If the argument of the operator [EXACT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_exact.htm) is an [arithmetic expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry"), a [lossless calculation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlossless_calculation_glosry.htm "Glossary Entry") is performed instead of a lossless assignment.

-   When assigning structures component by component using [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmove-corresponding.htm), there is an addition EXACT for lossless assignments.

-   Using the addition EXACT in the obsolete statement [MOVE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmove_obs.htm) is an obsolete form of lossless assignment.

Continue
[EXACT - Lossless Operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_exact.htm)
[Lossless Assignments - Rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmove_exact.htm)