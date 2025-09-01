  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Local Declarations in Expressions, ABENLOCAL_EXPR_DECLARATIONS, 757%0D%0A%0D%0AError:
%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

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
[let\_exp, LET ... IN](javascript:call_link\('abaplet.htm'\))