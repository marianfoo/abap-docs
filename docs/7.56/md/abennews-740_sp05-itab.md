  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.40 and Its SPs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-740.htm) →  [News for Release 7.40, SP05](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-740_sp05.htm) → 

Internal Tables in Release 7.40, SP05

[1\. MOVE-CORRESPONDING for Internal Tables](#!ABAP_MODIFICATION_1@1@)
[2\. Table Comprehensions](#!ABAP_MODIFICATION_2@2@)

Modification 1   

MOVE-CORRESPONDING for Internal Tables

From Release 7.40, SP05, the operands of the statement [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmove-corresponding.htm) can be internal tables, as well as structures. This has been enabled by a new [variant](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmove-corresponding_itab.htm) of this statement, which assigns identically named components of internal tables line by line. The new addition EXPANDING NESTED TABLES enables tabular components of structures to be resolved. The addition KEEPING TARGET LINES adds lines to target tables instead of overwriting them.

Component by component assignments between internal tables are also possible using the new component operator [CORRESPONDING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expr_corresponding.htm).

Modification 2   

Table Comprehensions

[Table comprehensions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_comprehension_glosry.htm "Glossary Entry") are an enhancement of the [instance operator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninstance_operator_glosry.htm "Glossary Entry") [NEW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_new.htm) or the [value operator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvalue_operator_glosry.htm "Glossary Entry") [VALUE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_value.htm) and are used to create the content of internal tables. One or more [FOR expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfor_in_itab.htm) can now be specified as subexpressions of the constructor expression. These FOR expressions evaluate existing internal tables whose content can be used to construct the result within the loops.