  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Lossless Assignments](javascript:call_link\('abenlossless_move.htm'\)) →  [Lossless Assignments, Rules](javascript:call_link\('abapmove_exact.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Checking Elementary Data Objects, ABENMOVE_EXACT_ELEMENTARY, 757%0D%0A%0D%0AError:%0D
%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Checking Elementary Data Objects

In conversions between incompatible [elementary data objects](javascript:call_link\('abenelementary_data_object_glosry.htm'\) "Glossary Entry"), the operator [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)) ensures that no values are lost. Regardless of the value of the argument, the operator EXACT generally does not allow conversions between data objects with the following data types, for which the values are always lost when the [conversion rules](javascript:call_link\('abenconversion_elementary.htm'\)) are applied.

-   From x, xstring to n, d, t, and vice versa.
-   From x, xstring to all [numeric data types](javascript:call_link\('abennumeric_data_type_glosry.htm'\) "Glossary Entry"), and vice versa.
-   From d and t to b and s

Conversions from d to t and vice versa, and most conversions for time stamps of the type utclong are prohibited regardless of the operator EXACT. Other conversions that are not allowed are conversions in which byte-like fields are converted directly or as an interim result to the data type i and vice versa.

If the compiler detects a forbidden conversion a syntax error occurs. If a forbidden conversion is detected at runtime, an exception of the class CX\_SY\_CONVERSION\_EXACT\_NOT\_SUP is raised. The same applies to types for which conversions are allowed, but for which a loss of values can be identified regardless of the content, for example, if a conversion is made to fields that are too short.

If allowed conversions are made between incompatible elementary data objects, the operator EXACT checks the content of the argument at runtime as follows:

-   [Check for valid values in the argument](javascript:call_link\('abenmove_exact_elementary_valid.htm'\))
-   [Check for appropriate values in the target type](javascript:call_link\('abenmove_exact_elementary_fit.htm'\))

If the elementary data types for which no conversion is required are [compatible](javascript:call_link\('abencompatible_glosry.htm'\) "Glossary Entry"), no checks are performed, and no exceptions are raised.

Hints

-   When the operator EXACT is used, a catchable exception is always raised at runtime when a forbidden conversions is made, in particular, when an attempt is made to convert between d and t. In all other cases, an attempted conversion of this type raises an uncatchable exception.
-   If an argument contains an invalid or inappropriate value, this is assigned to its return value, even if the operator EXACT is used.

Executable Example

[Lossless Assignment](javascript:call_link\('abenmove_exact_abexa.htm'\)).

Continue
[Valid Values for Lossless Assignments](javascript:call_link\('abenmove_exact_elementary_valid.htm'\))
[Suitable Values for Lossless Assignments](javascript:call_link\('abenmove_exact_elementary_fit.htm'\))
![Example](exa.gif "Example") [Lossless Assignment](javascript:call_link\('abenmove_exact_abexa.htm'\))