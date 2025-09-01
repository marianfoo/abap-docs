  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_glossary.htm) → 

pass by reference

Method of passing data from [actual parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenactual_parameter_glosry.htm "Glossary Entry") to [formal parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenformal_parameter_glosry.htm "Glossary Entry") when the procedure is called. The method is defined in the [parameter interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenparameter_interface_glosry.htm "Glossary Entry") of a [procedure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocedure_glosry.htm "Glossary Entry"). Pass by reference does not create a local [data object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_object_glosry.htm "Glossary Entry") for the actual parameter. Instead a reference to the actual parameter is passed to the procedure when it is called and the procedure works with the actual parameter itself. [Input parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninput_parameter_glosry.htm "Glossary Entry") passed by reference cannot be modified in the procedure. See also [pass by value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpass_by_value_glosry.htm "Glossary Entry").

[→ More](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenformal_parameters_oview.htm)