  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_glossary.htm) → 

BAdI reference variable

Special [object reference variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry") declared using a reference to a [BAdI](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbadi_glosry.htm "Glossary Entry") and used to access the associated [BAdI object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbadi_object_glosry.htm "Glossary Entry"). BAdI reference variables are supplied with a [BAdI reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbadi_reference_glosry.htm "Glossary Entry") by [GET BADI](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_badi.htm) and are only used in [CALL BADI](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_badi.htm) to call [BAdI methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbadi_method_glosry.htm "Glossary Entry"). Technically, BAdI reference variables are [class reference variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_reference_variabl_glosry.htm "Glossary Entry") of the [static type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatic_type_glosry.htm "Glossary Entry") of a concrete [BAdI class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbadi_class_glosry.htm "Glossary Entry"), or of its abstract superclass CL\_BADI\_BASE.