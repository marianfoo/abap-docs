  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_glossary.htm) → 

pass by reference

Method of passing data from [actual parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenactual_parameter_glosry.htm "Glossary Entry") to [formal parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenformal_parameter_glosry.htm "Glossary Entry") when the procedure is called, which is defined in the [parameter interface](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenparameter_interface_glosry.htm "Glossary Entry") of a [procedure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprocedure_glosry.htm "Glossary Entry"). Pass by reference does not create a local [data object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_object_glosry.htm "Glossary Entry") for the actual parameter. Instead the procedure is given a reference to the actual parameter during the call and works with the actual parameter itself. [Input parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninput_parameter_glosry.htm "Glossary Entry") passed by reference cannot be modified in the procedure. See also [pass by value](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpass_by_value_glosry.htm "Glossary Entry").

[→ More about](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenformal_parameters_oview.htm)