  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [News for ABAP Release 6.40](javascript:call_link\('abennews-640.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20External%20Interfaces%20in%20ABAP%20Release%206.40%2C%20ABENNEWS-640-EXTERNAL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvemen
t:)

External Interfaces in ABAP Release 6.40

[1\. New Callback Routine in Asynchronous RFC](#!ABAP_MODIFICATION_1@1@)
[2\. Simple Transformation Calls](#!ABAP_MODIFICATION_2@2@)
[3\. Control Options for Transformations](#!ABAP_MODIFICATION_3@3@)

Modification 1   

New Callback Routine in Asynchronous RFC

In [asynchronous RFC](javascript:call_link\('abapcall_function_starting.htm'\)), the addition CALLING addition was introduced to also specify methods as callback routines.

Hint

This change was also transported back to ABAP release 6.20.

Modification 2   

Simple Transformation Calls

[CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)) can now be used to call [Simple Transformations](javascript:call_link\('abenxslt_glosry.htm'\) "Glossary Entry"), as well as [XSLT](javascript:call_link\('abensimple_transformation_glosry.htm'\) "Glossary Entry") programs.

Modification 3   

Control Options for Transformations

In [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)), the addition OPTIONS can be used to specify control options for the called transformations.