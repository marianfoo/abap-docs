  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20BAdI%20reference%20variable%2C%20ABENBADI_REFERENCE_VARIABLE_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

BAdI reference variable

Special [object reference variable](javascript:call_link\('abenobject_refer_variable_glosry.htm'\) "Glossary Entry") that is declared with reference to a [BAdI](javascript:call_link\('abenbadi_glosry.htm'\) "Glossary Entry") and is used to access the associated [BAdI object](javascript:call_link\('abenbadi_object_glosry.htm'\) "Glossary Entry"). BAdI reference variables are supplied with a [BAdI reference](javascript:call_link\('abenbadi_reference_glosry.htm'\) "Glossary Entry") using [GET BADI](javascript:call_link\('abapget_badi.htm'\)) and are only used in [CALL BADI](javascript:call_link\('abapcall_badi.htm'\)) to call [BAdI methods](javascript:call_link\('abenbadi_method_glosry.htm'\) "Glossary Entry"). Technically, BAdI reference variables are [class reference variables](javascript:call_link\('abenclass_reference_variabl_glosry.htm'\) "Glossary Entry") of the [static type](javascript:call_link\('abenstatic_type_glosry.htm'\) "Glossary Entry") of a concrete [BAdI](javascript:call_link\('abenbadi_class_glosry.htm'\) "Glossary Entry") class, or of its abstract superclass CL\_BADI\_BASE.