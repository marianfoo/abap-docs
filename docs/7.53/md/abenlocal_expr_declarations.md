  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) → 

Local Declarations in Expressions

In most [constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry"), variables and field symbols can be used as local helper fields. They are defined using the language element LET in a

-   [LET expression let\_exp](javascript:call_link\('abaplet.htm'\))

LET expressions can be used in the following constructor expressions:

-   [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\))

-   [Single values](javascript:call_link\('abennew_constructor_params_single.htm'\))

-   [Structures](javascript:call_link\('abennew_constructor_params_struct.htm'\))

-   [Internal tables](javascript:call_link\('abennew_constructor_params_itab.htm'\))

-   [Classes](javascript:call_link\('abennew_constructor_params_class.htm'\))

-   [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\))

-   [Structures](javascript:call_link\('abenvalue_constructor_params_struc.htm'\))

-   [Internal tables](javascript:call_link\('abenvalue_constructor_params_itab.htm'\))

-   [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\))

-   [CAST](javascript:call_link\('abenconstructor_expression_cast.htm'\))

-   [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\))

-   [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\))

-   [COND](javascript:call_link\('abenconditional_expression_cond.htm'\))

-   [SWITCH](javascript:call_link\('abenconditional_expression_switch.htm'\))

LET expressions are also possible in all iteration expressions with [FOR](javascript:call_link\('abenfor.htm'\)).

Continue
[let\_exp - LET ... IN](javascript:call_link\('abaplet.htm'\))