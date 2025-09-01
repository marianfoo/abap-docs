  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Lossless Assignments](javascript:call_link\('abenlossless_move.htm'\)) →  [EXACT, Lossless Operator](javascript:call_link\('abenconstructor_expression_exact.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20EXACT%2C%20Lossless%20Conversion%20of%20Enumerated%20Types%2C%20ABENEXACT_CONSTRUCTOR_ENUM%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for
%20improvement:)

EXACT, Lossless Conversion of Enumerated Types

If the constructor expression [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\)) is applied to [enumerated types](javascript:call_link\('abenenum_type_glosry.htm'\) "Glossary Entry"), the same [rules](javascript:call_link\('abenconv_constructor_enum.htm'\)) apply as to the conversion operator [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\)):

-   An [enumerated object](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") can be converted to the [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry") of its enumerated type, as with CONV.
    
    ... EXACT base\_type( enum\_dobj ) ...
    
-   A data object that can be converted to the [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry") of an [enumerated type](javascript:call_link\('abenenum_type_glosry.htm'\) "Glossary Entry") can be converted to the enumerated type, as with CONV.
    
    ... EXACT enum\_type( dobj ) ...
    

The conditions of losslessness also apply:

-   If a data object that can be converted to the base type is converted to the enumerated type, this happens in accordance with the [rules](javascript:call_link\('abapmove_exact.htm'\)) of [lossless assignment](javascript:call_link\('abenlossless_assignment_glosry.htm'\) "Glossary Entry").
-   If an [arithmetic expression](javascript:call_link\('abapcompute_arith.htm'\)) is used as the argument of a conversion to the enumerated type, the result must be obtained in accordance with the [rules](javascript:call_link\('abenlossless_calculation.htm'\)) of [lossless calculation](javascript:call_link\('abenlossless_calculation_glosry.htm'\) "Glossary Entry").

Example

If the conversion operator is used, the argument is converted to the base type c with length 4, cutting off any surplus places. If the lossless operator is used, this results in an exception.

TYPES:
  char8 TYPE c LENGTH 4,
  BEGIN OF ENUM text BASE TYPE char8,
    first  VALUE IS INITIAL,
    second VALUE 'Seco',
    third  VALUE 'Thrd',
  END OF ENUM text.
FINAL(result1) = CONV text( \`Seco\` && \`nd\` ).
TRY.
    FINAL(result2) = EXACT text( \`Seco\` && \`nd\` ).
  CATCH cx\_sy\_conversion\_data\_loss.
    cl\_demo\_output=>display( \`Oops!\` ).
ENDTRY.

If an arithmetic expression is used in the conversion operator, the result is converted to the base type i, cutting off the decimal places. If the lossless operator is used, this results in an exception.

TYPES:
  BEGIN OF ENUM number,
    n0, n1, n2,
  END OF ENUM number.
FINAL(result1) = CONV number( + '1.2' ).
TRY.
    FINAL(result2) = EXACT number( + '1.2' ).
  CATCH cx\_sy\_conversion\_rounding.
    cl\_demo\_output=>display( \`Oops!\` ).
ENDTRY.