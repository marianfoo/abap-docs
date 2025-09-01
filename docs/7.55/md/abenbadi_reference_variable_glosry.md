  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_glossary.htm) → 

BAdI reference variable

Special [object reference variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry") that is declared with reference to a [BAdI](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_glosry.htm "Glossary Entry") and is used to access the associated [BAdI object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_object_glosry.htm "Glossary Entry"). BAdI reference variables are supplied with a [BAdI reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_reference_glosry.htm "Glossary Entry") using [GET BADI](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapget_badi.htm) and are only used in [CALL BADI](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_badi.htm) to call [BAdI methods](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_method_glosry.htm "Glossary Entry"). Technically, BAdI reference variables are [class reference variables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclass_reference_variabl_glosry.htm "Glossary Entry") of the [static type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstatic_type_glosry.htm "Glossary Entry") of a concrete [BAdI](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_class_glosry.htm "Glossary Entry") class, or of its abstract superclass CL\_BADI\_BASE.