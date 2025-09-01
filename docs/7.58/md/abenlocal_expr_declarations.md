  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Local%20Declarations%20in%20Constructor%20Expressions%2C%20ABENLOCAL_EXPR_DECLARATIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

Local Declarations in Constructor Expressions

In most [constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry"), variables and field symbols can be declared as local fields. The declaration takes place inside a constructor expression within an embedded

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
[let\_exp, LET ... IN](javascript:call_link\('abaplet.htm'\))