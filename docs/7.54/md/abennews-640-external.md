  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [Changes in Release 6.40](javascript:call_link\('abennews-640.htm'\)) → 

External Interfaces in Release 6.40

[1\. New callback routine in asynchronous RFC](#!ABAP_MODIFICATION_1@1@)
[
2\. Simple Transformation calls](#!ABAP_MODIFICATION_2@2@)
[
3\. Control options for transformations](#!ABAP_MODIFICATION_3@3@)

Modification 1

New Callback Routine in Asynchronous RFC

In [asynchronous RFC](javascript:call_link\('abapcall_function_starting.htm'\)), the addition CALLING addition was introduced to also specify methods as callback routines.

Note

This change was also transported back to Release 6.20.

Modification 2

Simple Transformation Calls

[CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)) can now be used to call [Simple Transformations](javascript:call_link\('abenxslt_glosry.htm'\) "Glossary Entry"), as well as [XSLT](javascript:call_link\('abensimple_transformation_glosry.htm'\) "Glossary Entry") programs.

Modification 3

Control Options for Transformations

In [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)), the addition OPTIONS can be used to specify control options for the called transformations.