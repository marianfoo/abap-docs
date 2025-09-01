  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

pass by value

Method of passing data from [actual parameters](javascript:call_link\('abenactual_parameter_glosry.htm'\) "Glossary Entry") to [formal parameters](javascript:call_link\('abenformal_parameter_glosry.htm'\) "Glossary Entry") when the procedure is called. The method is defined in the [parameter interface](javascript:call_link\('abenparameter_interface_glosry.htm'\) "Glossary Entry") of a [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry"). In pass by value, a local [data object](javascript:call_link\('abendata_object_glosry.htm'\) "Glossary Entry") is created as a copy of the actual parameter. [Output parameters](javascript:call_link\('abenoutput_parameter_glosry.htm'\) "Glossary Entry") and [return values](javascript:call_link\('abenreturn_value_glosry.htm'\) "Glossary Entry") are initialized when the procedure is called. [Input parameters](javascript:call_link\('abeninput_parameter_glosry.htm'\) "Glossary Entry") and [input/output parameters](javascript:call_link\('abeninput_output_parameter_glosry.htm'\) "Glossary Entry") are given the value of the actual parameter when they are called. Modified formal parameters are only passed to actual parameters if the procedure was concluded without errors, that is once the last statement is reached or if there is an exit using [RETURN](javascript:call_link\('abapreturn.htm'\)) (or [EXIT](javascript:call_link\('abapexit_processing_blocks.htm'\)) or [CHECK](javascript:call_link\('abapcheck_processing_blocks.htm'\))). See also [pass by reference](javascript:call_link\('abenpass_by_reference_glosry.htm'\) "Glossary Entry").

[→ More](javascript:call_link\('abenformal_parameters_oview.htm'\))