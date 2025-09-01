  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.53](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-753.htm) → 

Transformations in Release 7.53

Modification

Resumable Exceptions in Deserializations with ST

The new transformation option [OPTIONS exceptions = 'resumable'](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_transformation_options.htm) can be used to make exceptions of the class CX\_ST\_DESERIALIZATION\_ERROR into resumable exceptions. In handling with [CATCH BEFORE UNWIND](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcatch_try.htm), the new attribute RESULT\_REF\_FOR\_RESUME of the exception object of the class CX\_ST\_DESERIALIZATION\_ERROR points to the target field where the exception was raised. The canceled transformation can be resumed using [RESUME](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapresume.htm).