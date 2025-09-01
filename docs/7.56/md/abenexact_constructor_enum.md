---
title: "EXACT, Lossless Conversion of Enumerated Types"
description: |
  If the constructor expression CONV(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_conv.htm) is applied to enumerated types(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenumerated_type_glosry.htm 'Glossary Entry'), the same rules(https://
version: "7.56"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexact_constructor_enum.htm"
abapFile: "abenexact_constructor_enum.htm"
keywords: ["do", "if", "try", "catch", "data", "types", "abenexact", "constructor", "enum"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvalue_assignments.htm) →  [Lossless Assignments](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlossless_move.htm) →  [EXACT, Lossless Operator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_exact.htm) → 

EXACT, Lossless Conversion of Enumerated Types

If the constructor expression [CONV](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_conv.htm) is applied to [enumerated types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenumerated_type_glosry.htm "Glossary Entry"), the same [rules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconv_constructor_enum.htm) apply as to the conversion operator [CONV](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_conv.htm):

-   An [enumerated object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenumerated_object_glosry.htm "Glossary Entry") can be converted to the [base type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbase_type_glosry.htm "Glossary Entry") of its enumerated type, as with CONV.
    
    ... EXACT base\_type( enum\_dobj ) ...
    
-   A data object that can be converted to the [base type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbase_type_glosry.htm "Glossary Entry") of an [enumerated type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenumerated_type_glosry.htm "Glossary Entry") can be converted to the enumerated type, as with CONV.
    
    ... EXACT enum\_type( dobj ) ...
    

The conditions of losslessness also apply:

-   If a data object that can be converted to the base type is converted to the enumerated type, this happens in accordance with the [rules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmove_exact.htm) of [lossless assignment](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlossless_assignment_glosry.htm "Glossary Entry").
-   If an [arithmetic expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcompute_arith.htm) is used as the argument of a conversion to the enumerated type, the result must be obtained in accordance with the [rules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlossless_calculation.htm) of [lossless calculation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlossless_calculation_glosry.htm "Glossary Entry").

Example

If the conversion operator is used, the argument is converted to the base type c with length 4, cutting off any surplus places. If the lossless operator is used, this results in an exception.

TYPES:
  char8 TYPE c LENGTH 4,
  BEGIN OF ENUM text BASE TYPE char8,
    first  VALUE IS INITIAL,
    second VALUE 'Seco',
    third  VALUE 'Thrd',
  END OF ENUM text.
DATA(result1) = CONV text( \`Seco\` && \`nd\` ).
TRY.
    DATA(result2) = EXACT text( \`Seco\` && \`nd\` ).
  CATCH cx\_sy\_conversion\_data\_loss.
    cl\_demo\_output=>display( \`Oops!\` ).
ENDTRY.

If an arithmetic expression is used in the conversion operator, the result is converted to the base type i, cutting off the decimal places. If the lossless operator is used, this results in an exception.

TYPES:
  BEGIN OF ENUM number,
    n0, n1, n2,
  END OF ENUM number.
DATA(result1) = CONV number( + '1.2' ).
TRY.
    DATA(result2) = EXACT number( + '1.2' ).
  CATCH cx\_sy\_conversion\_rounding.
    cl\_demo\_output=>display( \`Oops!\` ).
ENDTRY.