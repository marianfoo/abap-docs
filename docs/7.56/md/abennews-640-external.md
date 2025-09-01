  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 6.xx](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-6.htm) →  [News for Release 6.40](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-640.htm) → 

External Interfaces in Release 6.40

[1\. New Callback Routine in Asynchronous RFC](#!ABAP_MODIFICATION_1@1@)
[2\. Simple Transformation Calls](#!ABAP_MODIFICATION_2@2@)
[3\. Control Options for Transformations](#!ABAP_MODIFICATION_3@3@)

Modification 1   

New Callback Routine in Asynchronous RFC

In [asynchronous RFC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_function_starting.htm), the addition CALLING addition was introduced to also specify methods as callback routines.

Hint

This change was also transported back to Release 6.20.

Modification 2   

Simple Transformation Calls

[CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_transformation.htm) can now be used to call [Simple Transformations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenxslt_glosry.htm "Glossary Entry"), as well as [XSLT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensimple_transformation_glosry.htm "Glossary Entry") programs.

Modification 3   

Control Options for Transformations

In [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_transformation.htm), the addition OPTIONS can be used to specify control options for the called transformations.