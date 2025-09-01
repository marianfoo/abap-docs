  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Release 7.40 and Its SPs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-740.htm) →  [Changes in Release 7.40, SP05](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-740_sp05.htm) → 

Expressions and Functions in Release 7.40, SP05

[1\. LET expressions](#!ABAP_MODIFICATION_1@1@)

[2\. Component operator](#!ABAP_MODIFICATION_2@2@)

[3\. Table comprehensions](#!ABAP_MODIFICATION_3@3@)

Modification 1

LET Expressions

The new [LET expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaplet.htm) in the form LET ... IN make it possible to define variables or field symbols as auxiliary fields in expressions. Currently, LET expressions can be used in all [constructor expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expressions.htm) where this makes sense.

Modification 2

Component Operator

Component operator [CORRESPONDING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expr_corresponding.htm) is a new [constructor operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_operator_glosry.htm "Glossary Entry"), which enables you make component by component assignments between structures or between internal operands at operand positions. Mappings between components are based by default on matching names and can be defined using mapping rules.

Modification 3

Table Comprehensions

[Table comprehensions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_comprehension_glosry.htm "Glossary Entry") are an enhancement of the [instance operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninstance_operator_glosry.htm "Glossary Entry") [NEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_new.htm) or the [value operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_operator_glosry.htm "Glossary Entry") [VALUE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_value.htm) and are used to create the content of internal tables. One or more [FOR expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_in_itab.htm) can now be specified as a subexpression of the constructor expression. These FOR expressions evaluate existing internal tables whose content can be used to construct the result within the loops.