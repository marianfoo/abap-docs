  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews.htm) →  [Changes in Releases 7.5x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-75.htm) →  [Changes in Release 7.53](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-753.htm) → 

Transformations in Release 7.53

[1\. Resumable exceptions in deserializations with ST](#!ABAP_MODIFICATION_1@1@)

Modification 1

Resumable Exceptions in Deserializations with ST

The new transformation option [OPTIONS exceptions = 'resumable'](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_transformation_options.htm) can be used to make exceptions of the class CX\_ST\_DESERIALIZATION\_ERROR into resumable exceptions. In handling with [CATCH BEFORE UNWIND](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcatch_try.htm), the new attribute RESULT\_REF\_FOR\_RESUME of the exception object of the class CX\_ST\_DESERIALIZATION\_ERROR points to the target field where the exception was raised. The canceled transformation can be resumed using [RESUME](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapresume.htm).