  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.53](javascript:call_link\('abennews-753.htm'\)) → 

Transformations in Release 7.53

[1\. Resumable exceptions in deserializations with ST](#!ABAP_MODIFICATION_1@1@)

Modification 1

Resumable Exceptions in Deserializations with ST

The new transformation option [OPTIONS exceptions = 'resumable'](javascript:call_link\('abapcall_transformation_options.htm'\)) can be used to make exceptions of the class CX\_ST\_DESERIALIZATION\_ERROR into resumable exceptions. In handling with [CATCH BEFORE UNWIND](javascript:call_link\('abapcatch_try.htm'\)), the new attribute RESULT\_REF\_FOR\_RESUME of the exception object of the class CX\_ST\_DESERIALIZATION\_ERROR points to the target field where the exception was raised. The canceled transformation can be resumed using [RESUME](javascript:call_link\('abapresume.htm'\)).