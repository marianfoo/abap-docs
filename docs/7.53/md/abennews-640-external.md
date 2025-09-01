  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Releases 6.xx](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-6.htm) →  [Changes in Release 6.40](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-640.htm) → 

External Interfaces in Release 6.40

[1\. New callback routine in asynchronous RFC](#!ABAP_MODIFICATION_1@1@)
[
2\. Simple Transformation calls](#!ABAP_MODIFICATION_2@2@)
[
3\. Control options for transformations](#!ABAP_MODIFICATION_3@3@)

Modification 1

New Callback Routine in Asynchronous RFC

In [asynchronous RFC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_starting.htm), the addition CALLING addition was introduced to also specify methods as callback routines.

Note

This change was also transported back to Release 6.20.

Modification 2

Simple Transformation Calls

[CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transformation.htm) can now be used to call [Simple Transformations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenxslt_glosry.htm "Glossary Entry"), as well as [XSLT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensimple_transformation_glosry.htm "Glossary Entry") programs.

Modification 3

Control Options for Transformations

In [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transformation.htm), the addition OPTIONS can be used to specify control options for the called transformations.