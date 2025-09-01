  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for ABAP Release 7.53](javascript:call_link\('abennews-753.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Transformations%20in%20ABAP%20Release%207.53%2C%20ABENNEWS-753-TRANSFORMATIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

Transformations in ABAP Release 7.53

Modification

Resumable Exceptions in Deserializations with ST

The new transformation option [OPTIONS exceptions = 'resumable'](javascript:call_link\('abapcall_transformation_options.htm'\)) can be used to make exceptions of the class CX\_ST\_DESERIALIZATION\_ERROR into resumable exceptions. In handling with [CATCH BEFORE UNWIND](javascript:call_link\('abapcatch_try.htm'\)), the new attribute RESULT\_REF\_FOR\_RESUME of the exception object of the class CX\_ST\_DESERIALIZATION\_ERROR points to the target field where the exception was raised. The canceled transformation can be resumed using [RESUME](javascript:call_link\('abapresume.htm'\)).