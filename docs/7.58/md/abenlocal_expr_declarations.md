  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclarations.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Local%20Declarations%20in%20Constructor%20Expressions%2C%20ABENLOCAL_EXPR_DECLARATIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

Local Declarations in Constructor Expressions

In most [constructor expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), variables and field symbols can be declared as local fields. The declaration takes place inside a constructor expression within an embedded

-   [LET expression let\_exp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaplet.htm)

LET expressions can be used in the following constructor expressions:

-   [NEW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_new.htm)
    -   [Single values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennew_constructor_params_single.htm)
    -   [Structures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennew_constructor_params_struct.htm)
    -   [Internal tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennew_constructor_params_itab.htm)
    -   [Classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennew_constructor_params_class.htm)
-   [VALUE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_value.htm)
    -   [Structures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_constructor_params_struc.htm)
    -   [Internal tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_constructor_params_itab.htm)
-   [CONV](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_conv.htm)
-   [CAST](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_cast.htm)
-   [EXACT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_exact.htm)
-   [REDUCE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_reduce.htm)
-   [COND](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expression_cond.htm)
-   [SWITCH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expression_switch.htm)

LET expressions are also possible in all iteration expressions with [FOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor.htm).

Continue
[let\_exp, LET ... IN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaplet.htm)