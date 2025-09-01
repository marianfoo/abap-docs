  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20BAdI%20method%2C%20ABENBADI_METHOD_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

BAdI method

[Method](javascript:call_link\('abenmethod_glosry.htm'\) "Glossary Entry") of a [BAdI interface](javascript:call_link\('abenbadi_interface_glosry.htm'\) "Glossary Entry"). A BAdI method is implemented in [BAdI implementations](javascript:call_link\('abenbadi_implementation_glosry.htm'\) "Glossary Entry") and then called exclusively via the associated BAdI object using [CALL BADI](javascript:call_link\('abapcall_badi.htm'\)). If the BAdI interface is part of the definition of a [BAdI](javascript:call_link\('abenbadi_glosry.htm'\) "Glossary Entry") that is defined for multiple use, the [parameter interface](javascript:call_link\('abenparameter_interface_glosry.htm'\) "Glossary Entry") of a BAdI method can only contain [input parameters](javascript:call_link\('abeninput_parameter_glosry.htm'\) "Glossary Entry") and [input/output parameters](javascript:call_link\('abeninput_output_parameter_glosry.htm'\) "Glossary Entry"). If all BAdIs are defined for single use, the interface can also have [output parameters](javascript:call_link\('abenoutput_parameter_glosry.htm'\) "Glossary Entry") or a [return value](javascript:call_link\('abenreturn_value_glosry.htm'\) "Glossary Entry"). BAdI methods can define or propagate [exceptions](javascript:call_link\('abenexception_glosry.htm'\) "Glossary Entry"), and their implementation can be made [optional](javascript:call_link\('abapmethods_default.htm'\)).