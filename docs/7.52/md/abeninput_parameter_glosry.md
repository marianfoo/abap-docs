  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_glossary.htm) → 

input parameter

[Formal parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenformal_parameter_glosry.htm "Glossary Entry") of a [procedure](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocedure_glosry.htm "Glossary Entry"), to which the value of an [actual parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenactual_parameter_glosry.htm "Glossary Entry") is passed at the time of a call and which is evaluated in the procedure. Input parameters for which the [pass by reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpass_by_reference_glosry.htm "Glossary Entry") is defined cannot be succeeded by a write access in the procedure. Input parameters are defined for [methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmethod_glosry.htm "Glossary Entry") and [function modules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunction_module_glosry.htm "Glossary Entry") using IMPORTING. Therefore, they are also called IMPORTING parameters. For [subroutines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensubroutine_glosry.htm "Glossary Entry"), input parameters are defined using USING. They are not protected against a write access during the pass by reference.