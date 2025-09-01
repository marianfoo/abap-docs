  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) → 

Assignments

An assignment passes the content of a source to a target data object. A source can be one of the following:

-   [Data objects](javascript:call_link\('abendata_object_glosry.htm'\) "Glossary Entry")

-   Return values or results of [functional methods](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry"), return values or results of [built-in functions](javascript:call_link\('abenpredefined_function_glosry.htm'\) "Glossary Entry") and [constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry"), or return values or results of [table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry")

-   Results of [calculation expressions](javascript:call_link\('abencalculation_expression_glosry.htm'\) "Glossary Entry")

The following sections describe the rules, operators, and key words where the assignment of source values to target data objects is of significance.

-   [Assignment and conversion rules](javascript:call_link\('abenconversion_rules.htm'\))

-   [\= - assignment operator](javascript:call_link\('abenequals_operator.htm'\))

-   [CONV - conversion operator](javascript:call_link\('abenconstructor_expression_conv.htm'\))

-   [Assigning structure components](javascript:call_link\('abencorresponding.htm'\))

-   [Assigning references](javascript:call_link\('abenreference_assignments.htm'\))

-   [Lossless assignments](javascript:call_link\('abenlossless_move.htm'\))

-   [Special assignments](javascript:call_link\('abenabap_data_move.htm'\))

-   [Initializations](javascript:call_link\('abeninitializations.htm'\))

Assignments also occur, however, in the [operand positions](javascript:call_link\('abenoperand_position_glosry.htm'\) "Glossary Entry") of many other statements in which the [assignment rules](javascript:call_link\('abenconversion_rules.htm'\)) also apply.

Example

Typical assignment with the assignment operator (\=) in which a conversion takes place. During the assignment to a data object num of type i, the current date in the system field sy-datlo is converted to the number of days since 01.01.0001.

DATA num TYPE i.
num = sy-datlo.
cl\_demo\_output=>display( |{ sy-datlo }->{ num }| ).

Continue
[Assignment and Conversion Rules](javascript:call_link\('abenconversion_rules.htm'\))
[\= - Assignment Operator](javascript:call_link\('abenequals_operator.htm'\))
[CONV - Conversion Operator](javascript:call_link\('abenconstructor_expression_conv.htm'\))
[Assigning Structure Components](javascript:call_link\('abencorresponding.htm'\))
[Assigning References](javascript:call_link\('abenreference_assignments.htm'\))
[Lossless Assignments](javascript:call_link\('abenlossless_move.htm'\))
[Special Assignments](javascript:call_link\('abenabap_data_move.htm'\))
[Initializations](javascript:call_link\('abeninitializations.htm'\))