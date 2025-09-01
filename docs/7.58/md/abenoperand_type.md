  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Syntax Elements of an ABAP Program](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operand Positions](javascript:call_link\('abenoperand_positions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Operand%20Type%2C%20ABENOPERAND_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Operand Type

An operand position is typed by an operand type, which can be complete or generic and can also be dependent on other operand positions, for example in assignments. When a statement is executed, an operand with a suitable data type is expected. If an operand specified at an operand position has a different data type than the operand type, an attempt is usually made to convert the content of the operand to the operand type according to the [conversion rules](javascript:call_link\('abenconversion_rules.htm'\)) at [read positions](javascript:call_link\('abenread_position_glosry.htm'\) "Glossary Entry"), and in the other direction at [write positions](javascript:call_link\('abenwrite_position_glosry.htm'\) "Glossary Entry"). Here, it should be noted that every conversion incurs increased runtime costs. If no corresponding conversion rule is defined, or the content cannot be converted, a syntax error occurs or an exception is raised. Any deviations from this rule, for example that the operand must exactly match the operand type or the operand is [cast](javascript:call_link\('abencast_casting_glosry.htm'\) "Glossary Entry") to the operand type regardless of its actual type, are described in the documentation of the individual statements.

-   [Operand Positions with Elementary Data Type](#@@ITOC@@ABENOPERAND_TYPE_1)
-   [Operand Positions with Structured Data Type](#@@ITOC@@ABENOPERAND_TYPE_2)
-   [Operand Positions with Tabular Data Type](#@@ITOC@@ABENOPERAND_TYPE_3)
-   [Operand Positions with Reference Data Type](#@@ITOC@@ABENOPERAND_TYPE_4)

Operand Positions with Elementary Data Type   

At operand positions for [elementary data objects](javascript:call_link\('abenelementary_data_object_glosry.htm'\) "Glossary Entry"), the following must be specified when the statement is executed, depending on the operand type:

-   [Character-like data objects](javascript:call_link\('abencharlike_data_object_glosry.htm'\) "Glossary Entry")
-   [Numeric data objects](javascript:call_link\('abennumeric_data_object_glosry.htm'\) "Glossary Entry")
-   [Byte-like data objects](javascript:call_link\('abenbyte_like_data_object_glosry.htm'\) "Glossary Entry")

Generically [typed](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry") formal parameters or field symbols can also be specified statically if they are typed more generally than the expected type.

[Flat structures](javascript:call_link\('abenflat_structure_glosry.htm'\) "Glossary Entry") with only character-like components of the types c, n, d, or t can also be used in all operand positions where elementary fields are expected. Such structures are handled in the same way as a single data object of type c (implicit casting).

Operand Positions with Structured Data Type   

Structures must be specified at operand positions for [structures](javascript:call_link\('abenstructure_glosry.htm'\) "Glossary Entry") when the statement is executed. Formal parameters or field symbols of the generic types data or any can also be specified statically.

Operand Positions with Tabular Data Type   

[Internal tables](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry") must be specified at operand positions for internal tables both when the statement is executed. There are also operand positions, where internal tables must be known statically. At these positions, generic formal parameters and field symbols can only be specified if they are typed with at least the generic type [any table](javascript:call_link\('abenbuilt_in_types_generic.htm'\)). Only index tables can be specified at operand positions where index access occurs, and generic formal parameters and field symbols must be typed with at least the generic type [index table](javascript:call_link\('abenbuilt_in_types_generic.htm'\)).

Operand Positions with Reference Data Type   

Depending on the operand type, either data or object reference variables must be specified at operand positions for [reference variables](javascript:call_link\('abenreference_variable_glosry.htm'\) "Glossary Entry") when the statement is executed. Formal parameters or field symbols of the generic types data or any can also be specified statically.