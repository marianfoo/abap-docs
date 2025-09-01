  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) → 

Local Declarations in Expressions

In most [constructor expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), variables and field symbols can be used as local helper fields. They are defined using the language element LET in a

-   [LET expression let\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaplet.htm)

LET expressions can be used in the following constructor expressions:

-   [NEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_new.htm)

-   [Single values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennew_constructor_params_single.htm)

-   [Structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennew_constructor_params_struct.htm)

-   [Internal tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennew_constructor_params_itab.htm)

-   [Classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennew_constructor_params_class.htm)

-   [VALUE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_value.htm)

-   [Structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_constructor_params_struc.htm)

-   [Internal tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_constructor_params_itab.htm)

-   [CONV](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_conv.htm)

-   [CAST](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_cast.htm)

-   [EXACT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_exact.htm)

-   [REDUCE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_reduce.htm)

-   [COND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expression_cond.htm)

-   [SWITCH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expression_switch.htm)

LET expressions are also possible in all iteration expressions with [FOR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor.htm).

Continue
[let\_exp - LET ... IN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaplet.htm)