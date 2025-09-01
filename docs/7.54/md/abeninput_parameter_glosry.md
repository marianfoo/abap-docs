  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_glossary.htm) → 

Input Parameters

[Formal parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenformal_parameter_glosry.htm "Glossary Entry") of a [procedure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocedure_glosry.htm "Glossary Entry") to which the value of an [actual parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenactual_parameter_glosry.htm "Glossary Entry") is passed when the procedure is called and which is evaluated in the procedure. Input parameters for which [pass by reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpass_by_reference_glosry.htm "Glossary Entry") is defined cannot be accessed by a write in the procedure. Input parameters are defined for [methods](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethod_glosry.htm "Glossary Entry") and [function modules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction_module_glosry.htm "Glossary Entry") using IMPORTING, which is why they are also called IMPORTING parameters. In [subroutines](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensubroutine_glosry.htm "Glossary Entry"), input parameters are defined using USING and are not protected against writes when using pass by reference.