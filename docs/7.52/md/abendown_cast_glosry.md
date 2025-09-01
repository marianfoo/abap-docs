  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_glossary.htm) → 

down cast

Also called narrowing cast. [Assignment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenassignment_glosry.htm "Glossary Entry") between [reference variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreference_variable_glosry.htm "Glossary Entry"), where the [static type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatic_type_glosry.htm "Glossary Entry") of the target variable is more specific than the static type of the source variable and the assignability is checked at runtime. A down cast must always be performed explicitly. Assignments can be made using the [casting operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencasting_operator_glosry.htm "Glossary Entry") ([?=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove_cast.htm)) and [constructor expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") can be specified using the casting operator [CAST](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_cast.htm). Down casts are also still possible using the INTO addition of the statement [WHEN TYPE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhen_type.htm) of a case distinction using [CASE TYPE OF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcase_type.htm). See also [up cast](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenup_cast_glosry.htm "Glossary Entry").

[→ More](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_references.htm)