  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20pass%20by%20value%2C%20ABENPASS_BY_VALUE_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

pass by value

Method of passing data from [actual parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenactual_parameter_glosry.htm "Glossary Entry") to [formal parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenformal_parameter_glosry.htm "Glossary Entry") when the procedure is called, which is defined in the [parameter interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenparameter_interface_glosry.htm "Glossary Entry") of a [procedure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprocedure_glosry.htm "Glossary Entry"). In pass by value, a local [data object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_object_glosry.htm "Glossary Entry") is created as a copy of the actual parameter. [Output parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoutput_parameter_glosry.htm "Glossary Entry") and [return values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreturn_value_glosry.htm "Glossary Entry") are initialized when the procedure is called. [Input parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninput_parameter_glosry.htm "Glossary Entry") and [input/output parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninput_output_parameter_glosry.htm "Glossary Entry") are passed the value of the actual parameter when they are called. Modified formal parameters are only passed to the actual parameter if the procedure has been concluded without errors, that is, whenever the last statement is reached or when they are exited via [RETURN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreturn.htm) (or [EXIT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexit_processing_blocks.htm) or [CHECK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcheck_processing_blocks.htm)). See also [pass by reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpass_by_reference_glosry.htm "Glossary Entry").

[→ More about](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenformal_parameters_oview.htm)