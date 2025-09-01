  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_glossary.htm) → 

BAdI implementation

Implementation of a [BAdI](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbadi_glosry.htm "Glossary Entry"). Multiple BAdI implementations can be assigned to a single BAdI. A BAdI implementation consists of a [BAdI implementation class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbadi_implement_class_glosry.htm "Glossary Entry") and a filter condition that can be used to select the BAdI implementation in the [GET BADI](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_badi.htm) statement in the [BAdI object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbadi_method_glosry.htm "Glossary Entry"). A BAdI implementation is created as an [enhancement implementation element](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenhancement_impl_elem_glosry.htm "Glossary Entry") as part of an [enhancement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenhancement_glosry.htm "Glossary Entry") in [Enhancement Builder](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenhancement_builder_glosry.htm "Glossary Entry"), where it can be marked as a standard implementation. A BAdI implementation can be in the state active or inactive, which overrides both the [Switch Framework](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenswitch_framework_glosry.htm "Glossary Entry") setting and the filter condition.