  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Lossless Assignments](javascript:call_link\('abenlossless_move.htm'\)) →  [Lossless Assignments - Rules](javascript:call_link\('abapmove_exact.htm'\)) → 

Checking Elementary Data Objects

In conversions between incompatible [elementary data objects](javascript:call_link\('abenelementary_data_object_glosry.htm'\) "Glossary Entry"), the operator [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)) ensures that no values are lost. Regardless of the value of the argument, the operator EXACT generally does not permit assignments between data objects with the following data types. The is because with these data types, values are always lost when the [conversion rules](javascript:call_link\('abenconversion_elementary.htm'\)) are applied.

-   From x, xstring to n, d, t, and reversed.

-   From x, xstring to all [numeric data types](javascript:call_link\('abennumeric_data_type_glosry.htm'\) "Glossary Entry"), and reversed.

-   From d and t to b and s

Conversions from d to t and vice versa, and most conversions for time stamps of the type utclong are prohibited independently of the operator EXACT. Other conversions that are not permitted are conversions in which byte-like fields are converted directly or as an intermediate result to the data type i (or reversed).

If illegal conversions are made, a syntax error occurs, or if the cause cannot be known statically, an exception of the class CX\_SY\_CONVERSION\_EXACT\_NOT\_SUP is raised. This also occurs with types for which conversions are permitted, but for which a loss of values can be identified regardless of the content, for example, if a conversion is made to fields that are too short.

When permitted conversions are made between incompatible elementary data objects, the operator EXACT checks the contents of the argument at runtime as follows:

-   [Check for valid values in the argument](javascript:call_link\('abenmove_exact_elementary_valid.htm'\))

-   [Check for appropriate values in the target type](javascript:call_link\('abenmove_exact_elementary_fit.htm'\))

If the elementary data types for which no conversion is required are [compatible](javascript:call_link\('abencompatible_glosry.htm'\) "Glossary Entry"), no checks are performed and no exceptions are raised.

Notes

-   When the operator EXACT is used, a handleable exception is always raised at runtime when an illegal conversions is made. This occurs in particular when conversions are attempted between d and t. In all other cases, an attempted conversion of this type raises a non-handleable exception.

-   If an argument contains an invalid or inappropriate value, this is assigned to its return value, even if the operator EXACT is used.

Executable Example

[Lossless Assignment](javascript:call_link\('abenmove_exact_abexa.htm'\)).

Continue
[Valid Values for Lossless Assignments](javascript:call_link\('abenmove_exact_elementary_valid.htm'\))
[Suitable Values for Lossless Assignments](javascript:call_link\('abenmove_exact_elementary_fit.htm'\))
![Example](exa.gif "Example") [Lossless Assignment](javascript:call_link\('abenmove_exact_abexa.htm'\))